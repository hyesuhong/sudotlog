import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import Provider from '@/components/theme/provider';
import { rootClassName } from '@/styles';
import { jetBrainsMono, pretendard } from '@/utils/font';
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
		<html
			lang='en'
			className={`${pretendard.variable} ${jetBrainsMono.variable} ${rootClassName}`}
		>
			<body>
				<Provider>
					<Header />
					{children}
					<Footer />
				</Provider>
			</body>
		</html>
	);
}
