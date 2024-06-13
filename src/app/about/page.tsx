import { Image } from '@/components/post/elements';
import data from '@/contents/about.json';
import {
	aboutFocusText,
	aboutImageWrapper,
	aboutSection,
	pageLayout,
	postContentHeadings,
	postContentLink,
	postContentPara,
	postContentUnorderd,
	postInfoTitle,
} from '@/styles';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'About',
};

export default function Page() {
	return (
		<main className={pageLayout()}>
			<section className={aboutSection}>
				<h1 className={postInfoTitle}>
					About <span className={aboutFocusText}>Su</span>
				</h1>
				<div className={aboutImageWrapper}>{data.profile && <Image />}</div>
				<p className={postContentPara}>{data.description}</p>
			</section>
			<section className={aboutSection}>
				<h2 className={postContentHeadings({ kind: 'heading1' })}>
					Let&apos;s get in touch
				</h2>
				<ul className={postContentUnorderd}>
					{data.contacts.map((contact, index) => (
						<li key={index}>
							<Link
								href={contact.href}
								target='_blank'
								className={postContentLink}
							>
								{contact.name}
							</Link>
						</li>
					))}
				</ul>
			</section>
		</main>
	);
}
