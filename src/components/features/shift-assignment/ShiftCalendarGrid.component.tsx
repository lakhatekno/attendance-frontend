import { User } from '@/model';
import { useShiftManagementStore } from '@/store/shiftManagement.store';
import { useEffect, useMemo } from 'react';
import clsx from 'clsx';

export default function ShiftCalendarGrid() {
	const { employees, setRetrievedEmployees, assignments, setRetrievedAssignments, setActiveShifts, activeMonth, handleGridClick, getShiftColor } = useShiftManagementStore();

	const daysInMonth = useMemo(() => {
		const year = activeMonth.getFullYear();
		const month = activeMonth.getMonth();
		return Array.from({ length: new Date(year, month + 1, 0).getDate() }, (_, i) => i + 1);
	}, [activeMonth]);

	const populateAssignments = async () => {
		setRetrievedEmployees();
		setRetrievedAssignments();
		setActiveShifts();
		
	}

	useEffect(() => {
		populateAssignments();

	}, []);
	return (
		<div className="overflow-auto border">
			<table className="w-full table-fixed border-collapse text-sm">
				<thead className="sticky top-0 bg-indigo-100 z-10">
					<tr>
						<th className="sticky left-0 p-2 border-b border-b-black bg-indigo-100 w-20 text-left">ID</th>
						<th className="sticky left-20 p-2 border-b border-b-black bg-indigo-100 w-36 text-left">Nama</th>
						{daysInMonth.map((day) => (
							<th
								key={day}
								className="p-2 text-center border-l w-12"
							>
								{day}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{employees.map((emp: User) => (
						<tr key={emp.id}>
							<td className="sticky left-0 border-b border-b-black overflow-ellipsis bg-indigo-50 p-2 w-20">{emp.id}</td>
							<td className="sticky left-20 border-b border-b-black overflow-ellipsis bg-indigo-50 p-2 w-36">{emp.name}</td>

							{daysInMonth.map((day) => {
								const date = new Date(activeMonth.getFullYear(), activeMonth.getMonth(), day);
								const dateKey = date.toISOString().split('T')[0];
								const cellKey = `${emp.id}-${dateKey}`;
								let shiftColor: string;
								let shiftName: string;
								
                const assignment = assignments[cellKey];

								if (assignment) {
									shiftColor = getShiftColor(assignment.shift_id);
									shiftName = assignment.shift_name;
								} else {
									shiftColor = 'bg-white';
									shiftName = '-';
								}

								return (
									<td
										key={cellKey}
										className={clsx(
											'border text-center text-xs cursor-pointer select-none transition-all',
											shiftColor
										)}
										onClick={() => handleGridClick(emp.id, date)}
									>
										{shiftName}
									</td>
								);
							})}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
