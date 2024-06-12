import { postContentCheckbox } from '@/styles';
import { InputHTMLAttributes } from 'react';

export default function Checkbox({
	...props
}: InputHTMLAttributes<HTMLInputElement>) {
	return <input type='checkbox' {...props} className={postContentCheckbox} />;
}
