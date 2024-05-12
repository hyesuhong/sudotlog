import Link from 'next/link';
import { css } from '../../../styled-system/css';

type NavItem = {
	path: string;
	icon: React.ReactNode;
};

interface FooterNavProps {
	items: NavItem[];
}

const ulClass = css({
	display: 'flex',
	columnGap: 1,
	ml: 6,
	mr: 'auto',
});

const linkClass = css({
	opacity: 0.6,
	transition: 'opacity 0.3s ease-in',
	_hover: {
		opacity: 1,
	},
	'& svg': {
		w: 7,
		h: 7,
	},
});

export default function FooterNav({ items }: FooterNavProps) {
	return (
		<ul className={ulClass}>
			{items.map(({ path, icon }, index) => (
				<li key={index}>
					<Link href={path} target='_blank' className={linkClass}>
						{icon}
					</Link>
				</li>
			))}
		</ul>
	);
}
