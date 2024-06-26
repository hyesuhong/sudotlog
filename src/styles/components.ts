import { css, cva } from 'styled-system/css';
import { maxWidthRaw } from './layout';

export const headerElClassName = css(maxWidthRaw, {
	position: 'fixed',
	top: 0,
	left: '50%',
	transform: 'translateX(-50%)',
	width: 'full',
	h: '3.5rem',
	display: 'flex',
	alignItems: 'center',
	zIndex: 10,
});

export const headerLogoClassName = css({
	textStyle: 'headerLogo',
	transition: 'color 0.2s ease-in',
	_hover: {
		color: 'primary',
	},
});

export const footerElClassName = css(maxWidthRaw, {
	display: 'flex',
	alignItems: 'center',
	h: 10,
});

export const copyrightClassName = css({
	textStyle: 'label',
});

export const footerLinkListClassName = css({
	display: 'flex',
	columnGap: 1,
	ml: 6,
	mr: 'auto',
});

export const footerLinkItemClassName = css({
	opacity: 0.6,
	transition: 'opacity 0.3s ease-in',
	_hover: {
		opacity: 1,
	},
	// '& > svg': iconSizeVariants.raw({ size: 'small' }),
	'& > svg': {
		w: 7,
		h: 7,
	},
});

export const themeSwitchClassName = css(
	{
		w: 7,
		h: 7,
	},
	{
		overflow: 'hidden',
		opacity: 0.6,
		cursor: 'pointer',
		transition: 'opacity 0.3s ease-in',
		_hover: {
			opacity: 1,
		},
	}
);

export const themeSwitchIconsWrapper = cva({
	base: {
		display: 'flex',
		w: '200%',
		h: 'full',
		transform: 'translateX(var(--translate-x))',
		transition: 'transform 0.2s ease-in',
		'& svg': {
			flex: 1,
			h: 'full',
		},
	},
	variants: {
		theme: {
			light: {
				translateX: '0',
			},
			dark: {
				translateX: '-50%',
			},
		},
	},
});

export const tocWrapperClassName = css({
	display: 'none',
	xl: {
		display: 'block',
		position: 'absolute',
		top: 0,
		left: '100%',
		w: '14.5rem',
		height: 'full',
	},
});

export const tocStickyWrapperClassName = css({
	position: 'sticky',
	mt: '22.375rem',
	top: '7.5rem',
});

export const tocListClassName = css({
	p: 4,
	mb: 4,
	maxH: 'calc(100vh - 11.25rem )',
	borderBottom: '1px solid {colors.muted}',
});

export const tocTopButtonClassName = css({
	w: 7,
	h: 7,
	cursor: 'pointer',
	'& > svg': {
		w: 'full',
		h: 'full',
	},
});

export const backLinkClassName = css({
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

export const checkboxClassName = css({
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

export const copyButton = css({
	position: 'absolute',
	top: 2,
	right: 2,
	w: 7,
	h: 7,
	opacity: 0.6,

	md: {
		cursor: 'pointer',

		_hover: {
			opacity: 1,
		},
	},

	'& > svg': {
		w: 'full',
		h: 'full',
	},
});
