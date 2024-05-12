import { IcoGithub, IcoLinkedin, IcoMail } from '@/assets/icons';
import { css } from '../../../styled-system/css';
import FooterNav from './footerNav';
import ThemeSwitch from './themeSwitch';

const footerClass = css({
	display: 'flex',
	alignItems: 'center',
	h: 10,
	px: 6,
	maxW: '5xl',
	mx: 'auto',
});

const copyrightClass = css({
	fontSize: '12px',
	fontWeight: 300,
});

const footerNavItems = [
	{ path: 'mailto:honghs95@gmail.com', icon: <IcoMail /> },
	{ path: 'https://github.com/hyesuhong', icon: <IcoGithub /> },
	{
		path: 'https://www.linkedin.com/in/hyesu-hong-03110725a',
		icon: <IcoLinkedin />,
	},
];

export default function Footer() {
	return (
		<footer className={footerClass}>
			<p className={copyrightClass}>&copy; 2024 Hyesu Hong.</p>

			<FooterNav items={footerNavItems} />
			<ThemeSwitch />
		</footer>
	);
}
