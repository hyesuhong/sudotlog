import { IcoArrowTop } from '@/assets/icons';
import {
	tocListClassName,
	tocStickyWrapperClassName,
	tocTopButtonClassName,
	tocWrapperClassName,
} from '@/styles';

export default function TableOfContents() {
	return (
		<aside className={tocWrapperClassName}>
			<div className={tocStickyWrapperClassName}>
				<ul className={tocListClassName}>content1</ul>
				<button className={tocTopButtonClassName}>
					<IcoArrowTop />
				</button>
			</div>
		</aside>
	);
}
