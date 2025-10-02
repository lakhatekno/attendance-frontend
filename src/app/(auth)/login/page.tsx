import { AuthStore } from '@/store/auth.store';

export default function LoginPage() {
	return (
		<div className='flex flex-col gap-8 justify-center items-center min-h-screen bg-gray-100'>
			<section className='bg-white shadow rounded-xl p-8 md:w-1/3'>
				<h1 className='text-xl font-bold mb-6'>Login</h1>
				<form action='' className='flex flex-col gap-4'>
					<div className='flex flex-col gap-0.5'>
						<label htmlFor='username' className='text-md'>
							Username
						</label>
						<input
							id='username'
							type='text'
							value={''}
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
							value={''}
							placeholder='password'
							className='text-sm border-b border-b-indigo-900 p-2 focus:outline-none focus:border-b-2'
						/>
					</div>
				</form>
			</section>
		</div>
	);
}
