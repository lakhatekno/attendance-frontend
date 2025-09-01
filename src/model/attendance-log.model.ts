export type AttendanceCategory = 'check-in' | 'check-out';
export type AttendanceStatus = 'ontime' | 'late' | 'early';

export interface AttendanceLog {
  date: string;
  identityNumber: string;
  name: string;
  recordTime: string;
  category: AttendanceCategory;
  status: AttendanceStatus;
}

export interface AttendanceLogState {
  logs: AttendanceLog[];
  filters: FilterState;
  setLogs: (logs: AttendanceLog[]) => void;
  setFilter: (key: keyof FilterState, value: string | undefined) => void;
  filterLogs: () => void; 
  filteredLogs: AttendanceLog[]; 
}

export interface FilterState {
  date?: string;
  identityNumber?: string;
  name?: string;
  category?: AttendanceCategory;
  status?: AttendanceStatus;
}

export interface TodayAttendance {
  date: string;
  recordTime: string;
  category: AttendanceCategory;
  status: AttendanceStatus;
}

export interface IndividualAttendanceLog {
  date: string;
  recordTime: string;
  category: AttendanceCategory;
  status: AttendanceStatus;
}