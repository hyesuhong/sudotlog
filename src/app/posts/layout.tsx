import { pageLayout } from '@/styles';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Posts',
};

type LayoutProps = {
	children: React.ReactNode;
};

export default function PostsLayout({ children }: LayoutProps) {
	return <main className={pageLayout()}>{children}</main>;
}
