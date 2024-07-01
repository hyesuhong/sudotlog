import plainDarkTheme from '@/styles/syntax/plain-dark-theme.json';
import plainLightTheme from '@/styles/syntax/plain-light-theme.json';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import { Suspense } from 'react';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkUnwrapImages from 'remark-unwrap-images';
import * as C from '../common';
import * as E from './elements';

type Props = Pick<MDXRemoteProps, 'source'>;

const options: MDXRemoteProps['options'] = {
	mdxOptions: {
		format: 'mdx',
		remarkPlugins: [remarkGfm, remarkUnwrapImages],
		rehypePlugins: [
			rehypeSlug,
			[
				rehypeAutolinkHeadings,
				{
					properties: {
						className: ['anchor'],
					},
				},
			],
			[
				rehypeExternalLinks,
				{
					properties: {
						class: 'external-link',
					},
					target: '_blank',
					rel: ['noopener noreferrer'],
				},
			],
			[
				rehypePrettyCode,
				{
					defaultLang: {
						block: 'plaintext',
						inline: 'plaintext',
					},
					theme: {
						dark: plainDarkTheme,
						light: plainLightTheme,
					},
					keepBackground: false,
				},
			],
		],
	},
};

const components: MDXRemoteProps['components'] = {
	h1: ({ children, ...props }) => (
		<C.Heading type='h1' {...props}>
			{children}
		</C.Heading>
	),
	h2: ({ children, ...props }) => (
		<C.Heading type='h2' {...props}>
			{children}
		</C.Heading>
	),
	h3: ({ children, ...props }) => (
		<C.Heading type='h3' {...props}>
			{children}
		</C.Heading>
	),
	h4: ({ children, ...props }) => (
		<C.Heading type='h4' {...props}>
			{children}
		</C.Heading>
	),
	h5: ({ children, ...props }) => (
		<C.Heading type='h5' {...props}>
			{children}
		</C.Heading>
	),
	h6: ({ children, ...props }) => (
		<C.Heading type='h6' {...props}>
			{children}
		</C.Heading>
	),
	p: ({ children }) => {
		return <C.Text>{children}</C.Text>;
	},
	ul: ({ children }) => <C.List type='unordered'>{children}</C.List>,
	ol: ({ children }) => <C.List type='ordered'>{children}</C.List>,
	table: ({ children }) => <E.Table>{children}</E.Table>,
	th: ({ children }) => <E.Th>{children}</E.Th>,
	td: ({ children, style }) => {
		return <E.Td textAlign={style?.textAlign}>{children}</E.Td>;
	},
	img: ({ src, alt, title }) => <C.Image src={src} alt={alt} title={title} />,
	a: (props) => <C.Link {...props} />,
	blockquote: ({ children }) => <E.Quote>{children}</E.Quote>,
	hr: () => <E.HrLine />,
	input: ({ type, ...props }) =>
		type === 'checkbox' ? <C.Checkbox {...props} /> : <input {...props} />,
	figure: ({ children, ...props }) => {
		if ('data-rehype-pretty-code-figure' in props) {
			return <E.CodeBlock {...props}>{children}</E.CodeBlock>;
		}
		return <figure {...props}>{children}</figure>;
	},
};

export default function MdxRemote(props: Props) {
	return (
		<Suspense fallback='loading...'>
			<MDXRemote {...props} options={options} components={components} />
		</Suspense>
	);
}
