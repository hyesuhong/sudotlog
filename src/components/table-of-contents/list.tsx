import { tocListClassName } from '@/styles';
import { TocProps } from '@/types/posts';
import { Link } from '../common';

export default function List({ headers }: TocProps) {
	return (
		<ul className={tocListClassName}>
			{headers.map((header, index) => (
				<li key={index}>
					<Link href={`#${header.slug}`}>{header.text}</Link>
					{header.sub && <List headers={header.sub} />}
				</li>
			))}
		</ul>
	);
}
