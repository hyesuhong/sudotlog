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
import Link from 'next/link';

export default function Page() {
	return (
		<main className={pageLayout()}>
			<section className={aboutSection}>
				<h1 className={postInfoTitle}>
					About <span className={aboutFocusText}>Su</span>
				</h1>
				<div className={aboutImageWrapper}>{/* img wrapper */}</div>
				<p className={postContentPara}>
					안녕하세요, 프론트엔드 개발자 Su입니다.
				</p>
			</section>
			<section className={aboutSection}>
				<h2 className={postContentHeadings({ kind: 'heading1' })}>
					Let&apos;s get in touch
				</h2>
				<ul className={postContentUnorderd}>
					<li>
						<Link
							href='mailto:honghs95@gmail.com'
							target='_blank'
							className={postContentLink}
						>
							Mail
						</Link>
					</li>
					<li>
						<Link
							href='https://github.com/hyesuhong'
							target='_blank'
							className={postContentLink}
						>
							Github
						</Link>
					</li>
					<li>
						<Link
							href='https://www.linkedin.com/in/hyesu-hong-03110725a'
							target='_blank'
							className={postContentLink}
						>
							Linkedin
						</Link>
					</li>
				</ul>
			</section>
			{/* <section className={section}>
				<h2 className={postContentHeadings({ kind: 'heading1' })}>
					More about experiences
				</h2>
				<ul className={postContentunOrderd}>
					<li>
						<Link
							href=''
							target='_blank'
							className={postContentLink({ kind: 'outer' })}
						>
							Notion Resume
						</Link>
					</li>
				</ul>
			</section> */}
		</main>
	);
}
