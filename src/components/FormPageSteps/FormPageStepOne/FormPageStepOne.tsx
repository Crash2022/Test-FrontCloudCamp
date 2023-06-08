import React, {useState} from 'react'
import s from './FormPageStepOne.module.scss'
import {ControlledInput} from '../../../shared/ui/Controlled/ControlledInput'
import {SubmitHandler, useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import {Button} from '../../../shared/ui/Button/Button'
import {RoutePaths} from '../../../shared/api/paths'
import {FormPageStepsProps} from '../../../shared/types/all-types'
import {Select} from '../../../shared/ui/Select/Select';

type SexOptionsTypes = 'Мужчина' | 'Женщина'

export const FormPageStepOne = ({setStep}: FormPageStepsProps) => {

    const navigate = useNavigate()

    const sexOptions = ['Мужчина', 'Женщина']
    const [sexOptionSelect, setSexOptionSelect] = useState<SexOptionsTypes>()

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
            name: '',
            sername: '',
            // sex: '',
        },
        // resolver: yupResolver(FormPageStepOneSchema)
    })

    const onSubmit: SubmitHandler<any> = (data: any) => {
        setStep('two')
    }

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
            <ControlledInput divClassName={s.form_sername}
                             id={'field-sername'}
                             name={'sername'}
                             placeholderTitle={'Фамилия'}
                             control={control}
                             error={errors.sername?.message}
            />
            <Select placeholder={'Выбрать пол'}
                    placeholderTitle={'Пол'}
                    options={sexOptions}
                    value={sexOptionSelect}
                    onChangeOption={setSexOptionSelect}
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