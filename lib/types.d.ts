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
  readable_publish_date: string;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  collection_id: number | null;
  published_timestamp: string;
  positive_reactions_count: number;
  cover_image: string;
  social_image: string;
  canonical_url: string;
  created_at: Date;
  edited_at: Date | null;
  crossposted_at: null;
  published_at: string;
  last_comment_at: Date;
  reading_time_minutes: number;
  tag_list: string[];
  tags: string;
  user: User;
  body_html: string;
  body_markdown: string;
}
