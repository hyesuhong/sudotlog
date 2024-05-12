import Link from 'next/link';
import { css, cva } from '../../styled-system/css';

const mainClass = css({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	minH: 'calc(100vh - 40px)',
	maxW: '5xl',
	mx: 'auto',
	px: 6,
});

const titleClass = css({
	fontSize: 48,
	fontWeight: 900,
});

const linkClass = cva({
	base: {
		position: 'relative',
		transition: 'color 0.2s ease-in',
		_hover: {
			color: 'violet.400',
			_before: {
				opacity: 1,
			},
		},
		_before: {
			position: 'absolute',
			left: 0,
			fontSize: 16,
			fontWeight: 300,
			color: 'neutral.500',
			md: {
				opacity: 0,
				pointerEvents: 'none',
				transition: 'opacity 0.2s ease-in',
			},
		},
	},
	variants: {
		kind: {
			about: {
				_before: {
					content: '"About"',
					bottom: 'full',
					transform: 'translateY(-20%)',
				},
			},
			blog: {
				_before: {
					content: '"Checking"',
					top: '100%',
				},
			},
		},
	},
});

export default function Home() {
	return (
		<main className={mainClass}>
			<h1 className={titleClass}>
				<Link href='/about' className={linkClass({ kind: 'about' })}>
					Su
				</Link>
				<span>.</span>
				<Link href='/blog' className={linkClass({ kind: 'blog' })}>
					log
				</Link>
			</h1>
		</main>
	);
}
