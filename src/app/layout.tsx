import { pretendard } from '@/utils/font';
import type { Metadata } from 'next';
import { css } from '../../styled-system/css';
import './globals.css';

export const metadata: Metadata = {
	title: '',
	description: '',
};

const rootClassName = css({ fontFamily: 'pretendard' });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className={`${pretendard.variable} ${rootClassName}`}>
			<body>{children}</body>
		</html>
	);
}
