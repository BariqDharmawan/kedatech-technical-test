'use client';

import { Label, TextInput } from 'flowbite-react';
import { FC, FormEvent, HTMLInputTypeAttribute, SVGProps } from 'react';

export default function InputIconLeft({
	label,
	id,
	placeholder,
	type,
	icon,
	required = false,
}: {
	label: string;
	id: string;
	placeholder: string;
	required?: boolean;
	icon: FC<SVGProps<SVGSVGElement>>;
	type?: HTMLInputTypeAttribute;
}) {
	const handleInputTel = (e: FormEvent) => {
		const inputEl = e.target as HTMLInputElement;
		inputEl.value = inputEl.value
			.replace(/[^0-9.]/g, '')
			.replace(/(\..*?)\..*/g, '$1');
	};
	return (
		<div className='w-full'>
			<div className='mb-2 block'>
				<Label htmlFor={id} value={label} />
			</div>
			{type === 'tel' ? (
				<TextInput
					icon={icon}
					id={id}
					placeholder={placeholder}
					type='tel'
					onInput={(e: FormEvent) => handleInputTel(e)}
					required={required}
				/>
			) : (
				<TextInput
					icon={icon}
					id={id}
					placeholder={placeholder}
					type={type ? type : 'text'}
					required={required}
				/>
			)}
		</div>
	);
}
