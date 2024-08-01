'use client';

import { useTheme } from '@/libs/contexts/theme';
import { generateGiscusOption } from '@/libs/utils/giscus';
import { useEffect } from 'react';

export default function Giscus() {
	const { theme } = useTheme();
	const initialTheme = theme === 'light' ? 'light' : 'dark';

	useEffect(() => {
		const giscusAttrs = generateGiscusOption(initialTheme);

		const section = document.querySelector('section.giscus');

		const script = document.createElement('script');
		Object.entries(giscusAttrs).forEach(([key, value]) =>
			script.setAttribute(key, value)
		);

		section?.appendChild(script);
	}, []);

	return (
		<>
			<section className='giscus' />
		</>
	);
}
