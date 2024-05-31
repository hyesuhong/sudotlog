import { postContentHeadings } from '@/styles';

interface Props extends React.PropsWithChildren {
	type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	className?: string;
}

export default function Heading({ type = 'h2', className, children }: Props) {
	switch (type) {
		case 'h1':
			return <h1 className={className}>{children}</h1>;
		case 'h2':
			return (
				<h2
					className={`${postContentHeadings({ kind: 'heading1' })} ${className}`}
				>
					{children}
				</h2>
			);
		case 'h3':
			return (
				<h3
					className={`${postContentHeadings({ kind: 'heading2' })} ${className}`}
				>
					{children}
				</h3>
			);
		case 'h4':
			return (
				<h4
					className={`${postContentHeadings({ kind: 'heading3' })} ${className}`}
				>
					{children}
				</h4>
			);
		case 'h5':
			return <h5>{children}</h5>;
		case 'h6':
			return <h6>{children}</h6>;
		default:
			return children;
	}
}
