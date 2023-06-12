import React, {useEffect, useState} from 'react'
import s from './FormPage.module.scss'
import {FormPageStepOne} from "../../components/FormPageSteps/FormPageStepOne/FormPageStepOne"
import {FormPageStepTwo} from "../../components/FormPageSteps/FormPageStepTwo/FormPageStepTwo"
import {FormPageStepThree} from "../../components/FormPageSteps/FormPageStepThree/FormPageStepThree"
import {StepsType} from "../../shared/types/all-types"
import {StepLine} from "../../shared/ui/StepLine/StepLine"
import {useSetFormDataMutation} from "../../services/FormPageService"

export const FormPage = () => {

    const [setFormData, { isError, isSuccess, isLoading }] = useSetFormDataMutation()
    const [step, setStep] = useState<StepsType>('one')
    const LS_Step = localStorage.getItem('step')

    useEffect(() => {
        localStorage.setItem('step', 'one')

        if (LS_Step) { // @ts-ignore
            setStep(LS_Step)
        }
    }, [])

    return (
        <div className={s.formPage_card}>
            <div className={s.formPage_steps}>
                <StepLine isSuccess={isSuccess}/>
            </div>
            { step === 'one' ? <FormPageStepOne setStep={setStep}/> : '' }
            { step === 'two' ? <FormPageStepTwo setStep={setStep}/> : '' }
            {
                step === 'three' ?
                    <FormPageStepThree setStep={setStep}
                                       setFormData={setFormData}
                                       isError={isError}
                                       isSuccess={isSuccess}
                                       isLoading={isLoading}
                    />
                    : ''
            }
        </div>
    )
}