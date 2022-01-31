export interface Post {
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
