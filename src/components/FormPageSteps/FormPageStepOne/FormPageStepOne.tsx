import React, {useEffect, useState} from 'react'
import s from './FormPageStepOne.module.scss'
import {ControlledInput} from '../../../shared/ui/Controlled/ControlledInput'
import {SubmitHandler, useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import {Button} from '../../../shared/ui/Button/Button'
import {RoutePaths} from '../../../shared/api/paths'
import {FormPageStepOneType, FormPageStepsProps} from '../../../shared/types/all-types'
import {Select} from '../../../shared/ui/Select/Select'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import {validationTitles} from "../../../shared/const/validationTitles"
import {specialSymbolsValidation} from "../../../shared/const/validationRegExp"

type SexOptionsTypes = 'Мужчина' | 'Женщина'

export const FormPageStepOne = ({setStep}: FormPageStepsProps) => {

    const navigate = useNavigate()

    const sexOptions = ['Мужчина', 'Женщина']
    const [sexOptionSelect, setSexOptionSelect] = useState<SexOptionsTypes>()

    const FormPageStepOneSchema = yup.object().shape({
        nickname: yup.string()
            .required(validationTitles.required)
            .max(30, validationTitles.nicknameMax)
            .matches(specialSymbolsValidation, {message: validationTitles.notSpecialSymbols, excludeEmptyString: false}),
        name: yup.string()
            .required(validationTitles.required)
            .max(50, validationTitles.nameMax)
            .matches(specialSymbolsValidation, {message: validationTitles.notSpecialSymbols, excludeEmptyString: false}),
        surname: yup.string()
            .required(validationTitles.required)
            .max(50, validationTitles.nameMax)
            .matches(specialSymbolsValidation, {message: validationTitles.notSpecialSymbols, excludeEmptyString: false}),
        // sex: yup.string()
        //     .required(validationTitles.required)
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
        localStorage.setItem('nickname', control._getWatch('nickname'))
        localStorage.setItem('name', control._getWatch('name'))
        localStorage.setItem('surname', control._getWatch('surname'))
        localStorage.setItem('sex', control._getWatch('sex'))
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
            <Select id={'field-sex'}
                    name={'sex'}
                    placeholder={'Выбрать пол'}
                    placeholderTitle={'Пол'}
                    options={sexOptions}
                    value={sexOptionSelect}
                    onChangeOption={setSexOptionSelect}
                    error={errors.sex?.message}
            />
            <div className={s.buttonsBlock}>
                <Button
                    id={'button-back1'}
                    theme={'outline'}
                    onClick={() => {
                        navigate(RoutePaths.MAIN)
                    }}
                >
                    Назад
                </Button>
                <Button
                    id={'button-next1'}
                    theme={'primary'}
                    type={'submit'}
                >
                    Далее
                </Button>
            </div>
        </form>

    )
}