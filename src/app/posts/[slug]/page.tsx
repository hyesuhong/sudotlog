import { IcoArrowLeft } from '@/assets/icons';
import { TableOfContents } from '@/components/table-of-contents';
import { convertDateToString } from '@/lib/date';
import { getPostBySlug } from '@/lib/posts';
import {
	backLinkStyle,
	postContentLayout,
	postInfoDate,
	postInfoLayout,
	postInfoTitle,
} from '@/styles';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';

interface PostPageParams {
	params: {
		slug: string;
	};
}

// export function generateMetadata() {}

export default async function Post({ params: { slug } }: PostPageParams) {
	const { data, content } = await getPostBySlug(slug);

	return (
		<>
			<TableOfContents />
			<section className={postInfoLayout}>
				<Link href='' className={backLinkStyle}>
					<IcoArrowLeft />
					Back to list
				</Link>
				<h1 className={postInfoTitle}>{data.title}</h1>
				<p className={postInfoDate}>
					{convertDateToString(data.date, 'YYYY.MM.DD')}
				</p>
			</section>
			{content && (
				<section className={postContentLayout}>
					<MDXRemote
						source={content}
						options={{
							mdxOptions: {
								remarkPlugins: [remarkGfm],
								rehypePlugins: [
									[
										rehypePrettyCode,
										{
											theme: 'nord',
										},
									],
								],
							},
						}}
					/>
				</section>
			)}
		</>
	);
}
