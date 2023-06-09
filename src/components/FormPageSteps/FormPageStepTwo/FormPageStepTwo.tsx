import React, {useEffect, useState} from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'
import s from './FormPageStepTwo.module.scss'
import {Button} from '../../../shared/ui/Button/Button'
import {AdvantageType, FormPageStepsProps} from '../../../shared/types/all-types'
import {ControlledCheckbox} from '../../../shared/ui/Controlled/ControlledCheckbox'
import {RadioButton} from '../../../shared/ui/RadioButton/RadioButton'
import {useAppDispatch} from '../../../shared/hooks/useAppDispatch'
import {useAppSelector} from '../../../shared/hooks/useAppSelector'
import {selectorAdvantages} from '../../../store/selectors'
import {addAdvantage} from '../../../store/advantages-reducer'
import {AdvantageItem} from '../../AdvantageItem/AdvantageItem'
import {v1} from 'uuid'
import {useSnackbar} from "notistack"
import {validationTitles} from "../../../shared/const/validationTitles"
import {validationNumbers} from "../../../shared/const/validationNumbers"
import {RoutePaths} from "../../../shared/api/paths"
import {useNavigate} from "react-router-dom"

type RadioOptionsTypes = '1' | '2' | '3'

export const FormPageStepTwo = ({setStep}: FormPageStepsProps) => {

    const { enqueueSnackbar } = useSnackbar()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const advantages = useAppSelector(selectorAdvantages)

    const LS_Step2 = localStorage.getItem('step') === 'two'

    const radioButtonOptions = ['1', '2', '3']
    const [radioOption, setRadioOption] = useState<RadioOptionsTypes>('1')

    const {
        control,
        handleSubmit
    } = useForm<any>({
        defaultValues: {
            checkboxOne: true,
            checkboxTwo: false,
            checkboxThree: false,
        }
    })

    const onSubmit: SubmitHandler<any> = (data: any) => {
        if (advantages.length === 0) {
            enqueueSnackbar(validationTitles.noAdvantage, {variant: 'error', autoHideDuration: 3000})
            return
        }
        if (advantages.find((adv: AdvantageType) => adv.title.length === 0 || adv.title.length > validationNumbers.advantage)) {
            enqueueSnackbar(validationTitles.noAdvantageTitle, {variant: 'error', autoHideDuration: 3000})
            return
        }

        setStep('three')
        localStorage.setItem('step', 'three')
    }

    useEffect(() => {
        if (!LS_Step2) navigate(RoutePaths.MAIN)
    }, [])

    return (
        <div className={s.formPageStepTwo}>
            <div className={s.advantages}>
                <div className={s.add_advantage}>
                    <Button
                        divClassName={s.add_button}
                        id={'button-add'}
                        theme={'outline'}
                        onClick={() => {
                            dispatch(addAdvantage({id: v1(), title: ''}))
                        }}
                    >
                        +
                    </Button>
                    <div>
                        Добавить новое поле
                    </div>
                </div>
                {
                    advantages && advantages.map((adv: AdvantageType) => {
                        return (
                            <AdvantageItem key={adv.id} advantage={adv}/>
                        )
                    })
                }
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
                        divClassName={s.button_back}
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
                        divClassName={s.button_next}
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