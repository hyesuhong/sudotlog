import { pretendard } from '@/utils/font';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: '',
	description: '',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className={`${pretendard.variable} font-sans`}>
			<body>{children}</body>
		</html>
	);
}
