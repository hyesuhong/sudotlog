'use client';

import NextImage, { ImageLoader } from 'next/image';
import { SyntheticEvent, useState } from 'react';

type Props = {
	src?: string;
	alt?: string;
	title?: string;
};

const initialSize = {
	width: 0,
	height: 0,
};

export default function Image({ src, alt, title }: Props) {
	const [size, setSize] = useState(initialSize);
	const imageLoader: ImageLoader = ({ src, width, quality }) => {
		return `${src}?w=${width}&q=${quality || 80}`;
	};

	const onLoad = (ev: SyntheticEvent<HTMLImageElement>) => {
		const {
			currentTarget: { naturalHeight, naturalWidth },
		} = ev;

		setSize({ width: naturalWidth, height: naturalHeight });
	};

	return (
		<figure>
			{src ? (
				<NextImage
					src={src}
					alt={alt || ''}
					width={size.width}
					height={size.height}
					loader={imageLoader}
					onLoad={onLoad}
					title={title}
				/>
			) : (
				<>empty</>
			)}
			{title && <figcaption>{title}</figcaption>}
		</figure>
	);
}
