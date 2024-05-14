import { css, cva } from 'styled-system/css';

export const maxWidthRaw = css.raw({
	maxW: '5xl',
	mx: 'auto',
	px: 6,
});

export const pageLayout = cva({
	base: {
		minH: 'calc(100vh - 2.5rem)',
		maxW: '5xl',
		mx: 'auto',
		px: 6,
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
