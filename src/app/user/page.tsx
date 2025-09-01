'use client'

import Clock from '@/components/features/admin-dashboard/Clock.component';
import AttendaceStatus from '@/components/features/user/AttendanceStatus.component';
import HistoryTable from '@/components/features/user/HistoryTable.component';

export default function UserPage() {
	return (
		<div className="flex flex-col gap-4">
			{/* Greeting */}
			<section className="bg-white rounded-lg p-4 md:p-8 flex flex-col gap-4 shadow-md">
				<Clock />

				{/* Attendance button */}
				<button
					className="bg-green-600 disabled:bg-gray-400 w-full py-2 rounded-lg text-white font-bold"
					disabled
				>
					Anda sudah check out
				</button>
			</section>

			{/* Today checkin/out status */}
			<AttendaceStatus todayData={null} />

			{/* History check in */}
			<HistoryTable data={null} />
		</div>
	);
}
