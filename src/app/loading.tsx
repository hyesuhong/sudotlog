import { pageLayout } from '@/styles';

export default function Loading() {
	return (
		<main className={pageLayout({ isMain: true })}>
			<p>Loaidng...</p>
		</main>
	);
}
