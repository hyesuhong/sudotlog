import { defineTextStyles } from '@pandacss/dev';

export const textStyles = defineTextStyles({
	paragraph: {
		description: 'Default body text style',
		value: {
			fontSize: '1rem',
			fontWeight: 300,
			lineHeight: '160%',
		},
	},
	caption: {
		description:
			'Smaller than body, for small contents like captions or comments',
		value: {
			fontSize: '0.875rem',
			fontWeight: 300,
			lineHeight: '160%',
		},
	},
	label: {
		description: "style for button or input's label",
		value: {
			fontSize: '0.75rem',
			fontWeight: 300,
			lineHeight: '210%',
		},
	},
	heading4: {
		value: {
			fontSize: '1rem',
			fontWeight: 600,
			lineHeight: '110%',
		},
	},
	heading3: {
		value: {
			fontSize: '1.125rem',
			fontWeight: 600,
			lineHeight: '110%',
		},
	},
	heading2: {
		value: {
			fontSize: '1.25rem',
			fontWeight: 600,
			lineHeight: '110%',
		},
	},
	heading1: {
		value: {
			fontSize: '1.5rem',
			fontWeight: 600,
			lineHeight: '110%',
		},
	},
	headerLogo: {
		value: {
			fontSize: '2rem',
			fontWeight: 900,
		},
	},
	pageTitle: {
		value: {
			fontSize: '3rem',
			fontWeight: 900,
		},
	},
});
