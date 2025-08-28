import AttendanceLogFilter from '@/components/features/admin-dashboard/AttendanceLogFilter.component';
import LogTable from '@/components/features/admin-dashboard/LogTable.component';

import { TbNotes } from 'react-icons/tb';
import { RiFileExcel2Line } from 'react-icons/ri';

export default function AdminPage() {
	return (
		<div>
			<section className="bg-white shadow rounded-xl p-8">
				<div className="flex gap-4 items-center mb-8 text-indigo-900">
					<TbNotes className="scale-150" />
					<h2 className="font-bold text-xl">Log Check In & Check Out</h2>
				</div>
				<div className="flex justify-between">
					<AttendanceLogFilter />
          <button className='bg-green-600 flex gap-2 font-medium h-fit w-fit px-4 py-2 items-center rounded-lg text-sm text-slate-100' disabled>
					  <RiFileExcel2Line className='scale-125' />
            Ekspor Excel
          </button>
				</div>
				<LogTable />
			</section>
		</div>
	);
}
