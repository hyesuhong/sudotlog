import { css, cva } from 'styled-system/css';

export const mainLinkTitle = css({ textStyle: 'pageTitle' });

export const mainLinkVariants = cva({
	base: {
		position: 'relative',
		transition: 'color 0.2s ease-in',
		_hover: {
			color: 'primary',
			_before: {
				opacity: 1,
			},
		},
		_before: {
			position: 'absolute',
			left: 0,
			textStyle: 'paragraph',
			color: 'grey',
			md: {
				opacity: 0,
				pointerEvents: 'none',
				transition: 'opacity 0.2s ease-in',
			},
		},
	},
	variants: {
		kind: {
			about: {
				_before: {
					content: '"About"',
					bottom: 'full',
					transform: 'translateY(-20%)',
				},
			},
			blog: {
				_before: {
					content: '"Checking"',
					top: '100%',
				},
			},
		},
	},
});

export const listWrapperLayout = css({
	display: 'flex',
	gap: 4,
	textStyle: 'paragraph',
});

export const listYearLayout = css({
	lineHeight: '2.25rem',
	md: {
		flex: '0 0 6.75rem',
	},
});

export const postListLayout = css({
	flex: 1,
	display: 'grid',
	gridTemplateColumns: 'minmax(0,1fr) max-content',
	gridAutoRows: '2.25rem',
	rowGap: 2,
	pl: 4,
	borderLeft: '1px solid {colors.muted}',
});

export const postItemLayout = css({
	gridColumn: 'span 2',

	display: 'grid',
	gridTemplateColumns: 'subgrid',
	columnGap: 4,
});

export const postLinkLayout = css({
	gridColumn: 'span 2',
	display: 'grid',
	gridTemplateColumns: 'subgrid',
	px: 2,
	alignItems: 'center',
	'& :last-child': {
		justifySelf: 'end',
	},
	md: {
		transition: 'background-color 0.2s ease-in',
		_hover: {
			bg: 'secondary',
		},
	},
});

export const postListTitle = css({
	overflow: 'hidden',
	whiteSpace: 'nowrap',
	textOverflow: 'ellipsis',
});

export const postInfoLayout = css({
	pt: 4,
	pb: 10,
	borderBottom: '1px solid {colors.muted}',
});

export const postContentLayout = css({
	pt: 20,
	'& :is(strong, b)': {
		fontWeight: 500,
	},
	'& :is(em, i)': {
		fontStyle: 'italic',
	},
	'& :is(s, del, strike)': {
		color: 'grey',
		textDecoration: 'line-through',
	},
	'& code': {
		fontFamily: 'jetBrainsMono',
	},
	'& [data-rehype-pretty-code-figure]': {
		fontSize: '0.875rem',
	},
	'& [data-rehype-pretty-code-figure]:is(span)': {
		py: 0.5,
		px: 1,
		bg: 'grey/20',
	},
	'& [data-rehype-pretty-code-figure]:is(figure)': {
		my: 8,
	},
	'& [data-rehype-pretty-code-figure] pre': {
		px: 4,
		py: 2,
		bg: 'grey/20',
		overflowX: 'auto',
	},
});

export const backLinkStyle = css({
	display: 'flex',
	alignItems: 'center',
	textStyle: 'caption',
	color: 'grey',
	opacity: 0.7,
	transition: 'opacity 0.2s ease-in',
	_hover: {
		opacity: 1,
	},
	// '& > svg': iconSizeVariants.raw({ size: 'small' }),
	'& > svg': {
		w: 7,
		h: 7,
	},
});

export const postInfoTitle = css({
	textStyle: 'heading1',
	mt: 4,
	mb: 1,
});

export const postInfoDate = css({
	textStyle: 'caption',
	color: 'grey',
});

const postContentMarginBase = css.raw({
	my: 8,
});

export const postContentHeadings = cva({
	base: {
		mb: 5,
		_first: {
			mt: 0,
		},
	},
	variants: {
		kind: {
			heading1: {
				textStyle: 'heading2',
				mt: 7,
			},
			heading2: {
				textStyle: 'heading3',
				mt: 6,
			},
			heading3: {
				textStyle: 'heading4',
				mt: 5,
			},
		},
	},
});

export const postContentPara = css(postContentMarginBase, {
	textStyle: 'paragraph',
});

const postContentList = cva({
	base: {
		display: 'flex',
		flexDir: 'column',
		rowGap: 2,

		textStyle: 'paragraph',
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
	},
	variants: {
		kind: {
			orderd: {
				listStyle: 'decimal',
			},
			unorderd: {
				listStyle: 'disc',
			},
		},
	},
});

export const postContentOrderd = css(
	postContentMarginBase,
	postContentList.raw({ kind: 'orderd' })
);

export const postContentUnorderd = css(
	postContentMarginBase,
	postContentList.raw({ kind: 'unorderd' })
);

export const postContentLink = cva({
	base: {
		position: 'relative',
		textDecorationLine: 'underline',
		textDecorationColor: 'grey',
		textDecorationThickness: '1px',
		textUnderlineOffset: '4px',
	},
	variants: {
		kind: {
			outer: {
				_after: {
					content: '"->"',
				},
			},
		},
	},
});

export const postContentQuote = css(postContentMarginBase, {
	paddingInlineStart: 4,
	borderLeft: '4px solid {colors.muted}',
	'& > p': {
		my: 2,
	},
});

export const postContentFigure = css(postContentMarginBase, {
	position: 'relative',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	rowGap: 2,
	'& :is(img, video)': {
		position: 'static!',
		maxW: 'full',
		objectFit: 'contain',
	},
	'& figcaption': {
		textStyle: 'caption',
		color: 'grey',
	},
});

export const postContentTable = css(postContentMarginBase, {
	w: 'full',
	'& tbody tr': {
		_even: {
			bg: 'muted/60',
		},
	},
});

export const postContentTh = css({
	p: 2,
	borderBottom: '1px solid {colors.muted}',
	fontWeight: 500,
});

export const postContentTd = cva({
	base: {
		p: 2,
	},
	variants: {
		align: {
			right: {
				textAlign: 'right',
			},
			center: {
				textAlign: 'center',
			},
		},
	},
});

export const postContentLine = css(postContentMarginBase, {
	color: 'muted',
});
