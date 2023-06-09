import React, {useState} from 'react'
import s from './FormPage.module.scss'
import {FormPageStepOne} from "../../components/FormPageSteps/FormPageStepOne/FormPageStepOne"
import {FormPageStepTwo} from "../../components/FormPageSteps/FormPageStepTwo/FormPageStepTwo"
import {FormPageStepThree} from "../../components/FormPageSteps/FormPageStepThree/FormPageStepThree"
import {StepsType} from "../../shared/types/all-types"
import {StepLine} from "../../shared/ui/StepLine/StepLine"

export const FormPage = () => {

    const [step, setStep] = useState<StepsType>('one')

    return (
        // <div className={s.formPage_mainBox}>
        //     <div className={s.container}>
                <div className={s.formPage_card}>
                    <div className={s.formPage_steps}>
                        <StepLine/>
                    </div>
                        {
                            step === 'one' ? <FormPageStepOne setStep={setStep}/> : ''
                        }
                        {
                            step === 'two' ? <FormPageStepTwo setStep={setStep}/> : ''
                        }
                        {
                            step === 'three' ? <FormPageStepThree setStep={setStep}/> : ''
                        }
                </div>
        //     </div>
        // </div>
    )
}