'use client';

import { useAttendanceLogStore } from '@/store/attendance-log.store';

import { LuFilter } from 'react-icons/lu';

export default function AttendanceLogFilter() {
	const { filters, setFilter } = useAttendanceLogStore();

	return (
			<div className="flex flex-wrap gap-4 mb-4 text-sm items-center">
				<div className="flex gap-2 items-center text-slate-900">
					<LuFilter />
					<p className="font-semibold text-sm">Filter</p>
				</div>
				<input
					type="date"
					value={filters.date || ''}
					onChange={(e) => setFilter('date', e.target.value)}
					className="border-b border-b-indigo-900 focus:outline-none focus:border-b-2  p-2"
				/>
				<input
					type="text"
					placeholder="ID Pegawai"
					value={filters.identityNumber || ''}
					onChange={(e) => setFilter('identityNumber', e.target.value)}
					className="border-b border-b-indigo-900 focus:outline-none focus:border-b-2  p-2"
				/>
				<input
					type="text"
					placeholder="Nama"
					value={filters.name || ''}
					onChange={(e) => setFilter('name', e.target.value)}
					className="border-b border-b-indigo-900 focus:outline-none focus:border-b-2  p-2"
				/>
				<select
					value={filters.category || ''}
					onChange={(e) => setFilter('category', e.target.value || undefined)}
					className="border-b border-b-indigo-900 focus:outline-none focus:border-b-2  p-2"
				>
					<option value="">Check-In & Check-Out</option>
					<option value="check-in">Check-In</option>
					<option value="check-out">Check-Out</option>
				</select>
				<select
					value={filters.status || ''}
					onChange={(e) => setFilter('status', e.target.value || undefined)}
					className="border-b border-b-indigo-900 focus:outline-none focus:border-b-2  p-2"
				>
					<option value="">Semua Status</option>
					<option value="ontime">On Time</option>
					<option value="late">Late</option>
					<option value="early">Early</option>
				</select>
			</div>
	);
}
