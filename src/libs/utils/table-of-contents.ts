import { Header } from '@/types/posts';

export function generateToc(content: string) {
	const headers = content.match(/(?=(^#+)\s).*/gm);

	if (headers === null) {
		return [];
	}

	const headersWithInfo = headers.map((header) => {
		const depth = header.match(/#/g);
		const text = header.replace(/^#+/, '');
		const slug = text
			.trim()
			.replace(/\s/g, '-')
			.replace(/!@#$%^&*()[]{}:;'",.\/?/g, '')
			.toLowerCase();

		return { depth: depth?.length || 0, text, slug };
	});

	const hierarchy = _buildTocHierarchy(headersWithInfo);

	return hierarchy;
}

function _buildTocHierarchy(headers: Header[]) {
	const hierarchy = [];
	const parentHeader = new Map<number, Header>();

	for (const header of headers) {
		const { depth } = header;
		const h: Header = { ...header };
		parentHeader.set(header.depth, h);

		if (depth === 2) {
			hierarchy.push(h);
		} else {
			const parentH = parentHeader.get(depth - 1);
			if (parentH) {
				if (typeof parentH.sub === 'undefined') {
					parentH.sub = [];
				}
				parentH.sub.push(header);
			}
		}
	}

	return hierarchy;
}
