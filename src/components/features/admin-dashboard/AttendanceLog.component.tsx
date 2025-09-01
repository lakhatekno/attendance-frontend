import { MdOutlineNoteAdd } from 'react-icons/md';
import { TbNotes } from 'react-icons/tb';
import { RiFileExcel2Line } from 'react-icons/ri';
import AttendanceLogFilter from './AttendanceLogFilter.component';
import LogTable from './LogTable.component';
import BaseModal from '@/components/ui/modals/base.modal';
import { useAttendanceLogStore } from '@/store/attendance-log.store';
import AttendanceModal from '@/components/ui/modals/attendance.modal';

export default function AttendanceLog() {
	const { manualRecordModal, setManualRecordModal } = useAttendanceLogStore();
	return (
		<section className="bg-white shadow rounded-xl p-8">
			{/* Section Header */}
			<div className="flex gap-4 items-center mb-8 text-indigo-900">
				<TbNotes className="scale-150" />
				<h2 className="font-bold text-xl">Log Check In & Check Out</h2>
				<button
					className="rounded-lg border border-indigo-900 bg-white hover:bg-indigo-900 px-4 py-2 w-fit h-fit text-indigo-900 hover:text-white transition-all font-semibold cursor-pointer flex gap-2 items-center text-xs"
					onClick={setManualRecordModal}
				>
					<MdOutlineNoteAdd />
					Catat Kehadiran Manual
				</button>
			</div>

			{/* Filter and Export button */}
			<div className="flex justify-between">
				<AttendanceLogFilter />
				<button
					className="bg-green-600 flex gap-2 font-medium h-fit w-fit px-4 py-2 items-center rounded-lg text-sm text-slate-100"
					disabled
				>
					<RiFileExcel2Line className="scale-125" />
					Ekspor Excel
				</button>
			</div>

			{/* Table */}
			<LogTable />
			<BaseModal
				title="Record Manual"
				open={manualRecordModal}
				onClose={setManualRecordModal}
			>
        <div></div>
        <AttendanceModal />
      </BaseModal>
		</section>
	);
}
