import { postContentHeadings } from '@/styles';

interface Props extends React.PropsWithChildren {
	type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	id?: string;
	className?: string;
}

export default function Heading({ type, children, ...props }: Props) {
	switch (type) {
		case 'h1':
			return <h1 {...props}>{children}</h1>;
		case 'h2':
			return (
				<h2 {...props} className={postContentHeadings({ kind: 'heading1' })}>
					{children}
				</h2>
			);
		case 'h3':
			return (
				<h3 {...props} className={postContentHeadings({ kind: 'heading2' })}>
					{children}
				</h3>
			);
		case 'h4':
			return (
				<h4 {...props} className={postContentHeadings({ kind: 'heading3' })}>
					{children}
				</h4>
			);
		case 'h5':
			return <h5 {...props}>{children}</h5>;
		case 'h6':
			return <h6 {...props}>{children}</h6>;
	}
}
