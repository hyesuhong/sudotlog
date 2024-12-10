import meta from '@/data/metadata.json';
import { posts } from '@/libs/article';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const postInfos = await posts.getAllInfo();

	return [
		{
			url: meta.site,
		},
		{
			url: `${meta.site}/posts`,
		},
		...postInfos.map((post) => ({ url: `${meta.site}/posts/${post.slug}` })),
	];
}
