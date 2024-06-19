import { BackLink } from '@/components/common';
import { MdxRemote } from '@/components/post';
import { convertDateToString } from '@/lib/date';
import { getAllPostInfo, getPostBySlug } from '@/lib/posts';
import { postDetailLayout, postInfoDate, postInfoTitle } from '@/styles';
import { Metadata } from 'next';

interface PostPageParams {
	params: {
		slug: string;
	};
}

export async function generateMetadata({
	params,
}: PostPageParams): Promise<Metadata> {
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

export default async function Post({ params: { slug } }: PostPageParams) {
	const { data, content } = await getPostBySlug(slug);

	return (
		<>
			<section className={postDetailLayout({ position: 'top' })}>
				<BackLink label='Back to list' />
				<h1 className={postInfoTitle}>{data.title}</h1>
				<p className={postInfoDate}>
					{convertDateToString(data.date, 'YYYY.MM.DD')}
				</p>
			</section>
			{content && (
				<section
					className={`postContents ${postDetailLayout({ position: 'bottom' })}`}
				>
					<MdxRemote source={content} />
				</section>
			)}
		</>
	);
}
