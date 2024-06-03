import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import { Suspense } from 'react';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import {
	Heading,
	HrLine,
	Image,
	Link,
	List,
	Quote,
	Table,
	Td,
	Text,
	Th,
} from './elements';

type Props = Pick<MDXRemoteProps, 'source'>;

const options: MDXRemoteProps['options'] = {
	mdxOptions: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [
			rehypeSlug,
			[
				rehypeAutolinkHeadings,
				{
					behavior: 'wrap',
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
					theme: 'nord',
				},
			],
		],
	},
};

const components: MDXRemoteProps['components'] = {
	h1: ({ children, ...props }) => (
		<Heading type='h1' {...props}>
			{children}
		</Heading>
	),
	h2: ({ children, ...props }) => (
		<Heading type='h2' {...props}>
			{children}
		</Heading>
	),
	h3: ({ children, ...props }) => (
		<Heading type='h3' {...props}>
			{children}
		</Heading>
	),
	h4: ({ children, ...props }) => (
		<Heading type='h4' {...props}>
			{children}
		</Heading>
	),
	h5: ({ children, ...props }) => (
		<Heading type='h5' {...props}>
			{children}
		</Heading>
	),
	h6: ({ children, ...props }) => (
		<Heading type='h6' {...props}>
			{children}
		</Heading>
	),
	p: ({ children }) => <Text>{children}</Text>,
	ul: ({ children }) => <List type='unordered'>{children}</List>,
	ol: ({ children }) => <List type='ordered'>{children}</List>,
	table: ({ children }) => <Table>{children}</Table>,
	th: ({ children }) => <Th>{children}</Th>,
	td: ({ children, style }) => {
		return <Td textAlign={style?.textAlign}>{children}</Td>;
	},
	img: ({ src, alt }) => <Image src={src} alt={alt} />,
	a: (props) => <Link {...props} />,
	blockquote: ({ children }) => <Quote>{children}</Quote>,
	hr: () => <HrLine />,
};

export default function MdxRemote(props: Props) {
	return (
		<Suspense fallback='loading...'>
			<MDXRemote {...props} options={options} components={components} />
		</Suspense>
	);
}
