'use client';

import { IoMdPerson } from 'react-icons/io';
import { BiMenu } from 'react-icons/bi';
import { useSidebar } from '@/store/sidebar.store';

interface HeaderProps {
	hamburger?: boolean;
}

export default function Header({ hamburger }: HeaderProps) {
	const { toggle } = useSidebar();
	
	if (hamburger === undefined) {
		hamburger = true;
	}

	return (
		<header className="w-full h-16 sticky top-0 bg-white left-0 shadow flex items-center justify-between px-4 md:px-8">
			{hamburger ? (
				<button
					className="scale-150 cursor-pointer"
					onClick={toggle}
				>
					<BiMenu />
				</button>
			) :
				<div></div>
			}
			<div className="flex w-fit gap-4 items-center bg-indigo-900 rounded-lg text-white px-4 py-2 justify-self-end">
				{/* Profile Name */}
				<p className="font-semibold">Bagus Akbar</p>
				<IoMdPerson className="scale-150" />
			</div>
		</header>
	);
}
