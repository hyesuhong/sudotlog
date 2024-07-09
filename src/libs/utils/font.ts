import localFont from 'next/font/local';

const pretendard = localFont({
	src: '../../assets/fonts/pretendard/variable/PretendardVariable.woff2',
	display: 'swap',
	weight: '100 900',
	preload: true,
	variable: '--font-pretendard',
});

const jetBrainsMono = localFont({
	src: [
		{
			path: '../../assets/fonts/jetBrainsMono/variable/JetBrainsMono[wght].ttf',
			weight: '100 900',
			style: 'normal',
		},
		{
			path: '../../assets/fonts/jetBrainsMono/variable/JetBrainsMono-Italic[wght].ttf',
			weight: '100 900',
			style: 'italic',
		},
	],
	display: 'swap',
	preload: true,
	variable: '--font-jet-brains-mono',
});

export { jetBrainsMono, pretendard };
