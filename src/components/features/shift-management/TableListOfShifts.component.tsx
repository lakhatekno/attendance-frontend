import { getAllActiveShift } from "@/api/shift.api";
import { ShiftInterface } from "@/model";
import { formatTime } from "@/utils/date";
import { useEffect, useState } from "react";
import { BiPencil, BiTrash } from "react-icons/bi";

export function TableListOfShifts() {
  const [shifts, setShifts] = useState<ShiftInterface[]>([])

  useEffect(() => {
    getAllShifts();
  }, []);

  const getAllShifts = async () => {
    const data = await getAllActiveShift();
    setShifts(data);
    console.log(data)
  }

	return (
		<table className="table-auto border-collapse w-full text-sm">
			<thead>
				<tr className="text-slate-900 font-medium text-left">
					<th className="border-b p-2">Nama</th>
					<th className="border-b p-2">Jam Mulai</th>
					<th className="border-b p-2">Jam Selesai</th>
					<th className="border-b p-2 w-32">Cross Day</th>
				</tr>
			</thead>
			<tbody>
				{shifts.map((user, index) => (
					<tr
						key={user.id}
						className={`hover:bg-gray-200 text-xs border-b border-b-gray-200 ${
							index % 2 !== 0 ? 'bg-gray-100' : 'bg-white'
						}`}
					>
						<td className="p-2">{user.name}</td>
						<td className="p-2">{formatTime(user.shift_start)}</td>
						<td className="p-2">{formatTime(user.shift_end)}</td>
						<td className="p-2">{user.cross_day ? 'Ya' : 'Tidak'}</td>
						<td className="p-2 flex gap-6 text-slate-600">
							<button
								className="flex items-center gap-1 hover:text-orange-500 transition-colors cursor-pointer"
								onClick={() => {}}
							>
								<BiPencil /> Edit
							</button>
							<button
								className="flex items-center gap-1 hover:text-red-500 transition-colors cursor-pointer"
								onClick={() => {}}
							>
								<BiTrash /> Nonaktifkan
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
