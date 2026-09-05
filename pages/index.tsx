import NextLink from "next/link";
import MainLayout from "../layouts/main-layout";
import { PostMeta } from "../lib/types";
import { getAllPosts } from "../lib/posts";

const Home = ({ posts }: { posts: PostMeta[] }) => {
  return (
    <MainLayout>
      <div className="mt-8 flex flex-col-reverse items-center lg:flex-row">
        <div>
          <p className="py-5 text-4xl font-black sm:text-5xl">
            Hey, I&apos;m Navin Kodag
          </p>
          I&apos;m a Fullstack developer. &nbsp;I work on NodeJs, Golang,
          Flutter, React and Svelte.
          <p>
            I see that you&apos;ve stumbled upon my small kingdom on the
            internet. I like to solve problems with code.
          </p>
        </div>
      </div>

      <div className="py-10">
        <div className="flex gap-3">
          <a
            rel="noreferrer"
            href="https://github.com/100lvlmaster"
            target="_blank"
          >
            <button
              className="cursor-pointer rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="github"
            >
              <svg
                height="30"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                aria-labelledby="title"
                fill="currentColor"
                aria-describedby="desc"
                role="img"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <path
                  data-name="layer2"
                  d="M32 0a32.021 32.021 0 0 0-10.1 62.4c1.6.3 2.2-.7 2.2-1.5v-6c-8.9 1.9-10.8-3.8-10.8-3.8-1.5-3.7-3.6-4.7-3.6-4.7-2.9-2 .2-1.9.2-1.9 3.2.2 4.9 3.3 4.9 3.3 2.9 4.9 7.5 3.5 9.3 2.7a6.93 6.93 0 0 1 2-4.3c-7.1-.8-14.6-3.6-14.6-15.8a12.27 12.27 0 0 1 3.3-8.6 11.965 11.965 0 0 1 .3-8.5s2.7-.9 8.8 3.3a30.873 30.873 0 0 1 8-1.1 30.292 30.292 0 0 1 8 1.1c6.1-4.1 8.8-3.3 8.8-3.3a11.965 11.965 0 0 1 .3 8.5 12.1 12.1 0 0 1 3.3 8.6c0 12.3-7.5 15-14.6 15.8a7.746 7.746 0 0 1 2.2 5.9v8.8c0 .9.6 1.8 2.2 1.5A32.021 32.021 0 0 0 32 0z"
                ></path>
                <path
                  data-name="layer1"
                  d="M12.1 45.9c-.1.2-.3.2-.5.1s-.4-.3-.3-.5.3-.2.6-.1c.2.2.3.4.2.5zm1.3 1.5a.589.589 0 0 1-.8-.8.631.631 0 0 1 .7.1.494.494 0 0 1 .1.7zm1.3 1.8a.585.585 0 0 1-.7-.3.6.6 0 0 1 0-.8.585.585 0 0 1 .7.3c.2.3.2.7 0 .8zm1.7 1.8c-.2.2-.5.1-.8-.1-.3-.3-.4-.6-.2-.8a.619.619 0 0 1 .8.1.554.554 0 0 1 .2.8zm2.4 1c-.1.3-.4.4-.8.3s-.6-.4-.5-.7.4-.4.8-.3c.3.2.6.5.5.7zm2.6.2c0 .3-.3.5-.7.5s-.7-.2-.7-.5.3-.5.7-.5c.4.1.7.3.7.5zm2.4-.4q0 .45-.6.6a.691.691 0 0 1-.8-.3q0-.45.6-.6c.5-.1.8.1.8.3z"
                ></path>
              </svg>
            </button>
          </a>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/navin-kodag/"
            target="_blank"
          >
            <button
              className="cursor-pointer rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="linkedin"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                fill="currentColor"
                height="30"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </button>
          </a>
        </div>
      </div>

      <div className="flex items-end">
        <p className="text-3xl font-black">Posts</p>
        <div className="flex-1" />
        <button className="cursor-pointer">
          <NextLink href="/blog">
            <span className="flex items-center gap-1 text-sm">
              See all
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                fill="currentColor"
                height="12"
                viewBox="0 0 24 24"
              >
                <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
              </svg>
            </span>
          </NextLink>
        </button>
      </div>

      <div className="flex flex-col gap-3 py-3">
        {posts &&
          posts?.map((e, i) => {
            return (
              <NextLink href={`/blog/${e.slug}`} key={`${e.slug}-${i}`}>
                <div>
                  <div className="flex flex-col">
                    <span className="text-xl font-semibold">{e.title}</span>
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

export default Home;

export async function getStaticProps() {
  const articles = getAllPosts();
  const data = articles.slice(0, 5);
  return { props: { posts: data } };
}
