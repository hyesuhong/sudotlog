import { Dispatch, PropsWithChildren, SetStateAction } from 'react';

export interface UseThemeProps {
	themes: string[];
	setTheme: Dispatch<SetStateAction<string>>;
	theme?: string;
}

export interface ThemeProviderProps extends PropsWithChildren {
	themes?: string[];
	storageKey?: string;
}

export type SetThemeFunction = (value: string) => string;

export type GiscusThemeType = 'dark' | 'light';
