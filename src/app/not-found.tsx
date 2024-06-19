import { Heading, Text } from '@/components/common';
import { HrLine } from '@/components/post/elements';
import { pageLayout, twoColumnsLayout } from '@/styles';
import Link from 'next/link';

export default function NotFound() {
	return (
		<main className={`content ${pageLayout()}`}>
			<Heading type='h2'>404</Heading>
			<Text>요청하신 페이지를 찾을 수 없습니다.</Text>
			<HrLine />
			<div className={twoColumnsLayout}>
				<Link href='/'>Main</Link>
				<Link href='/about'>About</Link>
				<Link href='/posts'>Posts</Link>
			</div>
		</main>
	);
}
