'use client';

import { useState, useEffect } from 'react';
import { useUserStore } from '@/store/user.store';
import { User } from '@/model';
import { MdClose } from 'react-icons/md';
import BaseModal from './base.modal';

interface Props {
	open: boolean;
	onClose: () => void;
	editUser?: User;
}

export default function UserModal({ open, onClose, editUser }: Props) {
	const { addUser, updateUser } = useUserStore();
	const [form, setForm] = useState<User>({
		identityNumber: '',
		name: '',
		email: '',
		username: '',
		role: 'user',
	});

	useEffect(() => {
		if (editUser) setForm(editUser);
	}, [editUser]);

	if (!open) return null;

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setForm((prev: User) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = () => {
		if (editUser) {
			updateUser(form);
		} else {
			addUser(form);
		}
		onClose();
	};

	return (
		<BaseModal
			open={open}
			onClose={onClose}
			title={`${editUser ? 'Edit Data' : 'Tambah Data'}`}
		>
			<div className="flex flex-col gap-6">
				<input
					name="identityNumber"
					value={form.identityNumber}
					onChange={handleChange}
					placeholder="ID Karyawan"
					className="border-b border-b-indigo-900 focus:outline-none focus:border-b-2  p-2 w-full"
					disabled={!!editUser}
				/>
				<input
					name="name"
					value={form.name}
					onChange={handleChange}
					placeholder="Nama"
					className="border-b border-b-indigo-900 focus:outline-none focus:border-b-2  p-2 w-full"
				/>
				<input
					name="email"
					value={form.email}
					onChange={handleChange}
					placeholder="Email"
					className="border-b border-b-indigo-900 focus:outline-none focus:border-b-2  p-2 w-full"
				/>
				<input
					name="username"
					value={form.username}
					onChange={handleChange}
					placeholder="Username"
					className="border-b border-b-indigo-900 focus:outline-none focus:border-b-2  p-2 w-full"
				/>
				<select
					name="role"
					value={form.role}
					onChange={handleChange}
					className="border-b border-b-indigo-900 focus:outline-none focus:border-b-2  p-2 w-full"
				>
					<option value="staff">Staff</option>
					<option value="user">User</option>
				</select>
			</div>

			<div className="flex justify-end gap-4 mt-8">
				<button
					onClick={onClose}
					className="text-gray-600 font-semibold"
				>
					Batal
				</button>
				<button
					onClick={handleSubmit}
					className="px-4 py-2 bg-green-600 font-semibold text-slate-100 rounded-lg cursor-pointer hover:bg-green-700"
				>
					{editUser ? 'Simpan' : 'Tambah'}
				</button>
			</div>
		</BaseModal>
	);
}
