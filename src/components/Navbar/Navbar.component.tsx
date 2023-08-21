import Link from 'next/link';

const Navbar = () => {
	const menus = [
		{
			label: 'About',
			href: '/about',
		},
	];

	return (
		<nav className='py-3'>
			<div className='container'>
				<ul>
					{menus.map(menu => (
						<li key={`primary-nav-${menu.label.replace(' ', '-')}`}>
							<Link href={menu.href}>{menu.label}</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
