import { createShift, getAllActiveShift, inactivateShift } from '@/api/shift.api';
import { ShiftBody, ShiftState } from '@/model';
import { create } from 'zustand';

export const useShiftStore = create<ShiftState>((set, get) => ({
	openModal: false,
	setOpenModal: () => set({ openModal: !get().openModal }),
	shiftData: [],
	message: { error: false, message: '' },
	setShiftData: async () => {
		try {
			const response = await getAllActiveShift();
			set({ shiftData: response });
		} catch (error) {
			console.log(error);
		}
	},
	createShift: async (data: ShiftBody) => {
		try {
			await createShift(data);
			set({ message: { error: false, message: 'Shift berhasil ditambahkan' } });
      get().setOpenModal();
			get().setShiftData();
		} catch (error: any) {
			set({ message: { error: true, message: error.response?.data?.message || 'Gagal menambahkan shift' } });
		}
	},
  inactivateShift: async (id: number) => {
    try {
      await inactivateShift(id);
      get().setShiftData();
    } catch (error: any) {
      console.log(error)
    }
  }
}));
