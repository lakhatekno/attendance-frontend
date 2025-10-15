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

export async function getInactiveShift() {
	const token = AuthStore.getState().accessToken;
	const response = await api.get('/shifts/inactive', {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	return response.data;
}

export async function createShift(data: any) {
	const token = AuthStore.getState().accessToken;
	const response = await api.post('/shifts', data, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	return response.data;
}

export async function inactivateShift(id: number) {
	const token = AuthStore.getState().accessToken;
	const response = await api.put('/shifts/inactivate-shift', {
		id: id,
	}, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	});

	return response.status;
}

export async function activateShift(id: number) {
	const token = AuthStore.getState().accessToken;
	const response = await api.put('/shifts/activate-shift', {
		id: id,
	}, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	});

	return response.status;
}