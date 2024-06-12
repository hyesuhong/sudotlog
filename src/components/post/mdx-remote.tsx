import plainDarkTheme from '@/styles/syntax/plain-dark-theme.json';
import plainLightTheme from '@/styles/syntax/plain-light-theme.json';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import { ReactNode, Suspense } from 'react';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkUnwrapImages from 'remark-unwrap-images';
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
		<E.Heading type='h1' {...props}>
			{children}
		</E.Heading>
	),
	h2: ({ children, ...props }) => (
		<E.Heading type='h2' {...props}>
			{children}
		</E.Heading>
	),
	h3: ({ children, ...props }) => (
		<E.Heading type='h3' {...props}>
			{children}
		</E.Heading>
	),
	h4: ({ children, ...props }) => (
		<E.Heading type='h4' {...props}>
			{children}
		</E.Heading>
	),
	h5: ({ children, ...props }) => (
		<E.Heading type='h5' {...props}>
			{children}
		</E.Heading>
	),
	h6: ({ children, ...props }) => (
		<E.Heading type='h6' {...props}>
			{children}
		</E.Heading>
	),
	p: ({ children }) => {
		if (Array.isArray(children)) {
			const childrenArr = children as ReactNode[];
			const hasImage = childrenArr.find((child) => {
				return (
					typeof child === 'object' &&
					child !== null &&
					!Array.isArray(child) &&
					'type' in child &&
					typeof child.type === 'function' &&
					child.type.name === 'img'
				);
			});

			if (hasImage) {
				return <>{children}</>;
			}
		}
		return <E.Text>{children}</E.Text>;
	},
	ul: ({ children }) => <E.List type='unordered'>{children}</E.List>,
	ol: ({ children }) => <E.List type='ordered'>{children}</E.List>,
	table: ({ children }) => <E.Table>{children}</E.Table>,
	th: ({ children }) => <E.Th>{children}</E.Th>,
	td: ({ children, style }) => {
		return <E.Td textAlign={style?.textAlign}>{children}</E.Td>;
	},
	img: ({ src, alt, title }) => <E.Image src={src} alt={alt} title={title} />,
	a: (props) => <E.Link {...props} />,
	blockquote: ({ children }) => <E.Quote>{children}</E.Quote>,
	hr: () => <E.HrLine />,
	input: ({ type, ...props }) =>
		type === 'checkbox' ? <E.Checkbox {...props} /> : <input {...props} />,
};

export default function MdxRemote(props: Props) {
	return (
		<Suspense fallback='loading...'>
			<MDXRemote {...props} options={options} components={components} />
		</Suspense>
	);
}
