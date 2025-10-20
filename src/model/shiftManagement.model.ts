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
  setRetrievedEmployees: () => void;
  setRetrievedAssignments: () => void;
  assignments: Record<string, Assignment>;
  retrievedAssignments: Record<string, Assignment>;
  activeMonth: Date;
  activeShifts: { id: string; name: string; color: string;}[];
  setActiveShifts: () => void;
  batchBuffer: Record<string, Assignment>;
  isBacthMode: boolean;
  isAssigning: boolean;
  isPauseAssigning: boolean;
  handleGridClick: (empId: string, day: Date) => void;
  getShiftColor: (shiftId: string) => string;
  addShiftModal: boolean;
  setAddShiftModal: () => void;
  setIsAssigning: () => void;
  handlerPauseAssigning: () => void;
  handlerCancelAssigning: () => void;
  submitAssignments: () => void; 
}