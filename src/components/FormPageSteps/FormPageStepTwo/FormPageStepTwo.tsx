import React from 'react'
import {SubmitHandler, useForm} from "react-hook-form"
import s from './FormPageStepTwo.module.scss'
import {ControlledInput} from "../../../shared/ui/Controlled/ControlledInput"
import {Button} from "../../../shared/ui/Button/Button"
import {FormPageStepsProps} from "../../../shared/types/all-types"
import {Select} from "../../../shared/ui/Select/Select"

export const FormPageStepTwo = ({setStep}: FormPageStepsProps) => {

    // const FormPageStepOneSchema = yup.object().shape({
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
        },
        // resolver: yupResolver(FormPageStepOneSchema)
    })

    const onSubmit: SubmitHandler<any> = (data: any) => {
        setStep('three')
    }

    return (
        <form className={s.formPage_form} onSubmit={handleSubmit(onSubmit)}>
            <ControlledInput divClassName={s.form_nickname}
                             id={'field-nickname'}
                             name={'nickname'}
                             placeholderTitle={'Nickname'}
                             control={control}
                             error={errors.nickname?.message}
            />

            <div className={s.buttonsBlock}>
                <Button
                    id={'button-back'}
                    theme={'outline'}
                    onClick={() => {
                        setStep('one')
                    }}
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
    )
}