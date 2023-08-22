'use client';

import { IPackageAvailable } from '@/types/packageAvailableType';
import { IconCheck } from '@tabler/icons-react';
import { Card, TextInput } from 'flowbite-react';
import Link from 'next/link';

type IPricingCard = Omit<IPackageAvailable, 'id'>;
export default function PricingCard({ features, label, price }: IPricingCard) {
	return (
		<Card>
			<h5 className='mb-4 text-xl font-medium text-gray-500 dark:text-gray-400 capitalize'>
				{label}
			</h5>
			<div className='flex items-baseline text-gray-900 dark:text-white'>
				<span className='text-2xl font-semibold mr-2'>IDR</span>
				<span className='text-4xl font-extrabold'>
					{new Intl.NumberFormat().format(price)}
				</span>
				<span className='ml-1 text-xl font-normal text-gray-500 dark:text-gray-400'>
					/month
				</span>
			</div>
			<ul className='my-7 space-y-5'>
				{features.map((feature, index) => (
					<li className='flex space-x-3' key={`feature-${index}`}>
						<IconCheck className='text-green-500' />
						<span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
							{feature.desc}
						</span>
					</li>
				))}
			</ul>
			<Link
				className='inline-flex justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900 w-full mt-auto'
				href='/checkout'
			>
				Choose plan
			</Link>
		</Card>
	);
}
