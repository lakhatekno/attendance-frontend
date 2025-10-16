import Header from '@/components/layouts/Header';
import Sidebar from '@/components/layouts/Sidebar';

export default function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="flex min-h-screen bg-gray-100 text-slate-900">
			<Sidebar />
			<div className="w-full relative overflow-y-hidden">
				<Header />
				<div className="p-8">{children}</div>
			</div>
		</main>
	);
}
