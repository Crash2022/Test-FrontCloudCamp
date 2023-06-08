import React from 'react'
import './App.css'
import {Navigate, Route, Routes } from 'react-router-dom'
import {RoutePaths} from '../shared/api/paths'
import {Error404} from '../pages/Error404/Error404'
import {Main} from '../pages/Main/Main'
import {FormPage} from '../pages/FormPage/FormPage'

export const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path={RoutePaths.HOME} element={<Navigate to={RoutePaths.MAIN} />} />
                <Route path={RoutePaths.MAIN} element={<Main/>}/>
                <Route path={RoutePaths.FORM} element={<FormPage/>}/>
                <Route path={RoutePaths.ERROR404} element={<Error404 />} />
                <Route path={'*'} element={<Navigate to={RoutePaths.ERROR404} />} />
            </Routes>
        </div>
    )
}

