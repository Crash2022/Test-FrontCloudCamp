import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {AdvantageType} from '../shared/types/all-types'

type AdvantagesStateType = {
    advantages: AdvantageType[]
}

const initialState: AdvantagesStateType = {
    // advantages: [{id: '1', title: 'Новый пункт'}]
    advantages: []
}

export const advantagesSlice = createSlice<any, any>({
    name: 'advantages',
    initialState,
    reducers: {
        addAdvantage: (state: AdvantagesStateType, action: PayloadAction<{ id: string, title: string}>) => {
            state.advantages.push(action.payload)
        },
        updateAdvantageTitle: (state: AdvantagesStateType, action: PayloadAction<{ id: string, title: string}>) => {
            const index = state.advantages.findIndex(adv => adv.id === action.payload.id)
            state.advantages[index].title = action.payload.title
        },
        deleteAdvantage: (state: AdvantagesStateType, action: PayloadAction<{ id: string }>) => {
            const index = state.advantages.findIndex(adv => adv.id === action.payload.id)
            if (index > -1) {
                state.advantages.splice(index, 1)
            }
        },
        clearAdvantages: (state: AdvantagesStateType, action: PayloadAction<{}>) => {
            state.advantages = []
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
