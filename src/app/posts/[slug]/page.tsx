import { IcoArrowLeft } from '@/assets/icons';
import { TableOfContents } from '@/components/table-of-contents';
import {
	backLinkStyle,
	postContentCode,
	postContentFigure,
	postContentHeadings,
	postContentLayout,
	postContentLink,
	postContentOrderd,
	postContentPara,
	postContentQuote,
	postContentunOrderd,
	postInfoDate,
	postInfoLayout,
	postInfoTitle,
} from '@/styles';
import Link from 'next/link';

export default function Post() {
	return (
		<>
			<TableOfContents />
			<section className={postInfoLayout}>
				<Link href='' className={backLinkStyle}>
					<IcoArrowLeft />
					Back to list
				</Link>
				<h1 className={postInfoTitle}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</h1>
				<p className={postInfoDate}>2024.04.30</p>
			</section>
			<section className={postContentLayout}>
				<h2 className={postContentHeadings({ kind: 'heading1' })}>
					Heading 1(actually tag is h2)
				</h2>
				<p className={postContentPara}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
					turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
					fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
					elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
					lectus. Class aptent taciti sociosqu ad litora torquent per conubia
					nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
					egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
					Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
					lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
					elementum tellus.
				</p>
				<h3 className={postContentHeadings({ kind: 'heading2' })}>
					Heading 2(actually tag is h3)
				</h3>
				<p className={postContentPara}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
					turpis molestie, <strong>dictum</strong> est a, mattis tellus. Sed
					dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus,
					ut interdum tellus elit sed risus. Maecenas eget condimentum velit,
					sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
					torquent per conubia nostra, per <em>inceptos</em> himenaeos. Praesent
					auctor purus <del>luctus</del> enim egestas, ac scelerisque ante
					pulvinar. Donec ut rhoncus ex. Suspendisse ac <ins>rhoncus</ins> nisl,
					eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis
					convallis diam sit amet lacinia. Aliquam in elementum tellus.
				</p>
				<h4 className={postContentHeadings({ kind: 'heading3' })}>
					Heading 3(actually tag is h4)
				</h4>
				<p className={postContentPara}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
					turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
					fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
					elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
					lectus. Class aptent taciti sociosqu ad litora torquent per conubia
					nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
					egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
					Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
					lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
					elementum tellus.
				</p>
				<p className={postContentPara}>Ordered List</p>
				<ol className={postContentOrderd}>
					<li>
						1
						<ol className={postContentOrderd}>
							<li>
								1-1
								<ol className={postContentOrderd}>
									<li>1-1-1</li>
								</ol>
							</li>
						</ol>
					</li>
					<li>2</li>
				</ol>
				<p className={postContentPara}>Unordered List</p>
				<ul className={postContentunOrderd}>
					<li>
						1
						<ul className={postContentunOrderd}>
							<li>
								1-1
								<ul className={postContentunOrderd}>
									<li>1-1-1</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>2</li>
				</ul>
				<p className={postContentPara}>
					<a href='' className={postContentLink()}>
						inner link
					</a>
				</p>
				<p className={postContentPara}>
					<a
						href=''
						target='_blank'
						className={postContentLink({ kind: 'outer' })}
					>
						outer link
					</a>
				</p>

				<blockquote className={postContentQuote}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
					optio saepe ad ipsa magnam accusantium sequi suscipit incidunt quo
					dignissimos, necessitatibus placeat voluptate voluptas ullam natus
					adipisci sapiente. Earum, hic.
				</blockquote>
				<p>
					<code className={postContentCode({ kind: 'inline' })}>
						inline code
					</code>
				</p>
				<p>codeblock.tsx</p>
				<pre className={postContentCode({ kind: 'block' })}>
					<code>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
						sapiente deleniti! Vero cumque in provident quae molestiae
						quibusdam, assumenda laboriosam quis? Nisi, vitae totam culpa
						incidunt quo necessitatibus debitis recusandae.
					</code>
				</pre>
				<figure className={postContentFigure}>
					<img src='/favicon.ico' alt='' />
					<figcaption>caption</figcaption>
				</figure>
			</section>
		</>
	);
}
