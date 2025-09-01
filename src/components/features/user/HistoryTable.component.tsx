import { IndividualAttendanceLog } from "@/model";

interface HistoryTableProps {
  data: IndividualAttendanceLog[] | null;
}

export default function HistoryTable({data}: HistoryTableProps) {
	return (
		<section className="bg-white rounded-lg p-4 flex flex-col gap-4 shadow-md">
			<h2 className="font-bold text-lg text-indigo-900">Riwayat Check In/Out</h2>
      {data ? (
        <table className="">
          <thead className="border-b border-b-indigo-900">
            <th className="text-left py-2">Tanggal</th>
            <th className="text-left py-2">In/Out</th>
            <th className="text-left py-2">Status</th>
          </thead>
          <tbody>
            {data.length > 0 && (
              data.map((log, index) => (
                <tr key={index} className="bg-gray-100">
                  <td className="py-2">1 Sep 2025</td>
                  <td className="py-2">Out</td>
                  <td className="py-2">On Time</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      ) : (
        <p className="text-center">Belum ada catatan</p>
      )}
		</section>
	);
}
