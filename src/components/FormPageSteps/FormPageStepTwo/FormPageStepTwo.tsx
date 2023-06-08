import React, {useState} from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'
import s from './FormPageStepTwo.module.scss'
import {Button} from '../../../shared/ui/Button/Button'
import {FormPageStepsProps} from '../../../shared/types/all-types'
import {ControlledCheckbox} from '../../../shared/ui/Controlled/ControlledCheckbox'
import {RadioButton} from '../../../shared/ui/RadioButton/RadioButton'

type RadioOptionsTypes = '1' | '2' | '3'

export const FormPageStepTwo = ({setStep}: FormPageStepsProps) => {

    const radioButtonOptions = ['1', '2', '3']
    const [radioOption, setRadioOption] = useState<RadioOptionsTypes>('1')


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
        // formState: {errors}
    } = useForm<any>({
        defaultValues: {
            checkboxOne: false,
            checkboxTwo: false,
            checkboxThree: false,
        },
        // resolver: yupResolver(FormPageStepOneSchema)
    })

    const onSubmit: SubmitHandler<any> = (data: any) => {
        setStep('three')
    }

    return (
        <div className={s.formPageStepTwo}>
            <div className={s.advantages}>
                editable span

                <Button
                    divClassName={s.add_button}
                    id={'button-add'}
                    theme={'outline'}
                    onClick={() => {
                        alert('add')
                    }}
                >
                    +
                </Button>
            </div>
            <form className={s.formPage_form} onSubmit={handleSubmit(onSubmit)}>
                <div className={s.checkboxGroup}>
                    <div>Checkbox group</div>
                    <ControlledCheckbox divClassName={s.infoBlock_checkbox}
                                        id={'field-checkbox-group-option-1'}
                                        name={'checkboxOne'}
                                        label={'1'}
                                        control={control}
                    />
                    <ControlledCheckbox divClassName={s.infoBlock_checkbox}
                                        id={'field-checkbox-group-option-1'}
                                        name={'checkboxTwo'}
                                        label={'2'}
                                        control={control}
                    />
                    <ControlledCheckbox divClassName={s.infoBlock_checkbox}
                                        id={'field-checkbox-group-option-1'}
                                        name={'checkboxThree'}
                                        label={'3'}
                                        control={control}
                    />
                </div>
                <div className={s.radioGroup}>
                    <div>Radio group</div>
                    <RadioButton
                        options={radioButtonOptions}
                        value={radioOption}
                        onChangeOption={setRadioOption}
                    />
                </div>
                <div className={s.buttonsBlock}>
                    <Button
                        id={'button-back2'}
                        theme={'outline'}
                        onClick={() => {
                            setStep('one')
                        }}
                    >
                        Назад
                    </Button>
                    <Button
                        id={'button-next2'}
                        theme={'primary'}
                        type={'submit'}
                    >
                        Далее
                    </Button>
                </div>
            </form>
        </div>
    )
}