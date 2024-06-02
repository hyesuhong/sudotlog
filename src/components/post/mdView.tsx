import {
	postContentFigure,
	postContentOrderd,
	postContentTable,
	postContentTd,
	postContentTh,
	postContentUnorderd,
} from '@/styles';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { Heading, Text } from '../common';
import Code from './code';

type Props = {
	content: string;
};

export default function MdView({ content }: Props) {
	return (
		<Markdown
			remarkPlugins={[remarkGfm]}
			rehypePlugins={[rehypeRaw]}
			components={{
				h2: ({ children }) => {
					return <Heading type='h2'>{children}</Heading>;
				},
				h3: ({ children }) => {
					return <Heading type='h3'>{children}</Heading>;
				},
				h4: ({ children }) => {
					return <Heading type='h4'>{children}</Heading>;
				},
				p: ({ children }) => <Text>{children}</Text>,
				ul: ({ children }) => (
					<ul className={postContentUnorderd}>{children}</ul>
				),
				ol: ({ children }) => <ol className={postContentOrderd}>{children}</ol>,
				table: ({ children }) => (
					<table className={postContentTable}>{children}</table>
				),
				th: ({ children }) => <th className={postContentTh}>{children}</th>,
				td: ({ children, style }) => {
					const align =
						style?.textAlign === 'center'
							? 'center'
							: style?.textAlign === 'right'
								? 'right'
								: undefined;
					return <td className={postContentTd({ align })}>{children}</td>;
				},
				figure: ({ children }) => (
					<figure className={postContentFigure}>{children}</figure>
				),
				pre: ({ children }) => <>{children}</>,
				code: ({ children, className }) => {
					const languageMatch = /language-(\w+)/.exec(className || '');
					// console.log(languageMatch);
					return (
						<Code
							code={children?.toString() || ''}
							language={languageMatch ? languageMatch[1] : undefined}
						/>
					);
				},
			}}
		>
			{content}
		</Markdown>
	);
}
