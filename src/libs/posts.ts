import {
	AllPostsReturns,
	GroupedPostsByYear,
	Header,
	OrderBy,
	PostFrontMatter,
} from '@/types/posts';
import fs from 'fs/promises';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import { join } from 'path';
import { cwd, env } from 'process';

const TARGET_DIR = join(cwd(), 'src', 'data', 'posts');

export async function getAllPostInfo() {
	const slugs = await _getAllPostSlugs();

	if (slugs.length < 1) {
		return [];
	}

	const data = await Promise.all(
		slugs.map((slug) => _getPostBySlug(slug, { onlyFrontMatter: true }))
	);

	return env.NODE_ENV === 'development' ? data : _filterDraft(data);
}

export async function getAllPostInfoGroupByDate() {
	const data = await getAllPostInfo();

	const sortedData = _sortByDate(data);
	const groupedData = _groupByDate(sortedData);

	return groupedData;
}

export async function getPostBySlug(slug: string) {
	const post = await _getPostBySlug(slug);

	if (env.NODE_ENV !== 'development' && post.data.isDraft) {
		return notFound();
	}

	return post;
}

async function _getAllPostSlugs() {
	const dirArr = await fs.readdir(TARGET_DIR);
	const onlyMdFiles = dirArr.filter((file) => file.match(/\.mdx*/));

	return onlyMdFiles;
}

async function _getPostBySlug(
	slug: string,
	options?: { onlyFrontMatter: boolean }
) {
	const onlySlug = slug.replace(/\.mdx*/, '');
	const path = await _getFilePath(onlySlug);

	const contents = await fs.readFile(path, 'utf-8');

	const origin = matter(contents);
	const frontmatter = origin.data as PostFrontMatter;
	const returnData = { content: origin.content, data: frontmatter };

	if (options && options.onlyFrontMatter) {
		return { slug: onlySlug, data: frontmatter, content: undefined };
	}

	return { slug: onlySlug, ...returnData };
}

async function _isExistPath(path: string) {
	try {
		await fs.access(path);
		return true;
	} catch (e) {
		return false;
	}
}

async function _getFilePath(slug: string) {
	const basePath = join(TARGET_DIR, slug);

	const mdxPath = basePath + '.mdx';
	const mdPath = basePath + '.md';

	const isMdx = await _isExistPath(mdxPath);
	if (isMdx) {
		return mdxPath;
	}

	const isMd = await _isExistPath(mdPath);
	if (isMd) {
		return mdPath;
	}

	return notFound();
}

function _filterDraft(data: AllPostsReturns[]) {
	const result = data.filter((d) => !d.data.isDraft);
	return result;
}

function _sortByDate(data: AllPostsReturns[], orderBy: OrderBy = 'DESC') {
	const sortedData = data.toSorted((a, b) => {
		const aDate = a.data.date;
		const bDate = b.data.date;

		if (orderBy === 'DESC') {
			return aDate > bDate ? -1 : aDate < bDate ? 1 : 0;
		}

		return aDate < bDate ? -1 : aDate > bDate ? 1 : 0;
	});

	return sortedData;
}

function _groupByDate(data: AllPostsReturns[]) {
	const groupedData = data.reduce<GroupedPostsByYear[]>((acc, cur) => {
		const createdYear = cur.data.date.getFullYear();
		const isExist = acc.find((a) => a.year === createdYear);

		if (!isExist) {
			const newYear = { year: createdYear, posts: [] };
			acc.push(newYear);
		}

		const yearIndex = acc.findIndex((a) => a.year === createdYear);

		acc[yearIndex].posts.push(cur);

		return acc;
	}, []);

	return groupedData;
}

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
