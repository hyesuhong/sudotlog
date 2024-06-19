import { Image } from '@/components/common';
import data from '@/contents/about.json';
import {
	aboutFocusText,
	aboutImageWrapper,
	aboutSection,
	pageLayout,
} from '@/styles';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'About',
};

export default function Page() {
	return (
		<main className={pageLayout()}>
			<section className={`content ${aboutSection}`}>
				<h1>
					About <span className={aboutFocusText}>Su</span>
				</h1>
				<div className={aboutImageWrapper}>{data.profile && <Image />}</div>
				<p>{data.description}</p>
			</section>
			<section className={`content ${aboutSection}`}>
				<h2>Let&apos;s get in touch</h2>
				<ul>
					{data.contacts.map((contact, index) => (
						<li key={index}>
							<Link href={contact.href} target='_blank'>
								{contact.name}
							</Link>
						</li>
					))}
				</ul>
			</section>
		</main>
	);
}
