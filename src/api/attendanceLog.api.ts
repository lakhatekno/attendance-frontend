import { AuthStore } from '@/store/auth.store';
import api from './axios';

export async function getAllAttendanceLogs() {
	const token = AuthStore.getState().accessToken;
	const response = await api.get('/attendance-logs', {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	return response.data;
}
