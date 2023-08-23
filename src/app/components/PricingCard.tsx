'use client';

import { useStore } from '@/helper/zustand';
import { IPackageAvailable } from '@/types/packageAvailableType';
import { IconCheck } from '@tabler/icons-react';
import { Button, Card, Label, Modal, Radio, Spinner } from 'flowbite-react';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export default function PricingCard({
	features,
	title,
	price,
	id,
}: IPackageAvailable) {
	const {
		isLoading,
		setIsLoading,
		selectedPackage,
		getPackage,
		optionPaymentPackage,
		getOptionPaymentPackage,
		payCheckout,
	} = useStore(state => state);

	const [isLoadingPay, setIsLoadingPay] = useState(false);

	const [isPopupCheckoutOpen, setIsPopupCheckoutOpen] = useState(false);

	const handleCheckout = async (id: number) => {
		setIsPopupCheckoutOpen(true);

		setIsLoading(true);

		const packageToCheckout = await getPackage(id);
		getOptionPaymentPackage(packageToCheckout.id);

		setIsLoading(false);
	};

	const handlePay = async () => {
		setIsLoadingPay(true);

		await payCheckout({
			title: 'foo',
			body: 'bar',
			userId: 1,
		});

		setIsPopupCheckoutOpen(false);
		setIsLoadingPay(false);

		MySwal.fire({
			title: 'Successfully pay package',
		});
	};

	return (
		<>
			<Card>
				<h5 className='mb-4 text-xl font-medium text-gray-500 dark:text-gray-400 capitalize'>
					{title}
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
				<button
					className='inline-flex justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900 w-full mt-auto'
					onClick={() => handleCheckout(id)}
				>
					Choose plan
				</button>
			</Card>

			{isPopupCheckoutOpen &&
				createPortal(
					<Modal
						show={true}
						onClose={() => setIsPopupCheckoutOpen(false)}
					>
						{!isLoading && selectedPackage && (
							<Modal.Header className='bg-gray-50 border-b-0'>
								Checkout {selectedPackage.title}
							</Modal.Header>
						)}
						<Modal.Body
							className={`bg-gray-50 pt-0 ${
								isLoading ? 'text-center' : ''
							}`}
						>
							{isLoading ? (
								<Spinner
									className='mt-6'
									aria-label='loading checkout'
								/>
							) : (
								<>
									<div className='shadow rounded-lg border border-gray-200 mb-8'>
										<div className='p-3 text-blue-500'>
											Total Price
										</div>
										<div className='border-t border-gray-200 p-3'>
											<p>
												Rp.
												{new Intl.NumberFormat().format(
													selectedPackage!.id * 1000
												)}
											</p>
										</div>
									</div>

									<div className='shadow rounded-lg border border-gray-200'>
										<div className='p-3 text-blue-500'>
											Payment Option
										</div>
										<div className='border-t border-gray-200 p-3'>
											<div className='flex flex-col gap-3'>
												{optionPaymentPackage?.map(
													optionPayment => (
														<div
															key={`payment-${optionPayment.id}`}
															className='flex items-center gap-2'
														>
															<Radio
																defaultChecked
																id={`payment-${optionPayment.id}`}
																name='payment_option'
																value={
																	optionPayment.name
																}
															/>
															<Label
																htmlFor={`payment-${optionPayment.id}`}
															>
																{
																	optionPayment.name
																}
															</Label>
														</div>
													)
												)}
											</div>
										</div>
									</div>

									<Button
										isProcessing={isLoadingPay}
										disabled={isLoadingPay}
										color='success'
										className='mt-4 w-full'
										onClick={handlePay}
									>
										Pay
									</Button>
								</>
							)}
						</Modal.Body>
					</Modal>,
					document.body
				)}
		</>
	);
}
