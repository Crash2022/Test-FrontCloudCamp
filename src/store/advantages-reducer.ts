import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {AdvantageType} from '../shared/types/all-types'

export type AdvantagesStateType = {
    advantages: AdvantageType[]
}

const initialState: AdvantagesStateType = {
    advantages: []
}

export const advantagesSlice = createSlice({
    name: 'advantages',
    initialState,
    reducers: {
        addAdvantage: (state, action: PayloadAction<{ id: string, title: string}>) => {
            state.advantages.push(action.payload)
        },
        updateAdvantageTitle: (state, action: PayloadAction<{ id: string, title: string}>) => {
            const index = state.advantages.findIndex(adv => adv.id === action.payload.id)
            state.advantages[index].title = action.payload.title
        },
        deleteAdvantage: (state, action: PayloadAction<{ id: string }>) => {
            const index = state.advantages.findIndex(adv => adv.id === action.payload.id)
            if (index > -1) state.advantages.splice(index, 1)
        },
        clearAdvantages: () => {
            return initialState
        },
    }
})

export const {
    addAdvantage,
    updateAdvantageTitle,
    deleteAdvantage,
    clearAdvantages
} = advantagesSlice.actions
export const advantagesReducer = advantagesSlice.reducer
