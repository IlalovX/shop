import { Route, Routes } from 'react-router-dom'
import { PATH } from '../const/path'
import About from '../pages/about/About'
import Auth from '../pages/auth/Auth'
import Home from '../pages/home/Home'
import ListItem from '../pages/list-item/ListItem'
import List from '../pages/list/List'
import Profile from '../pages/profile/Profile'

function PathRoutes() {
	return (
		<Routes>
			<Route path={PATH.HOME} element={<Home />} />
			<Route path={PATH.ABOUT} element={<About />} />
			<Route path={PATH.PROFILE} element={<Profile />} />
			<Route path={PATH.LIST} element={<List />} />
			<Route path={PATH.ITEM} element={<ListItem />} />

			<Route path={PATH.AUTH} element={<Auth />} />
		</Routes>
	)
}

export default PathRoutes
