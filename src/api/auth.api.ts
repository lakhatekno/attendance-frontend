import api from './axios';
import { Login } from '@/model';

export async function login(data: Login): Promise<any> {
	const response = await api.post('/auth/login', {
		username: data.username,
		password: data.password,
	});
	return response.data;
}

export async function logout(token: string): Promise<any> {
	const response = await api.get('/auth/logout', {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

  return response.data;
}
