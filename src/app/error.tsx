'use client';

import { Heading } from '@/components/common';
import { HrLine } from '@/components/post/elements';
import { pageLayout, twoColumnsLayout } from '@/styles';
import { ErrorPageProps } from '@/types/components';
import Link from 'next/link';

import { useEffect } from 'react';

export default function ErrorPage({ error, reset }: ErrorPageProps) {
	useEffect(() => {
		console.error(error);
	}, [error]);
	return (
		<main className={`content ${pageLayout()}`}>
			<Heading type='h1'>{error.message || '에러가 발생했습니다.'}</Heading>
			<button onClick={() => reset()}>새로고침</button>
			<HrLine />
			<div className={twoColumnsLayout}>
				<Link href='/'>Main</Link>
				<Link href='/about'>About</Link>
				<Link href='/posts'>Posts</Link>
			</div>
		</main>
	);
}
