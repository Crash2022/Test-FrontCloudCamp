import React from 'react'
import s from './Main.module.scss'
import {Avatar} from '../../shared/ui/Avatar/Avatar'
import {SubmitHandler, useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {validationTitles} from '../../shared/const/validationTitles'
import {Button} from '../../shared/ui/Button/Button'
import {useNavigate} from 'react-router-dom'
import {RoutePaths} from "../../shared/api/paths"
import {ContactItem} from "../../components/ContactItem/ContactItem"
import {ContactsType} from "../../shared/types/all-types"
import {ControlledInput} from "../../shared/ui/Controlled/ControlledInput"
import {phoneRegExp} from "../../shared/const/phoneRegExp"


export const Main = () => {

    const navigate = useNavigate()

    const lastName: string = 'Чашин'
    const firstName: string = 'Александр'

    const contacts: ContactsType[] = [
        {id: 1, title: 'Telegram', link: 'https://t.me/MyNameCrash'},
        {id: 2, title: 'GitHub', link: 'https://github.com/Crash2022'},
        {id: 3, title: 'Resume', link: 'https://my-portfolio-app-beryl.vercel.app/'},
    ]

    // const MainSchema = yup.object().shape({
    //     phone: yup.string()
    //         .matches(phoneRegExp, {message: validationTitles.phone, excludeEmptyString: false})
    //         .required(validationTitles.required)
    //         .min(11, validationTitles.phoneMin)
    //         .max(11, validationTitles.phoneMax),
    //     email: yup.string().required(validationTitles.required).email(validationTitles.email),
    // })

    const {
        control,
        handleSubmit,
        formState: {errors}
    } = useForm<any>({
        defaultValues: {
            phone: '',
            email: ''
        },
        // resolver: yupResolver(MainSchema)
    })

    const onSubmit: SubmitHandler<any> = (data: any) => {
        navigate(RoutePaths.FORM)
    }

    return (
        <div className={s.mainPage_mainBox}>
            <div className={s.container}>
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
                        <ControlledInput divClassName={s.form_phone}
                                         id={'main-form-phone'}
                                         name={'phone'}
                                         placeholderTitle={'Номер телефона'}
                                         control={control}
                                         error={errors.phone?.message}
                        />
                        <ControlledInput divClassName={s.form_email}
                                         id={'main-form-email'}
                                         name={'email'}
                                         placeholderTitle={'Электронная почта'}
                                         control={control}
                                         error={errors.email?.message}
                        />
                        <Button
                            id={'button-start'}
                            theme={'primary'}
                            type={'submit'}
                        >
                            Начать
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}