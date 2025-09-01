import { create } from 'zustand';

import { UserState } from '@/model';

export const useUserStore = create<UserState>((set) => ({
	users: [],
	setUsers: (users) => {
		set({ users: users });
	},
	addUser: (user) => {
		set((state) => ({ users: [...state.users, user] }));
	},
	updateUser: (user) =>
		set((state) => ({
			users: state.users.map((u) => (u.identityNumber === user.identityNumber ? user : u)),
		})),
	deleteUser: (identityNumber) =>
		set((state) => ({
			users: state.users.filter((u) => u.identityNumber !== identityNumber),
		})),
}));
