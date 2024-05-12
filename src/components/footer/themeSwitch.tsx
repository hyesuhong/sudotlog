import { IcoMoon, IcoSun } from '@/assets/icons';
import { css } from '../../../styled-system/css';

const buttonClass = css({
	w: 7,
	h: 7,
	overflow: 'hidden',
	opacity: 0.6,
	cursor: 'pointer',
	transition: 'opacity 0.3s ease-in',
	_hover: {
		opacity: 1,
	},
	'& > span': {
		display: 'flex',
		w: '200%',
		h: 'full',
	},
	'& svg': {
		flex: 1,
		h: 'full',
	},
});

export default function ThemeSwitch() {
	return (
		<button className={buttonClass}>
			<span>
				<IcoSun />
				<IcoMoon />
			</span>
		</button>
	);
}
