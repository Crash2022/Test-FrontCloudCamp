import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type AdvantagesStateType = {
    advantages: any[]
}

const initialState: AdvantagesStateType = {
    advantages: []
}

export const advantagesSlice = createSlice<any, any>({
    name: 'advantages',
    initialState,
    reducers: {
        addAdvantage: (state: any, action: PayloadAction<{ advantage: string }>) => {
            state.advantages = action.payload.advantage
        },
    }
})

export const { addAdvantage } = advantagesSlice.actions
export const advantagesReducer = advantagesSlice.reducer