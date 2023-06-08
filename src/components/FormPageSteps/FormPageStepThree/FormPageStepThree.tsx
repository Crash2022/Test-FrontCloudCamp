import React, {useEffect, useState} from 'react'
import s from './FormPageStepThree.module.scss'
import {Button} from "../../../shared/ui/Button/Button"
import {FormPageStepsProps} from "../../../shared/types/all-types"
import {Textarea} from "../../../shared/ui/Textarea/Textarea"
import {validationTitles} from "../../../shared/const/validationTitles"

export const FormPageStepThree = ({setStep}: FormPageStepsProps) => {

    const [description, setDescription] = useState<string>('')
    const [descriptionError, setDescriptionError] = useState<string>('')

    // const FormPageStepOneSchema = yup.object().shape({
    //     phone: yup.string()
    //         .matches(phoneRegExp, {message: validationTitles.phone, excludeEmptyString: false})
    //         .required(validationTitles.required)
    //         .min(11, validationTitles.phoneMin)
    //         .max(11, validationTitles.phoneMax),
    //     email: yup.string().required(validationTitles.required).email(validationTitles.email),
    // })

    // const {
    //     control,
    //     handleSubmit,
    //     formState: {errors}
    // } = useForm<any>({
    //     defaultValues: {
    //         nickname: '',
    //     },
    //     // resolver: yupResolver(FormPageStepOneSchema)
    // })

    // const onSubmit: SubmitHandler<any> = (data: any) => {
    //     alert('submit')
    // }

    const handleSubmit = (e: any) => {
        e.preventDefault()

        const trimValue = description.trim()

        if (trimValue && trimValue.length <= 200) {
            alert('submit')
        } else {
            setDescriptionError(validationTitles.aboutMin)
        }
    }

    useEffect(() => {
        if (description.length > 200) {
            setDescriptionError(validationTitles.aboutMax)
        } else {
            setDescriptionError('')
        }
    }, [description])

    return (
        // <form className={s.formPage_form} onSubmit={handleSubmit(onSubmit)}>
        <form className={s.formPage_form} onSubmit={handleSubmit}>
            <div className={s.about_textarea}>
                <Textarea
                    placeholder={'Введите текст'}
                    placeholderTitle={'Обо мне'}
                    value={description}
                    onChange={(e) => {
                        setDescription(e.currentTarget.value)
                    }}
                    error={descriptionError}
                />
                <div className={s.textarea_length}>{description.length} / 200</div>
            </div>

            {/*<ControlledInput divClassName={s.form_nickname}*/}
            {/*                 id={'field-nickname'}*/}
            {/*                 name={'nickname'}*/}
            {/*                 placeholderTitle={'Nickname'}*/}
            {/*                 control={control}*/}
            {/*                 error={errors.nickname?.message}*/}
            {/*/>*/}

            <div className={s.buttonsBlock}>
                <Button
                    id={'button-back3'}
                    theme={'outline'}
                    onClick={() => {
                        setStep('two')
                    }}
                >
                    Назад
                </Button>
                <Button
                    id={'button-next3'}
                    theme={'primary'}
                    type={'submit'}
                >
                    Далее
                </Button>
            </div>
        </form>
    )
}