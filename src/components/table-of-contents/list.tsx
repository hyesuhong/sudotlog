import { tocListClassName } from '@/styles';
import Link from 'next/link';

type Header = {
	depth: number;
	text: string;
	slug: string;
	sub?: Header[];
};

type Props = {
	headers: Header[];
};

export default function List({ headers }: Props) {
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
