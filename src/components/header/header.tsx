'use client';

import { usePathname } from 'next/navigation';
import { css } from '../../../styled-system/css';
import NavLogo from './navLogo';

const headerClass = css({
	position: 'fixed',
	top: 0,
	left: '50%',
	transform: 'translateX(-50%)',
	width: 'full',
	maxW: '5xl',
	h: '3.5rem',
	px: 6,
	display: 'flex',
	alignItems: 'center',
});

export default function Header() {
	const pathname = usePathname();

	return (
		<header className={headerClass}>
			<NavLogo />
		</header>
	);
}
