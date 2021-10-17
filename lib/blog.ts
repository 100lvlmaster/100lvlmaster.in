import { Post } from "./types";

const requestInit: RequestInit = {
  headers: {
    "User-Agent": "*",
    "api-key": process.env.NEXT_PUBLIC_DEVTO_API_KEY,
  },
};

export const blogArticles = async (): Promise<Post[]> => {
  const response = await fetch(`https://dev.to/api/articles/me/`, requestInit);
  const posts = (await response.json()) as Post[];
  /// Sort by descending
  return posts.sort((prev, curr) =>
    prev.published_at > curr.published_at ? -1 : 1
  );
};

export const articleBySlug = async (slug: string): Promise<Post> => {
  const response = await fetch(
    `https://dev.to/api/articles/100lvlmaster/${slug}`,
    requestInit
  );
  const post = (await response.json()) as Post;
  return post;
};
