import { ShiftManagementState } from "@/model";
import { create } from "zustand";

export const useShiftManagementStore = create<ShiftManagementState>((set, get) => ({
  addShiftModal: false,
  setAddShiftModal: () => {
    set({ addShiftModal: !get().addShiftModal })
  } 
}))