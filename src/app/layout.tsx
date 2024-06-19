import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { ThemeProvider } from '@/components/theme';
import meta from '@/contents/metadata.json';
import '@/styles/globals.css';
import { jetBrainsMono, pretendard } from '@/utils/font';
import type { Metadata } from 'next';

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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			className={`${pretendard.variable} ${jetBrainsMono.variable}`}
		>
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
