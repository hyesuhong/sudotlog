import { postContentQuote } from '@/styles';
import { PropsWithChildren } from 'react';

export default function Quote({ children }: PropsWithChildren) {
	return <blockquote className={postContentQuote}>{children}</blockquote>;
}
