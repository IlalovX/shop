// https://jsonplaceholder.typicode.com/users

import axios from 'axios'
import { $authHost } from '../interceptor'

export async function getUsers() {
	const res = await axios.get('https://jsonplaceholder.typicode.com/users')
	return res.data
}

export async function getUserDetail({ id }: { id: string }) {
	const res = await axios.get(
		`https://jsonplaceholder.typicode.com/users/${id}`
	)
	return res.data
}


export async function getUser() {
	const res = await $authHost.get('/')
	return res.data
}