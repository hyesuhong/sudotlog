import links from '@/data/links.json';
import {
	mainItem,
	mainLink,
	mainLinkTitle,
	mainList,
	pageLayout,
} from '@/styles';
import Link from 'next/link';

export default function Home() {
	return (
		<main className={pageLayout({ isMain: true })}>
			<h1 className={mainLinkTitle}>Su.log</h1>
			<ul className={mainList}>
				{links.internal.map((link) => (
					<li key={link.href} className={mainItem}>
						<Link href={link.href} className={mainLink}>
							<span>{link.description}</span>
							<span>{link.label}</span>
						</Link>
					</li>
				))}
			</ul>
		</main>
	);
}
