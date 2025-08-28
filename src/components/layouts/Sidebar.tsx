'use client';

import { sidebarMenu } from '@/model/sidebar.model';
import { useSidebar } from '@/store/sidebar.store';
import Link from 'next/link';
import SidebarMenu from './SidebarMenu';

export default function Sidebar() {
	const { isOpen } = useSidebar();

	return (
		<div className={`h-screen w-72 top-0 z-20 bg-indigo-900 text-slate-100 ${isOpen ? 'ms-0' : '-ms-72'} transition-all py-8`}>
      <SidebarMenu />
		</div>
	);
}
