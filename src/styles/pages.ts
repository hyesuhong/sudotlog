import { css, cva } from 'styled-system/css';

export const mainLinkTitle = css({ textStyle: 'mainTitle' });

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

export const listYear = css({
	lineHeight: '2.25rem',
	md: {
		flex: '0 0 6.75rem',
	},
});

export const backLinkStyle = css({
	display: 'flex',
	alignItems: 'center',
	textStyle: 'caption',
	color: 'grey',
	cursor: 'pointer',
	opacity: 0.7,
	transition: 'opacity 0.2s ease-in',
	_hover: {
		opacity: 1,
	},
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

export const postContentCheckbox = css({
	appearance: 'none',
	position: 'relative',
	width: 3,
	height: 3,
	border: '1px solid {colors.grey}',

	_disabled: {
		borderColor: 'muted',
	},

	_checked: {
		_before: {
			display: 'block',
		},
	},

	_before: {
		content: '""',
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%,-80%) rotate(-45deg)',
		width: '70%',
		height: '30%',
		borderLeft: '1px solid {colors.grey}',
		borderBottom: '1px solid {colors.grey}',
		display: 'none',
	},
});

export const aboutImageWrapper = css({
	mt: 10,
	mb: 6,
	w: '14.5rem',
	h: '14.5rem',
	overflow: 'hidden',
	bg: 'secondary',
	'& > img': {
		w: 'full',
		h: 'full',
		objectFit: 'cover',
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
