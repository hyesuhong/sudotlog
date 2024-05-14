import { IcoArrowLeft } from '@/assets/icons';
import Link from 'next/link';
import { css, cva } from '../../../../styled-system/css';

const mainClass = css({
	minH: 'calc(100vh - 40px)',
	maxW: '5xl',
	mx: 'auto',
	px: 6,
	pt: '8.5rem',
});

const infoSectionClass = css({
	pb: 10,
	borderBottom: '1px solid {colors.neutral.200}',
});

const postSectionClass = css({
	py: 20,
	'& :is(strong, b)': {
		fontWeight: 700,
	},
	'& :is(em, i)': {
		fontStyle: 'italic',
	},
	'& :is(s, del, strike)': {
		color: 'neutral.500',
		textDecoration: 'line-through',
	},
});

const backLinkClass = css({
	display: 'flex',
	alignItems: 'center',
	fontSize: '14px',
	color: 'neutral.500',
	opacity: 0.7,
	transition: 'opacity 0.2s ease-in',
	_hover: {
		opacity: 1,
	},
	'& > svg': {
		w: 7,
		h: 7,
	},
});

const postTitleClass = css({
	fontSize: '24px',
	fontWeight: 600,
	mt: 4,
	mb: 1,
});

const dateClass = css({
	fontSize: '14px',
	fontWeight: 300,
	color: 'neutral.500',
});

const heading = cva({
	base: {
		fontWeight: 600,
		mb: 5,
		_first: {
			mt: 0,
		},
	},
	variants: {
		kind: {
			heading1: {
				fontSize: '20px',
				mt: 7,
			},
			heading2: {
				fontSize: '18px',
				mt: 6,
			},
			heading3: {
				fontSize: '16px',
				mt: 5,
			},
		},
	},
});

const bodyClass = css({
	fontWeight: 300,
	mt: 5,
	mb: 5,
	lineHeight: '160%',
});

const listClass = cva({
	base: {
		paddingInlineStart: 5,
		'& ::marker': {
			color: 'neutral.500',
		},
		'& :is(ul)': {
			listStyle: 'circle',
			'& :is(ul)': {
				listStyle: 'square',
			},
		},
		'& :is(ol)': {
			listStyle: 'lower-alpha',
			'& :is(ol)': {
				listStyle: 'lower-roman',
			},
		},
	},
	variants: {
		kind: {
			orderd: {
				listStyle: 'decimal',
			},
			unorderd: {
				listStyle: 'disc',
			},
		},
	},
});

const linkClass = cva({
	base: {
		position: 'relative',
		textDecorationLine: 'underline',
		textDecorationColor: 'neutral.500',
		textDecorationThickness: '1px',
		textUnderlineOffset: '4px',
	},
	variants: {
		kind: {
			outer: {},
		},
	},
});

const quoteClass = css({
	paddingInlineStart: 4,
	borderLeft: '2px solid {colors.neutral.200}',
});

const codeClass = cva({
	base: {
		fontFamily: 'jetBrainsMono',
		bg: 'neutral.100',
	},
	variants: {
		kind: {
			inline: {
				py: 0.5,
				px: 1,
			},
			block: {
				p: 4,
				whiteSpace: 'break-spaces',
			},
		},
	},
});

const figureClass = css({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	rowGap: 2,
	'& :is(img, video)': {
		maxW: 'full',
		objectFit: 'contain',
	},
	'& figcaption': {
		fontSize: '12px',
		color: 'neutral.500',
	},
});

export default function Post() {
	return (
		<main className={mainClass}>
			<section className={infoSectionClass}>
				<Link href='' className={backLinkClass}>
					<IcoArrowLeft />
					Back to list
				</Link>
				<h1 className={postTitleClass}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</h1>
				<p className={dateClass}>2024.04.30</p>
			</section>
			<section className={postSectionClass}>
				<h2 className={heading({ kind: 'heading1' })}>
					Heading 1(actually tag is h2)
				</h2>
				<p className={bodyClass}>
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
				<h3 className={heading({ kind: 'heading2' })}>
					Heading 2(actually tag is h3)
				</h3>
				<p className={bodyClass}>
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
				<h4 className={heading({ kind: 'heading3' })}>
					Heading 3(actually tag is h4)
				</h4>
				<p className={bodyClass}>
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
				<p className={bodyClass}>Ordered List</p>
				<ol className={`${bodyClass} ${listClass({ kind: 'orderd' })}`}>
					<li>
						1
						<ol className={listClass({ kind: 'orderd' })}>
							<li>
								1-1
								<ol className={listClass({ kind: 'orderd' })}>
									<li>1-1-1</li>
								</ol>
							</li>
						</ol>
					</li>
					<li>2</li>
				</ol>
				<p className={bodyClass}>Unordered List</p>
				<ul className={`${bodyClass} ${listClass({ kind: 'unorderd' })}`}>
					<li>
						1
						<ul className={listClass({ kind: 'unorderd' })}>
							<li>
								1-1
								<ul className={listClass({ kind: 'unorderd' })}>
									<li>1-1-1</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>2</li>
				</ul>
				<p className={bodyClass}>
					<a href='' className={linkClass()}>
						inner link
					</a>
				</p>
				<p className={bodyClass}>
					<a href='' target='_blank' className={linkClass({ kind: 'outer' })}>
						outer link
					</a>
				</p>

				<p className={bodyClass}>
					<blockquote className={quoteClass}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
						optio saepe ad ipsa magnam accusantium sequi suscipit incidunt quo
						dignissimos, necessitatibus placeat voluptate voluptas ullam natus
						adipisci sapiente. Earum, hic.
					</blockquote>
				</p>
				<p>
					<code className={codeClass({ kind: 'inline' })}>inline code</code>
				</p>
				<p>codeblock.tsx</p>
				<pre className={codeClass({ kind: 'block' })}>
					<code>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
						sapiente deleniti! Vero cumque in provident quae molestiae
						quibusdam, assumenda laboriosam quis? Nisi, vitae totam culpa
						incidunt quo necessitatibus debitis recusandae.
					</code>
				</pre>
				<figure className={figureClass}>
					<img src='/favicon.ico' alt='' />
					<figcaption>caption</figcaption>
				</figure>
			</section>
		</main>
	);
}
