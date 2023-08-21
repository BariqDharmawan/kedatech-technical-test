/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
		'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			container: {
				center: true,
				screens: {
					'2xl': {
						max: '1200px',
					},
				},
			},
		},
	},
	plugins: [require('flowbite/plugin')],
};
