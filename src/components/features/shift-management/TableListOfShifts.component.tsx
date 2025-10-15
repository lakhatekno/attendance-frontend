import { ShiftInterface } from '@/model';
import { useShiftStore } from '@/store/shift.store';
import { formatTime } from '@/utils/date';
import { useEffect } from 'react';
import { BiTrash } from 'react-icons/bi';

export function TableListOfShifts() {
	const { showInactive, shiftData, inactiveShiftData, setShiftData, setInactiveShiftData, inactivateShift, activateShift } =
		useShiftStore();

	const handlerInactivateShift = (id: number) => {
		inactivateShift(id);
	};

	const handlerActivateShift = (id: number) => {
		activateShift(id);
	};
	useEffect(() => {
		setShiftData();
		setInactiveShiftData();
	}, []);

	return (
		<>
			<table className="table-fixed border-collapse w-full text-sm">
				<thead>
					<tr className="text-slate-900 font-medium text-left">
						<th className="border-b p-2">Nama</th>
						<th className="border-b p-2">Jam Mulai</th>
						<th className="border-b p-2">Jam Selesai</th>
						<th className="border-b p-2 w-32">Cross Day</th>
					</tr>
				</thead>
				<tbody>
					{shiftData.map((shift: ShiftInterface, index: number) => (
						<tr
							key={shift.id}
							className={`hover:bg-gray-200 text-xs border-b border-b-gray-200 ${index % 2 !== 0 ? 'bg-gray-100' : 'bg-white'}`}
						>
							<td className="p-2">{shift.name}</td>
							<td className="p-2">{formatTime(shift.shift_start)}</td>
							<td className="p-2">{formatTime(shift.shift_end)}</td>
							<td className="p-2">{shift.cross_day ? 'Ya' : 'Tidak'}</td>
							<td className="p-2 flex gap-6 text-slate-600">
								<button
									className="flex items-center gap-1 hover:text-red-500 transition-colors cursor-pointer"
									onClick={() => handlerInactivateShift(shift.id)}
								>
									<BiTrash /> Nonaktifkan
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			{/* Inactive Shift */}
			{showInactive && (
				<div className='mt-8 flex flex-col'>
					<p className='font-bold text-sm text-indigo-900'>Shift Nonaktif:</p>
					<table className="table-fixed border-collapse w-full text-sm">
						<thead>
							<tr className="text-slate-900 font-medium text-left">
								<th className="border-b p-2">Nama</th>
								<th className="border-b p-2">Jam Mulai</th>
								<th className="border-b p-2">Jam Selesai</th>
								<th className="border-b p-2 w-32">Cross Day</th>
							</tr>
						</thead>
						<tbody>
							{inactiveShiftData.map((inactiveShift: ShiftInterface, index: number) => (
								<tr
									key={inactiveShift.id}
									className={`hover:bg-gray-200 text-xs border-b border-b-gray-200 ${index % 2 !== 0 ? 'bg-gray-100' : 'bg-white'}`}
								>
									<td className="p-2">{inactiveShift.name}</td>
									<td className="p-2">{formatTime(inactiveShift.shift_start)}</td>
									<td className="p-2">{formatTime(inactiveShift.shift_end)}</td>
									<td className="p-2">{inactiveShift.cross_day ? 'Ya' : 'Tidak'}</td>
									<td className="p-2 flex gap-6 text-slate-600">
										<button
											className="flex items-center gap-1 hover:text-red-500 transition-colors cursor-pointer"
											onClick={() => handlerActivateShift(inactiveShift.id)}
										>
											<BiTrash /> Aktifkan
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</>
	);
}
