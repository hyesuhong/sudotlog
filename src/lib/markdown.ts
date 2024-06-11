import { bundledLanguages, getHighlighter } from 'shiki';

export const codeToHtml = async (code: string, language: string) => {
	const highlighter = await getHighlighter({
		langs: [...Object.keys(bundledLanguages)],
		themes: ['github-dark', 'github-light'],
	});

	const html = highlighter.codeToHtml(code, {
		lang: language,
		themes: {
			dark: 'github-dark',
			light: 'github-light',
		},
	});

	return html;
};
