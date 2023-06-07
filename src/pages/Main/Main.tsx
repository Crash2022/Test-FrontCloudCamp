import React from 'react'
import s from './Main.module.scss'
import {Avatar} from '../../shared/ui/Avatar/Avatar'
import FolderIcon from '../../shared/assets/icons/folder-icon.svg'
import {Controller, SubmitHandler, useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {validationTitles} from '../../shared/utils/validation-titles'
import {Input} from '../../shared/ui/Input/Input'
import {Button} from '../../shared/ui/Button/Button';

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

    const MainSchema = yup.object().shape({
        phone: yup.number().required(validationTitles.required),
        email: yup.string().required(validationTitles.required).email(validationTitles.email),
    })

    const {
        control,
        handleSubmit,
        formState: {errors}
    } = useForm<any>({
        defaultValues: {
            phone: '',
            email: ''
        },
        resolver: yupResolver(MainSchema)
    })

    const onSubmit: SubmitHandler<any> = async (data: any) => {
        // code here
    }

    return (
        <div className={s.main_mainBox}>
            <div className={s.container}>
                <div className={s.main_mainForm}>
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
                                                    <img src={FolderIcon} alt="folder-icon"/>
                                                </div>
                                                <div className={s.contactItem_link}>
                                                    <a href={c.link} target="_blank">{c.title}</a>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <form className={s.mainForm_form} onSubmit={handleSubmit(onSubmit)}>
                        {/*<ControlledInput name={'phone'}*/}
                        {/*                 placeholder={'Номер телефона'}*/}
                        {/*                 control={control}*/}
                        {/*/>*/}

                        <div className={s.form_phone}>
                            <Controller
                                name={'phone'}
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        id={'main-form-phone'}
                                        // placeholder={'Номер телефона'}
                                        placeholderTitle={'Номер телефона'}
                                        error={errors.phone?.message}
                                    />
                                )}
                            />
                        </div>
                        <div className={s.form_email}>
                            <Controller
                                name={'email'}
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        id={'main-form-email'}
                                        // placeholder={'Email'}
                                        placeholderTitle={'Email'}
                                        error={errors.email?.message}
                                    />
                                )}
                            />
                        </div>
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