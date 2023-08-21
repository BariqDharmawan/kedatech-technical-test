import { Table } from 'flowbite-react';
import { DateTime } from 'luxon';

const TableCustomer = ({ users }: { users: IUser[] }) => {
	return (
		<Table>
			<Table.Head>
				<Table.HeadCell>Name</Table.HeadCell>
				<Table.HeadCell>Phone Number</Table.HeadCell>
				<Table.HeadCell>Expired At</Table.HeadCell>
				<Table.HeadCell>Start At</Table.HeadCell>
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
							{DateTime.now().toFormat('yyyy LLL dd').toString()}
						</Table.Cell>
						<Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
							{DateTime.now()
								.plus({ days: 20 })
								.toFormat('yyyy LLL dd')
								.toString()}
						</Table.Cell>
					</Table.Row>
				))}
			</Table.Body>
		</Table>
	);
};

export default TableCustomer;
