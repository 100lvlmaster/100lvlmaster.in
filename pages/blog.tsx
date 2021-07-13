import { Container, Spacer } from "../components/layouts/container";
import NextLink from "next/link";
import NextImage, { ImageProps } from "next/image";
import { Post } from "../lib/types";
import dateformat from "dateformat";
interface Props {
  posts: Post[];
}
const BlogPage = ({ posts }: Props) => {
  const metaData = {
    title: "Blog - 100lvlmaster",
    description: "Blogs written by 100lvlmaster | Navin Kodag",
    url: `https://100lvlmaster.in/blog/`,
  };
  //
  return (
    <Container className="flex flex-col w-screen" metaData={metaData}>
      <h2 className="font-bold text-2xl">Blog</h2>
      <ul className="flex flex-col py-5 items-stretch space-y-5">
        {posts.map((post: Post) => (
          <NextLink key={post.slug} href={`/blog/${post.slug}`}>
            <a>
              <div className="flex flex-col space-y-1">
                <img
                  src={post.cover_image}
                  alt={post.cover_image}
                  // layout="fill"
                  className="rounded-lg"
                />

                <div className="">{post.title}</div>

                <div className="flex flex-col">
                  <div className="text-xs dark:text-gray-400 text-gray-600">
                    {post.description}
                  </div>
                  <div className="flex flex-row text-xs dark:text-gray-400 text-gray-600">
                    <Spacer />
                    {dateformat(post.published_at, `dd mmm yy`)}
                  </div>
                </div>
              </div>
            </a>
          </NextLink>
        ))}
      </ul>
    </Container>
  );
};

export default BlogPage;
///
export async function getStaticProps() {
  const posts: Post[] = (await (
    await fetch(`https://dev.to/api/articles?username=100lvlmaster`)
  ).json()) as Post[];

  return { props: { posts } };
}
