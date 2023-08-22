import axios from 'axios';

export const getUser = async () => {
	const res = await axios.get(
		'https://jsonplaceholder.typicode.com/users?limit=4'
	);
	return res.data;
};
