import { IcoMoon, IcoSun } from '@/assets/icons';
import { themeSwitchClassName } from '@/styles';

export default function ThemeSwitch() {
	return (
		<button className={themeSwitchClassName}>
			<span>
				<IcoSun />
				<IcoMoon />
			</span>
		</button>
	);
}
