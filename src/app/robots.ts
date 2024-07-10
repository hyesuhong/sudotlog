import meta from '@/data/metadata.json';
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
		},
		sitemap: `${meta.site}/sitemap.xml`,
	};
}
