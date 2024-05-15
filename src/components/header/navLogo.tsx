import { headerLogoClassName } from '@/styles';
import Link from 'next/link';

export default function NavLogo() {
	return (
		<Link href='/' className={headerLogoClassName}>
			Su.log
		</Link>
	);
}
