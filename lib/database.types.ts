export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      views: {
        Row: {
          created_at: string | null
          slug: string
          count: number | null
        }
        Insert: {
          created_at?: string | null
          slug: string
          count?: number | null
        }
        Update: {
          created_at?: string | null
          slug?: string
          count?: number | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      increment: {
        Args: { slug_text: string }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
  }
}
