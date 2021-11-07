import { Container } from "../components/layouts/container";
import NextLink from "next/link";
import { Post, Views } from "../lib/types";
import { blogArticles } from "lib/blog";
import useSWR from "swr";
import fetcher from "lib/fetcher";

interface Props {
  posts: Post[];
}
const BlogPage = ({ posts }: Props) => {
  const frontMatter = {
    title: "Blog - 100lvlmaster",
    description: "Blogs written by 100lvlmaster | Navin Kodag",
    url: `https://100lvlmaster.in/blog/`,
  };
  //
  return (
    <Container className="flex flex-col w-screen" frontMatter={frontMatter}>
      <h2 className="font-black text-4xl text-left w-full">Blog</h2>
      <ul className="flex flex-col py-5 items-stretch space-y-5">
        {posts.map((post: Post) => (
          <BlogPost key={post.slug} post={post} />
        ))}
      </ul>
    </Container>
  );
};

const BlogPost = ({ post }: { post: Post }) => {
  const { data } = useSWR<Views>(`/api/views/${post.slug}`, fetcher);
  return (
    <li key={post.slug}>
      <NextLink href={`/blog/${post.slug}`}>
        <a>
          <div className="flex flex-col space-y-1">
            <div className="font-bold text-xl">{post.title}</div>

            <div className="flex flex-col">
              <div className="text-sm dark:text-gray-400 text-gray-600">
                {post.description}
              </div>
              <div className="flex flex-row text-xs dark:text-gray-400 text-gray-600">
                <div className="flex-grow" />
                <span>{`${data?.count ?? "0"} views`}</span>
              </div>
            </div>
          </div>
        </a>
      </NextLink>
    </li>
  );
};

export default BlogPage;
///
export async function getStaticProps() {
  const posts = await blogArticles();
  return { props: { posts }, revalidate: 21600 };
}
