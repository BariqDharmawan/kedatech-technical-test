import { IconPhoneCall, IconUser } from '@tabler/icons-react';

import InputIconLeft from './InputIconLeft';

const FormContact = () => {
	return (
		<form method='POST' onSubmit={() => console.log('submitted')}>
			<div className='flex flex-col gap-5 mb-5'>
				<InputIconLeft
					icon={IconUser}
					label='Name'
					id='fullname'
					placeholder='Fill your fullname'
					required
				/>
				<InputIconLeft
					icon={IconPhoneCall}
					label='Phone Number'
					id='phone-number'
					type='tel'
					placeholder='Fill your Phone Number'
					required
				/>
			</div>
			<button className='inline-flex  justify-center rounded-lg bg-cyan-600 px-3 py-2 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900'>
				Send your message
			</button>
		</form>
	);
};

export default FormContact;
