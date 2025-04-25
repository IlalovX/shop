import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../../features/authSlice'
import styles from './Register.module.scss'

function Register() {
	const dispatch = useDispatch()
	const [first, setFirst] = useState('')
	const [last, setLast] = useState('')
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsLoading(true)
		try {
			await dispatch(
				register({
					firstName: first,
					lastName: last,
					login: login,
					password: password,
				})
			)
		} catch (error) {
			console.log(error)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div className={styles.card}>
			<h1>Регистрация</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor='firstname'>
					<span>Имя</span>
					<input
						type='text'
						id='firstname'
						value={first}
						onChange={e => setFirst(e.target.value)}
					/>
				</label>
				<label htmlFor='lastname'>
					<span>Фамилия</span>
					<input
						type='text'
						id='lastname'
						value={last}
						onChange={e => setLast(e.target.value)}
					/>
				</label>
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
					<button
						className={styles.register}
						type='submit'
						disabled={isLoading}
					>
						{isLoading ? 'Загрузка...' : 'Регистрация'}
					</button>
				</div>
			</form>
		</div>
	)
}

export default Register
