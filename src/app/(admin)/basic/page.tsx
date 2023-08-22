import TableCustomer from '@/app/components/TableCustomer';
import TotalProfit from '@/app/components/TotalProfit';
import { getUser } from '@/helper/getServerApi';
import { IPackageAvailable } from '@/types/packageAvailableType';
import { IUser } from '@/types/userType';

const packageAvailables: IPackageAvailable[] = [
	{
		id: 1,
		title: 'Basic',
		price: 100000,
		features: [
			{
				id: 1,
				desc: 'Mencatat barang masuk',
			},
			{
				id: 2,
				desc: 'Mencatat barang keluar',
			},
			{
				id: 3,
				desc: 'Mencatat hasil keuntungan',
			},
		],
	},
	{
		id: 2,
		title: 'Business',
		price: 350000,
		features: [
			{
				id: 1,
				desc: 'Mencatat barang masuk dan keluar',
			},
			{
				id: 2,
				desc: 'Mencatat Keuntungan',
			},
			{
				id: 3,
				desc: 'Dapat menganalisa hasil penjualan dengan CHART',
			},
			{
				id: 4,
				desc: 'Support 7x24 Jam',
			},
		],
	},
	{
		id: 3,
		title: 'Entrepreneur',
		price: 500000,
		features: [
			{
				id: 1,
				desc: 'Mencatat barang masuk dan keluar',
			},
			{
				id: 2,
				desc: 'Mencatat Keuntungan',
			},
			{
				id: 3,
				desc: 'Dapat menganalisa hasil penjualan dengan CHART',
			},
			{
				id: 4,
				desc: 'Support 7x24 Jam',
			},
			{
				id: 5,
				desc: 'Export data ke Excel',
			},
			{
				id: 6,
				desc: 'AI Prediksi penghasilan',
			},
		],
	},
];

export default async function Page() {
	const users: IUser[] = await getUser();

	//dummy data
	const packageBasic = packageAvailables.find(
		packageAvailable => packageAvailable.id === 1
	);

	return (
		<main className='py-3 px-5'>
			<h1 className='mb-4 text-xl font-bold'>
				List of customer using basic package
			</h1>
			<TableCustomer users={users.slice(0, 6) /*dummy data*/} />

			<TotalProfit
				className='mt-4'
				profit={Number(packageBasic?.price) * users.slice(0, 6).length}
			/>
		</main>
	);
}
