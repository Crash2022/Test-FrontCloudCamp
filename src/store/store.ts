import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {formPageAPI} from '../services/FormPageService'
import {advantagesReducer} from './advantages-slice'
import {persistStore, persistReducer,
    FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const rootReducer = combineReducers({
    advantages: advantagesReducer,
    [formPageAPI.reducerPath]: formPageAPI.reducer
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const setupStore = () => {
    return configureStore({
        reducer: persistedReducer, // rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }).concat(formPageAPI.middleware)
    })
}

export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppStoreType = ReturnType<typeof setupStore>
export type AppDispatchType = AppStoreType['dispatch']

// export type AppDispatchType = typeof store.dispatch
// export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, any>

export const store = setupStore()
export const persistor = persistStore(store)