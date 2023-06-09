import React from 'react'
import s from './StepLine.module.scss'

export const StepLine = () => {
    return (
        <div className={s.progress_container}>
            <div className={s.progress} id={'progress'}></div>
            <div className={`${s.circle} ${s.active}`}>
                1
            </div>
            <div className={localStorage.getItem('step') === 'two' ||
                            localStorage.getItem('step') === 'three' ?
                            `${s.circle} ${s.active}` : s.circle}
            >
                2
            </div>
            <div className={localStorage.getItem('step') === 'three' ?
                            `${s.circle} ${s.active}` : s.circle}
            >
                3
            </div>
        </div>
    )
}