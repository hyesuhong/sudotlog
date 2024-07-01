import { PropsWithChildren } from 'react';

interface TableDataProps extends PropsWithChildren {
	textAlign?: string;
}

export const Table = ({ children }: PropsWithChildren) => {
	return <table>{children}</table>;
};

export const Th = ({ children }: PropsWithChildren) => {
	return <th>{children}</th>;
};

export const Td = ({ textAlign, children }: TableDataProps) => {
	return <td className={textAlign}>{children}</td>;
};
