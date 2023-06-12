import React from 'react'
import s from './StepLine.module.scss'
import {LS_Step1, LS_Step2, LS_Step3} from "../../const/localStorage"

type StepLineProps = {
    isSuccess: any
}

export const StepLine = ({isSuccess}: StepLineProps) => {

    // &#10004; - галочка
    // &#9898; - круг

    const symbol_round = String.fromCharCode(9898)
    const symbol_check = String.fromCharCode(10004)

    const className_active = `${s.stepper_item} ${s.active}`
    const className_completed = `${s.stepper_item} ${s.completed}`

    return (
        <>
            <div className={s.stepper_wrapper} id={'progress'}>
                <div className={LS_Step1 ? className_active : className_completed}>
                    <div className={s.step_counter}>
                        { LS_Step1 ? symbol_round : symbol_check }
                    </div>
                    <div className={s.step_name}>1</div>
                </div>
                <div className={LS_Step2 || LS_Step1 ? className_active : className_completed}>
                    <div className={s.step_counter}>
                        { LS_Step2 ? symbol_round : LS_Step3 ? symbol_check : '' }
                    </div>
                    <div className={s.step_name}>2</div>
                </div>
                <div className={isSuccess ? className_completed : className_active}>
                    <div className={s.step_counter}>
                        { isSuccess ? symbol_check : LS_Step3 ? symbol_round : '' }
                    </div>
                    <div className={s.step_name}>3</div>
                </div>
            </div>
        </>
    )
}