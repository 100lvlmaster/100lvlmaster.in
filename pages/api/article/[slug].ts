import type { NextApiRequest, NextApiResponse } from "next";
import { articleBySlug } from "../../../lib/devto";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { slug } = req.query;
  if (!slug) {
    return res.status(400).json({ message: "provide slug" });
  }
  const post = await articleBySlug(slug as string);
  return res.status(200).json(post);
}
