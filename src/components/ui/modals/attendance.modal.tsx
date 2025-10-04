'use client';

import { AttendanceRecord } from '@/model';
import { useAttendanceLogOperationsStore } from '@/store/attendance-log.store';
import { useState } from 'react';

export default function AttendanceModal() {
	const { setManualRecordModal } = useAttendanceLogOperationsStore();

	const [form, setForm] = useState<AttendanceRecord>({
		identityNumber: '',
		date: '',
		recordTime: '',
		category: 'checkin',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setForm((prev: AttendanceRecord) => ({ ...prev, [name]: value }));
	};

	return (
		<>
			<form className="flex flex-col gap-6">
				<select
					name="identityNumber"
					value={form.identityNumber}
					onChange={handleChange}
					className="border-b border-b-indigo-900 focus:outline-none focus:border-b-2 p-2 w-full"
				>
					<option value="010925">Deswara</option>
					<option value="31082025">Valen</option>
				</select>
				<input
					type="date"
					name="date"
					value={form.date}
					onChange={handleChange}
					className="border-b border-b-indigo-900 focus:outline-none focus:border-b-2  p-2 w-full"
				/>
				<input
					type="time"
					name="recordTime"
					value={form.date}
					onChange={handleChange}
					className="border-b border-b-indigo-900 focus:outline-none focus:border-b-2  p-2 w-full"
				/>
				<select
					name="category"
					value={form.category}
					onChange={handleChange}
					className="border-b border-b-indigo-900 focus:outline-none focus:border-b-2 p-2 w-full"
				>
					<option value="check-in">Check In</option>
					<option value="check-out">Check Out</option>
				</select>
			</form>
			<div className="flex justify-end gap-4 mt-8">
				<button
					onClick={setManualRecordModal}
					className="text-gray-600 hover:text-gray-800 font-semibold cursor-pointer"
				>
					Batal
				</button>
				<button
					onClick={() => {}}
					type="submit"
					className="px-4 py-2 bg-green-600 font-semibold text-slate-100 rounded-lg cursor-pointer hover:bg-green-700"
				>
					Simpan
				</button>
			</div>
		</>
	);
}
