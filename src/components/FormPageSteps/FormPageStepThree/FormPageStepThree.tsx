import React, {useEffect, useState} from 'react'
import s from './FormPageStepThree.module.scss'
import {Button} from '../../../shared/ui/Button/Button'
import {FormPageStepsProps, FormPageStepThreeType} from '../../../shared/types/all-types'
import {Textarea} from '../../../shared/ui/Textarea/Textarea'
import {validationTitles} from '../../../shared/const/validationTitles'
import {MessageModal} from '../../MessageModal/MessageModal'
import {LoaderScreen} from "../../../shared/ui/Loader/LoaderScreen"
import * as yup from "yup"
import {Controller, SubmitHandler, useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import {noSpacesRexExp} from "../../../shared/const/validationRegExp"
import {validationNumbers} from "../../../shared/const/validationNumbers"
import {RoutePaths} from "../../../shared/api/paths"
import {useNavigate} from "react-router-dom"
// import {useSetFormDataMutation} from "../../../services/FormPageService"

export const FormPageStepThree = ({setStep, setFormData, isError, isSuccess, isLoading}: FormPageStepsProps) => {

    const navigate = useNavigate()

    const LS_Step3 = localStorage.getItem('step') === 'three'

    const [openMessageModal, setOpenMessageModal] = useState<boolean>(false)
    // const [setFormData, { isError, isSuccess, isLoading }] = useSetFormDataMutation()

    const FormPageStepThreeSchema = yup.object().shape({
        about: yup.string()
            .required(validationTitles.required)
            .max(validationNumbers.about, validationTitles.aboutMax)
            .matches(noSpacesRexExp, {message: validationTitles.noSpaces, excludeEmptyString: false}),
    })

    const {
        control,
        handleSubmit,
        setValue,
        formState: {errors}
    } = useForm<FormPageStepThreeType>({
        defaultValues: {
            about: '',
        },
        resolver: yupResolver(FormPageStepThreeSchema)
    })

    const onSubmit: SubmitHandler<FormPageStepThreeType> = async (data: FormPageStepThreeType) => {
        localStorage.setItem('about', control._getWatch('about'))

        try {
            const response = await setFormData({
                phone: localStorage.getItem('phone'),
                email: localStorage.getItem('email'),
                nickname: localStorage.getItem('nickname'),
                name: localStorage.getItem('name'),
                surname: localStorage.getItem('surname'),
                sex: localStorage.getItem('sex'),
                about: localStorage.getItem('about')
            })
            console.log(response)
        } catch (error) {
            console.log(error)
        }

        setOpenMessageModal(true)
    }

    useEffect(() => {
        const LS_About = localStorage.getItem('about')
        if (LS_About) setValue('about', LS_About)
    }, [])

    useEffect(() => {
        if (!LS_Step3) navigate(RoutePaths.MAIN)
    }, [])

    if (isLoading) return <LoaderScreen variant={'circle'} />

    return (
        <form className={s.formPage_form} onSubmit={handleSubmit(onSubmit)}>

            <MessageModal open={openMessageModal}
                          setOpen={setOpenMessageModal}
                          isSuccess={isSuccess}
                          isError={isError}
            />

            <div className={s.about_textarea}>
                <Controller
                    name={'about'}
                    control={control}
                    render={({field}: any) => (
                        <Textarea
                            {...field}
                            id={'field-about'}
                            placeholder={'Введите текст'}
                            placeholderTitle={'Обо мне'}
                            value={field.value}
                            onChange={(value) => {
                                field.onChange(value)
                            }}
                            error={errors.about?.message}
                            textLength={control._getWatch('about').length}
                            textMaxLength={'200'}
                        />
                    )}
                />
            </div>
            <div className={s.buttonsBlock}>
                <Button
                    id={'button-back3'}
                    theme={'outline'}
                    onClick={() => {
                        setStep('two')
                        localStorage.setItem('step', 'two')
                    }}
                >
                    Назад
                </Button>
                <Button
                    id={'button-next3'}
                    theme={'primary'}
                    type={'submit'}
                >
                    Отправить
                </Button>
            </div>
        </form>
    )
}