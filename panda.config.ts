import { globalCss } from '@/libs/utils/globalStyle';
import { semanticTokens, textStyles, tokens } from '@/libs/utils/themeConfig';
import { defineConfig } from '@pandacss/dev';

export default defineConfig({
	preflight: true,
	include: [
		'./src/components/**/*.{ts,tsx,js,jsx}',
		'./src/app/**/*.{ts,tsx,js,jsx}',
		'./src/styles/**/*.{ts,tsx,js,tsx}',
	],
	exclude: [],
	conditions: {
		light: '[data-theme=light] &',
		dark: '[data-theme=dark] &',
	},
	globalCss,
	theme: {
		extend: {
			textStyles,
			tokens,
			semanticTokens,
		},
	},
	importMap: 'styled-system',
	outdir: 'styled-system',
});
