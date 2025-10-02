export interface Auth {
  accessToken: string;
  refreshToken: string;
}

export interface Login {
	username: string;
	password: string;
}

export interface LoginState extends Login {
	setUsername: (username: string) => void;
	setPassword: (password: string) => void;
	submitHandler: (data: Login) => any;
	isLoading: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  logout: () => void;
}
