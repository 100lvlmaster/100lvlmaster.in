import { Post } from "./types";

const requestInit: RequestInit = {
  cache: "only-if-cached",
  headers: {
    "User-Agent": "*",
    "api-key": process.env.NEXT_PUBLIC_DEVTO_API_KEY,
  },
};

export const blogArticles = async (): Promise<Post[]> => {
  const response = await fetch(`https://dev.to/api/articles/me/`, requestInit);
  const unSortedPosts: Post[] = (await response.json()) as Post[];
  /// Sort by descending
  console.log("building");
  return unSortedPosts.sort((prev, curr) =>
    prev.published_at > curr.published_at ? -1 : 1
  );
};

export const articleById = async (id: number): Promise<Post> => {
  const response = await fetch(
    `https://dev.to/api/articles/${id}`,
    requestInit
  );
  const post = (await response.json()) as Post;
  return post;
};
