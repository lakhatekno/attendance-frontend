import { getAllActiveShift } from '@/api/shift.api';
import { getAllAssignment } from '@/api/shiftManagement.api';
import { getAllUsers } from '@/api/user.api';
import { Assignment, ShiftManagementState } from '@/model';
import { create } from 'zustand';

export const useShiftManagementStore = create<ShiftManagementState>((set, get) => ({
	employees: [],
	assignments: {},
	retrievedAssignments: {},
	activeMonth: new Date(),
	activeShifts: [],
	batchBuffer: {},
	isBacthMode: false,
	isAssigning: false,

	getShiftColor: (shiftId) => {
		const shiftIndex = get().activeShifts.findIndex((s) => s.id === shiftId);
		return shiftBackgroundColor[shiftIndex] || 'bg-white';
	},

	handleGridClick: (empId, day) => {
		const { isAssigning } = get();
		
		if (!isAssigning) {
			return;
		}

		const { assignments, activeShifts, isBacthMode, batchBuffer } = get();

		const date = day.toISOString().split('T')[0];

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

	setRetrievedAssignments: async () => {
		const currentDate = new Date();
		try {
			const fetchedAssignments = await getAllAssignment({
				month: currentDate.getMonth(),
				year: currentDate.getFullYear(),
			});
			set({ 
				assignments: { ...fetchedAssignments }, 
				retrievedAssignments: { ...fetchedAssignments },
			});
		} catch (error) {
			console.log(error);
		}
	},

	setRetrievedEmployees: async () => {
		try {
			const response = await getAllUsers();
			set({ employees: response });
		} catch (error) {
			console.log(error);
		}
	},
	
	setActiveShifts: async () => {
			try {
				const response = await getAllActiveShift();
				set({ activeShifts: response });
			} catch (error) {
				console.log(error);
			}
		},

	setIsAssigning: () => set({ isAssigning: !get().isAssigning }),

	handlerCancelAssigning: () => {
		set({ isAssigning: false, assignments: get().retrievedAssignments });
		console.log(get().assignments);
		console.log(get().retrievedAssignments);
	},
	submitAssignments: async () => {},

}));

const shiftBackgroundColor = [
	'bg-green-300',
	'bg-blue-300',
	'bg-yellow-300',
	'bg-purple-300',
	'bg-indigo-300',
	'bg-red-300',
	'bg-gray-300',
];
