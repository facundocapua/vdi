/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					'50': '#f8f6ee',
					'100': '#eee8d3',
					'200': '#dfd1a9',
					'300': '#cdb277',
					'400': '#be9851',
					'500': '#b88c48',
					'600': '#966a38',
					'700': '#785030',
					'800': '#66422d',
					'900': '#58392b',
					'950': '#321e16',
				}
			},
			fontFamily: {
				'heading': ['Maverix', 'system-ui', 'sans-serif'],
				'subheading': ['Nexa', 'system-ui', 'sans-serif'],
			}
		},
	},
	plugins: [],
}
