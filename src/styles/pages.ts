import { css, cva } from 'styled-system/css';
import { iconSizeVariants } from './icon';

export const mainLinkTitle = css({ textStyle: 'pageTitle' });

export const mainLinkVariants = cva({
	base: {
		position: 'relative',
		transition: 'color 0.2s ease-in',
		_hover: {
			color: 'violet.400',
			_before: {
				opacity: 1,
			},
		},
		_before: {
			position: 'absolute',
			left: 0,
			textStyle: 'paragraph',
			color: 'neutral.500',
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
	borderLeft: '1px solid {colors.neutral.100}',
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
			bg: 'violet.50',
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
	borderBottom: '1px solid {colors.neutral.100}',
});

export const postContentLayout = css({
	pt: 20,
	'& :is(strong, b)': {
		fontWeight: 700,
	},
	'& :is(em, i)': {
		fontStyle: 'italic',
	},
	'& :is(s, del, strike)': {
		color: 'neutral.500',
		textDecoration: 'line-through',
	},
});

export const backLinkStyle = css({
	display: 'flex',
	alignItems: 'center',
	textStyle: 'caption',
	color: 'neutral.500',
	opacity: 0.7,
	transition: 'opacity 0.2s ease-in',
	_hover: {
		opacity: 1,
	},
	'& > svg': iconSizeVariants.raw({ size: 'small' }),
});

export const postInfoTitle = css({
	textStyle: 'heading1',
	mt: 4,
	mb: 1,
});

export const postInfoDate = css({
	textStyle: 'caption',
	color: 'neutral.500',
});

const postContentMarginBase = css.raw({
	my: 5,
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
		textStyle: 'paragraph',
		paddingInlineStart: 5,
		'& ::marker': {
			color: 'neutral.500',
		},
		'& :is(ul)': {
			listStyle: 'circle',
			'& :is(ul)': {
				listStyle: 'square',
			},
		},
		'& :is(ol)': {
			listStyle: 'lower-alpha',
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

export const postContentunOrderd = css(
	postContentMarginBase,
	postContentList.raw({ kind: 'unorderd' })
);

export const postContentLink = cva({
	base: {
		position: 'relative',
		textDecorationLine: 'underline',
		textDecorationColor: 'neutral.500',
		textDecorationThickness: '1px',
		textUnderlineOffset: '4px',
	},
	variants: {
		kind: {
			outer: {},
		},
	},
});

export const postContentQuote = css(postContentMarginBase, {
	paddingInlineStart: 4,
	borderLeft: '2px solid {colors.neutral.200}',
});

export const postContentCode = cva({
	base: {
		fontFamily: 'jetBrainsMono',
		bg: 'neutral.100',
	},
	variants: {
		kind: {
			inline: {
				py: 0.5,
				px: 1,
			},
			block: {
				p: 4,
				whiteSpace: 'break-spaces',
			},
		},
	},
});

export const postContentFigure = css(postContentMarginBase, {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	rowGap: 2,
	'& :is(img, video)': {
		maxW: 'full',
		objectFit: 'contain',
	},
	'& figcaption': {
		textStyle: 'caption',
		color: 'neutral.500',
	},
});
