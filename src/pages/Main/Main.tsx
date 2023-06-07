import React from 'react';
import s from './Main.module.scss'
import {Avatar} from '../../shared/ui/Avatar/Avatar';

export const Main = () => {

    const lastName: string = 'Чашин'
    const firstName: string = 'Александр'

    return (
        <div className={s.main_mainBox}>
            <div className={s.main_mainForm}>
                <div className={s.mainForm_header}>
                    <Avatar lastName={lastName} firstName={firstName}/>
                    <div className={s.header_info}>
                        <div className={s.header_infoName}>
                            {lastName} {firstName}
                        </div>
                        <div className={s.header_infoContacts}>
                            3
                        </div>
                    </div>
                </div>
                <div className={s.mainForm_form}>
                    5
                </div>
            </div>
        </div>
    )
}