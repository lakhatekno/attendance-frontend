import { getAllAttendanceLogs } from '@/api/attendanceLog.api';
import { AttendanceLogState } from '@/model';
import { create } from 'zustand';

export const useAttendanceLogStore = create<AttendanceLogState>((set, get) => ({
	logs: [],
	filters: {},
  error: null,
	setLogs: async () => {
    try {
      const logs = await getAllAttendanceLogs();
      set({ logs: logs, filteredLogs: logs });
    } catch (error: any) {
      console.log(error.status);
    }
  },
	setFilter: (key, value) => {
		set((state) => ({
			filters: {
				...state.filters,
				[key]: value,
			},
		}));

    get().filterLogs();
	},
  filteredLogs: [],
	filterLogs: () => {
		const { logs, filters } = get();
		const filtered =  logs.filter((log) => {
			return (
				(!filters.date || log.date === filters.date) &&
				(!filters.id || log.shift_assignment.user.id.includes(filters.id)) &&
				(!filters.name || log.shift_assignment.user.name.toLowerCase().includes(filters.name.toLowerCase())) &&
				(!filters.category || log.category === filters.category) &&
				(!filters.status || log.status === filters.status)
			);
		});
    set({filteredLogs: filtered});
	},
	manualRecordModal: false,
	setManualRecordModal: () => set({manualRecordModal: !get().manualRecordModal}),
}));
