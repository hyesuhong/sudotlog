import { buttonClass } from '@/styles';
import { ButtonProps } from '@/types/components';

export default function Button({
	icon,
	label,
	className,
	hasBg = true,
	...props
}: ButtonProps) {
	return (
		<button
			className={`${buttonClass({ hasBg, isIconOnly: icon && icon.position === 'STANDONLY' })} ${className}`}
			{...props}
		>
			{icon && icon.position === 'FORWARD' && icon.children}
			{icon && icon.position === 'STANDONLY' ? icon.children : label}
			{icon && icon.position === 'BACKWARD' && icon.children}
		</button>
	);
}
