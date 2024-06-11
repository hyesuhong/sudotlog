import { postContentLink } from '@/styles';
import NextLink from 'next/link';
import { AnchorHTMLAttributes } from 'react';

export default function Link({
	href,
	target,
	className,
	rel,
	children,
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
	const isInnerPage = href && href.startsWith('#');

	return href ? (
		<NextLink
			href={href}
			target={target}
			className={
				isInnerPage
					? ''
					: className === 'external-link'
						? postContentLink({ kind: 'outer' })
						: postContentLink()
			}
			rel={rel}
		>
			{children}
		</NextLink>
	) : null;
}
