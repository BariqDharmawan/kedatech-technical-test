import Link from 'next/link';
import '@/styles/globals.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Dashboard',
	description: 'Dashboard app',
};

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const menus = [
		{
			label: 'Home',
			href: '/dashboard',
		},
		{
			label: 'Customer Basic',
			href: '/basic',
		},
		{
			label: 'Customer Business',
			href: '/business',
		},
		{
			label: 'Customer Entrepeneur',
			href: '/entrepeneur',
		},
	];
	return (
		<html lang='en'>
			<body className='grid grid-cols-12'>
				<aside className='col-span-3 bg-blue-500 h-screen text-white'>
					{menus.map(menu => (
						<Link
							key={`menu-admin-${menu.label.replace(' ', '-')}`}
							href={menu.href}
							className='p-3 block capitalize'
						>
							{menu.label}
						</Link>
					))}
				</aside>
				<div className='col-span-9'>{children}</div>
			</body>
		</html>
	);
}
