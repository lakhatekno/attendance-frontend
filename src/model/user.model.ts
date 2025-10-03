export interface User {
	id: string;
	username: string;
	email: string;
	name: string;
	role: string;
}

export interface UserCreate extends User {
	password: string;
}

export interface UserState {
	users: User[];
	message: { error: boolean; message: string };
	setUsers: () => void;
	addUser: (user: UserCreate) => void;
	updateUser: (user: User) => void;
	deleteUser: (identityNumber: string) => void;
}
