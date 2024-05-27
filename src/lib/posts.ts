import fs from 'fs/promises';
import matter from 'gray-matter';
import { join } from 'path';
import { cwd } from 'process';

type PostFrontMatter = {
	title: string;
	description?: string;
	date: Date;
	tags?: string[];
};

type PostsReturnNoContent = {
	data: PostFrontMatter;
};

interface PostReturnFull extends matter.GrayMatterFile<string> {
	data: PostFrontMatter;
}

type AllPostsReturns = { slug: string } & (
	| PostsReturnNoContent
	| PostReturnFull
);

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

export async function getPostBySlug(slug: string) {
	const post = _getPostBySlug(slug);

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
	let path = join(TARGET_DIR, slug);
	const onlySlug = slug.replace(/\.mdx*/, '');

	const isFileName = slug.match(/\.mdx*/);

	if (!isFileName) {
		const mdxPath = path + '.mdx';
		const mdPath = path + '.md';

		const isMdx = await _isExistPath(mdxPath);
		if (isMdx) {
			path = mdxPath;
		}

		const isMd = await _isExistPath(mdPath);
		if (isMd) {
			path = mdPath;
		}
	}

	const contents = await fs.readFile(path, 'utf-8');

	const origin = matter(contents);
	const frontmatter = origin.data as PostFrontMatter;
	const returnData = { content: origin.content, data: frontmatter };

	if (options && options.onlyFrontMatter) {
		return { slug: onlySlug, data: frontmatter };
	}

	return { slug: onlySlug, ...returnData };
}

async function _isExistPath(path: string) {
	try {
		await fs.access(path);
		return true;
	} catch (e) {
		console.log(e);
		return false;
	}
}
