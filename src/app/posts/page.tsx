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
	const slugs = await getAllPostInfoGroupByDate();
	const years = Object.keys(slugs);
	const yearsDesc = years.toSorted((a, b) => (a > b ? -1 : a < b ? 1 : 0));

	return yearsDesc.length > 0 ? (
		<>
			{yearsDesc.map((year, index) => (
				<section className={listWrapperLayout} key={year + index}>
					<p className={listYearLayout}>{year}</p>
					<ul className={postListLayout}>
						{slugs[Number(year)].map((info, index) => (
							<li key={index} className={postItemLayout}>
								<Link href={`/posts/${info.slug}`} className={postLinkLayout}>
									<p className={postListTitle}>{info.data.title}</p>
									<p>{convertDateToString(info.data.date)}</p>
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
