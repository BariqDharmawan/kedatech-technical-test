'use client';

import Image from 'next/image';
import PricingCard from '../components/PricingCard';
import { packageAvailables } from '@/helper/dummyPackageAvailable';
import FormContact from '../components/FormContact';

export default function Home() {
	return (
		<main>
			<header className='text-center h-screen-min-nav'>
				<div className='container px-3 2xl:w-9/12 flex flex-col justify-center h-full'>
					<div className='h-44 relative mb-5'>
						<Image
							src='illustration/home-header.svg'
							alt='ERP Kedatech'
							fill
						/>
					</div>
					<h1 className='text-4xl font-bold text-red-500 mb-5'>
						ERP Kedatech
					</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Voluptas, dolorum fugit? Reiciendis, amet veritatis?
						Quia aliquam earum animi temporibus voluptatum possimus
						quibusdam ad, sapiente quas nam reiciendis qui eius
						nihil!
					</p>
				</div>
			</header>

			<section className='h-screen pt-8' id='section-pricing'>
				<h1 className='text-4xl font-bold text-center mb-8'>Pricing</h1>
				<div className='container px-3 2xl:w-9/12 grid grid-cols-3 gap-4'>
					{packageAvailables.map(packageAvailable => (
						<PricingCard
							label={packageAvailable.label}
							price={packageAvailable.price}
							key={`package-available-${packageAvailable.id}`}
							features={packageAvailable.features}
						/>
					))}
				</div>
			</section>

			<section className='pb-16' id='section-contact'>
				<h1 className='text-4xl font-bold text-center mb-8'>Kontak</h1>
				<div className='container px-3 2xl:w-9/12 grid grid-cols-12'>
					<div className='relative w-full mb-5 col-span-5'>
						<Image
							src='illustration/contact-us.svg'
							alt='Contact us'
							fill
						/>
					</div>
					<div className='col-span-7'>
						<FormContact />
					</div>
				</div>
			</section>
		</main>
	);
}
