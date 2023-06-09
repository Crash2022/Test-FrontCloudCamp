import React from 'react'
import s from './StepLine.module.scss'

export const StepLine = () => {
    return (
        <div className={s.progress_container}>
            <div className={s.progress} id={'progress'}></div>
            <div className={`${s.circle} ${s.active}`}>1</div>
            <div className={s.circle}>2</div>
            <div className={s.circle}>3</div>
        </div>
    )
}