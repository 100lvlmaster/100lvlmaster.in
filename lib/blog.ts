import { Post } from "./types";

const requestInit: RequestInit = {
  cache: "no-cache",
  headers: {
    "Content-Type": "application/json",
    "api-key": process.env.NEXT_PUBLIC_DEVTO_API_KEY,
  },
};

export const blogArticles = async (): Promise<Post[]> => {
  const unSortedPosts: Post[] = (await (
    await fetch(`https://dev.to/api/articles/me/`, requestInit)
  ).json()) as Post[];
  /// Sort by descending

  return unSortedPosts.sort((prev, curr) =>
    prev.published_at > curr.published_at ? -1 : 1
  );
};

export const articleById = async (id: number): Promise<Post> => {
  const post = (await (
    await fetch(`https://dev.to/api/articles/${id}`, requestInit)
  ).json()) as Post;
  return post;
};
