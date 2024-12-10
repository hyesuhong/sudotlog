import meta from '@/data/metadata.json';
import { notes, posts } from '@/libs/article';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const postInfos = await posts.getAllInfo();
	const noteInfos = await notes.getAllInfo();

	return [
		{
			url: meta.site,
		},
		{
			url: `${meta.site}/posts`,
		},
		...postInfos.map((post) => ({ url: `${meta.site}/posts/${post.slug}` })),
		{
			url: `${meta.site}/notes`,
		},
		...noteInfos.map((note) => ({ url: `${meta.site}/notes/${note.slug}` })),
	];
}
