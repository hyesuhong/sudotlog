import { convertDateToString } from '@/lib/date';
import { getAllPostInfoGroupByDate } from '@/lib/posts';
import { listYear, twoColumnsLayout } from '@/styles';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Posts',
};

export default async function Page() {
	const infos = await getAllPostInfoGroupByDate();

	return infos.length > 0 ? (
		<>
			{infos.map(({ year, posts }, index) => (
				<section className={twoColumnsLayout} key={year + index}>
					<p className={listYear}>{year}</p>
					<ul className='postList'>
						{posts.map((post, index) => (
							<li key={index}>
								<Link href={`/posts/${post.slug}`}>
									<p>{post.data.title}</p>
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
