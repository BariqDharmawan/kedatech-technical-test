'use client';

import { Modal } from 'flowbite-react';
import Link from 'next/link';
import { createPortal } from 'react-dom';
import InputIconLeft from './InputIconLeft';
import { useState } from 'react';
import { IconKey, IconUser } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

const menus = [
	{
		label: 'About Us',
		isCenterMenu: false,
		href: '/about',
	},
	{
		label: 'Pricing',
		isCenterMenu: false,
		href: '#section-pricing',
	},
	{
		label: 'Dashboard',
		isCenterMenu: true,
		href: '/dashboard',
	},
	{
		label: 'Contact',
		isCenterMenu: false,
		href: '#section-contact',
	},
];

const Navbar = () => {
	const [isLoginOpen, setIsLoginOpen] = useState(false);
	const router = useRouter();

	const handleLogin = async (e: FormEvent) => {
		e.preventDefault();

		setTimeout(() => {
			console.log('login');
		}, 3000);

		router.push('/dashboard');
	};

	return (
		<>
			<nav className='h-20'>
				<div className='container flex items-center justify-center gap-3 h-full'>
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

					<button
						className='text-blue-500'
						onClick={() => setIsLoginOpen(true)}
					>
						Login
					</button>
				</div>
			</nav>

			{isLoginOpen &&
				createPortal(
					<Modal
						show={isLoginOpen}
						onClose={() => setIsLoginOpen(false)}
					>
						<Modal.Header>Login to dashboard</Modal.Header>
						<Modal.Body>
							<form
								method='POST'
								onSubmit={(e: FormEvent) => handleLogin(e)}
							>
								<div className='mb-3'>
									<InputIconLeft
										icon={IconUser}
										id='username'
										label='Username'
										placeholder='Fill username'
										required
									/>
								</div>
								<div className='mb-3'>
									<InputIconLeft
										icon={IconKey}
										id='password'
										type='password'
										label='Password'
										placeholder='Fill Password'
										required
									/>
								</div>
								<button
									type='submit'
									className='inline-flex  justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900'
								>
									Login
								</button>
							</form>
						</Modal.Body>
					</Modal>,
					document.body
				)}
		</>
	);
};

export default Navbar;
