export interface User {
	id: string;
	username: string;
	email: string;
	name: string;
	role: string;
}

export interface UserState {
	users: User[],
	setUsers: () => void;
	addUser: (user: User) => void;
	updateUser: (user: User) => void;
	deleteUser: (identityNumber: string) => void; 
}