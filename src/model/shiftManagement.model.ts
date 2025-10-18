import { User } from "./user.model";

export interface Employee {
  id: string;
  name: string;
}

export interface ShiftCalendarGridProps {
  employees: Employee[];
}

export interface Assignment {
  emp_id: string;
  date: string;
  shift_id: string;
  shift_name: string;
}

export interface ShiftManagementState {
  employees: User[];
  setRetrievedEmployees: (data: User[]) => void;
  retrievedAssignments: any;
  setRetrievedAssignments: (data: any) => void;
  assignments: Record<string, Assignment>;
  activeMonth: Date;
  activeShifts: { id: string; name: string; color: string;}[];
  batchBuffer: Record<string, Assignment>;
  isBacthMode: boolean;
  isAssigning: boolean;
  handleGridClick: (empId: string, day: Date) => void;
  getShiftColor: (shiftId: string) => string;
  addShiftModal: boolean;
  setAddShiftModal: () => void;
  setIsAssigning: () => void;
  submitAssignments: () => void; 
}