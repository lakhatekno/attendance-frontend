import { Employee, ShiftCalendarGridProps } from '@/model';
import { useShiftManagementStore } from '@/store/shiftManagement.store';
import { useEffect, useMemo } from 'react';
import clsx from 'clsx';
import { getAllAssignment } from '@/api/shiftManagement.api';

export default function ShiftCalendarGrid({ employees }: ShiftCalendarGridProps) {
	const { assignments, setRetrievedAssignments, activeMonth, handleGridClick, getShiftColor } = useShiftManagementStore();

	const daysInMonth = useMemo(() => {
		const year = activeMonth.getFullYear();
		const month = activeMonth.getMonth();
		return Array.from({ length: new Date(year, month + 1, 0).getDate() }, (_, i) => i + 1);
	}, [activeMonth]);

	const populateAssignments = async () => {
		const currentDate = new Date();
		const fetchedAssignments = await getAllAssignment({
			month: currentDate.getMonth(),
			year: currentDate.getFullYear(),
		});

		setRetrievedAssignments(fetchedAssignments)
		
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
					{employees.map((emp) => (
						<tr key={emp.id}>
							<td className="sticky left-0 border-b border-b-black overflow-ellipsis bg-indigo-50 p-2 w-20">{emp.id}</td>
							<td className="sticky left-20 border-b border-b-black overflow-ellipsis bg-indigo-50 p-2 w-36">{emp.name}</td>

							{daysInMonth.map((day) => {
								const date = new Date(activeMonth.getFullYear(), activeMonth.getMonth(), day);
								const dateKey = date.toISOString().split('T')[0];
                console.log('date', date)
								const cellKey = `${emp.id}-${dateKey}`;
								
                const assignment = assignments[cellKey];
								const shiftColor = getShiftColor(assignment?.shift_id);

								return (
									<td
										key={cellKey}
										className={clsx(
											'border text-center text-xs cursor-pointer select-none transition-all',
											shiftColor
										)}
										onClick={() => handleGridClick(emp.id, date)}
									>
										{assignment?.shift_name || '-'}
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
