import { create } from 'zustand';
import { Login, LoginState } from '@/model';
import { login } from '@/api/auth.api';
import { persist } from 'zustand/middleware';

export const AuthStore = create<LoginState>()(
	persist(
		(set, get) => ({
			username: '',
			password: '',

			// Set Username value
			setUsername: (username: string) => {
				set({
					username: username,
				});
			},

			//Set password value
			setPassword: (password: string) => {
				set({
					password: password,
				});
			},

      //Submit handler
			submitHandler: async (data: Login) => {
				set({ isLoading: true });
				try {
					const res = await login(data);
					set({
						accessToken: res.accessToken,
						refreshToken: res.refreshToken,
					});
				} catch (error) {
					console.log(error);
				} finally {
					set({ isLoading: false });
				}
			},

			isLoading: false,
			accessToken: null,
			refreshToken: null,

      //Logout handler
			logout: () => set({ accessToken: null, refreshToken: null }),
		}),
		{
			name: 'auth',
			partialize: (state) => ({
				refreshToken: state.refreshToken,
			}),
		}
	)
);
