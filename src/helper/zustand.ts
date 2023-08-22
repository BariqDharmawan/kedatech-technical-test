import {
	IPackageAvailable,
	PaymentOptionPackage,
} from '@/types/packageAvailableType';
import axios from 'axios';
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
}));
