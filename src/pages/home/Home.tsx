import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { decrement, increment } from '../../features/counterSlice'

function Home() {
	const count = useSelector((state: RootState) => state.nukus.value)
	const [inp, setInp] = useState('Jogn')
	console.log(inp)

	const dispatch = useDispatch()

	return (
		<div>
			<input type='text' value={inp} onChange={e => setInp(e.target.value)} />
			<div>
				<button
					aria-label='Increment value'
					onClick={() => dispatch(increment())}
				>
					Increment
				</button>
				<span>{count}</span>
				<button
					aria-label='Decrement value'
					onClick={() => dispatch(decrement())}
				>
					Decrement
				</button>
			</div>
		</div>
	)
}

export default Home
