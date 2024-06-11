import { postContentPara } from '@/styles';

export default function Text({ children }: React.PropsWithChildren) {
	return <p className={postContentPara}>{children}</p>;
}
