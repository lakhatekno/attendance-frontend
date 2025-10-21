export enum Direction {
  'next',
  'prev',
}

export const monthName = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

export interface MonthSelectorState {
  currentMonth: number;
  currentYear: number;
  setCurrentMonth: (direction: Direction) => void;
  setCurrentYear: () => void;
  selectMonthYear: () => void;
}