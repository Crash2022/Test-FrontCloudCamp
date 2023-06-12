import React, {useEffect} from 'react'
import s from './FormPageStepOne.module.scss'
import {ControlledInput} from '../../../shared/ui/Controlled/ControlledInput'
import {Controller, SubmitHandler, useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import {Button} from '../../../shared/ui/Button/Button'
import {RoutePaths} from '../../../shared/api/paths'
import {FormPageStepOneType, FormPageStepsProps} from '../../../shared/types/all-types'
import {Select} from '../../../shared/ui/Select/Select'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import {validationTitles} from "../../../shared/const/validationTitles"
import {onlyLettersDigitsRegExp, onlyLettersRegExp} from '../../../shared/const/validationRegExp'
import {validationNumbers} from "../../../shared/const/validationNumbers"

export const FormPageStepOne = ({setStep}: FormPageStepsProps) => {

    const navigate = useNavigate()

    const LS_Step1 = localStorage.getItem('step') === 'one'

    const sexOptions: string[] = ['Мужской', 'Женский']

    const FormPageStepOneSchema = yup.object().shape({
        nickname: yup.string()
            .required(validationTitles.required)
            .trim('')
            .max(validationNumbers.nickname, validationTitles.nicknameMax)
            .matches(onlyLettersDigitsRegExp, {message: validationTitles.notSpecialSymbols, excludeEmptyString: false}),
        name: yup.string()
            .required(validationTitles.required)
            .trim('')
            .max(validationNumbers.name, validationTitles.nameMax)
            .matches(onlyLettersRegExp, {message: validationTitles.nameOnlyLetters, excludeEmptyString: false}),
        surname: yup.string()
            .required(validationTitles.required)
            .trim('')
            .max(validationNumbers.surname, validationTitles.nameMax)
            .matches(onlyLettersRegExp, {message: validationTitles.nameOnlyLetters, excludeEmptyString: false}),
        sex: yup.string()
            .required(validationTitles.required)
    })

    const {
        control,
        handleSubmit,
        setValue,
        formState: {errors}
    } = useForm<FormPageStepOneType>({
        defaultValues: {
            nickname: '',
            name: '',
            surname: '',
            sex: '',
        },
        resolver: yupResolver(FormPageStepOneSchema)
    })

    const onSubmit: SubmitHandler<FormPageStepOneType> = (data: FormPageStepOneType) => {
        setValue('nickname', control._getWatch('nickname').trim())
        setValue('name', control._getWatch('name').trim())
        setValue('surname', control._getWatch('surname').trim())

        localStorage.setItem('nickname', control._getWatch('nickname'))
        localStorage.setItem('name', control._getWatch('name'))
        localStorage.setItem('surname', control._getWatch('surname'))
        localStorage.setItem('sex', control._getWatch('sex'))

        localStorage.setItem('step', 'two')
        setStep('two')
    }

    useEffect(() => {
        const LS_Nickname = localStorage.getItem('nickname')
        if (LS_Nickname) setValue('nickname', LS_Nickname)

        const LS_Name = localStorage.getItem('name')
        if (LS_Name) setValue('name', LS_Name)

        const LS_Surname = localStorage.getItem('surname')
        if (LS_Surname) setValue('surname', LS_Surname)

        const LS_Sex = localStorage.getItem('sex')
        if (LS_Sex) setValue('sex', LS_Sex)
    }, [setValue])

    useEffect(() => {
        if (!LS_Step1) navigate(RoutePaths.MAIN)
    }, [])

    return (
        <form className={s.formPage_form} onSubmit={handleSubmit(onSubmit)}>
            <ControlledInput divClassName={s.form_nickname}
                             id={'field-nickname'}
                             name={'nickname'}
                             placeholderTitle={'Никнейм'}
                             control={control}
                             error={errors.nickname?.message}
            />
            <ControlledInput divClassName={s.form_name}
                             id={'field-name'}
                             name={'name'}
                             placeholderTitle={'Имя'}
                             control={control}
                             error={errors.name?.message}
            />
            <ControlledInput divClassName={s.form_surname}
                             id={'field-surname'}
                             name={'surname'}
                             placeholderTitle={'Фамилия'}
                             control={control}
                             error={errors.surname?.message}
            />
            <Controller
                name={'sex'}
                control={control}
                render={({field}: any) => (
                    <Select {...field}
                            ref={null}
                            id={'field-sex'}
                            placeholder={'Выбрать пол'}
                            placeholderTitle={'Пол'}
                            options={sexOptions}
                            value={field.value}
                            onChange={(value) => {
                                field.onChange(value)
                            }}
                            error={errors.sex?.message}
                    />
                )}
            />

            <div className={s.buttonsBlock}>
                <Button
                    id={'button-back1'}
                    divClassName={s.button_back}
                    theme={'outline'}
                    onClick={() => {
                        navigate(RoutePaths.MAIN)
                    }}
                >
                    Назад
                </Button>
                <Button
                    id={'button-next1'}
                    divClassName={s.button_next}
                    theme={'primary'}
                    type={'submit'}
                >
                    Далее
                </Button>
            </div>
        </form>

    )
}