import { Post } from "./types";

const requestInit: RequestInit = {
  cache: "no-cache",
  headers: {
    "Content-Type": "application/json",
    "User-Agent":
      "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/W.X.Y.Z Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
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
