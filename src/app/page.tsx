import links from '@/contents/links.json';
import { mainLink, mainLinkTitle, mainList, pageLayout } from '@/styles';
import Link from 'next/link';

export default function Home() {
	return (
		<main className={pageLayout({ isMain: true })}>
			<h1 className={mainLinkTitle}>Su.log</h1>
			<ul className={mainList}>
				{links.internal.map((link, index) => (
					<li key={index}>
						<Link href={link.href} className={mainLink}>
							<span>{link.label}</span>
							<span>{link.description}</span>
						</Link>
					</li>
				))}
			</ul>
		</main>
	);
}
