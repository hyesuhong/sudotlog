import { Image } from '@/components/common';
import data from '@/data/about.json';
import { aboutFocusText, aboutImageWrapper, aboutSection } from '@/styles';
import { Metadata } from 'next';
import Link from 'next/link';
import { Fragment } from 'react';

export const metadata: Metadata = {
	title: 'About',
};

export default function Page() {
	return (
		<>
			<section className={`content ${aboutSection}`}>
				<h1>
					About <span className={aboutFocusText}>Su</span>
				</h1>
				{data.profile && (
					<div className={aboutImageWrapper}>
						<Image src={data.profile} alt="Su's profile" />
					</div>
				)}
				<p>
					{data.description.split('\n').map((desc, index, arr) => (
						<Fragment key={index}>
							{desc}
							{index < arr.length - 1 && <br />}
						</Fragment>
					))}
				</p>
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
		</>
	);
}
