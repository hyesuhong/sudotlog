import { cva } from 'styled-system/css';

export const iconSizeVariants = cva({
	variants: {
		size: {
			small: {
				w: 7,
				h: 7,
			},
		},
	},
});
