import { Giscus } from '@/components/comments';
import { BackLink } from '@/components/common';
import { MdxRemote } from '@/components/post';
import { TableOfContents } from '@/components/table-of-contents';
import { posts } from '@/libs/article';
import { convertDateToString } from '@/libs/utils/date';
import { generateToc } from '@/libs/utils/table-of-contents';
import { postDetailLayout, postInfoDate, postInfoTitle } from '@/styles';
import { PageWithSlugProps } from '@/types/components';
import { Metadata } from 'next';

export async function generateMetadata({
	params,
}: PageWithSlugProps): Promise<Metadata> {
	const { slug } = await params;

	const postInfo = await posts.getBySlug(slug);

	return {
		title: postInfo.data.title,
		keywords: postInfo.data.tags,
		description: postInfo.data.description,
	};
}

export async function generateStaticParams() {
	const infos = await posts.getAllInfo();
	return infos.map((post) => ({ slug: post.slug }));
}

export default async function Post({ params }: PageWithSlugProps) {
	const { slug } = await params;
	const { data, content } = await posts.getBySlug(slug);
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
