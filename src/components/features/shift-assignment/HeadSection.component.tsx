import { RiAddFill } from 'react-icons/ri';
import { LuCalendarSync } from 'react-icons/lu';
import AddShiftModal from '@/components/ui/modals/addShift.modal';

import { useShiftManagementStore } from '@/store/shiftManagement.store';

export default function HeadSection() {
  const { setAddShiftModal } = useShiftManagementStore();

  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex gap-4 items-center text-indigo-900">
        <LuCalendarSync className="scale-150" />
        <h2 className="font-bold text-xl">Penugasan Shift</h2>
      </div>
      <div className="flex gap-2 items-center w-fit">
        <button
          onClick={setAddShiftModal}
          className="bg-green-600 hover:bg-green-700 flex gap-2 font-medium h-fit w-fit px-4 py-2 items-center rounded-lg text-sm text-slate-100 cursor-pointer"
        >
          <RiAddFill className="scale-125" />
          Tambah Penugasan Shift
        </button>
      </div>

      <AddShiftModal />
    </div>
  );
}
