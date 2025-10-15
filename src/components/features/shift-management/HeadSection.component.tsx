import { RiAddFill } from 'react-icons/ri';
import { GrScheduleNew } from 'react-icons/gr';
import AddShiftModal from '@/components/ui/modals/addShift.modal';

import { useShiftStore } from '@/store/shift.store';

export default function HeadSection() {
	const { setOpenModal } = useShiftStore();
	return (
		<div className="flex justify-between items-center mb-8">
			<div className="flex gap-4 items-center text-indigo-900">
				<GrScheduleNew className="scale-150" />
				<h2 className="font-bold text-xl">Pengaturan Shift</h2>
			</div>
			<div className="flex gap-2 items-center w-fit">
				<button
					onClick={setOpenModal}
					className="bg-green-600 flex gap-2 font-medium h-fit w-fit px-4 py-2 items-center rounded-lg text-sm text-slate-100 cursor-pointer"
				>
					<RiAddFill className="scale-125" />
					Tambah Shift
				</button>
			</div>

			<AddShiftModal />
		</div>
	);
}
