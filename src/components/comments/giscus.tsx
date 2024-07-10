'use client';

import { useTheme } from '@/libs/contexts/theme';
import { useCallback, useEffect } from 'react';

const giscusTheme = {
	dark: 'https://giscus.app/themes/noborder_gray.css',
	light: 'https://giscus.app/themes/noborder_light.css',
};

type GiscusThemeType = keyof typeof giscusTheme;

export default function Giscus() {
	const { theme } = useTheme();
	const initialTheme = theme === 'light' ? 'light' : 'dark';

	const changeGiscusTheme = useCallback((theme: GiscusThemeType) => {
		const iframe = document.querySelector<HTMLIFrameElement>(
			'iframe.giscus-frame'
		);

		if (!iframe) {
			return;
		}

		iframe.contentWindow?.postMessage(
			{
				giscus: {
					setConfig: {
						theme: giscusTheme[theme],
					},
				},
			},
			'https://giscus.app'
		);
	}, []);

	const handleStorage = (ev: StorageEvent) => {
		const { newValue } = ev;

		if (!newValue || (newValue !== 'light' && newValue !== 'dark')) {
			return;
		}

		changeGiscusTheme(newValue);
	};

	useEffect(() => {
		const giscusAttrs = _generateGiscusOption(initialTheme);

		const section = document.querySelector('section.giscus');

		const script = document.createElement('script');
		Object.entries(giscusAttrs).forEach(([key, value]) =>
			script.setAttribute(key, value)
		);

		section?.appendChild(script);

		window.addEventListener('storage', handleStorage);

		() => {
			console.log('disconnect');
			window.removeEventListener('storage', handleStorage);
		};
	}, []);

	return (
		<>
			<section className='giscus' />
		</>
	);
}

const _generateGiscusOption = (theme: GiscusThemeType) => {
	return {
		src: 'https://giscus.app/client.js',
		'data-repo': 'hyesuhong/sudotlog',
		'data-repo-id': 'R_kgDOL5KkyQ',
		'data-category': 'General',
		'data-category-id': 'DIC_kwDOL5Kkyc4Cgqm9',
		'data-mapping': 'pathname',
		'data-strict': '0',
		'data-reactions-enabled': '1',
		'data-emit-metadata': '0',
		'data-input-position': 'top',
		'data-theme': giscusTheme[theme],
		'data-lang': 'ko',
		crossorigin: 'anonymous',
		async: 'true',
	};
};
