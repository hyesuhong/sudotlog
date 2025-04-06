import { notes } from '@/libs/article';
import { convertDateToString } from '@/libs/utils/date';
import { listYear, twoColumnsLayout } from '@/styles';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Notes',
};

export default async function Page() {
	const infos = await notes.getAllInfoGroupByDate();

	return infos.length > 0 ? (
		<>
			{infos.map(({ year, posts }) => (
				<section className={twoColumnsLayout} key={year}>
					<p className={listYear}>{year}</p>
					<ul className='postList'>
						{posts.map((post, index) => (
							<li key={index}>
								<Link href={`/notes/${post.slug}`}>
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
		<p>아직 작성된 글이 없습니다.</p>
	);
}
