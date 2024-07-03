import { copyrightClassName, footerElClassName } from '@/styles';

export default function Footer() {
	return (
		<footer className={footerElClassName}>
			<p className={copyrightClassName}>&copy; 2024 Hyesu Hong.</p>
			<p className={copyrightClassName}>
				Designed and Developed by Hyesu Hong.
			</p>
		</footer>
	);
}
