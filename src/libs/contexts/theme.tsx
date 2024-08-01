import { ThemeProvider, useTheme } from 'next-themes';
import { PropsWithChildren } from 'react';

const STORAGE_KEY = 'theme';
const ATTRIBUTE = 'data-theme';
const defaultTheme = ['light', 'dark'];

const Provider = ({ children }: PropsWithChildren) => {
	return (
		<ThemeProvider
			storageKey={STORAGE_KEY}
			attribute={ATTRIBUTE}
			themes={defaultTheme}
		>
			{children}
		</ThemeProvider>
	);
};

export { Provider as ThemeProvider, useTheme };
