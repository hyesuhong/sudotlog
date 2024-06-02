import { codeToHtml } from '@/lib/markdown';

interface Props {
	code: string;
	language?: string;
}

export default async function Code({ code, language }: Props) {
	// const { theme } = useTheme();

	const html = await codeToHtml(code, language || '');

	// console.log(html);
	return language ? (
		<div dangerouslySetInnerHTML={{ __html: html }} />
	) : (
		<code>{code}</code>
	);
}
