import fs from "fs";
import path from "path";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";
import hljs from "highlight.js";
import type { Post, PostMeta } from "./types";

const postsDirectory = path.join(process.cwd(), "content", "posts");

const escapeHtml = (str: string) =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const md = new MarkdownIt({
  html: true,
  linkify: true,
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang, ignoreIllegals: true })
          .value;
      } catch {
        return escapeHtml(str);
      }
    }
    return escapeHtml(str);
  },
});

// dev.to uses Liquid tags for embeds (e.g. {% gist ... %}) which standard
// markdown doesn't understand. Convert the ones we support into markdown.
function preprocess(markdown: string): string {
  return markdown.replace(
    /\{%\s*gist\s+(https?:\/\/gist\.github\.com\/[a-zA-Z0-9\/_]+?)(?:\.js)?\s*%\}/g,
    (_m, url: string) => `[Gist](${url})`,
  );
}

function getPostFiles(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".md"));
}

function readPostFile(
  slug: string,
): { data: Record<string, unknown>; content: string } | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  const { data, content } = matter(fs.readFileSync(fullPath, "utf8"));
  return { data, content };
}

function toMeta(slug: string, data: Record<string, unknown>): PostMeta {
  const meta: PostMeta = {
    title: (data.title as string) ?? slug,
    description: (data.description as string) ?? "",
    slug,
    publishedAt: (data.publishedAt as string) ?? "",
  };
  if (data.coverImage != null) meta.coverImage = data.coverImage as string;
  if (data.readingTime != null) meta.readingTime = data.readingTime as number;
  if (data.tags != null) meta.tags = data.tags as string[];
  if (data.canonicalUrl != null)
    meta.canonicalUrl = data.canonicalUrl as string;
  return meta;
}

export function getAllPosts(): PostMeta[] {
  const posts = getPostFiles()
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const parsed = readPostFile(slug);
      return parsed ? toMeta(slug, parsed.data) : null;
    })
    .filter((p): p is PostMeta => p !== null);

  return posts.sort((a, b) => (a.publishedAt > b.publishedAt ? -1 : 1));
}

export function getPostBySlug(slug: string): Post | null {
  const parsed = readPostFile(slug);
  if (!parsed) {
    return null;
  }
  return {
    ...toMeta(slug, parsed.data),
    content: md.render(preprocess(parsed.content)),
  };
}
