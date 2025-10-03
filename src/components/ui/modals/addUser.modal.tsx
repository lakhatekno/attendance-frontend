'use client';

import { useState, useEffect } from 'react';
import { useUserStore } from '@/store/user.store';
import { UserCreate } from '@/model';
import { MdClose } from 'react-icons/md';
import BaseModal from './base.modal';

interface Props {
	open: boolean;
	onClose: () => void;
}

export default function AddUserModal({ open, onClose }: Props) {
	const { addUser, message } = useUserStore();
	const [form, setForm] = useState<UserCreate>({
		id: '',
		name: '',
		email: '',
		username: '',
		password: '',
		role: 'user',
	});

	if (!open) return null;

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		setForm((prev: UserCreate) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = () => {
		addUser(form);
		setForm({
			id: '',
			name: '',
			email: '',
			username: '',
			password: '',
			role: 'user',
		});
	};

	return (
		<BaseModal open={open} onClose={onClose} title={`Tambah Data`}>
			<div className='flex flex-col gap-6'>
        <p className={`text-sm ${message.error ? 'text-red-500' : 'text-green-500'}`}>{message.message}</p>
				<input
					name='id'
					value={form.id}
					onChange={handleChange}
					placeholder='ID Karyawan'
					className='border-b border-b-indigo-900 focus:outline-none focus:border-b-2  p-2 w-full'
					disabled={false}
				/>
				<input
					name='name'
					value={form.name}
					onChange={handleChange}
					placeholder='Nama'
					className='border-b border-b-indigo-900 focus:outline-none focus:border-b-2  p-2 w-full'
				/>
				<input
					name='email'
					type='email'
					value={form.email}
					onChange={handleChange}
					placeholder='Email'
					className='border-b border-b-indigo-900 focus:outline-none focus:border-b-2  p-2 w-full'
				/>
				<input
					name='username'
					value={form.username}
					onChange={handleChange}
					placeholder='Username'
					className='border-b border-b-indigo-900 focus:outline-none focus:border-b-2  p-2 w-full'
				/>
				<input
					name='password'
					type='password'
					value={form.password}
					onChange={handleChange}
					placeholder='Password'
					className='border-b border-b-indigo-900 focus:outline-none focus:border-b-2  p-2 w-full'
				/>
				<select
					name='role'
					value={form.role}
					onChange={handleChange}
					className='border-b border-b-indigo-900 focus:outline-none focus:border-b-2  p-2 w-full'
				>
					<option value='staff'>Staff</option>
					<option value='user'>User</option>
				</select>
			</div>

			<div className='flex justify-end gap-4 mt-8'>
				<button onClick={onClose} className='text-gray-600 font-semibold'>
					Batal
				</button>
				<button
					onClick={handleSubmit}
					className='px-4 py-2 bg-green-600 font-semibold text-slate-100 rounded-lg cursor-pointer hover:bg-green-700'
				>
					Tambah
				</button>
			</div>
		</BaseModal>
	);
}

