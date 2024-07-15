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
	columnGap: 4,
	zIndex: 10,
});

export const headerLogoClassName = css({
	textStyle: 'headerLogo',
	transition: 'color 0.2s ease-in',
	_hover: {
		color: 'primary',
	},
});

export const headerNavClassName = css({
	display: 'flex',
	flex: 1,
	justifyContent: 'space-between',
	alignItems: 'center',
});

export const haederListClassName = css({
	display: 'flex',
	columnGap: 2,
});

export const headerNavLink = css({
	textStyle: 'caption',
	color: 'grey',
	transition: 'color 0.2s ease-in',
	'&:not(.current):hover': {
		color: 'text',
	},
	'&.current': {
		color: 'primary',
	},
});

export const footerElClassName = css(maxWidthRaw, {
	display: 'flex',
	flexDir: 'column',
	justifyContent: 'center',
	rowGap: 1,
	h: 14,
});

export const copyrightClassName = css({
	textStyle: 'label',
	lineHeight: 1,
});

export const iconLinkClassName = css({
	opacity: 0.6,
	transition: 'opacity 0.3s ease-in',
	_hover: {
		opacity: 1,
	},
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
	display: 'flex',
	flexDir: 'column',
	rowGap: 1,
	py: 1,
	px: 3,
	maxH: 'calc(100vh - 11.25rem )',
	borderLeft: '1px solid {colors.muted}',
	textStyle: 'label',

	'& a': {
		color: 'grey',
	},

	'& a.active': {
		color: 'primary',
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
	top: 1,
	right: 2,
});

export const buttonClass = cva({
	base: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		columnGap: 2,

		h: 8,
		p: 1,

		color: 'grey',
		textStyle: 'label',

		md: {
			cursor: 'pointer',
			transition: 'background 0.2s ease-in, color 0.2s ease-in',

			_hover: {
				opacity: 1,
			},
		},

		'& > svg': {
			w: 'full',
			h: 'full',
		},
	},
	variants: {
		hasBg: {
			true: {
				bg: 'muted/50',
				md: {
					_hover: {
						bg: 'muted',
					},
				},
			},
			false: {
				bg: 'transparent',
			},
		},
		isIconOnly: {
			true: {
				w: 8,
			},
			false: {
				minW: 8,
			},
		},
	},
	defaultVariants: {
		hasBg: true,
		isIconOnly: false,
	},
});
