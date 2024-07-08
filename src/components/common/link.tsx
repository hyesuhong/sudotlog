import { IcoArrowTopRight } from '@/assets/icons';
import NextLink from 'next/link';
import { AnchorHTMLAttributes } from 'react';

// const regExp = /^[#/]/;

export default function Link({
	href,
	target,
	className,
	rel,
	children,
	...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
	// const isInnerPage = href && regExp.test(href);
	// console.log(href, isInnerPage);

	return href ? (
		<NextLink href={href} target={target} rel={rel} {...props}>
			{children}
			{className === 'external-link' && <IcoArrowTopRight />}
		</NextLink>
	) : null;
}
