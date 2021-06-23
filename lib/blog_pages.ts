import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import readingTime from "reading-time";
import mdxPrism from "mdx-prism";

const root = process.cwd();
//
export const getFileBySlug = async (slug: string) => {
  const source = fs.readFileSync(
    path.join(root, `blog`, slug.concat(`.mdx`)),
    "utf8"
  );
  const { data, content } = matter(source);
  // const mdxSource = await serialize(content, { scope: data });

  //   return { mdxSource: mdxSource, frontMatter: data };
  // };

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        require("remark-slug"),
        [
          require("remark-autolink-headings"),
          {
            linkProperties: {
              className: ["anchor"],
            },
          },
        ],
        require("remark-code-titles"),
      ],
      rehypePlugins: [mdxPrism],
    },
  });
  return {
    mdxSource,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slug || null,
      ...data,
    },
  };
};

//
export const getFilesList = (): string[] =>
  fs.readdirSync(path.join(root, "blog"));

export const getAllArticles = (): Post[] => {
  const files = fs.readdirSync(path.join(root, "blog"));
  //
  let posts = [];
  //
  files.map((slug: string) => {
    const source = fs.readFileSync(path.join(root, "blog", slug), "utf8");
    const { data } = matter(source);
    posts = [...posts, { ...data, slug: slug.replace(/\.mdx/, ``) }];
    posts = posts.sort((first: Post, second: Post) =>
      first.publishedAt > second.publishedAt ? -1 : 1
    );
  });
  return posts;
};

//
export interface Post {
  slug: string;
  title: string;
  description: string;
  publishedAt: Date;
}
