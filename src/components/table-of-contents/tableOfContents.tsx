'use client';

import useTocIndicator from '@/libs/hooks/useTocIndicator';
import { tocStickyWrapperClassName, tocWrapperClassName } from '@/styles';
import { TocProps } from '@/types/posts';
import List from './list';

export default function TableOfContents({ headers }: TocProps) {
	const currentHeadingId = useTocIndicator({ headers });

	return (
		<aside className={tocWrapperClassName}>
			<div className={tocStickyWrapperClassName}>
				<List headers={headers} currentId={currentHeadingId} />
			</div>
		</aside>
	);
}
