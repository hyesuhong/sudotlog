import {
	defineSemanticTokens,
	defineTextStyles,
	defineTokens,
} from '@pandacss/dev';

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
	heading6: {
		value: {
			fontSize: '0.85rem',
			fontWeight: 500,
			lineHeight: '110%',
		},
	},
	heading5: {
		value: {
			fontSize: '0.9rem',
			fontWeight: 500,
			lineHeight: '110%',
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
			fontSize: '1.25rem',
			fontWeight: 900,
			fontStyle: 'italic',
		},
	},
	mainTitle: {
		value: {
			fontSize: '3rem',
			fontWeight: 900,
			lineHeight: '1.5',
			fontStyle: 'italic',
		},
	},
});

export const tokens = defineTokens({
	fonts: {
		pretendard: { value: 'var(--font-pretendard), sans-serif' },
		jetBrainsMono: {
			value: 'var(--font-jet-brains-mono), monospace',
		},
	},
	colors: {
		neutral: {
			50: { value: '#FAFAFB' },
			100: { value: '#EEEDF0' },
			200: { value: '#DEDDE0' },
			300: { value: '#C6C5C7' },
			400: { value: '#ADACAE' },
			500: { value: '#949495' },
			600: { value: '#7C7B7D' },
			700: { value: '#636264' },
			800: { value: '#4A4A4B' },
			900: { value: '#313132' },
		},
		violet: {
			50: { value: '#F6F4FD' },
			100: { value: '#ECE9FB' },
			200: { value: '#D9D2F7' },
			300: { value: '#BDB1F0' },
			400: { value: '#A18FEA' },
			500: { value: '#9181D3' },
			600: { value: '#8172BB' },
			700: { value: '#61568C' },
			800: { value: '#40395E' },
			900: { value: '#100E17' },
		},
	},
});

export const semanticTokens = defineSemanticTokens({
	colors: {
		background: {
			value: {
				_light: '{colors.neutral.50}',
				_dark: '{colors.neutral.900}',
			},
		},
		text: {
			value: {
				_light: '{colors.neutral.800}',
				_dark: '{colors.neutral.100}',
			},
		},
		primary: {
			value: {
				base: '{colors.violet.400}',
			},
		},
		secondary: {
			value: {
				_light: '{colors.violet.100}',
				_dark: '{colors.violet.800}',
			},
		},
		grey: {
			value: {
				base: '{colors.neutral.500}',
			},
		},
		muted: {
			value: {
				_light: '{colors.neutral.100}',
				_dark: '{colors.neutral.700}',
			},
		},
	},
});
