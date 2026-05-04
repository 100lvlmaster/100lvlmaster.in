import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import MainLayout from "../layouts/main-layout";
import { Post } from "../lib/types";
import { blogArticles } from "../lib/devto";
///
const Home = ({ posts }: { posts: Post[] }) => {
  return (
    <MainLayout>
      <Flex
        marginTop={"30px"}
        flexDir={["column-reverse", "column-reverse", "row"]}
        alignItems={"center"}
        justifyItems={"center"}
      >
        <Box>
          <Text py="5" fontWeight="black" fontSize={{ lg: "5xl", sm: "4xl" }}>
            Hey, I&apos;m Navin Kodag
          </Text>
          I&apos;m a Fullstack developer. &nbsp;I work on NodeJs, Golang,
          Flutter, React and Svelte.
          <Text>
            I see that you&apos;ve stumbled upon my small kingdom on the
            internet. I like to solve problems with code.
          </Text>
        </Box>
      </Flex>
      <Box py="10">
        <Flex gap={3}>
          <a
            rel="noreferrer"
            href="https://github.com/100lvlmaster"
            target="_blank_"
          >
            <IconButton
              size="sm"
              aria-label="linkedin"
              variant="ghost"
              icon={
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
              }
            />
          </a>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/navin-kodag/"
            target="_blank_"
          >
            <IconButton
              size="sm"
              aria-label="linkedin"
              variant="ghost"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  fill="currentColor"
                  height="30"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              }
            />
          </a>
        </Flex>
      </Box>

      <HStack alignItems={"end"}>
        <Text fontSize={"3xl"} fontWeight={"black"}>
          Posts
        </Text>
        <Spacer />
        <button>
          <NextLink href={"/blog"}>
            <HStack>
              <Text fontSize={"sm"}>See all</Text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                fill="currentColor"
                height="12"
                viewBox="0 0 24 24"
              >
                <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
              </svg>
            </HStack>
          </NextLink>
        </button>
      </HStack>
      <VStack
        py="3"
        // /experimental_spaceY={"5"}
        align={"stretch"}
      >
        {posts &&
          posts?.map((e, i) => {
            return (
              <NextLink href={`/blog/${e.slug}`} key={`${e.slug}-${i}`}>
                <Box>
                  <VStack align={"stretch"}>
                    <Text fontSize={"20px"} fontWeight={"semibold"}>
                      {e.title}
                    </Text>
                    <Text color={"grey"}>{e.description}</Text>
                  </VStack>
                </Box>
              </NextLink>
            );
          })}
      </VStack>
    </MainLayout>
  );
};

export default Home;

export async function getStaticProps() {
  const articles = await blogArticles();
  const data = articles.splice(0, 5);
  return { props: { posts: data }, revalidate: false };
}
