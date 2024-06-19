import { pageLayout } from '@/styles';

export default function SubPageLayout({ children }: React.PropsWithChildren) {
	return <main className={pageLayout()}>{children}</main>;
}
