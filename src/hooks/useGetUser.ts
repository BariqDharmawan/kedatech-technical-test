import fetcher from '@/helper/fetcher';
import { BASE_API } from '@/types/constant';
import { IUser } from '@/types/userType';
import useSWR from 'swr';

export function useGetUser(id: number | null) {
	const { data, isLoading, error, mutate } = useSWR<IUser>(
		id ? `${BASE_API}/users/${id}` : `${BASE_API}/users`,
		fetcher
	);

	return {
		user: data,
		isLoading,
		error,
		refetch: mutate(),
	};
}
