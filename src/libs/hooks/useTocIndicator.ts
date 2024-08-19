'use client';

import { TocProps } from '@/types/posts';
import { useEffect, useState } from 'react';
import { throttle } from '../utils/throttle';

const rootFontSize = 16;
const headerHeight = 3.5 * rootFontSize;
const scrollMargin = 4 * rootFontSize;

const useTocIndicator = ({ headers }: TocProps) => {
	const [currentHeading, setCurrentHeading] = useState<string>();

	useEffect(() => {
		if (!window) {
			return;
		}
		const allHeadingsId = headers.reduce<string[]>((prev, cur) => {
			const { slug, sub } = cur;
			prev.push(slug);

			if (sub) {
				const subHeadingsId = sub.map((heading) => heading.slug);
				prev.push(...subHeadingsId);
			}

			return prev;
		}, []);

		const allheadings = allHeadingsId.map((id) =>
			document.querySelector<HTMLElement>(`#${id}`)
		);

		let current: string;

		const onScroll = throttle(() => {
			const top = window.scrollY + headerHeight;

			allheadings.forEach((heading) => {
				if (!heading || !heading.offsetTop) {
					return;
				}

				if (top > heading.offsetTop - scrollMargin) {
					current = heading.id;
				}
			});
			setCurrentHeading(current);
		}, 100);

		window.addEventListener('scroll', onScroll);

		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	}, [headers]);

	return currentHeading;
};

export default useTocIndicator;
