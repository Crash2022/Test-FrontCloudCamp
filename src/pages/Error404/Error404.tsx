import React from 'react'
import s from './Error404.module.scss'
import { NavLink } from 'react-router-dom'
import {RoutePaths} from '../../shared/api/paths'

export const Error404 = () => {
    return (
        <div className={s.error404}>
            <div>
                Error 404
            </div>
            <div className={s.link}>
                <NavLink to={RoutePaths.HOME}>Вернуться на главную страницу</NavLink>
            </div>
        </div>
    )
}