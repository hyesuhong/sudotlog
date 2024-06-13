import { IcoGithub, IcoLinkedin, IcoMail } from '@/assets/icons';
import { copyrightClassName, footerElClassName } from '@/styles';
import { ThemeSwitch } from '../theme';
import FooterNav from './footerNav';

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
		<footer className={footerElClassName}>
			<p className={copyrightClassName}>&copy; 2024 Hyesu Hong.</p>

			<FooterNav items={footerNavItems} />
			<ThemeSwitch />
		</footer>
	);
}
