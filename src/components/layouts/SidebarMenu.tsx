import { sidebarMenu } from '@/model/sidebar.model';
import { useSidebar } from '@/store/sidebar.store';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SidebarMenu() {
	const pathname = usePathname();
	const { setActiveMenu } = useSidebar();
	return (
		<nav>
			{sidebarMenu.map((item) => {
				const Icon = item.icon;
				const active = pathname === item.href;

				return (
					<Link
						key={item.href}
						href={item.href}
						onClick={() => setActiveMenu(item.href)}
						className={`flex items-center gap-4 p-4 rounded-lg mx-2 mb-2 transition-colors
                      ${active ? 'bg-indigo-950' : 'hover:bg-indigo-950'}
                    `}
					>
						<Icon className="scale-150" />
						{item.label}
					</Link>
				);
			})}
		</nav>
	);
}
