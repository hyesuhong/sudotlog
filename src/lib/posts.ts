import fs from 'fs/promises';
import matter from 'gray-matter';
import { join } from 'path';
import { cwd } from 'process';

type AllPostsReturnsOnlyMatter = {
	slug: string;
	data: { [key: string]: any };
};
type AllPostsReturnsFull = {
	slug: string;
} & matter.GrayMatterFile<string>;

type AllPostsReturns = AllPostsReturnsFull | AllPostsReturnsOnlyMatter;

const TARGET_DIR = join(cwd(), 'src', 'contents', 'posts');

export async function getAllPostInfo() {
	const slugs = await _getAllPostSlugs();

	const info = await Promise.all(
		slugs.map((slug) => _getPostBySlug(slug, { onlyFrontMatter: true }))
	);

	return info;
}

export async function getAllPostInfoGroupByDate() {
	const slugs = await _getAllPostSlugs();

	if (slugs.length < 1) {
		return {};
	}

	const info = await Promise.all(
		slugs.map((slug) => _getPostBySlug(slug, { onlyFrontMatter: true }))
	);

	const sortedInfo = info.toSorted((a, b) => {
		const aDate = a.data.date;
		const bDate = b.data.date;

		if (aDate > bDate) {
			return -1;
		}
		if (aDate < bDate) {
			return 1;
		}
		return 0;
	});

	const grouppedInfo = sortedInfo.reduce<Record<number, AllPostsReturns[]>>(
		(acc, cur) => {
			const createdYear = cur.data.date.getFullYear();
			if (typeof acc[createdYear] === 'undefined') {
				acc[createdYear] = [];
			}

			acc[createdYear].push(cur);

			return acc;
		},
		{}
	);

	return grouppedInfo;
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
	const path = join(TARGET_DIR, slug);
	const onlySlug = slug.replace(/\.mdx*/, '');

	const contents = await fs.readFile(path, 'utf-8');

	const d = matter(contents);

	if (options && options.onlyFrontMatter) {
		return { slug: onlySlug, data: d.data };
	}

	return { slug: onlySlug, ...d };
}
