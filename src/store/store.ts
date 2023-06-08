import {combineReducers, configureStore, ThunkAction} from '@reduxjs/toolkit'
import {formPageAPI} from '../services/FormPageService'
import {advantagesReducer} from './advantagesSlice'

const rootReducer = combineReducers({
    advantages: advantagesReducer,
    [formPageAPI.reducerPath]: formPageAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(formPageAPI.middleware)
    })
}

export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppStoreType = ReturnType<typeof setupStore>
export type AppDispatchType = AppStoreType['dispatch']

// export type AppDispatchType = typeof store.dispatch
// export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, any>