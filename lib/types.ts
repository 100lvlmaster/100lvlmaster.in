export interface PostMeta {
	title: string;
	description: string;
	slug: string;
	publishedAt: string;
	coverImage?: string;
	readingTime?: number;
	tags?: string[];
	canonicalUrl?: string;
}

export interface Post extends PostMeta {
	content: string;
}

export interface Project {
	title: string;
	technology:
		| "json"
		| "dart"
		| "flutter"
		| "javascript"
		| "typescript"
		| "go"
		| "svelte"
		| "nextjs";
	description: string;
	url: string;
	github?: string;
	playstore?: string;
	image?: string;
}

export interface Seo {
	title?: string;
	description?: string;
	image?: string;
	url?: string;
}
