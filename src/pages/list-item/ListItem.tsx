import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getUserDetail } from '../../services/api/users'
import { IUser } from '../../types/user'
import styles from './ListItem.module.scss'

function ListItem() {
	const { id } = useParams()

	
	const [item, setItem] = useState<IUser>({})
	const getUser = getUserDetail({ id: id ? id : '' })

	useEffect(() => {
		getUser.then(data => setItem(data))
	}, [getUser])

	return (
		<div className={styles.item}>
			<header>
				<div>
					<div className={styles.name_container}>
						<h4>Название : {item?.name}</h4> <span>{item?.email}</span>
					</div>
				</div>
			</header>
		</div>
	)
}

export default ListItem
