import { buttonClass } from '@/styles';
import { MouseEventHandler, ReactNode } from 'react';

interface Props {
	icon?: {
		position: 'FORWARD' | 'BACKWARD' | 'STANDONLY';
		children: ReactNode;
	};
	label?: string;
	disabled?: boolean;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	className?: string;
}

export default function Button({ icon, label, className, ...props }: Props) {
	return (
		<button className={`${buttonClass} ${className}`} {...props}>
			{icon && icon.position === 'FORWARD' && icon.children}
			{icon && icon.position === 'STANDONLY' ? icon.children : label}
			{icon && icon.position === 'BACKWARD' && icon.children}
		</button>
	);
}
