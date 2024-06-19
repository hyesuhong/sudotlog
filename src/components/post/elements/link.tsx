import { IcoArrowTopRight } from '@/assets/icons';
import NextLink from 'next/link';
import { AnchorHTMLAttributes } from 'react';

export default function Link({
	href,
	target,
	className,
	rel,
	children,
	...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
	// const isInnerPage = href && href.startsWith('#');

	return href ? (
		<NextLink href={href} target={target} rel={rel} {...props}>
			{children}
			{className === 'external-link' && <IcoArrowTopRight />}
		</NextLink>
	) : null;
}
