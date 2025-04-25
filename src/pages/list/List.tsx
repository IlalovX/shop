import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { getUsers } from '../../services/api/users'
import { IUser } from '../../types/user'
import styles from './List.module.scss'
function List() {
	const users = getUsers()
	const [data, setData] = useState<IUser[]>([])

	useEffect(() => {
		users.then(data => setData(data))
	}, [users])

	return (
		<div className={styles.cards_container}>
			{data.map(item => (
				<div className={styles.card}>
					<h1>{item.name}</h1>
					<h2>{item.email}</h2>
					<NavLink to={`/product/${item.id}`}>more...</NavLink>
				</div>
			))}
		</div>
	)
}

export default List
