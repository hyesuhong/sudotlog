'use client';

import {
	SetThemeFunction,
	ThemeProviderProps,
	UseThemeProps,
} from '@/types/theme';
import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';

const MEDIA_DARK = '(prefers-color-scheme: dark)';
const STORAGE_KEY = 'theme';
const ATTRIBUTE = 'data-theme';
const defaultTheme = ['light', 'dark'];

const initialTheme: UseThemeProps = { themes: [], setTheme: () => {} };
const ThemeContext = createContext<UseThemeProps | undefined>(undefined);

export const useTheme = () => useContext(ThemeContext) || initialTheme;

export const ThemeProvider = ({
	themes = defaultTheme,
	storageKey = STORAGE_KEY,
	children,
}: ThemeProviderProps) => {
	const [theme, setThemeState] = useState(() => getTheme(storageKey, 'light'));

	const setTheme = useCallback(
		(value: SetThemeFunction | string) => {
			const newTheme = typeof value === 'function' ? value(theme) : value;

			setThemeState(newTheme);

			localStorage.setItem(storageKey, newTheme);
			window.dispatchEvent(
				new StorageEvent('storage', { key: STORAGE_KEY, newValue: newTheme })
			);
		},
		[theme, storageKey]
	);

	const applyTheme = useCallback((themeValue: string) => {
		if (typeof window === 'undefined') {
			return;
		}

		const docEl = document.documentElement;
		docEl.setAttribute(ATTRIBUTE, themeValue);
	}, []);

	useEffect(() => {
		applyTheme(theme);
	}, [theme, applyTheme]);

	const providerValue = useMemo(
		() => ({
			themes,
			theme,
			setTheme,
		}),
		[setTheme, theme, themes]
	);

	return (
		<ThemeContext.Provider value={providerValue}>
			{children}
		</ThemeContext.Provider>
	);
};

const getTheme = (key: string, defaultTheme: string) => {
	if (typeof window === 'undefined') {
		return defaultTheme;
	}

	const theme = localStorage.getItem(key) || getSystemTheme();
	return theme || defaultTheme;
};

const getSystemTheme = () => {
	if (typeof window === 'undefined') {
		return undefined;
	}

	const media = window.matchMedia(MEDIA_DARK);
	const systemIsDark = media.matches;
	const system = systemIsDark ? 'dark' : 'light';
	return system;
};
