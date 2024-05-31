import { IcoArrowLeft } from '@/assets/icons';
import MdView from '@/components/post/mdView';
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
import Link from 'next/link';

interface PostPageParams {
	params: {
		slug: string;
	};
}

// export function generateMetadata() {}

export default async function Post({ params: { slug } }: PostPageParams) {
	const post = await getPostBySlug(slug);

	return (
		<>
			<TableOfContents />
			<section className={postInfoLayout}>
				<Link href='' className={backLinkStyle}>
					<IcoArrowLeft />
					Back to list
				</Link>
				<h1 className={postInfoTitle}>{post.data.title}</h1>
				<p className={postInfoDate}>
					{convertDateToString(post.data.date, 'YYYY.MM.DD')}
				</p>
			</section>
			{post.content && (
				<section className={postContentLayout}>
					<MdView content={post.content} />
				</section>
			)}
		</>
	);
}
