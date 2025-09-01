import { TodayAttendance } from "@/model";

interface AttendanceStatusProps {
  todayData: TodayAttendance | null
}


export default function AttendaceStatus({todayData}: AttendanceStatusProps) {
	return (
		<section className="bg-white rounded-lg p-4 flex flex-col gap-4 shadow-md">
			<h2 className="font-bold text-lg text-indigo-900">Kehadiran hari ini:</h2>
			<table className="table-auto w-full">
				<tbody>
					<tr className="border-b border-b-indigo-900">
						<td className="py-2">Check In</td>
						<td className="py-2">
							<p className="text-sm font-bold text-slate-900 capitalize">07.38</p>
						</td>
						<td className="py-2">
							<p className="px-4 py-1 w-fit h-fit rounded-full text-sm bg-red-500 text-white capitalize">Terlambat</p>
						</td>
					</tr>
					<tr>
						<td className="py-2">Check Out</td>
						<td className="py-2">
							<p className="text-sm font-bold text-slate-900 capitalize">16.00</p>
						</td>
						<td className="py-2">
							<p className="px-4 py-1 w-fit h-fit rounded-full text-sm bg-green-500 text-white capitalize">On Time</p>
						</td>
					</tr>
				</tbody>
			</table>
		</section>
	);
}
