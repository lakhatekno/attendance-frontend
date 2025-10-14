import { MdSpaceDashboard } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa6';
import { RiCalendarScheduleLine } from "react-icons/ri";

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
	{ label: 'Karyawan', href: '/admin/user-management', icon: FaUsers },
  { label: 'Pengaturan Shift', href: '/admin/shift-management', icon: RiCalendarScheduleLine }
];
