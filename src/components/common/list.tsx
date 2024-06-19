import { ReactNode } from 'react';

type Props = {
	type: 'ordered' | 'unordered';
	children?: ReactNode;
};

export default function List({ type, children }: Props) {
	switch (type) {
		case 'ordered':
			return <ol>{children}</ol>;
		case 'unordered':
			return <ul>{children}</ul>;
	}
}
