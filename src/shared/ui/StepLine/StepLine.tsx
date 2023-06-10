import React, {useEffect} from 'react'
import s from './StepLine.module.scss'

type StepLineProps = {
    isSuccess: any
}

export const StepLine = ({isSuccess}: StepLineProps) => {

    // &#10004; - галочка
    // &#9898; - круг

    // локал сторадж
    const LS_Step1 = localStorage.getItem('step') === 'one'
    const LS_Step2 = localStorage.getItem('step') === 'two'
    const LS_Step3 = localStorage.getItem('step') === 'three'

    // символы
    const symbol_round = String.fromCharCode(9898)
    const symbol_check = String.fromCharCode(10004)

    // классы стилей
    const className_active = `${s.stepper_item} ${s.active}`
    const className_completed = `${s.stepper_item} ${s.completed}`

    // useEffect(() => {
    //     localStorage.setItem('step', 'one')
    // }, [])

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
                        {/*{ LS_Step3 ? symbol_round : '' }*/}
                        { isSuccess ? symbol_check : symbol_round }
                    </div>
                    <div className={s.step_name}>3</div>
                </div>
            </div>

            {/*начальная версия*/}
            {/*<div className={s.stepper_wrapper} id={'progress'}>*/}
            {/*    <div className={`${s.stepper_item} ${s.active}`}>*/}
            {/*        <div className={s.step_counter}>&#9898;</div>*/}
            {/*        <div className={s.step_name}>1</div>*/}
            {/*    </div>*/}
            {/*    <div className={`${s.stepper_item} ${s.active}`}>*/}
            {/*        <div className={s.step_counter}></div>*/}
            {/*        <div className={s.step_name}>2</div>*/}
            {/*    </div>*/}
            {/*    <div className={`${s.stepper_item} ${s.active}`}>*/}
            {/*        <div className={s.step_counter}></div>*/}
            {/*        <div className={s.step_name}>3</div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*другой вариант*/}
            {/*<div className={s.progress_container} id={'progress2'}>*/}
            {/*    <div className={s.progress}></div>*/}
            {/*    <div className={`${s.circle} ${s.active}`}>*/}
            {/*        1*/}
            {/*    </div>*/}
            {/*    <div className={localStorage.getItem('step') === 'two' ||*/}
            {/*    localStorage.getItem('step') === 'three' ?*/}
            {/*        `${s.circle} ${s.active}` : s.circle}*/}
            {/*    >*/}
            {/*        2*/}
            {/*    </div>*/}
            {/*    <div className={localStorage.getItem('step') === 'three' ?*/}
            {/*        `${s.circle} ${s.active}` : s.circle}*/}
            {/*    >*/}
            {/*        3*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}