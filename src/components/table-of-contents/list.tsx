import { tocListClassName } from '@/styles';
import { TocProps } from '@/types/posts';
import { Link } from '../common';

type TocListProps = TocProps & {
	currentId?: string;
};

export default function List({ headers, currentId }: TocListProps) {
	return (
		<ul className={tocListClassName}>
			{headers.map((header, index) => (
				<li key={index}>
					<Link
						href={`#${header.slug}`}
						className={currentId === header.slug ? 'active' : ''}
					>
						{header.text}
					</Link>
					{header.sub && <List headers={header.sub} currentId={currentId} />}
				</li>
			))}
		</ul>
	);
}
