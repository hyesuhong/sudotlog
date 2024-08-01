'use client';

import { IcoMoon, IcoSun } from '@/assets/icons';
import { useTheme } from '@/libs/contexts/theme';
import { changeGiscusTheme } from '@/libs/utils/giscus';
import { themeSwitchClassName, themeSwitchIconsWrapper } from '@/styles';
import { useEffect, useState } from 'react';

export default function Switch() {
	const { themes, setTheme, theme } = useTheme();
	const [mounted, setMounted] = useState(false);

	const onClick = () => {
		const otherTheme = themes.findIndex((t) => t !== theme);

		if (otherTheme > -1) {
			const targetTheme = themes[otherTheme];

			if (targetTheme === 'dark' || targetTheme === 'light') {
				setTheme(targetTheme);
				changeGiscusTheme(targetTheme);
			}
		}
	};

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<button className={themeSwitchClassName} onClick={onClick}>
			{mounted && (
				<span
					className={
						theme
							? themeSwitchIconsWrapper({
									theme: theme === 'dark' ? 'dark' : 'light',
								})
							: ''
					}
				>
					<IcoSun />
					<IcoMoon />
				</span>
			)}
		</button>
	);
}
