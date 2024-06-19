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
	/* posts list */
	'.postList': {
		flex: 1,
		display: 'grid',
		gridTemplateColumns: 'minmax(0,1fr) max-content',
		gridAutoRows: '2.25rem',
		rowGap: 2,
		pl: 4,
		borderLeft: '1px solid {colors.muted}',
	},
	'.postList > li': {
		gridColumn: 'span 2',

		display: 'grid',
		gridTemplateColumns: 'subgrid',
		columnGap: 4,
	},
	'.postList a': {
		gridColumn: 'span 2',
		display: 'grid',
		gridTemplateColumns: 'subgrid',
		px: 2,
		alignItems: 'center',
		md: {
			transition: 'background-color 0.2s ease-in',
			_hover: {
				bg: 'secondary',
			},
		},
	},
	'.postList p:last-child': {
		justifySelf: 'end',
	},
});
