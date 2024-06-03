import { postContentPara } from '@/styles';
import { PropsWithChildren } from 'react';

export default function Text({ children }: PropsWithChildren) {
	return <p className={postContentPara}>{children}</p>;
}
