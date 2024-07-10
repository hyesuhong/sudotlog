import {
	haederListClassName,
	headerNavClassName,
	headerNavLink,
} from '@/styles';
import { Link } from '../common';

type Route = { label: string; href: string };

type Props = {
	routes: Route[];
	currentPath?: string;
};

export default function NavList({ routes, currentPath = '-' }: Props) {
	return (
		<nav className={headerNavClassName}>
			<ul className={haederListClassName}>
				{routes.map((route, index) => {
					const pathRegexp = new RegExp(`^${route.href}`, 'g');
					return (
						<li key={index}>
							<Link
								href={route.href}
								className={`${headerNavLink} ${pathRegexp.test(currentPath) && 'current'}`}
							>
								{route.label}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
