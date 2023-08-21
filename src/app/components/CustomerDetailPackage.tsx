import { useGetUser } from '@/hooks/useGetUser';
import { UserID } from '@/types/userType';
import { IconMail, IconPhoneCall } from '@tabler/icons-react';
import { Button, Modal } from 'flowbite-react';
import { DateTime } from 'luxon';
import type { Dispatch, SetStateAction } from 'react';

const CustomerDetailPackage = ({
	isOpen,
	userId,
	packageSelected,
	setIsOpen,
}: {
	packageSelected: string;
	userId: UserID;
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<void>>;
}) => {
	const { user } = useGetUser(userId);

	return (
		<Modal show={isOpen} onClose={setIsOpen}>
			<Modal.Header>
				<span className='block'>{user?.name}</span>
				<small className='text-gray-500 capitalize'>
					{packageSelected} package
				</small>
			</Modal.Header>
			<Modal.Body>
				<ul className='mb-4'>
					<li className='border-b border-gray-200 py-2 flex items-center gap-3'>
						Start from:
						<time dateTime={DateTime.now().toString()}>
							{DateTime.now().toFormat('yyyy LLL dd').toString()}
						</time>
					</li>
					<li className='border-b border-gray-200 py-2 flex items-center gap-3'>
						Ends At:
						<time
							dateTime={DateTime.now()
								.plus({ days: 20 })
								.toString()}
						>
							{DateTime.now()
								.plus({ days: 20 })
								.toFormat('yyyy LLL dd')
								.toString()}
						</time>
					</li>
				</ul>
				<div className='flex items-center gap-3'>
					<Button color='success' className='flex-grow'>
						<IconPhoneCall />
						<span>{user?.phone}</span>
					</Button>
					<Button className='flex-grow'>
						<IconMail />
						<span>{user?.email}</span>
					</Button>
				</div>
			</Modal.Body>
		</Modal>
	);
};

export default CustomerDetailPackage;
