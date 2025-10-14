import { AuthStore } from '@/store/auth.store';
import api from './axios';

export async function getAllActiveShift() {
	const token = AuthStore.getState().accessToken;
	const response = await api.get('/shifts', {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

  return response.data;
}
