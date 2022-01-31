// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getNowPlaying } from "../../lib/spotify";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const response = await getNowPlaying();
  if (+response.status != 200) {
    res.status(400).json({ message: "Not Playing" });
  }
  const responseJson = await response.json();
  res.status(200).json(responseJson);
  return;
}
