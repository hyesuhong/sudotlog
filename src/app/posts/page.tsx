import {
	listWrapperLayout,
	listYearLayout,
	postItemLayout,
	postLinkLayout,
	postListLayout,
	postListTitle,
} from '@/styles';
import Link from 'next/link';

const emptyArray = new Array(10).fill('');

export default function Page() {
	return (
		<>
			<section className={listWrapperLayout}>
				<p className={listYearLayout}>2024</p>
				<ul className={postListLayout}>
					{emptyArray.map((_, index) => (
						<li key={index} className={postItemLayout}>
							<Link href='/posts/slugggggg' className={postLinkLayout}>
								<p className={postListTitle}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</p>
								<p>{index % 2 === 0 ? '04.30' : '01.11'}</p>
							</Link>
						</li>
					))}
				</ul>
			</section>
		</>
	);
}
