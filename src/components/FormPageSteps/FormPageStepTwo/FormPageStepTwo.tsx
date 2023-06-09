import React, {useState} from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'
import s from './FormPageStepTwo.module.scss'
import {Button} from '../../../shared/ui/Button/Button'
import {FormPageStepsProps} from '../../../shared/types/all-types'
import {ControlledCheckbox} from '../../../shared/ui/Controlled/ControlledCheckbox'
import {RadioButton} from '../../../shared/ui/RadioButton/RadioButton'
import {useAppDispatch} from '../../../shared/hooks/useAppDispatch'
import {useAppSelector} from '../../../shared/hooks/useAppSelector'
import {selectorAdvantages} from '../../../store/selectors'
import {addAdvantage} from '../../../store/advantagesSlice'
import {AdvantageItem} from '../../AdvantageItem/AdvantageItem'

type RadioOptionsTypes = '1' | '2' | '3'

export const FormPageStepTwo = ({setStep}: FormPageStepsProps) => {

    const dispatch = useAppDispatch()
    const advantages = useAppSelector(selectorAdvantages)

    const radioButtonOptions = ['1', '2', '3']
    const [radioOption, setRadioOption] = useState<RadioOptionsTypes>('1')

    const {
        control,
        handleSubmit
    } = useForm<any>({
        defaultValues: {
            checkboxOne: false,
            checkboxTwo: false,
            checkboxThree: false,
        }
    })

    const onSubmit: SubmitHandler<any> = (data: any) => {
        setStep('three')
        localStorage.setItem('step', 'three')
    }

    return (
        <div className={s.formPageStepTwo}>
            <div className={s.advantages}>

                {
                    advantages && advantages.map((el: string, index: number) => {
                        return (
                            <div key={index} className={s.added_input}>{el}</div>
                        )
                    })
                }

                <AdvantageItem/>

                <Button
                    divClassName={s.add_button}
                    id={'button-add'}
                    theme={'outline'}
                    onClick={() => {
                        // @ts-ignore
                        dispatch(addAdvantage({advantage: 'new'}))
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
                            localStorage.setItem('step', 'one')
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