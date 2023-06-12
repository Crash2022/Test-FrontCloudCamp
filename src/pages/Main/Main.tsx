import React, {useEffect} from 'react'
import s from './Main.module.scss'
import {Avatar} from '../../shared/ui/Avatar/Avatar'
import {SubmitHandler, useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import {validationTitles} from '../../shared/const/validationTitles'
import {Button} from '../../shared/ui/Button/Button'
import {useNavigate} from 'react-router-dom'
import {RoutePaths} from "../../shared/api/paths"
import {ContactItem} from "../../components/ContactItem/ContactItem"
import {ContactsType, MainPageFormType} from '../../shared/types/all-types'
import {ControlledInput} from "../../shared/ui/Controlled/ControlledInput"
import {ControlledIMaskInput} from "../../shared/ui/Controlled/ControlledIMaskInput"

export const Main = () => {

    const navigate = useNavigate()

    const lastName: string = 'Чашин'
    const firstName: string = 'Александр'

    const contacts: ContactsType[] = [
        {id: 1, title: 'Telegram', link: 'https://t.me/MyNameCrash'},
        {id: 2, title: 'GitHub', link: 'https://github.com/Crash2022'},
        {id: 3, title: 'Resume', link: 'Chashin_Alexander_Evgenievich_CV.pdf'}
    ]

    const MainSchema = yup.object().shape({
        phone: yup.string().required(validationTitles.required)
            .min(16, validationTitles.phoneLength)
            .max(16, validationTitles.phoneLength),
        email: yup.string()
            .required(validationTitles.required)
            .email(validationTitles.email),
    })

    const {
        control,
        handleSubmit,
        setValue,
        formState: {errors}
    } = useForm<MainPageFormType>({
        defaultValues: {
            phone: '',
            email: ''
        },
        resolver: yupResolver(MainSchema)
    })

    const onSubmit: SubmitHandler<MainPageFormType> = () => {
        localStorage.setItem('phone', control._getWatch('phone'))
        localStorage.setItem('email', control._getWatch('email'))
        localStorage.setItem('step', 'one')
        navigate(RoutePaths.FORM)
    }

    useEffect(() => {
        const LS_Phone = localStorage.getItem('phone')
        if (LS_Phone) setValue('phone', LS_Phone)

        const LS_Email = localStorage.getItem('email')
        if (LS_Email) setValue('email', LS_Email)
    }, [])

    return (
        <div className={s.main_loginCard}>
            <div className={s.userInfo_header}>
                <Avatar lastName={lastName} firstName={firstName}/>
                <div className={s.header_info}>
                    <div className={s.header_infoName}>
                        {lastName} {firstName}
                    </div>
                    <div className={s.header_infoContacts}>
                        {
                            contacts.map(c => {
                                return (
                                    <ContactItem key={c.id} contact={c}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <form className={s.main_form} onSubmit={handleSubmit(onSubmit)}>
                <ControlledIMaskInput control={control}
                                      error={errors.phone?.message}
                                      placeholderTitle={'Номер телефона'}
                />

                {/*<ControlledInput divClassName={s.form_phone}*/}
                {/*                 id={'main-form-phone'}*/}
                {/*                 name={'phone'}*/}
                {/*                 placeholder={'+7(___) ___-__-__'}*/}
                {/*                 placeholderTitle={'Номер телефона'}*/}
                {/*                 control={control}*/}
                {/*                 error={errors.phone?.message}*/}
                {/*/>*/}
                <ControlledInput divClassName={s.form_email}
                                 id={'main-form-email'}
                                 name={'email'}
                                 placeholder={'example@gmail.com'}
                                 placeholderTitle={'Электронная почта'}
                                 control={control}
                                 error={errors.email?.message}
                />
                <Button
                    id={'button-start'}
                    divClassName={s.button_start}
                    theme={'primary'}
                    type={'submit'}
                >
                    Начать
                </Button>
            </form>
        </div>
    )
}