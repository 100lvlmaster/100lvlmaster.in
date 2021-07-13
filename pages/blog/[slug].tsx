import { Post as Post } from "lib/types";
import BlogLayout from "../../components/layouts/blog";
import gfm from "remark-gfm";
import lint from "remark-lint";
import ReactMarkdown from "react-markdown";
interface Props {
  post: Post;
}
const BlogPost = ({ post }: Props) => {
  const frontMatter = {
    title: post.title,
    description: post.title,
    image: post.cover_image,
    type: `article`,
    url: post.url,
    readingTime: post.reading_time_minutes,
    publishedAt: post.published_timestamp,
  };
  return (
    <BlogLayout frontMatter={frontMatter}>
      <ReactMarkdown plugins={[gfm, lint]} className="prose">
        {post.body_markdown}
      </ReactMarkdown>
    </BlogLayout>
  );
};

export default BlogPost;
///
export async function getStaticPaths() {
  const posts = (await (
    await fetch("https://dev.to/api/articles?username=100lvlmaster")
  ).json()) as Post[];
  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.slug,
        id: p.id,
      },
    })),
    fallback: false,
  };
}
///
export async function getStaticProps({ params }) {
  const posts = (await (
    await fetch(`https://dev.to/api/articles?username=100lvlmaster`)
  ).json()) as Post[];
  const { id } = posts.find((e) => e.slug == params.slug);
  const post = (await (
    await fetch(`https://dev.to/api/articles/${id}`)
  ).json()) as Post;
  return { props: { post } };
}
