import { activateShift, createShift, getAllActiveShift, getInactiveShift, inactivateShift } from '@/api/shift.api';
import { ShiftBody, ShiftState } from '@/model';
import { create } from 'zustand';

export const useShiftStore = create<ShiftState>((set, get) => ({
	openModal: false,
  showInactive: false,
	setOpenModal: () => set({ openModal: !get().openModal }),
  setShowInactive: () => set({ showInactive: !get().showInactive }),
	shiftData: [],
  inactiveShiftData: [],
	message: { error: false, message: '' },
	setShiftData: async () => {
		try {
			const response = await getAllActiveShift();
			set({ shiftData: response });
		} catch (error) {
			console.log(error);
		}
	},
  setInactiveShiftData: async () => {
    try {
      const response = await getInactiveShift();
      set({ inactiveShiftData: response });
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
      if (get().showInactive) {
        get().setInactiveShiftData();
      }
    } catch (error: any) {
      console.log(error)
    }
  },
  activateShift: async (id: number) => {
    try {
      await activateShift(id);
      get().setShiftData();
      get().setInactiveShiftData();
    } catch (error: any) {
      console.log(error)
    }
  },
}));
