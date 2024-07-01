import { PropsWithChildren } from 'react';

export default function Quote({ children }: PropsWithChildren) {
	return <blockquote>{children}</blockquote>;
}
