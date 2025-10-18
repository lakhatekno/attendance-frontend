import { RiAddFill } from 'react-icons/ri';
import { LuCalendarSync } from 'react-icons/lu';
import { FaCheck } from 'react-icons/fa6';
import { MdOutlineCancel } from 'react-icons/md';

import AddShiftModal from '@/components/ui/modals/addShift.modal';

import { useShiftManagementStore } from '@/store/shiftManagement.store';

export default function HeadSection() {
	const { isAssigning, setIsAssigning } = useShiftManagementStore();

	return (
		<div className="flex justify-between items-center mb-8">
			<div className="flex gap-4 items-center text-indigo-900">
				<LuCalendarSync className="scale-150" />
				<h2 className="font-bold text-xl">Penugasan Shift</h2>
			</div>
			<div className="flex gap-2 items-center w-fit">
				{!isAssigning ? (
					<button
						onClick={setIsAssigning}
						className="bg-green-600 hover:bg-green-700 flex gap-2 font-medium h-fit w-fit px-4 py-2 items-center rounded-lg text-sm text-slate-100 cursor-pointer"
					>
						<RiAddFill className="scale-125" />
						Tambah Penugasan Shift
					</button>
				) : (
					<>
						<button
							onClick={setIsAssigning}
							className="bg-red-400 hover:bg-red-500 flex gap-2 font-medium h-fit w-fit px-4 py-2 items-center rounded-lg text-sm text-slate-100 cursor-pointer"
						>
							<MdOutlineCancel className="scale-125" />
							Batal
						</button>
						<button
							onClick={() => {}}
							className="bg-blue-400 hover:bg-blue-500 flex gap-2 font-medium h-fit w-fit px-4 py-2 items-center rounded-lg text-sm text-slate-100 cursor-pointer"
						>
							<FaCheck className="scale-125" />
							Simpan Penugasan
						</button>
					</>
				)}
			</div>

			<AddShiftModal />
		</div>
	);
}
