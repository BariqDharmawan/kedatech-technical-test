'use client';

import type { IAboutFeature } from '@/types/aboutFeaturesType';
import { Card } from 'flowbite-react';
import Image from 'next/image';

const AboutFeatures = ({
	aboutFeatures,
}: {
	aboutFeatures: IAboutFeature[];
}) => {
	return (
		<div className='grid grid-cols-12 gap-3'>
			{aboutFeatures.map((feature, index) => (
				<Card
					key={`feature-${feature.id}`}
					className='col-span-6 lg:col-span-4 flex flex-col items-center'
				>
					<div className='h-24 relative mb-3'>
						<Image
							src={`/illustration/${feature.img}`}
							alt={feature.title}
							fill
						/>
					</div>
					<p className='font-semibold text-gray-700'>
						{feature.title}
					</p>
				</Card>
			))}
		</div>
	);
};

export default AboutFeatures;
