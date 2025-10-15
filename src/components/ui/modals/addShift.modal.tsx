import BaseModal from './base.modal';
import { useState } from 'react';
import { useShiftStore } from '@/store/shift.store';
import { ShiftBody } from '@/model';

export default function AddShiftModal() {
	const { openModal, setOpenModal, createShift, message } = useShiftStore();
	const [form, setForm] = useState<ShiftBody>({
		name: '',
		shiftStart: '',
		shiftEnd: '',
    crossDay: false,
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, checked } = e.target;
		setForm((prev) => ({ ...prev, [name]: checked }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		createShift(form);
		setForm({
			name: '',
			shiftStart: '',
			shiftEnd: '',
			crossDay: false,
		});
	};

	return (
		<BaseModal
			onClose={setOpenModal}
			open={openModal}
			title="Shift Baru"
		>
			<div className="flex flex-col gap-6">
				<p className={`text-sm ${message.error ? 'text-red-500' : 'text-green-500'}`}>
					{message.message}
				</p>
				<div className="flex flex-col gap-1">
					<label htmlFor="name" className="text-sm text-indigo-900">
						Nama Shift
					</label>
					<input
						id="name"
						name="name"
						value={form.name}
						onChange={handleChange}
						className="border-b border-b-indigo-900 focus:outline-none focus:border-b-2 p-2 w-full"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<label htmlFor="shiftStart" className="text-sm text-indigo-900">
						Mulai Shift
					</label>
					<input
						id="shiftStart"
						name="shiftStart"
						type="time"
            step={1}
						value={form.shiftStart}
						onChange={handleChange}
						className="border-b border-b-indigo-900 focus:outline-none focus:border-b-2 p-2 w-full"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<label htmlFor="shiftEnd" className="text-sm text-indigo-900">
						Akhir Shift
					</label>
					<input
						id="shiftEnd"
						name="shiftEnd"
						type="time"
						step={1}
						value={form.shiftEnd}
						onChange={handleChange}
						className="border-b border-b-indigo-900 focus:outline-none focus:border-b-2 p-2 w-full"
					/>
				</div>
				<div className="flex items-center justify-end flex-row-reverse gap-2">
					<label htmlFor="crossDay" className="text-sm text-indigo-900">
						Cross Day
					</label>
					<input
						id="crossDay"
						name="crossDay"
						type="checkbox"
						checked={form.crossDay}
						onChange={handleCheckChange}
						className="w-4 h-4 text-indigo-900 rounded focus:ring-indigo-900"
					/>
				</div>
			</div>

			<div className="flex justify-end gap-4 mt-8">
				<button onClick={setOpenModal} type="button" className="text-gray-600 cursor-pointer hover:text-gray-700 font-semibold">
					Batal
				</button>
				<button
					onClick={handleSubmit}
					type="submit"
					className="px-4 py-2 bg-green-600 font-semibold text-slate-100 rounded-lg cursor-pointer hover:bg-green-700"
				>
					Tambah
				</button>
			</div>
		</BaseModal>
	);
}
