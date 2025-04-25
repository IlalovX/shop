import { createSlice } from '@reduxjs/toolkit'

export interface NomerState {
	telefon: string
}

const initialState: NomerState = {
	telefon: '',
}

export const nomerSlice = createSlice({
	name: 'nomer',
	initialState,
	reducers: {
		changeTelefon: (state, action) => {
			state.telefon = action.payload
		},
	},
})

// Action creators are generated for each case reducer function
export const { changeTelefon } = nomerSlice.actions

export default nomerSlice.reducer
