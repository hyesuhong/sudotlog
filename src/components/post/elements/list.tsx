import { postContentOrderd, postContentUnorderd } from '@/styles';
import { ReactNode } from 'react';

type Props = {
	type: 'ordered' | 'unordered';
	children?: ReactNode;
};

export default function List({ type, children }: Props) {
	switch (type) {
		case 'ordered':
			return <ol className={postContentOrderd}>{children}</ol>;
		case 'unordered':
			return <ul className={postContentUnorderd}>{children}</ul>;
	}
}
