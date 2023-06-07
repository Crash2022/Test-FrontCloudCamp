import React from 'react';
import { NavLink } from 'react-router-dom';
import {RoutePaths} from '../../shared/api/paths';

export const Error404 = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center',
                    alignItems: 'center', gap: '20px', height: '100vh'}}
        >
            <div>
                Error 404
            </div>
            <div>
                <NavLink to={RoutePaths.HOME}>Вернуться на главную страницу</NavLink>
            </div>
        </div>
    )
}