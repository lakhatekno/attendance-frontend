import { AuthStore } from '@/store/auth.store';
import api from './axios';
import { AttendanceLog } from '@/model';

export async function getAllAttendanceLogs() {
	const token = AuthStore.getState().accessToken;
	const response = await api.get('/attendance-logs', {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	return response.data;
}

export async function updateAttendanceLog(data: AttendanceLog) {
  const token = AuthStore.getState().accessToken;
  const response = await api.put('/attendance-logs', {
    data
  },
  {
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  });

  return response.data;
}
