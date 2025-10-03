import { create } from 'zustand';

import { UserCreate, UserState } from '@/model';
import { createUser, getAllUsers, inactivateUser, updateUser } from '@/api/user.api';

export const useUserStore = create<UserState>((set, get) => ({
	users: [],
	message: { error: false, message: '' },
	setUsers: async () => {
		try {
			const response = await getAllUsers();
			set({ users: response });
		} catch (error: any) {
			console.log(error.status);
		}
	},
	addUser: async (user: UserCreate) => {
		try {
			await createUser(user);
			set({
				message: {
					error: false,
					message: 'User berhasil dibuat',
				},
			});
			get().setUsers();
		} catch (error: any) {
			console.log(
				error.response?.data?.error || `Gagal create user: ${error.status}`
			);
			set({
				message: {
					error: true,
					message: 'Gagal membuat user',
				},
			});
		}
		set((state) => ({ users: [...state.users, user] }));
	},
	updateUser: async (user) => {
    try {
      await updateUser(user);
      set({
				message: {
					error: false,
					message: 'User berhasil dibuat',
				},
			});
      get().setUsers();
    } catch (error: any) {
      console.log(error.status)
      set({
				message: {
					error: true,
					message: 'Gagal mengubah informasi user',
				},
			});
    }
  },
	deleteUser: async (id) => {
    try {
      await inactivateUser(id);
      set({
				message: {
					error: false,
					message: 'User berhasil dinonaktifkan',
				},
			});
      get().setUsers();
    } catch (error: any) {
      console.log(error.status)
      set({
				message: {
					error: false,
					message: 'Gagal menonaktifkan',
				},
			});
    }
  },
}));

