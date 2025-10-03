'use client';

import { useAttendanceLogStore } from '@/store/attendance-log.store';
import { formatDate, formatTime } from '@/utils/date';
import { useEffect } from 'react';

import { BiPencil } from 'react-icons/bi';

export default function LogTable() {
	const { setLogs, filteredLogs } = useAttendanceLogStore();

	useEffect(() => {
		setLogs();
	}, [setLogs]);

	if (!filteredLogs.length) {
		return <p className="text-gray-500 text-center">No attendance logs found.</p>;
	}

	return (
		<table className="table-fixed border-collapse w-full text-sm">
			<thead>
				<tr className="text-slate-900 font-medium text-left">
					<th className="border-b p-2">Tanggal</th>
					<th className="border-b p-2">ID Pegawai</th>
					<th className="border-b p-2">Nama</th>
					<th className="border-b p-2">Waktu</th>
					<th className="border-b p-2"></th>
					<th className="border-b p-2"></th>
					<th className="border-b p-2">Aksi</th>
				</tr>
			</thead>
			<tbody>
				{filteredLogs.map((log, index) => (
					<tr
						key={index}
						className={`hover:bg-gray-200 cursor-default text-xs border-b border-b-gray-200
            ${index % 2 !== 0 ? 'bg-gray-100' : 'bg-white'}`}
					>
						<td className="p-2">{formatDate(log.record)}</td>
						<td className="p-2">{log.shift_assignment.user.id}</td>
						<td className="p-2">{log.shift_assignment.user.name}</td>
						<td className="p-2">{formatTime(log.record)}</td>
						<td className="p-2 capitalize">{log.category}</td>
						<td className={`p-2 font-medium`}>
							<p
								className={`${
									log.status === 'ontime' ? 'bg-green-500' : 'bg-red-500'
								} rounded-full px-4 py-0.5 text-xs w-fit h-fit text-slate-100`}
							>
								{log.status}
							</p>
						</td>
						<td className="p-2 text-slate-600">
							<button
								className="flex gap-2 items-center text-xs cursor-pointer"
								disabled
							>
                <BiPencil className='' />
                Edit
              </button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
