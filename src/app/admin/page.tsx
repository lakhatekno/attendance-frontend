'use client'

import AttendanceLog from '@/components/features/admin-dashboard/AttendanceLog.component';
import Clock from '@/components/features/admin-dashboard/Clock.component';

import { MdOutlineQrCodeScanner } from 'react-icons/md';

export default function AdminPage() {
	return (
		<div className="flex flex-col gap-8">
			{/* Top Section */}
			<section className="bg-white shadow rounded-xl p-8">
				<Clock />

				{/* QR Button */}
				<button className="flex items-center gap-2 px-4 py-2 bg-indigo-900 text-white font-semibold rounded-lg mt-8">
					<MdOutlineQrCodeScanner />
					Buat QR
				</button>
			</section>
			{/* Attendance Log */}
			<AttendanceLog />
		</div>
	);
}
