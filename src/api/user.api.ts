import { AuthStore } from '@/store/auth.store';
import api from './axios';
import { UserCreate } from '@/model';

export async function getAllUsers() {
	const token = AuthStore.getState().accessToken;
	const response = await api.get('/users', {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	return response.data;
}

export async function createUser(data: UserCreate) {
	const token = AuthStore.getState().accessToken;
	const response = await api.post(
		'/users',
    {
      ...(data.id ? { id: data.id } : {}),
      email: data.email,
      username: data.username,
      name: data.name,
      password: data.password,
      role: data.role,
    },
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	);

  return response.data;
}
