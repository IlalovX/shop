import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchlogin } from '../../features/authSlice'
import styles from './Login.module.scss'

function Login({ setIsShowRegister }: { setIsShowRegister: () => void }) {
	const dispatch = useDispatch()
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsLoading(true)
		try {
			await dispatch(fetchlogin({ login, password }))
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div className={styles.card}>
			<h1>Войти</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor='login'>
					<span>Логин</span>
					<input
						type='text'
						id='login'
						value={login}
						onChange={e => setLogin(e.target.value)}
					/>
				</label>
				<label htmlFor='password'>
					<span>Пароль</span>
					<input
						type='password'
						id='password'
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
				</label>
				<div>
					<button className={styles.login} type='submit' disabled={isLoading}>
						{isLoading ? 'Загрузка...' : 'Войти'}
					</button>
					<button
						className={styles.register}
						type='button'
						onClick={setIsShowRegister}
					>
						Регистрация
					</button>
				</div>
			</form>
		</div>
	)
}

export default Login
