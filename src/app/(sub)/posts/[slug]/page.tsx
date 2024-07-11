import { Giscus } from '@/components/comments';
import { BackLink } from '@/components/common';
import { MdxRemote } from '@/components/post';
import { TableOfContents } from '@/components/table-of-contents';
import { generateToc, getAllPostInfo, getPostBySlug } from '@/libs/posts';
import { convertDateToString } from '@/libs/utils/date';
import { postDetailLayout, postInfoDate, postInfoTitle } from '@/styles';
import { PageWithSlugProps } from '@/types/components';
import { Metadata } from 'next';

export async function generateMetadata({
	params,
}: PageWithSlugProps): Promise<Metadata> {
	const { slug } = params;

	const postInfo = await getPostBySlug(slug);

	return {
		title: postInfo.data.title,
		keywords: postInfo.data.tags,
		description: postInfo.data.description,
	};
}

export async function generateStaticParams() {
	const posts = await getAllPostInfo();
	return posts.map((post) => ({ slug: post.slug }));
}

export default async function Post({ params: { slug } }: PageWithSlugProps) {
	const { data, content } = await getPostBySlug(slug);
	const toc = content ? generateToc(content) : [];

	return (
		<>
			<TableOfContents headers={toc} />
			<section className={postDetailLayout({ position: 'top' })}>
				<BackLink label='Back to list' />
				<h1 className={postInfoTitle}>{data.title}</h1>
				<p className={postInfoDate}>
					{convertDateToString(data.date, 'YYYY.MM.DD')}
				</p>
			</section>
			{content && (
				<>
					<section
						className={`content ${postDetailLayout({ position: 'bottom' })}`}
					>
						<MdxRemote source={content} />
					</section>
					<Giscus />
				</>
			)}
		</>
	);
}
