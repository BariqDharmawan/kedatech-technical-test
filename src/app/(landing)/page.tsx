import Image from 'next/image';
import PricingCard from '../components/PricingCard';
import { packageAvailables } from '@/helper/dummyPackageAvailable';
import FormContact from '../components/FormContact';
import HeadSection from '../components/HeadSection';
import AboutFeatures from '../components/AboutFeatures';
import { IAboutFeature } from '@/types/aboutFeaturesType';

//dummy data
const dataAboutFeature: IAboutFeature[] = [
	{
		id: 1,
		title: 'Feature 1',
		img: 'beering.svg',
	},
	{
		id: 2,
		title: 'Feature 2',
		img: 'searching.svg',
	},
	{
		id: 3,
		title: 'Feature 3',
		img: 'beering.svg',
	},
	{
		id: 4,
		title: 'Feature 4',
		img: 'searching.svg',
	},
	{
		id: 5,
		title: 'Feature 5',
		img: 'beering.svg',
	},
	{
		id: 6,
		title: 'Feature 6',
		img: 'searching.svg',
	},
];

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
					<HeadSection
						label={process.env.NEXT_PUBLIC_APP_NAME!.toString()}
						className='text-red-500'
					/>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Voluptas, dolorum fugit? Reiciendis, amet veritatis?
						Quia aliquam earum animi temporibus voluptatum possimus
						quibusdam ad, sapiente quas nam reiciendis qui eius
						nihil!
					</p>
				</div>
			</header>

			<section className='h-screen pt-8' id='section-about'>
				<div className='container 2xl:w-9/12 px-3'>
					<HeadSection
						label={`About ${process.env.NEXT_PUBLIC_APP_NAME}`}
					/>

					<AboutFeatures aboutFeatures={dataAboutFeature} />
				</div>
			</section>

			<section className='h-screen pt-8' id='section-pricing'>
				<HeadSection label='Pricing' />

				<div className='container px-3 2xl:w-9/12 grid grid-cols-3 gap-4'>
					{packageAvailables.map(packageAvailable => (
						<PricingCard
							id={packageAvailable.id}
							title={packageAvailable.title}
							price={packageAvailable.price}
							key={`package-available-${packageAvailable.id}`}
							features={packageAvailable.features}
						/>
					))}
				</div>
			</section>

			<section className='pb-16' id='section-contact'>
				<HeadSection label='Kontak' />

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
