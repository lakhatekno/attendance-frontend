'use client'

import { IoMdPerson } from 'react-icons/io';
import { BiMenu } from 'react-icons/bi';
import { useSidebar } from '@/store/sidebar.store';

export default function Header() {
	const { isOpen, toggle } =  useSidebar();
	return (
		<header className='w-full h-16 sticky top-0 bg-white left-0 shadow flex items-center justify-between px-8'>
			<button
				className='scale-150 cursor-pointer'
				onClick={toggle}
			>
				<BiMenu />
			</button>
			<div className="flex w-fit gap-4 items-center">
				{/* Profile Name */}
				<p className='font-semibold'>Admin Name</p>
				<IoMdPerson className='scale-150' />
			</div>
		</header>
	);
}
