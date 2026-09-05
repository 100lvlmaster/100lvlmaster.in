import Head from "next/head";
import MainLayout from "../../layouts/main-layout";
import { getAllPosts, getPostBySlug } from "../../lib/posts";
import { SITE_URL } from "../../lib/site";
import { Post } from "../../lib/types";

interface Props {
  post: Post;
}

const BlogPost = ({ post }: Props) => {
  const articleUrl = `${SITE_URL}/blog/${post.slug}`;

  const meta = {
    title: post.title,
    description: post.description,
    image: post.coverImage ?? `${SITE_URL}/avatar.jpeg`,
    url: articleUrl,
  };

  const publishedAt = post.publishedAt ? new Date(post.publishedAt) : null;
  const publishedDate =
    publishedAt && !Number.isNaN(publishedAt.getTime())
      ? new Intl.DateTimeFormat("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }).format(publishedAt)
      : "";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.coverImage,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Person",
      name: "Navin Kodag",
      url: SITE_URL,
    },
    mainEntityOfPage: articleUrl,
  };

  return (
    <MainLayout meta={meta}>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <div className="flex flex-col">
        <h1 className="text-4xl font-black">{post.title}</h1>
        {post.coverImage && (
          <div className="relative my-5 h-[400px] w-full overflow-hidden rounded-[10px]">
            <img
              src={post.coverImage}
              alt={post.title}
              className="h-full w-full object-cover"
            />
          </div>
        )}
        <div className="flex text-gray-500">
          <span>{` • `}</span>
          <span>{`${post.readingTime ?? 1} mins`}</span>
          <div className="flex-1" />
          <span className="text-right">{publishedDate}</span>
        </div>
        <div
          className="markdown"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </MainLayout>
  );
};

export default BlogPost;

export async function getStaticPaths() {
  const posts = getAllPosts();
  return {
    paths: posts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return { notFound: true };
  }
  return { props: { post } };
}
