import { PostgrestError } from "@supabase/supabase-js";

export interface Post {
  id: number;
  title: string;
  description: string;
  slug: string;
  url: string;
  published_timestamp: string;
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

export interface Views {
  count: number;
}

export interface SupabaseResult {
  data?: { count: number };
  error?: PostgrestError;
}
export interface Project {
  title: string;
  technology:
    | "json"
    | "dart"
    | "flutter"
    | "javascript"
    | "typescript"
    | "go"
    | "svelte"
    | "nextjs";
  description: string;
  url: string;
  github?: string;
  playstore?: string;
  image?: string;
}

export interface Seo {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}
