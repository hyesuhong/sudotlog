import { css } from 'styled-system/css';

export const mainLinkTitle = css({ textStyle: 'mainTitle' });

export const mainList = css({
	mt: 8,
});

export const mainLink = css({
	position: 'relative',

	'& span': {
		transition: 'opacity 0.2s ease-in',

		_last: {
			content: 'attr(data-desc)',
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%,-50%)',
			whiteSpace: 'nowrap',
			opacity: 0,
		},
	},

	_hover: {
		color: 'primary',
		'& span': {
			_first: {
				opacity: 0,
			},
			_last: {
				opacity: 1,
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

export const topButton = css({
	position: 'fixed',
	bottom: 6,
	right: 6,
});
