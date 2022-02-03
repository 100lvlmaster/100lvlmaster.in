import { createClient, PostgrestError } from "@supabase/supabase-js";
const supabase = createClient(
  process.env.SUPABASE_URL ?? "",
  process.env.SUPABASE_KEY ?? ""
);

interface SupabaseResult {
  data?: { count: number };
  error?: PostgrestError;
}

///
const getViews = async (slug: string): Promise<number> => {
  const { data: views, error } = await supabase
    .from("views")
    .select(`count`)
    .match({ slug: slug })
    .single();

  if (error && error.details.includes(`0 rows`)) {
    const { data } = await supabase
      .from(`views`)
      .insert({ slug: slug, count: 1 }, { returning: `representation` })
      .single();
    return data.count;
  }
  return views?.count ?? 0;
};
///
const registerView = async (slug: string): Promise<void> => {
  const { data, error } = await supabase.rpc("increment", {
    slug_text: slug,
  });
};

export { getViews, registerView };
