import React from 'react'
import ReactDOM from 'react-dom/client'
import './shared/styles/index.scss'
import {App} from './app/App'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from "react-redux"
import {setupStore} from "./store/store"
import {SnackbarProvider} from "notistack"

const store = setupStore()

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <SnackbarProvider maxSnack={1}>
                    <App/>
                </SnackbarProvider>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
)
