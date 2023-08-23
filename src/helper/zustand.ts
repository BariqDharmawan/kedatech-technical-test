import type {
	IPackageAvailable,
	PaymentOptionPackage,
} from '@/types/packageAvailableType';
import { IPayPackage, PayloadPayPackage } from '@/types/payPackageType';
import axios, { AxiosResponse } from 'axios';
import { create } from 'zustand';

export interface IStore {
	isLoading: boolean;
	selectedPackage: IPackageAvailable | null;
	optionPaymentPackage: PaymentOptionPackage[] | null;
	setIsLoading: (isLoading: boolean) => void;
	getPackage: (id: number) => Promise<IPackageAvailable>;
	getOptionPaymentPackage: (
		packageId: number
	) => Promise<PaymentOptionPackage>;
	payCheckout: (payload: PayloadPayPackage) => Promise<IPayPackage>;
}

export const useStore = create<IStore>(set => ({
	isLoading: false,
	selectedPackage: null,
	optionPaymentPackage: null,
	setIsLoading: (isLoad: boolean) => set(() => ({ isLoading: isLoad })),
	getPackage: async (id: number) => {
		try {
			const res = await axios.get(
				`https://jsonplaceholder.typicode.com/posts/${id}`
			);

			set({ selectedPackage: res.data });
			return res.data;
		} catch (error) {
			throw error;
		}
	},
	getOptionPaymentPackage: async (packageId: number) => {
		try {
			const res = await axios.get(
				`https://jsonplaceholder.typicode.com/posts/${packageId}/comments`
			);

			set({ optionPaymentPackage: res.data });
			return res.data;
		} catch (error) {
			throw error;
		}
	},
	payCheckout: async ({
		title,
		body,
		userId,
	}: PayloadPayPackage): Promise<IPayPackage> => {
		try {
			const res = await axios.post<IPayPackage>(
				'https://jsonplaceholder.typicode.com/posts',
				{
					title: title,
					body: body,
					userId: userId,
				}
			);
			if (res.status !== 201) {
				throw new Error(res.statusText);
			}
			return res.data;
		} catch (error) {
			throw error;
		}
	},
}));
