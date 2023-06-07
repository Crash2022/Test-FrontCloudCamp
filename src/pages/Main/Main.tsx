import React from 'react'
import s from './Main.module.scss'
import {Avatar} from '../../shared/ui/Avatar/Avatar'
import FolderIcon from '../../shared/assets/icons/folder-icon.svg'
import {SubmitHandler, useForm} from 'react-hook-form'
import * as yup from 'yup'

type ContactsType = {
    id: number
    title: string
    link: string
}

export const Main = () => {

    const lastName: string = 'Чашин'
    const firstName: string = 'Александр'

    const contacts: ContactsType[] = [
        {id: 1, title: 'Telegram', link: 'https://t.me/MyNameCrash'},
        {id: 2, title: 'GitHub', link: 'https://github.com/Crash2022'},
        {id: 3, title: 'Resume', link: 'https://my-portfolio-app-beryl.vercel.app/'},
    ]

    const ForgotSchema = yup.object().shape({
        email: yup.string().required(t('Err_Yup_Required')).email(t('Err_Yup_Email'))
        // recaptcha: yup.boolean().oneOf([true], t('Robot'))
    })

    const {
        control,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm<any>({
        defaultValues: {
            email: '',
            recaptcha: ''
        },
        resolver: yupResolver(ForgotSchema)
    })

    const onSubmit: SubmitHandler<any> = async (data: any) => {
        // code
    }

    return (
        <div className={s.main_mainBox}>
            <form className={s.main_mainForm}>
                <div className={s.mainForm_header}>
                    <Avatar lastName={lastName} firstName={firstName}/>
                    <div className={s.header_info}>
                        <div className={s.header_infoName}>
                            {lastName} {firstName}
                        </div>
                        <div className={s.header_infoContacts}>
                            {
                                contacts.map(c => {
                                    return (
                                        <div key={c.id} className={s.contactItem}>
                                            <div className={s.contactItem_icon}>
                                                <img src={FolderIcon} alt='folder-icon' />
                                            </div>
                                            <div className={s.contactItem_link}>
                                                <a href={c.link} target='_blank'>{c.title}</a>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <form className={s.mainForm_form} onSubmit={handleSubmit(onSubmit)}>
                    5
                </form>
            </div>
        </div>
    )
}