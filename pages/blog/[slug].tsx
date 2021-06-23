import { getFilesList, getFileBySlug } from "../../lib/blog_pages";
import { MDXRemote } from "next-mdx-remote";
import BlogLayout from "../../components/layouts/blog";
const BlogPost = ({ mdxSource, frontMatter }) => {
  return (
    <BlogLayout frontMatter={frontMatter}>
      {<MDXRemote {...mdxSource} />}
    </BlogLayout>
  );
};

export default BlogPost;
///
export async function getStaticPaths() {
  const paths = getFilesList();
  return {
    paths: paths.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
}
///
export async function getStaticProps({ params }) {
  const data = await getFileBySlug(params.slug);
  return { props: { ...data } };
}
