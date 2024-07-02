import fs from 'fs/promises';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import { join } from 'path';
import { cwd } from 'process';

type PostFrontMatter = {
	title: string;
	description?: string;
	date: Date;
	isDraft: boolean;
	tags?: string[];
};

type AllPostsReturns = {
	slug: string;
	data: PostFrontMatter;
	content?: string;
};

type GroupedPostsByYear = {
	year: number;
	posts: AllPostsReturns[];
};

type OrderBy = 'ASC' | 'DESC';

const TARGET_DIR = join(cwd(), 'src', 'contents', 'posts');

export async function getAllPostInfo() {
	const slugs = await _getAllPostSlugs();

	if (slugs.length < 1) {
		return [];
	}

	const data = await Promise.all(
		slugs.map((slug) => _getPostBySlug(slug, { onlyFrontMatter: true }))
	);

	return _filterDraft(data);
}

export async function getAllPostInfoGroupByDate() {
	const data = await getAllPostInfo();

	const sortedData = _sortByDate(data);
	const groupedData = _groupByDate(sortedData);

	return groupedData;
}

export async function getPostBySlug(slug: string) {
	const post = await _getPostBySlug(slug);

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
