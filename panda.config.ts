import { textStyles } from '@/config/theme';
import { defineConfig } from '@pandacss/dev';

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: [
		'./src/components/**/*.{ts,tsx,js,jsx}',
		'./src/app/**/*.{ts,tsx,js,jsx}',
		'./src/styles/**/*.{ts,tsx,js,tsx}',
	],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {
			textStyles: textStyles,
			tokens: {
				fonts: {
					pretendard: { value: 'var(--font-pretendard), sans-serif' },
					jetBrainsMono: {
						value: 'var(--font-jet-brains-mono), monospace',
					},
				},
				colors: {
					neutral: {
						50: { value: '#FAFAFB' },
						100: { value: '#EEEDF0' },
						200: { value: '#DEDDE0' },
						300: { value: '#C6C5C7' },
						400: { value: '#ADACAE' },
						500: { value: '#949495' },
						600: { value: '#7C7B7D' },
						700: { value: '#636264' },
						800: { value: '#4A4A4B' },
						900: { value: '#313132' },
					},
					violet: {
						50: { value: '#F6F4FD' },
						100: { value: '#ECE9FB' },
						200: { value: '#D9D2F7' },
						300: { value: '#BDB1F0' },
						400: { value: '#A18FEA' },
						500: { value: '#9181D3' },
						600: { value: '#8172BB' },
						700: { value: '#61568C' },
						800: { value: '#40395E' },
						900: { value: '#100E17' },
					},
				},
			},
		},
	},

	importMap: 'styled-system',

	// The output directory for your css system
	outdir: 'styled-system',
});
