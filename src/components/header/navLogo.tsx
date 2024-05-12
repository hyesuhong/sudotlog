import Link from 'next/link';
import { css } from '../../../styled-system/css';

const linkClass = css({
	fontSize: '32px',
	fontWeight: 900,
	transition: 'color 0.2s ease-in',
	_hover: {
		color: 'violet.400',
	},
});

export default function NavLogo() {
	return (
		<Link href='/' className={linkClass}>
			Su.log
		</Link>
	);
}
