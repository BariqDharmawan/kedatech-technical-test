import { IPackageAvailable } from '@/types/packageAvailableType';

export const packageAvailables: IPackageAvailable[] = [
	{
		id: 1,
		label: 'Basic',
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
		label: 'Business',
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
		label: 'Entrepreneur',
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
