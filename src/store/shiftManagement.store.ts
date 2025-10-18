import { Assignment, ShiftManagementState } from '@/model';
import { create } from 'zustand';

export const useShiftManagementStore = create<ShiftManagementState>((set, get) => ({
	assignments: {},
	activeMonth: new Date(),
	activeShifts: [
		{ id: 's1', name: 'Pagi', color: 'bg-yellow-100' },
		{ id: 's2', name: 'Sore', color: 'bg-orange-100' },
		{ id: 's3', name: 'Malam', color: 'bg-blue-100' },
	],
	batchBuffer: {},
	isBacthMode: false,
	isAssigning: false,

	getShiftColor: (shiftId) => {
		const shift = get().activeShifts.find((s) => s.id === shiftId);
		return shift ? shift.color : 'bg-white';
	},

	handleGridClick: (empId, day) => {
		const { assignments, activeShifts, isBacthMode, batchBuffer } = get();

		const date = day.toISOString().split('T')[0];
    console.log('handler date', date)

		const key = `${empId}-${date}`;
		const current = assignments[key];

		const currentIndex = current ? activeShifts.findIndex((s) => s.id === current.shift_id) : -1;

		const nextShift = currentIndex === -1 ? activeShifts[0] : activeShifts[currentIndex + 1] || undefined;

		const updatedAssignment: Assignment = {
			emp_id: empId,
			date: date,
			shift_id: nextShift?.id,
			shift_name: nextShift?.name,
		};

		if (!nextShift) {
			delete assignments[key];
			if (isBacthMode) delete batchBuffer[key];
		} else {
			assignments[key] = updatedAssignment;
			if (isBacthMode) assignments[key] = updatedAssignment;
		}

		set({ assignments: { ...assignments }, batchBuffer: { ...batchBuffer } });
	},

	addShiftModal: false,
	setAddShiftModal: () => {
		set({ addShiftModal: !get().addShiftModal });
	},

	setIsAssigning: () => set({ isAssigning: !get().isAssigning }),

}));
