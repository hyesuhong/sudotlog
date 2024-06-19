import { PropsWithChildren } from 'react';

export default function Text({ children }: PropsWithChildren) {
	return <p>{children}</p>;
}
