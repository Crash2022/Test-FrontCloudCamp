import React from 'react'
import s from './FormPage.module.scss'

export const FormPage = () => {
    return (
        <div className={s.formPage_mainBox}>
            <div className={s.container}>
                <div className={s.formPage_card}>
                    <div className={s.formPage_steps}>
                        1-2-3
                    </div>
                    <div className={s.formPage_form}>
                        Form
                    </div>
                </div>
            </div>
        </div>
    )
}