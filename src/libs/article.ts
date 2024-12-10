import {
	AllPostsReturns,
	GroupedPostsByYear,
	OrderBy,
	PostFrontMatter,
} from '@/types/posts';
import fs from 'fs/promises';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import { join } from 'path';
import { cwd, env } from 'process';

class Article {
	private targetDir: string;
	private mdExtRegexp = /.mdx*/;

	constructor(dir: string) {
		this.targetDir = join(cwd(), 'src', 'data', dir);
	}

	async getAllInfo() {
		const slugs = await this.getAllSlugs();

		if (slugs.length < 1) {
			return [];
		}

		const data = await Promise.all(
			slugs.map((slug) => this.getInfoBySlug(slug, { onlyFrontMatter: true }))
		);

		return env.NODE_ENV === 'development' ? data : this.filterDraft(data);
	}

	async getAllInfoGroupByDate() {
		const data = await this.getAllInfo();

		const sortedData = this.sortByDate(data);
		const groupedData = this.groupByDate(sortedData);

		return groupedData;
	}

	async getBySlug(slug: string) {
		const article = await this.getInfoBySlug(slug);

		if (env.NODE_ENV !== 'development' && article.data.isDraft) {
			notFound();
		}

		return article;
	}

	private async getAllSlugs() {
		try {
			const dirArr = await fs.readdir(this.targetDir);
			const onlyMdFiles = dirArr.filter((file) => file.match(this.mdExtRegexp));

			return onlyMdFiles;
		} catch (err) {
			console.error(err);
			return [];
		}
	}

	private async getInfoBySlug(
		slug: string,
		options?: { onlyFrontMatter: boolean }
	) {
		const onlySlug = slug.replace(this.mdExtRegexp, '');
		const path = await this.getFilePath(onlySlug);

		const contents = await fs.readFile(path, 'utf-8');

		const origin = matter(contents);
		const frontmatter = origin.data as PostFrontMatter;
		const returnData = { content: origin.content, data: frontmatter };

		if (options && options.onlyFrontMatter) {
			return { slug: onlySlug, data: frontmatter, content: undefined };
		}

		return { slug: onlySlug, ...returnData };
	}

	async getFilePath(slug: string) {
		const basePath = join(this.targetDir, slug);
		const targetPath = [basePath + '.mdx', basePath + '.md'];

		const isExist = await Promise.allSettled(
			targetPath.map((path) => this.isExistPath(path))
		);

		const existPathIndex = isExist.findIndex(
			(res) => res.status === 'fulfilled' && res.value
		);

		if (existPathIndex < 0) {
			notFound();
		}

		return targetPath[existPathIndex];
	}

	private async isExistPath(path: string) {
		try {
			await fs.access(path);
			return true;
		} catch {
			return false;
		}
	}

	private filterDraft(data: AllPostsReturns[]) {
		const result = data.filter((d) => !d.data.isDraft);
		return result;
	}

	private sortByDate(data: AllPostsReturns[], orderBy: OrderBy = 'DESC') {
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

	private groupByDate(data: AllPostsReturns[]) {
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
}

export const posts = new Article('posts');
