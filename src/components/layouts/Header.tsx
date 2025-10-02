'use client';

import { useSidebar } from '@/store/sidebar.store';
import { IoMdPerson } from 'react-icons/io';
import { BiMenu } from 'react-icons/bi';
import { MdLogout } from "react-icons/md";
import { AuthStore } from '@/store/auth.store';
import { redirect, RedirectType } from 'next/navigation';

interface HeaderProps {
	hamburger?: boolean;
}

export default function Header({ hamburger }: HeaderProps) {
	const { toggle } = useSidebar();
  const { logout } = AuthStore();
	
	if (hamburger === undefined) {
		hamburger = true;
	}

  const logoutHandler = () => {
    logout();
    redirect('/login', RedirectType.replace);
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
      <button onClick={logoutHandler} className="flex w-fit gap-4 items-center border border-indigo-900 rounded-lg text-indigo-900 px-4 py-2 justify-self-end hover:bg-indigo-900 hover:text-white cursor-pointer">
				{/* Logout Button */}
				<p className="font-semibold">Logout</p>
				<MdLogout className="scale-150" />
			</button>
		</header>
	);
}
