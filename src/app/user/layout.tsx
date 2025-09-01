import Header from "@/components/layouts/Header";

export default function UserLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="flex min-h-screen w-full border bg-gray-100 text-slate-900">
			<div className="w-full relative">
				<Header hamburger={false} />
				<div className="p-4">{children}</div>
			</div>
		</main>
	)
}
