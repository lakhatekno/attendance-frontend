export interface User {
	identityNumber: string;
	username: string;
	email: string;
	name: string;
	role: string;
}

export interface UserState {
	users: User[],
	setUsers: (users: User[]) => void;
	addUser: (user: User) => void;
	updateUser: (user: User) => void;
	deleteUser: (identityNumber: string) => void; 
}