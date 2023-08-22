import { create } from 'zustand';

export interface IStore {
	isLoading: boolean;
	setIsLoading: (isLoading: boolean) => void;
}

export const useStore = create<IStore>(set => ({
	isLoading: false,
	setIsLoading: (isLoad: boolean) => set(() => ({ isLoading: isLoad })),
}));
