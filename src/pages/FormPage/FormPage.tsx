import React from 'react'
import s from './FormPage.module.scss'
import {ControlledInput} from "../../shared/ui/Controlled/ControlledInput"
import {Button} from "../../shared/ui/Button/Button"
import {SubmitHandler, useForm} from "react-hook-form"
import {useNavigate} from "react-router-dom"
import {RoutePaths} from "../../shared/api/paths";

export const FormPage = () => {

    const navigate = useNavigate()

    // const FormPageSchema = yup.object().shape({
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
            nickname: '',
            name: '',
            sername: '',
            sex: '',
        },
        // resolver: yupResolver(FormPageSchema)
    })

    const onSubmit: SubmitHandler<any> = (data: any) => {
        // navigate(RoutePaths.FORM)
    }

    return (
        <div className={s.formPage_mainBox}>
            <div className={s.container}>
                <div className={s.formPage_card}>
                    <div className={s.formPage_steps}>
                        1-2-3
                    </div>
                    <form className={s.formPage_form} onSubmit={handleSubmit(onSubmit)}>
                        <ControlledInput divClassName={s.form_nickname}
                                         id={'field-nickname'}
                                         name={'nickname'}
                                         placeholderTitle={'Nickname'}
                                         control={control}
                                         error={errors.nickname?.message}
                        />
                        <ControlledInput divClassName={s.form_name}
                                         id={'field-name'}
                                         name={'name'}
                                         placeholderTitle={'Name'}
                                         control={control}
                                         error={errors.name?.message}
                        />
                        <ControlledInput divClassName={s.form_sername}
                                         id={'field-sername'}
                                         name={'sername'}
                                         placeholderTitle={'Sername'}
                                         control={control}
                                         error={errors.sername?.message}
                        />

                        <ControlledInput divClassName={s.form_sex}
                                         id={'field-sex'}
                                         name={'sex'}
                                         placeholderTitle={'Sex'}
                                         control={control}
                                         error={errors.sex?.message}
                        />

                        <div className={s.buttonsBlock}>
                            <Button
                                id={'button-back'}
                                theme={'outline'}
                                onClick={() => {navigate(RoutePaths.MAIN)}}
                            >
                                Назад
                            </Button>
                            <Button
                                id={'button-next'}
                                theme={'primary'}
                                type={'submit'}
                            >
                                Далее
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}