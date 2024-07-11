export type PostFrontMatter = {
	title: string;
	description?: string;
	date: Date;
	isDraft: boolean;
	tags?: string[];
};

export type AllPostsReturns = {
	slug: string;
	data: PostFrontMatter;
	content?: string;
};

export type GroupedPostsByYear = {
	year: number;
	posts: AllPostsReturns[];
};

export type OrderBy = 'ASC' | 'DESC';

export type Header = {
	depth: number;
	text: string;
	slug: string;
	sub?: Header[];
};

export type TocProps = {
	headers: Header[];
};
