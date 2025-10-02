import { create } from 'zustand';

import { UserState } from '@/model';
import { getAllUsers } from '@/api/user.api';

export const useUserStore = create<UserState>((set) => ({
	users: [],
	setUsers: async () => {
		try {
      const response = await getAllUsers();
      set({users: response});
    } catch (error: any) {
      console.log(error.status);
    }

	},
	addUser: (user) => {
		set((state) => ({ users: [...state.users, user] }));
	},
	updateUser: (user) =>
		set((state) => ({
			// users: state.users.map((u) => (u.identityNumber === user.identityNumber ? user : u)),
		})),
	deleteUser: (identityNumber) =>
		set((state) => ({
			// users: state.users.filter((u) => u.identityNumber !== identityNumber),
		})),
}));
