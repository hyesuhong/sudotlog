'use client';

import { HTMLAttributes, useEffect, useRef, useState } from 'react';
import CopyButton from './copyButton';

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
			<CopyButton onClick={handleCopyClick} copyState={copyState} />
			{children}
		</figure>
	);
}
