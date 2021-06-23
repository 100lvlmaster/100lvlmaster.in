import { Container, Spacer } from "../components/container";
import { getAllArticles, Post } from "../lib/blog_pages";
import dateformat from "dateformat";
import NextLink from "next/link";
interface Props {
  posts: Post[];
}
const BlogPage = ({ posts }: Props) => {
  //
  return (
    <div>
      <Container className="flex flex-col w-screen">
        <h2 className="font-bold text-2xl">Blog</h2>
        <ul className="flex flex-col py-5 items-stretch space-y-5">
          {posts.map((post: Post) => (
            <NextLink key={post.slug} href={`/blog/${post.slug}`}>
              <a>
                <div className="flex flex-col space-y-1">
                  <div className="">{post.title}</div>
                  <div className="flex flex-col">
                    <div className="text-xs dark:text-gray-400 text-gray-600">
                      {post.description}
                    </div>
                    <div className="flex flex-row text-xs dark:text-gray-400 text-gray-600">
                      <Spacer />
                      {dateformat(post.publishedAt, "mmm d yyyy")}
                    </div>
                  </div>
                </div>
              </a>
            </NextLink>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default BlogPage;
///
export async function getStaticProps() {
  const posts = getAllArticles();
  return { props: { posts } };
}
