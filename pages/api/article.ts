import type { NextApiRequest, NextApiResponse } from "next";
import { articleBySlug, blogArticles } from "../../lib/devto";
import { getNowPlaying } from "../../lib/spotify";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!req.query.slug) {
    return res.status(400).json({ message: "provide slug" });
  }
  const post = await articleBySlug(req.query.slug as string);
  return res.status(200).json(post);
}
