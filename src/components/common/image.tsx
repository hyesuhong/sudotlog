'use client';

import { ImageProps } from '@/types/components';
import NextImage, { ImageLoader } from 'next/image';
import { SyntheticEvent, useState } from 'react';

const initialSize = {
	width: 0,
	height: 0,
};

export default function Image({
	src,
	alt,
	title,
	hasWrapper = true,
}: ImageProps) {
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

	return hasWrapper ? (
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
	) : (
		<>
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
		</>
	);
}
