import { create } from 'zustand';
import { SidebarState } from '@/model/sidebar.model';

export const useSidebar = create<SidebarState>((set) => ({
	isOpen: true,
	activeMenu: '',
	setActiveMenu: (menu) => set({ activeMenu: menu }),
	toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));
