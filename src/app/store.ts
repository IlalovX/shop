import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from '../features/authSlice'
import CounterReducer from '../features/counterSlice'
import NomerReducer from '../features/nomerSlice'
export const store = configureStore({
	reducer: {
		nukus: CounterReducer,
		nomer: NomerReducer,
		auth: AuthReducer,
	},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
