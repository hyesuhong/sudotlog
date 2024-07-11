'use client';

import { IcoCheck, IcoCopy } from '@/assets/icons';
import { Button } from '@/components/common';
import { copyButton } from '@/styles';
import { HTMLAttributes, useEffect, useRef, useState } from 'react';

export default function CodeBlock({
	children,
	...props
}: HTMLAttributes<HTMLElement>) {
	const ref = useRef<HTMLElement>(null);
	const [content, setContent] = useState('');
	const [copyState, setCopyState] = useState(false);

	const handleCopyClick = () => {
		let timer: null | NodeJS.Timeout;

		navigator.clipboard
			.writeText(content)
			.then(() => {
				setCopyState(true);
				timer = setTimeout(() => {
					setCopyState(false);
					if (timer) {
						clearTimeout(timer);
						timer = null;
					}
				}, 1000);
			})
			.catch(console.error);
	};

	useEffect(() => {
		if (ref.current && ref.current.textContent) {
			setContent(ref.current.textContent);
		}
	}, [ref]);

	return (
		<figure {...props} ref={ref}>
			<Button
				icon={{
					position: 'STANDONLY',
					children: copyState ? <IcoCheck /> : <IcoCopy />,
				}}
				onClick={handleCopyClick}
				className={copyButton}
				hasBg={false}
			/>
			{children}
		</figure>
	);
}
