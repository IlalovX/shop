import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'

function Profile() {
	const nomer = useSelector((state: RootState) => state.nomer.telefon)

	return <div>mening nomerim : {nomer}</div>
}

export default Profile
