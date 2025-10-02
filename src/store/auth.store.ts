import { create } from 'zustand';
import { Login, LoginState } from '@/model';
import { login, logout } from '@/api/auth.api';
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
        console.info('Logging in...');
				set({ isLoading: true });
				try {
					const res = await login(data);
					set({
						accessToken: res.accessToken,
						refreshToken: res.refreshToken,
					});
          console.info('Logged in');

          return res.role;
				} catch (error: any) {
					console.log(error.response?.data?.error);
          set({error: error.response?.data?.error || 'Gagal'})
				} finally {
					set({ isLoading: false });
				}
			},

			isLoading: false,
			accessToken: null,
			refreshToken: null,
      error: null,

      //Logout handler
			logout: async () => {
        try {
          const res = await logout(get().accessToken!);
          set({ accessToken: null, refreshToken: null });
          console.log(res.message);
        } catch (error: any) {
          console.log(error.response?.data?.error);
        }
      },
		}),
		{
			name: 'auth',
			partialize: (state) => ({
				refreshToken: state.refreshToken,
			}),
		}
	)
);
