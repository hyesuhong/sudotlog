import Link from 'next/link';
import { css } from '../../../styled-system/css';

const mainClass = css({
	minH: 'calc(100vh - 40px)',
	maxW: '5xl',
	mx: 'auto',
	px: 6,
	pt: '7.5rem',
});

const sectionClass = css({
	display: 'flex',
});

const yearClass = css({
	maxW: '6.75rem',
	pr: 6,
	alignSelf: 'start',
	'& > span': {
		lineHeight: '2.25rem',
	},
});

const listClass = css({
	display: 'flex',
	flexDirection: 'column',
	rowGap: 2,
	flex: 1,
	pl: 4,
	borderLeft: '1px solid {colors.neutral.200}',
	minW: 0,
});

const itemClass = css({
	display: 'flex',
	alignItems: 'center',
	columnGap: 2,
	w: 'full',
	h: 9,
	px: 2,
	md: {
		transition: 'background-color 0.2s ease-in',
		_hover: {
			bg: 'violet.50',
		},
	},
});

const postTitleClass = css({
	flex: 1,
	overflow: 'hidden',
	whiteSpace: 'nowrap',
	textOverflow: 'ellipsis',
});

export default function Page() {
	return (
		<main className={mainClass}>
			<section className={sectionClass}>
				<h4 className={yearClass}>
					<span>2024</span>
				</h4>
				<ul className={listClass}>
					<li>
						<Link href='/posts/slugggggg' className={itemClass}>
							<p className={postTitleClass}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
							<p>04.30</p>
						</Link>
					</li>
				</ul>
			</section>
		</main>
	);
}
