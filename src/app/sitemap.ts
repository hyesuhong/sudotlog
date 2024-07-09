import meta from '@/data/metadata.json';
import { getAllPostInfo } from '@/lib/posts';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const posts = await getAllPostInfo();

	return [
		{
			url: meta.site,
		},
		{
			url: `${meta.site}/posts`,
		},
		...posts.map((post) => ({ url: `${meta.site}/posts/${post.slug}` })),
	];
}
