'use client';

import { Button, Modal } from 'flowbite-react';
import Link from 'next/link';
import { createPortal } from 'react-dom';
import InputIconLeft from './InputIconLeft';
import { useState } from 'react';
import { IconKey, IconUser } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';
import { useStore } from '@/helper/zustand';

const menus = [
	{
		label: 'About Us',
		isCenterMenu: false,
		href: '#section-about',
	},
	{
		label: 'Pricing',
		isCenterMenu: false,
		href: '#section-pricing',
	},
	{
		label: 'Home',
		isCenterMenu: true,
		href: '/',
	},
	{
		label: 'Contact',
		isCenterMenu: false,
		href: '#section-contact',
	},
];

const Navbar = () => {
	const [isLoginOpen, setIsLoginOpen] = useState(false);

	const { isLoading, setIsLoading } = useStore(state => state);

	const router = useRouter();

	const handleLogin = async (e: FormEvent) => {
		setIsLoading(true);
		e.preventDefault();

		setTimeout(() => {
			setIsLoading(false);
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
						data-testid='login-btn'
					>
						Login
					</button>
				</div>
			</nav>

			{createPortal(
				<Modal show={isLoginOpen} onClose={() => setIsLoginOpen(false)}>
					<Modal.Header>Login to dashboard</Modal.Header>
					<Modal.Body>
						<form
							method='POST'
							onSubmit={(e: FormEvent) => handleLogin(e)}
							data-testid='form-login'
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
							<Button
								isProcessing={isLoading}
								type='submit'
								className='inline-flex  justify-center rounded-lg bg-cyan-600 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900'
								disabled={isLoading}
							>
								Login
							</Button>
						</form>
					</Modal.Body>
				</Modal>,
				document.body
			)}
		</>
	);
};

export default Navbar;
