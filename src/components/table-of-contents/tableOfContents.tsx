import { tocStickyWrapperClassName, tocWrapperClassName } from '@/styles';
import { TocProps } from '@/types/posts';
import List from './list';

export default function TableOfContents({ headers }: TocProps) {
	return (
		<aside className={tocWrapperClassName}>
			<div className={tocStickyWrapperClassName}>
				<List headers={headers} />
			</div>
		</aside>
	);
}
