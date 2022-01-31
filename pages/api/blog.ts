import type { NextApiRequest, NextApiResponse } from "next";
import { blogArticles } from "../../lib/devto";
import { getNowPlaying } from "../../lib/spotify";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const blog = await blogArticles();
  return res.status(200).json(blog);
}
