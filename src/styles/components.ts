import { css } from 'styled-system/css';
import { iconSizeVariants } from './icon';
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
	'& > svg': iconSizeVariants.raw({ size: 'small' }),
});

export const themeSwitchClassName = css(
	iconSizeVariants.raw({ size: 'small' }),
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
