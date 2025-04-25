import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
	value: number
}

const initialState: CounterState = {
	value: 0,
}

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: state => {
			state.value += 1
		},
		decrement: state => {
			state.value -= 1
		},
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.value += action.payload
		},
		start: () => {
			for (let index = 1; index <= 20; index++) {
				console.log(index)
			}
		},
	},
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, start } =
	counterSlice.actions

export default counterSlice.reducer
