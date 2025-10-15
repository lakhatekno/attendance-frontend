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
  openModal: boolean;
  message: { error: boolean; message: string };
  setOpenModal: () => void;
  setShiftData: () => void;
  createShift: (data: ShiftBody) => void;
}