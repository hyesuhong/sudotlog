import { postContentTable, postContentTd, postContentTh } from '@/styles';
import { PropsWithChildren } from 'react';

interface TableDataProps extends PropsWithChildren {
	// align?: 'center' | 'right';
	textAlign?: string;
}

export const Table = ({ children }: PropsWithChildren) => {
	return <table className={postContentTable}>{children}</table>;
};

export const Th = ({ children }: PropsWithChildren) => {
	return <th className={postContentTh}>{children}</th>;
};

export const Td = ({ textAlign, children }: TableDataProps) => {
	const align =
		textAlign === 'center'
			? 'center'
			: textAlign === 'right'
				? 'right'
				: undefined;
	return <td className={postContentTd({ align })}>{children}</td>;
};
