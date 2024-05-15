'use client';

import { headerElClassName } from '@/styles';
import { usePathname } from 'next/navigation';
import NavLogo from './navLogo';

export default function Header() {
	const pathname = usePathname();

	return pathname === '/' ? null : (
		<header className={headerElClassName}>
			<NavLogo />
		</header>
	);
}
