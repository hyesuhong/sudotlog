'use client';

import { IcoMoon, IcoSun } from '@/assets/icons';
import { useTheme } from '@/libs/contexts/theme';
import { themeSwitchClassName, themeSwitchIconsWrapper } from '@/styles';

export default function Switch() {
	const { themes, setTheme, theme } = useTheme();

	const onClick = () => {
		const otherTheme = themes.findIndex((t) => t !== theme);

		if (otherTheme > -1) {
			setTheme(themes[otherTheme]);
		}
	};

	return (
		<button className={themeSwitchClassName} onClick={onClick}>
			<span
				className={themeSwitchIconsWrapper({
					theme: theme === 'dark' ? theme : 'light',
				})}
			>
				<IcoSun />
				<IcoMoon />
			</span>
		</button>
	);
}
