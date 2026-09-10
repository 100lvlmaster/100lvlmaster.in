import NextLink from "next/link";
import MainLayout from "../../layouts/main-layout";
import { formatDate } from "../../lib/date";
import { getAllPosts } from "../../lib/posts";
import { SITE_URL } from "../../lib/site";
import { PostMeta } from "../../lib/types";

const BlogPage = ({ posts }: { posts: PostMeta[] }) => {
  return (
    <MainLayout meta={{ title: "Blog - Navin Kodag | Developer", url: `${SITE_URL}/blog` }}>
      <p className="text-3xl">Blog</p>
      <div className="flex flex-col gap-8 py-10">
        {posts &&
          posts?.map((e, i) => {
            return (
              <NextLink href={`/blog/${e.slug}`} key={`${e.slug}`}>
                <div>
                  <div className="flex flex-col">
                    <span className="hover:underline">
                      <span className="text-xl">{e.title} </span>{" "}
                      <span className="text-sm text-gray-500">{formatDate(e.publishedAt)}</span>
                    </span>

                    <span className="text-gray-500">{e.description}</span>
                  </div>
                </div>
              </NextLink>
            );
          })}
      </div>
    </MainLayout>
  );
};
export default BlogPage;

export async function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts } };
}
