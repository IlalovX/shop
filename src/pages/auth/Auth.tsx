import { useState } from 'react'
import Login from '../../components/login/Login'
import Register from '../../components/register/Register'
import styles from './Auth.module.scss'
function Auth() {
	const [isShowRegister, setIsShowRegister] = useState<boolean>(false)

	const handleChangeForm = () => {
		setIsShowRegister(true)
	}

	return (
		<div className={styles.auth}>
			{isShowRegister ? (
				<Register />
			) : (
				<Login setIsShowRegister={handleChangeForm} />
			)}
		</div>
	)
}

export default Auth
