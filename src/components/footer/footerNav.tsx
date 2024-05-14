import { footerLinkItemClassName, footerLinkListClassName } from '@/styles';
import Link from 'next/link';

type NavItem = {
	path: string;
	icon: React.ReactNode;
};

interface FooterNavProps {
	items: NavItem[];
}

export default function FooterNav({ items }: FooterNavProps) {
	return (
		<ul className={footerLinkListClassName}>
			{items.map(({ path, icon }, index) => (
				<li key={index}>
					<Link href={path} target='_blank' className={footerLinkItemClassName}>
						{icon}
					</Link>
				</li>
			))}
		</ul>
	);
}
