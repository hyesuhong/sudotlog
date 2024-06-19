import { defineGlobalStyles } from '@pandacss/dev';

export const globalCss = defineGlobalStyles({
	html: {
		bg: 'background',
		color: 'text',
		fontFamily: 'pretendard',
		textStyle: 'paragraph',
		transition: 'background 0.2s ease-in',
		scrollBehavior: 'smooth',
	},
	'::selection': {
		backgroundColor: 'grey/80',
	},
	'html[data-theme="light"] [data-line] *': {
		color: 'var(--shiki-light)',
	},
	'html[data-theme="dark"] [data-line] *': {
		color: 'var(--shiki-dark)',
	},
});
