export type AttendanceCategory = 'checkin' | 'checkout';
export type AttendanceStatus = 'ontime' | 'late' | 'early' | 'early-leave' | 'late-checkout';

export interface AttendanceLog {
  date: string;
  shift_assignment: {
    user: {
      id: string,
      name: string,
    }
  }
  name: string;
  record: string;
  category: AttendanceCategory;
  status: AttendanceStatus;
}

export interface AttendanceLogState {
  logs: AttendanceLog[];
  filters: FilterState;
  error: { status: number, message: string } | null;
  setLogs: () => void;
  setFilter: (key: keyof FilterState, value: string | undefined) => void;
  filterLogs: () => void; 
  filteredLogs: AttendanceLog[]; 
  manualRecordModal: boolean;
  setManualRecordModal: () => void;
}

export interface FilterState {
  date?: string;
  id?: string;
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

export interface AttendanceRecord {
  identityNumber: string;
  date: string;
  recordTime: string;
  category: AttendanceCategory;
}