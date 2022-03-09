import { articleBySlug } from "./devto";
import { getTopSlugsByCount } from "./supabase";
import { Post } from "./types";

export const topArticles = async (): Promise<Post[]> => {
  const slugs = await getTopSlugsByCount();
  const posts = await Promise.all(
    slugs.map(async (e) => {
      return await articleBySlug(e.slug);
    })
  );
  return posts;
};
