import { IcoArrowLeft } from '@/assets/icons';
import { MdxRemote } from '@/components/post';
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
	const { data, content } = await getPostBySlug(slug);

	return (
		<>
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
					<MdxRemote source={content} />
				</section>
			)}
		</>
	);
}
