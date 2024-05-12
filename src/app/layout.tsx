import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { jetBrainsMono, pretendard } from '@/utils/font';
import type { Metadata } from 'next';
import { css } from '../../styled-system/css';
import './globals.css';

export const metadata: Metadata = {
	title: '',
	description: '',
};

const rootClassName = css({
	fontFamily: 'pretendard',
	background: 'neutral.50',
	color: 'neutral.800',
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			className={`${pretendard.variable} ${jetBrainsMono.variable} ${rootClassName}`}
		>
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
