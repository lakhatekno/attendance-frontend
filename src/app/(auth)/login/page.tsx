'use client'

import { AuthStore } from '@/store/auth.store';
import { redirect } from 'next/navigation';
import { FormEvent } from 'react';

export default function LoginPage() {
	const { username, password, isLoading, error, setUsername, setPassword, submitHandler } =
		AuthStore();

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const role = await submitHandler({
      username,
      password,
    });

    switch(role) {
      case 'admin': redirect('/admin');
        break;
      case 'user': redirect('/user');
        break;
    }
  }

	return (
		<div className='flex flex-col gap-8 justify-center items-center min-h-screen bg-gray-100'>
			<section className='bg-white shadow rounded-xl p-8 md:w-1/3'>
				<h1 className='text-xl font-bold mb-6'>Login</h1>
				<form action='' onSubmit={submit} className='flex flex-col gap-4'>
          <p className=' text-red-500 text-sm'>{error || ' '}</p>
					<div className='flex flex-col gap-0.5'>
						<label htmlFor='username' className='text-md'>
							Username
						</label>
						<input
							id='username'
							type='text'
							value={username}
              onChange={(e) => setUsername(e.target.value)}
							placeholder='username'
							className='text-sm border-b border-b-indigo-900 p-2 focus:outline-none focus:border-b-2'
						/>
					</div>
					<div className='flex flex-col gap-0.5'>
						<label htmlFor='password' className='text-md'>
							Password
						</label>
						<input
							id='password'
							type='password'
							value={password}
              onChange={(e) => setPassword(e.target.value)}
							placeholder='password'
							className='text-sm border-b border-b-indigo-900 p-2 focus:outline-none focus:border-b-2'
						/>
					</div>
          <button type='submit' className='bg-indigo-900 text-white font-bold text-sm w-full text-center py-2 cursor-pointer rounded'>
            {isLoading? 'Loading...' : 'Login'}
          </button>
				</form>
			</section>
		</div>
	);
}
