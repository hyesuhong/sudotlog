import { Footer } from '@/components/footer';
import { GoogleTagManager } from '@/components/google';
import { Header } from '@/components/header';
import { ThemeProvider } from '@/components/theme';
import meta from '@/data/metadata.json';
import { jetBrainsMono, pretendard } from '@/libs/utils/font';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
	metadataBase: new URL(meta.site),
	title: {
		template: '%s | Su.log',
		default: meta.title,
	},
	description: meta.description,
	keywords: meta.keywords,
	authors: meta.authors,
	icons: meta.icons,
	openGraph: {
		title: meta.title,
		description: meta.description,
		type: 'website',
		siteName: meta.title,
		url: meta.site,
		images: {
			url: meta.og.image,
		},
	},
	twitter: {
		title: meta.title,
		description: meta.description,
		card: 'summary_large_image',
		site: meta.site,
		images: {
			url: meta.twitter.image,
		},
	},
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
	return (
		<html
			lang='en'
			className={`${pretendard.variable} ${jetBrainsMono.variable}`}
		>
			<GoogleTagManager />
			<body>
				<ThemeProvider>
					<Header />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
