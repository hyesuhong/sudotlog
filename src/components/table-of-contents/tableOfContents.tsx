import { tocStickyWrapperClassName, tocWrapperClassName } from '@/styles';
import List from './list';

type Header = {
	depth: number;
	text: string;
	slug: string;
	sub?: Header[];
};

type Props = {
	headers: Header[];
};

export default function TableOfContents({ headers }: Props) {
	return (
		<aside className={tocWrapperClassName}>
			<div className={tocStickyWrapperClassName}>
				<List headers={headers} />
			</div>
		</aside>
	);
}
