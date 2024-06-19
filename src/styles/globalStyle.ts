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
	/* post content  */
	'.postContents > *:first-child': {
		mt: '0!',
	},
	'.postContents :is(h1, h2, h3, h4, h5, h6)': {
		mb: 5,
		scrollMargin: '4rem',
	},
	'.postContents h1': {
		mt: 8,
		textStyle: 'heading1',
	},
	'.postContents h2': {
		mt: 7,
		textStyle: 'heading2',
	},
	'.postContents h3': {
		mt: 6,
		textStyle: 'heading3',
	},
	'.postContents h4': {
		mt: 5,
		textStyle: 'heading4',
	},
	'.postContents h5': {
		mt: 4,
		textStyle: 'heading5',
	},
	'.postContents h6': {
		mt: 3,
		textStyle: 'heading6',
	},
	'.postContents > :is(p, ul, ol, blockquote, table, details, figure, hr)': {
		my: 8,
	},
	'.postContents :is(ul, ol)': {
		display: 'flex',
		flexDir: 'column',
		rowGap: 2,
		paddingInlineStart: 5,

		'& ::marker': {
			color: 'grey',
		},
		'& :is(ul)': {
			listStyle: 'circle',
			my: 2,

			'& :is(ul)': {
				listStyle: 'square',
			},
		},
		'& :is(ol)': {
			listStyle: 'lower-alpha',
			my: 2,

			'& :is(ol)': {
				listStyle: 'lower-roman',
			},
		},
		'& li.task-list-item': {
			listStyle: 'none',

			'& input[type="checkbox"]': {
				ml: '-5',
				mr: 1,
			},
		},
	},
	'.postContents ul': {
		listStyle: 'disc',
	},
	'.postContents ol': {
		listStyle: 'decimal',
	},
	'.postContents blockquote': {
		paddingInlineStart: 4,
		borderLeft: '4px solid {colors.muted}',
		'& > p': {
			my: 2,
		},
	},
	'.postContents figure:not([data-rehype-pretty-code-figure])': {
		display: 'flex',
		flexDir: 'column',
		alignItems: 'center',
		rowGap: 2,
		'& :is(img, video)': {
			maxW: 'full',
			objectFit: 'contain',
		},
		'& figcaption': {
			textStyle: 'caption',
			color: 'grey',
		},
	},
	'.postContents table': {
		maxW: 'full',
		overflowX: 'auto',
		'& tbody tr': {
			_even: {
				bg: 'muted/60',
			},
		},
	},
	'.postContents th': {
		p: 2,
		borderBottom: '1px solid {colors.muted}',
		fontWeight: 500,
	},
	'.postContents td': {
		p: 2,
		'&.right': {
			textAlign: 'right',
		},
		'&.center': {
			textAlign: 'center',
		},
	},
	'.postContents hr': {
		color: 'muted',
	},
	'.postContents a': {
		textDecoration: 'underline',
		textDecorationColor: 'grey',
		textDecorationThickness: 1,
		textUnderlineOffset: '4px',
		transition: 'color 0.2s ease-in',
		_hover: {
			color: 'primary',
		},
		'& > svg': {
			display: 'inline-block',
			color: 'inherit',
			w: '1em',
			h: '1em',
		},
	},
	'.postContents :is(strong, b)': {
		fontWeight: 500,
	},
	'.postContents :is(em, i)': {
		fontStyle: 'italic',
	},
	'.postContents :is(s, del, strike)': {
		color: 'grey',
		textDecoration: 'line-through',
	},
	'.postContents :is(code)': {
		fontFamily: 'jetBrainsMono',
	},
	'.postContents [data-rehype-pretty-code-figure]': {
		position: 'relative',
		fontSize: '0.875rem',
	},
	'.postContents [data-rehype-pretty-code-figure]:is(span)': {
		py: 0.5,
		px: 1,
		bg: 'grey/20',
	},
	'.postContents [data-rehype-pretty-code-figure]:is(figure)': {
		my: 8,
	},
	'.postContents [data-rehype-pretty-code-figure] pre': {
		px: 4,
		py: 2,
		bg: 'grey/20',
		overflowX: 'auto',
	},
	'.postContents figure[data-rehype-pretty-code-figure] > [data-language]:not([data-language=""],[data-language="plaintext"])::after':
		{
			content: 'attr(data-language)',
			position: 'absolute',
			top: 2,
			right: 2,
			color: 'text',
			opacity: 0.2,
			fontSize: '0.9em',
		},
});
