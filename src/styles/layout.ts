import { css, cva } from 'styled-system/css';

export const maxWidthRaw = css.raw({
	maxW: '3xl',
	mx: 'auto',
	px: 6,
});

export const pageLayout = cva({
	base: {
		minH: 'calc(100vh - 3.5rem)',
		position: 'relative',
		...maxWidthRaw,
	},
	variants: {
		isMain: {
			true: {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			},
			false: {
				py: '7.5rem',
			},
		},
	},
	defaultVariants: {
		isMain: false,
	},
});

export const twoColumnsLayout = css({
	display: 'flex',
	gap: 4,
});

export const postDetailLayout = cva({
	variants: {
		position: {
			top: {
				pt: 4,
				pb: 10,
				borderBottom: '1px solid {colors.muted}',
			},
			bottom: {
				pt: 20,
			},
		},
	},
});
