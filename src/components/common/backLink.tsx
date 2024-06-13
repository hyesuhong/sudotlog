'use client';

import { IcoArrowLeft } from '@/assets/icons';
import { backLinkStyle } from '@/styles';
import { useRouter } from 'next/navigation';

type Props = {
	label?: string;
};

export default function BackLink({ label }: Props) {
	const router = useRouter();

	const onClick = () => router.back();

	return (
		<button className={backLinkStyle} onClick={onClick}>
			<IcoArrowLeft />
			{label ? label : 'Back'}
		</button>
	);
}
