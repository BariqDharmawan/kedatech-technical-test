'use client';

import TableCustomer from '@/app/components/TableCustomer';
import { DateTime } from 'luxon';

const getUser = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json();

	return data;
};

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Page() {
	const users: IUser[] = await getUser();
	console.log('users', users);

	return (
		<main className='py-3 px-5'>
			<TableCustomer users={users} />
		</main>
	);
}
