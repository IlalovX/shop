import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { $host } from '../services/interceptor'

interface LoginData {
	login: string
	password: string
}

export const fetchlogin = createAsyncThunk('login', async (data: LoginData) => {
	const res = await $host.post('/users/login', data)
	localStorage.setItem('token', res.data.token)
	return res.data
})

interface RegisterData {
	firstName: string
	lastName: string
	login: string
	password: string
}

export const register = createAsyncThunk(
	'register',
	async (data: RegisterData) => {
		const res = await axios.post('http://localhost:3004/users/register', data)
		return res.data
	}
)

interface State {
	token: string | null
	loading: boolean
	error: string | null
}
const initialState: State = {
	token: null,
	loading: false,
	error: null,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},

	extraReducers: builder => {
		builder
			.addCase(fetchlogin.pending, state => {
				state.loading = true
			})
			.addCase(fetchlogin.fulfilled, (state, action) => {
				state.loading = false
				state.token = action.payload.token
			})
			.addCase(fetchlogin.rejected, state => {
				state.loading = false
				console.log('error login')
			})
			.addCase(register.pending, state => {
				state.loading = true
			})
			.addCase(register.fulfilled, (state, action) => {
				const navigate = useNavigate()
				state.loading = false
				state.token = action.payload.token
				navigate('/')
			})
			.addCase(register.rejected, state => {
				state.loading = false
				console.log('error register')
			})
	},
})

// export const {} = authSlice.actions

export default authSlice.reducer
