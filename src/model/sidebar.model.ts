import { MdSpaceDashboard } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa6';

export interface SidebarState {
	isOpen: boolean;
	toggle: () => void;
	activeMenu: string;
	setActiveMenu: (menu: string) => void;
}

export interface SidebarMenuItem {
	label: string;
	href: string;
	icon: React.ElementType;
}

export const sidebarMenu: SidebarMenuItem[] = [
	{ label: 'Dashboard', href: '/admin', icon: MdSpaceDashboard },
	{ label: 'Karyawan', href: '/user-management', icon: FaUsers }
];
