import plainDarkTheme from '@/styles/syntax/plain-dark-theme.json';
import plainLightTheme from '@/styles/syntax/plain-light-theme.json';
import {
	MDXRemoteComponents,
	MDXRemoteOptions,
	MDXRemoteWithoutSource,
} from '@/types/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Suspense } from 'react';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkUnwrapImages from 'remark-unwrap-images';
import * as Common from '../common';
import * as Element from './elements';

const options: MDXRemoteOptions = {
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

const components: MDXRemoteComponents = {
	h1: ({ children, ...props }) => (
		<Common.Heading type='h1' {...props}>
			{children}
		</Common.Heading>
	),
	h2: ({ children, ...props }) => (
		<Common.Heading type='h2' {...props}>
			{children}
		</Common.Heading>
	),
	h3: ({ children, ...props }) => (
		<Common.Heading type='h3' {...props}>
			{children}
		</Common.Heading>
	),
	h4: ({ children, ...props }) => (
		<Common.Heading type='h4' {...props}>
			{children}
		</Common.Heading>
	),
	h5: ({ children, ...props }) => (
		<Common.Heading type='h5' {...props}>
			{children}
		</Common.Heading>
	),
	h6: ({ children, ...props }) => (
		<Common.Heading type='h6' {...props}>
			{children}
		</Common.Heading>
	),
	p: ({ children }) => {
		return <Common.Text>{children}</Common.Text>;
	},
	ul: ({ children }) => <Common.List type='unordered'>{children}</Common.List>,
	ol: ({ children }) => <Common.List type='ordered'>{children}</Common.List>,
	table: ({ children }) => <Element.Table>{children}</Element.Table>,
	th: ({ children }) => <Element.Th>{children}</Element.Th>,
	td: ({ children, style }) => {
		return <Element.Td textAlign={style?.textAlign}>{children}</Element.Td>;
	},
	img: ({ src, alt, title }) => (
		<Common.Image src={src} alt={alt} title={title} />
	),
	a: (props) => <Common.Link {...props} />,
	blockquote: ({ children }) => <Element.Quote>{children}</Element.Quote>,
	hr: () => <Element.HrLine />,
	input: ({ type, ...props }) =>
		type === 'checkbox' ? <Common.Checkbox {...props} /> : <input {...props} />,
	figure: ({ children, ...props }) => {
		if ('data-rehype-pretty-code-figure' in props) {
			return <Element.CodeBlock {...props}>{children}</Element.CodeBlock>;
		}
		return <figure {...props}>{children}</figure>;
	},
};

export default async function MdxRemote(props: MDXRemoteWithoutSource) {
	const remote = await MDXRemote({ source: props.source, options, components });
	return <Suspense fallback='loading...'>{remote}</Suspense>;
}
