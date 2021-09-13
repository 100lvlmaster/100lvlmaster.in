import { Post as Post } from "lib/types";
import { Container } from "components/layouts/container";
import dateformat from "dateformat";
import NextImage from "next/image";
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
    <Container frontMatter={frontMatter} className="space-y-5">
      <div className="w-full relative h-52">
        <NextImage
          className="rounded-lg"
          src={post.cover_image}
          alt={post.cover_image}
          layout="fill"
        />
      </div>
      <div className="font-bold text-3xl md:text-5xl tracking-tight text-black dark:text-white">
        {frontMatter.title}
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-2">
        <div className="flex items-center">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {"Navin Kodag"}
            {` • `}
            {`${frontMatter.readingTime} mins`}
          </p>
        </div>
        <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
          {dateformat(frontMatter.publishedAt, `dd mmm yyyy`)}
        </p>
      </div>
      <ReactMarkdown plugins={[gfm, lint]} className="prose">
        {post.body_html}
      </ReactMarkdown>
    </Container>
    // <BlogLayout frontMatter={frontMatter}>
    //   <div className="prose dark:prose">
    //     dangerouslySetInnerHTML={{ __html: post.body_html }}
    //   </div>

    // {/* <ReactMarkdown plugins={[gfm, lint]} className="prose">
    // { post.body_html}
    // </ReactMarkdown> */}
    // </BlogLayout>
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
