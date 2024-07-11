'use client';

import { IcoArrowLeft } from '@/assets/icons';
import { backLinkClassName } from '@/styles';
import { ComponentWithLabel } from '@/types/components';
import { useRouter } from 'next/navigation';

export default function BackLink({ label }: ComponentWithLabel) {
	const router = useRouter();

	const onClick = () => router.back();

	return (
		<button className={backLinkClassName} onClick={onClick}>
			<IcoArrowLeft />
			{label ? label : 'Back'}
		</button>
	);
}
