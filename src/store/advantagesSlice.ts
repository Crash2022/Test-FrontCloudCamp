import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type AdvantagesStateType = {
    advantages: string[]
}

const initialState: AdvantagesStateType = {
    advantages: []
}

export const advantagesSlice = createSlice<any, any>({
    name: 'advantages',
    initialState,
    reducers: {
        addAdvantage: (state: AdvantagesStateType, action: PayloadAction<{ advantage: string }>) => {
            state.advantages.push(action.payload.advantage)
        },
    }
})

export const { addAdvantage } = advantagesSlice.actions
export const advantagesReducer = advantagesSlice.reducer
