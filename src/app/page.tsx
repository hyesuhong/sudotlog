import { mainLinkTitle, mainLinkVariants, pageLayout } from '@/styles';
import Link from 'next/link';

export default function Home() {
	return (
		<main className={pageLayout({ isMain: true })}>
			<h1 className={mainLinkTitle}>
				<Link href='/about' className={mainLinkVariants({ kind: 'about' })}>
					Su
				</Link>
				<span>.</span>
				<Link href='/posts' className={mainLinkVariants({ kind: 'blog' })}>
					log
				</Link>
			</h1>
		</main>
	);
}
