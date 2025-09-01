import { AttendanceLogState } from '@/model';
import { create } from 'zustand';

export const useAttendanceLogStore = create<AttendanceLogState>((set, get) => ({
	logs: [],
	filters: {},
	setLogs: (logs) => set({ logs: logs, filteredLogs: logs }),
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
				(!filters.identityNumber || log.identityNumber.includes(filters.identityNumber)) &&
				(!filters.name || log.name.toLowerCase().includes(filters.name.toLowerCase())) &&
				(!filters.category || log.category === filters.category) &&
				(!filters.status || log.status === filters.status)
			);
		});
    set({filteredLogs: filtered});
	},
	manualRecordModal: false,
	setManualRecordModal: () => set({manualRecordModal: !get().manualRecordModal}),
}));
