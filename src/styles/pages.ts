import { css } from 'styled-system/css';

export const mainLinkTitle = css({ textStyle: 'mainTitle' });

export const mainList = css({
	mt: 8,
	display: 'flex',
	flexDir: 'column',
	w: 'full',
	lg: {
		flexDir: 'row',
		h: '32vw',
	},
});

export const mainItem = css({
	flex: 1,
	p: 6,
	_last: {
		borderTop: '1px solid {colors.muted}',
	},
	lg: {
		p: 2,
		_last: {
			borderTop: 'none',
			borderLeft: '1px solid {colors.muted}',
		},
	},
});

export const mainLink = css({
	display: 'flex',
	flexDir: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	h: 'full',

	'& span': {
		transition: 'color 0.2s ease-in',
		_first: {
			textStyle: 'caption',
			mb: 4,
		},
		_last: {
			textDecoration: 'underline',
			textDecorationThickness: '1px',
			textUnderlineOffset: '4px',
		},
	},

	_hover: {
		'& span': {
			_last: {
				color: 'primary',
			},
		},
	},
});

export const listYear = css({
	lineHeight: '2.25rem',
	md: {
		flex: '0 0 6.75rem',
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

export const aboutImageWrapper = css({
	position: 'relative',
	mt: 10,
	mb: 6,
	w: '14.5rem',
	h: '14.5rem',
	overflow: 'hidden',
	bg: 'secondary',
	'& *': {
		w: 'full',
		h: 'full',
	},
	'& img': {
		filter: 'grayScale(1)',
		transition: 'filter 0.2s ease-in',
	},
	_after: {
		content: '""',
		position: 'absolute',
		top: 0,
		left: 0,
		w: 'full',
		h: 'full',
		bg: 'violet.700',
		mixBlendMode: 'screen',
		transition: 'opacity 0.2s ease-in',
	},
	_hover: {
		_after: {
			opacity: 0,
		},
		'& img': {
			filter: 'grayScale(0)',
		},
	},
});

export const aboutFocusText = css({
	color: 'primary',
});

export const aboutSection = css({
	mb: 20,
	_last: {
		mb: 0,
	},
});

export const topButton = css({
	position: 'fixed',
	bottom: 6,
	right: 6,
});
