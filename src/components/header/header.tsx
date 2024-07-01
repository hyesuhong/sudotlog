'use client';

import { IcoGithub } from '@/assets/icons';
import links from '@/contents/links.json';
import { headerElClassName, iconLinkClassName } from '@/styles';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeSwitch } from '../theme';
import NavList from './navList';
import NavLogo from './navLogo';

export default function Header() {
	const pathname = usePathname();

	return pathname === '/' ? null : (
		<header className={headerElClassName}>
			<NavLogo />
			<NavList routes={links.internal} currentPath={pathname} />
			<Link
				href={links.external.github.href}
				target='_blank'
				className={iconLinkClassName}
			>
				<IcoGithub />
			</Link>
			<ThemeSwitch />
		</header>
	);
}
