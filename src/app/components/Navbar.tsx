'use client';

import Link from 'next/link';

const Navbar = () => {
	const menus = [
		{
			label: 'About Us',
			isCenterMenu: false,
			href: '/about',
		},
		{
			label: 'Pricing',
			isCenterMenu: false,
			href: '/pricing',
		},
		{
			label: 'Home',
			isCenterMenu: true,
			href: '/',
		},
		{
			label: 'Contact',
			isCenterMenu: false,
			href: '/kontak',
		},
	];

	return (
		<nav className='py-3'>
			<div className='container flex items-center justify-center gap-3'>
				{menus.map(menu => (
					<Link
						key={`primary-nav-${menu.label.replace(' ', '-')}`}
						href={menu.href}
						className={
							menu.isCenterMenu
								? 'text-xl font-bold'
								: 'text-base'
						}
					>
						{menu.label}
					</Link>
				))}

				<Link href='/login' className='text-blue-500'>
					Login
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
