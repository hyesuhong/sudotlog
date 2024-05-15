import { css } from 'styled-system/css';
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
		color: 'violet.400',
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
		'& > span': {
			display: 'flex',
			w: '200%',
			h: 'full',
		},
		'& svg': {
			flex: 1,
			h: 'full',
		},
	}
);

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
	borderBottom: '1px solid {colors.neutral.100}',
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
