'use client';

import { Button, Modal, Table } from 'flowbite-react';
import { DateTime } from 'luxon';
import { useState } from 'react';
import CustomerDetailPackage from './CustomerDetailPackage';
import { IUser, UserID } from '@/types/userType';
import { usePathname } from 'next/navigation';

const TableCustomer = ({ users }: { users: IUser[] }) => {
	const [isDetailCustomerOpen, setIsDetailCustomerOpen] = useState(false);

	const [userIdCalled, setUserIdCalled] = useState<UserID | undefined>();

	const handleUserIdDetail = (id: UserID) => {
		setUserIdCalled(id);
	};

	//just dummy thing how to get the 'package name'. in real world it should be from api 'user'
	const pathname = usePathname();
	const pathArr = pathname.split('/').filter(path => path);
	const packageName = pathArr[pathArr.length - 1];

	return (
		<>
			<Table>
				<Table.Head>
					<Table.HeadCell>Name</Table.HeadCell>
					<Table.HeadCell>Phone Number</Table.HeadCell>
					<Table.HeadCell>Expired At</Table.HeadCell>
					<Table.HeadCell>Start At</Table.HeadCell>
					<Table.HeadCell></Table.HeadCell>
				</Table.Head>
				<Table.Body className='divide-y'>
					{users.map((user, index) => (
						<Table.Row
							key={`user-${index}`}
							className='bg-white dark:border-gray-700 dark:bg-gray-800'
						>
							<Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
								{user.name}
							</Table.Cell>
							<Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
								{user.phone}
							</Table.Cell>
							<Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
								{DateTime.now()
									.toFormat('yyyy LLL dd')
									.toString()}
							</Table.Cell>
							<Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
								{DateTime.now()
									.plus({ days: 20 })
									.toFormat('yyyy LLL dd')
									.toString()}
							</Table.Cell>
							<Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
								<Button
									onClick={() => {
										setIsDetailCustomerOpen(true);
										handleUserIdDetail(user.id);
									}}
								>
									Detail
								</Button>
							</Table.Cell>
						</Table.Row>
					))}
				</Table.Body>
			</Table>

			{userIdCalled && isDetailCustomerOpen && (
				<CustomerDetailPackage
					userId={userIdCalled}
					packageSelected={packageName}
					isOpen={isDetailCustomerOpen}
					setIsOpen={() => setIsDetailCustomerOpen(false)}
				/>
			)}
		</>
	);
};

export default TableCustomer;
