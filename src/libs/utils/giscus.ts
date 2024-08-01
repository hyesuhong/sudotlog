import { GiscusThemeType } from '@/types/theme';

const giscusTheme = {
	dark: 'https://giscus.app/themes/noborder_gray.css',
	light: 'https://giscus.app/themes/noborder_light.css',
};

export const changeGiscusTheme = (theme: GiscusThemeType) => {
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
};

export const generateGiscusOption = (theme: GiscusThemeType) => {
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
