import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {formPageAPI} from '../services/FormPageService';

const rootReducer = combineReducers({
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

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']