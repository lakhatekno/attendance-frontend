import api from './axios';
import { Login } from '@/model';

export async function login(data: Login): Promise<any> {
	const response = await api.post('/login', {
		username: data.username,
		password: data.password,
	});
	return response.data;
}
