import { Employee, ShiftCalendarGridProps } from '@/model';
import { useShiftManagementStore } from '@/store/shiftManagement.store';
import { useMemo } from 'react';
import clsx from 'clsx';

export default function ShiftCalendarGrid({ employees }: ShiftCalendarGridProps) {
	const { assignments, activeMonth, handleGridClick, getShiftColor } = useShiftManagementStore();

	const daysInMonth = useMemo(() => {
		const year = activeMonth.getFullYear();
		const month = activeMonth.getMonth();
		return Array.from({ length: new Date(year, month + 1, 0).getDate() }, (_, i) => i + 1);
	}, [activeMonth]);
	return (
		<div className="overflow-auto border">
			<table className="w-full table-fixed border-collapse text-sm">
				<thead className="sticky top-0 bg-gray-100 z-10">
					<tr>
						<th className="sticky left-0 bg-gray-100 z-20 p-2 text-left">ID</th>
						<th className="sticky left-20 bg-gray-100 z-20 p-2 text-left">Nama</th>
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
							<td className="sticky left-0 bg-white border p-2 z-10">{emp.id}</td>
							<td className="sticky left-20 bg-white border p-2 z-10">{emp.name}</td>

							{daysInMonth.map((day) => {
								const date = new Date(activeMonth.getFullYear(), activeMonth.getMonth(), day);
								const dateKey = date.toISOString().split('T')[0];
								const key = `${emp.id}-${dateKey}`;

								console.log('key table', key);
								
                const assignment = assignments[key];
								const shiftColor = getShiftColor(assignment?.shift_id);

								return (
									<td
										key={key}
										className={clsx(
											'border text-center hover:bg-red-400 text-xs w-12 cursor-pointer select-none transition-all',
											shiftColor
										)}
										onClick={() => handleGridClick(emp.id, new Date(2025, 10, day))}
									>
										{assignment?.shift_name || ''}
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
