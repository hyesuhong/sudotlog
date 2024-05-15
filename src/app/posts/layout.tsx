import { pageLayout } from '@/styles';

type LayoutProps = {
	children: React.ReactNode;
};

export default function PostsLayout({ children }: LayoutProps) {
	return <main className={pageLayout()}>{children}</main>;
}
