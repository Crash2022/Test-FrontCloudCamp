import React from 'react'
import ReactDOM from 'react-dom/client'
import './shared/styles/index.scss'
import {App} from './app/App'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from "react-redux"
import {persistor, setupStore, store} from "./store/store"
import {SnackbarProvider} from "notistack"
import {PersistGate} from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <SnackbarProvider maxSnack={1}>
                        <App/>
                    </SnackbarProvider>
                </PersistGate>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
)
