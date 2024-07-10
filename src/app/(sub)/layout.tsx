'use client';

import { IcoArrowTop } from '@/assets/icons';
import { Button } from '@/components/common';
import { pageLayout, topButton } from '@/styles';

export default function SubPageLayout({ children }: React.PropsWithChildren) {
	const goTopButtonClick = () => {
		scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<main className={pageLayout()}>
			{children}
			<Button
				icon={{ position: 'STANDONLY', children: <IcoArrowTop /> }}
				className={topButton}
				onClick={goTopButtonClick}
			/>
		</main>
	);
}
