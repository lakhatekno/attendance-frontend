'use client';

import { useUserStore } from '@/store/user.store';
import { useEffect, useState } from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { BiPencil, BiTrash, BiKey } from 'react-icons/bi';
import { CgUserList } from 'react-icons/cg';
import UserModal from '@/components/ui/modals/user.modal';
import { RiFileExcel2Line } from 'react-icons/ri';
import AddUserModal from '@/components/ui/modals/addUser.modal';

export default function UserTable() {
	const { users, setUsers, deleteUser } = useUserStore();
	const [openModal, setOpenModal] = useState(false);
	const [openAddModal, setOpenAddModal] = useState(false);
	const [editUser, setEditUser] = useState<any>(null);

	// Mock data
	useEffect(() => {
		setUsers();
	}, [setUsers]);

  const deleteHandler = (id: string) => {
    deleteUser(id);
  }

	return (
		<div>
			<div className="flex justify-between items-center mb-8">
				<div className="flex gap-4 items-center text-indigo-900">
					<CgUserList className="scale-150" />
					<h2 className="font-bold text-xl">Daftar Karyawan</h2>
				</div>
				<div className="flex gap-2 items-center w-fit">
					<button
						onClick={() => {
							setEditUser(null);
							setOpenAddModal(true);
						}}
						className="bg-green-600 flex gap-2 font-medium h-fit w-fit px-4 py-2 items-center rounded-lg text-sm text-slate-100 cursor-pointer"
					>
						<AiOutlineUserAdd className="scale-125" />
						Tambah Data
					</button>
					<button
						onClick={() => {
							setEditUser(null);
							setOpenModal(true);
						}}
						className="bg-slate-700 flex gap-2 font-medium h-fit w-fit px-4 py-2 items-center rounded-lg text-sm text-slate-100 cursor-pointer"
					>
						<RiFileExcel2Line className="scale-125" />
						Impor Data
					</button>
				</div>
			</div>

			<table className="table-auto border-collapse w-full text-sm">
				<thead>
					<tr className="text-slate-900 font-medium text-left">
						<th className="border-b p-2">ID</th>
						<th className="border-b p-2">Nama</th>
						<th className="border-b p-2">Email</th>
						<th className="border-b p-2">Username</th>
						<th className="border-b p-2 w-32">Aksi</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user, index) => (
						<tr
							key={user.id}
							className={`hover:bg-gray-200 text-xs border-b border-b-gray-200 ${index % 2 !== 0 ? 'bg-gray-100' : 'bg-white'}`}
						>
							<td className="p-2">{user.id}</td>
							<td className="p-2">{user.name}</td>
							<td className="p-2">{user.email}</td>
							<td className="p-2">{user.username}</td>
							<td className="p-2 flex gap-6 text-slate-600">
								<button
									className="flex items-center gap-1 hover:text-orange-500 transition-colors cursor-pointer"
									onClick={() => {
										setEditUser(user);
										setOpenModal(true);
									}}
								>
									<BiPencil /> Edit
								</button>
								<button
									className="flex items-center gap-1 hover:text-red-500 transition-colors cursor-pointer"
									onClick={() => deleteHandler(user.id)}
								>
									<BiTrash /> Nonaktifkan
								</button>
								<button
									className="flex items-center gap-1 hover:text-black transition-colors cursor-pointer"
									onClick={() => alert('Ubah password feature')}
								>
									<BiKey /> Password
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			<UserModal
				open={openModal}
				onClose={() => setOpenModal(false)}
				editUser={editUser}
			/>
      <AddUserModal
				open={openAddModal}
				onClose={() => setOpenAddModal(false)}
			/>
		</div>
	);
}
