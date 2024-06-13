import { convertDateToString } from '@/lib/date';
import { getAllPostInfoGroupByDate } from '@/lib/posts';
import {
	listWrapperLayout,
	listYearLayout,
	postItemLayout,
	postLinkLayout,
	postListLayout,
	postListTitle,
} from '@/styles';
import Link from 'next/link';

export default async function Page() {
	const infos = await getAllPostInfoGroupByDate();

	return infos.length > 0 ? (
		<>
			{infos.map(({ year, posts }, index) => (
				<section className={listWrapperLayout} key={year + index}>
					<p className={listYearLayout}>{year}</p>
					<ul className={postListLayout}>
						{posts.map((post, index) => (
							<li key={index} className={postItemLayout}>
								<Link href={`/posts/${post.slug}`} className={postLinkLayout}>
									<p className={postListTitle}>{post.data.title}</p>
									<p>{convertDateToString(post.data.date)}</p>
								</Link>
							</li>
						))}
					</ul>
				</section>
			))}
		</>
	) : (
		<p>There is no post yet.</p>
	);
}
