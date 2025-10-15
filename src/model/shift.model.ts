export interface ShiftInterface {
  id: number;
  name: string;
  shift_start: string;
  shift_end: string;
  cross_day: boolean;
  active: boolean;
}

export interface ShiftBody {
  name: string;
  shiftStart: string;
  shiftEnd: string;
  crossDay: boolean;
}

export interface ShiftState {
  shiftData: ShiftInterface[];
  inactiveShiftData: ShiftInterface[];
  openModal: boolean;
  showInactive: boolean;
  message: { error: boolean; message: string };
  setOpenModal: () => void;
  setShowInactive: () => void;
  setShiftData: () => void;
  setInactiveShiftData: () => void;
  createShift: (data: ShiftBody) => void;
  inactivateShift: (id: number) => void;
  activateShift: (id: number) => void;
}