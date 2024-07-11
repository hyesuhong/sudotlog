import { ListProps } from '@/types/components';

export default function List({ type, children }: ListProps) {
	switch (type) {
		case 'ordered':
			return <ol>{children}</ol>;
		case 'unordered':
			return <ul>{children}</ul>;
	}
}
