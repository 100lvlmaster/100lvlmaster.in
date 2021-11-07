// To parse this data:
//
//   import { Convert } from "./file";
//
//   const posts = Convert.toPosts(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.
export interface FrontMatter {
  title: string;
  description: string;
  publishedAt?: Date;
  image?: string;
  type?: string;
  readingTime?: number;
  url?: string;
}

export interface Post {
  type_of: TypeOf;
  id: number;
  title: string;
  description: string;
  slug: string;
  url: string;
  published_timestamp: Date;
  cover_image: string;
  social_image: string;
  canonical_url: string;
  created_at: Date;
  edited_at: Date | null;
  published_at: Date;
  reading_time_minutes: number;
  body_html: string;
  body_markdown: string;
}

interface Views {
  count: number;
}
