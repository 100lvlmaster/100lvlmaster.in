---
title: "Adding view count to your Nextjs Blog"
description: "Alright lads, this will be a quick one. I want to add the views count functionality on my personal..."
slug: "adding-view-count-to-your-nextjs-blog-55lj"
publishedAt: "2021-11-07T20:02:20.125Z"
coverImage: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fp5w4mv1euvobkg2z03ig.png"
readingTime: 2
canonicalUrl: "https://www.navinkodag.com/blog/adding-view-count-to-your-nextjs-blog-55lj"
tags:
  - supabase
  - nextjs
  - typescript
  - database
---



Alright lads, this will be a quick one. I want to add the views count functionality on my personal portfolio website's blog section.

![ready.gif](https://media3.giphy.com/media/0DYipdNqJ5n4GYATKL/giphy.gif?cid=ecf05e47cyftq8cfvkwqriyg5md5zc2irw1cb9u5fque0nbk&rid=giphy.gif&ct=g)

Expected behavior:
-   Blogs Page : List of blogs -> Show count.
-  Blog Page : Particular Article -> Show count and  Increment count.

How to achieve:
- Use supabase to store count by slug
- Stored procedure to increment count

Tools that I'll need:
- [supabase](https://www.npmjs.com/package/@supabase/supabase-js) : open source firebase alternative 
- [swr](https://www.npmjs.com/package/swr) : data fetching

##  Setting up supabase table :
Create a table `views` with schema like such:
- slug -> text -> primary key
- created_at -> timestamp -> now()
- count ->  int2 

## Updating `count`:
- Fetch count
- Increment one
- Fetch count again

Now we can reduce this to one db call using stored procedures:
![stored-procedure.png](https://imgur.com/S8JB0LC.png)
```sql
create function increment (slug_text text)
returns void as
$$
update views
set count = count + 1
where slug = slug_text;
$$
language sql volatile;
```
## In NextJs:
We'll define a route for ease:
	- /api/view/{slug}
and then we'll use the `POST` request to register a view and `GET` to increment the view count.
Our handler code will look like this:
views.ts
```ts
import { createClient, PostgrestError } from "@supabase/supabase-js";
const supabase = createClient(
process.env.SUPABASE_URL,
process.env.SUPABASE_KEY
);
interface SupabaseResult {
	data?: { count: number };
	error?: PostgrestError;
}
///
const getViews = async (slug: string): Promise<number> => {
const { data: views, error }: SupabaseResult = await supabase
.from("views")
.select(`count`)
.match({ slug: slug })
.single();
if (error && error.details.includes(`0 rows`)) {
	const { data, error }: SupabaseResult = await supabase
	.from(`views`)
	.insert({ slug: slug, count: 1 }, { returning: `representation` })
	.single();
	return data.count;
	}
	if (!views) {
	return 0;
	}
	return views.count;
	};
///
	const registerView = async (slug: string): Promise<void> => {
	const { data, error } = await supabase.rpc("increment", {
	slug_text: slug,
	});
};
export { getViews, registerView };
```
- /api/view/[slug].ts
```ts
// /api/view/[slug].ts
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getViews, registerView } from "lib/views";
import type { NextApiRequest, NextApiResponse } from "next";
interface Data {
	message?: string;
	status?: number;
	count?: number;
}

///
export default async function handler(
req: NextApiRequest,
res: NextApiResponse<Data>
): Promise<void> {
const slug = req.query.slug.toString();
///
if (!slug) {
	return res.status(400).json({ message: `invalid slug` });
}
if (req.method == `POST`) {
	await registerView(slug);
}
const count = await getViews(slug);
return res.status(200).json({ count: count });
}
```
## ViewCounter Component
 - view_counter.tsx
 ```ts
import fetcher from "lib/fetcher";
import { Views } from "lib/types";
import { useEffect } from "react";
import useSWR from "swr";

interface Props {
	slug: string;
}

const ViewCounter = ({ slug }: Props) => {
const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
useEffect(() => {
	const registerView = () =>
	fetch(`/api/views/${slug}`, {
		method: "POST",
	});
	registerView();
}, [slug]);

return (
	<span>{`${
	(data?.count ?? 0) > 0 ? data.count.toLocaleString() :"–––"
	} views`}</span>
	);
};

export default ViewCounter;
 ```
 
 Our views in action:
 ![view_counter.png](https://imgur.com/0qw4uen.png)
 ![view_count.png](https://imgur.com/0lTteEJ.png)
 
 The code of this project lives at : https://github.com/100lvlmaster/www.navinkodag.com 
 ---
You can find me at: https://www.navinkodag.com
