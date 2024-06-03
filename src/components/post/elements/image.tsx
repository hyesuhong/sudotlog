'use client';

import { postContentFigure } from '@/styles';
import NextImage from 'next/image';

type Props = {
	src?: string;
	alt?: string;
};

export default function Image({ src, alt }: Props) {
	const imageLoader = ({ src }: { src: string }) => src;

	return (
		<figure className={postContentFigure}>
			{src ? (
				<NextImage
					src={src}
					alt={alt || ''}
					fill={true}
					objectFit='contain'
					loader={imageLoader}
				/>
			) : (
				<>empty</>
			)}
			{alt && <figcaption>{alt}</figcaption>}
		</figure>
	);
}
