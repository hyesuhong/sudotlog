import localFont from 'next/font/local';

const pretendard = localFont({
	src: '../fonts/pretendard/variable/PretendardVariable.woff2',
	display: 'swap',
	weight: '100 900',
	preload: true,
	variable: '--font-pretendard',
});

export { pretendard };
