// import highlight from "remark-syntax-highlight";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import ReactMarkdown from "react-markdown";
import NextImage from "next/image";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import type { defaults } from "chakra-ui-markdown-renderer";

import {
  Box,
  Container,
  HStack,
  Spacer,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { Post } from "../../lib/types";
import MainLayout from "../../layouts/main-layout";
import { articleBySlug, blogArticles } from "../../lib/devto";
import ViewCounter from "../../components/views_count";
import moment from "moment";
interface Props {
  post: Post;
}
const BlogPost = ({ post }: Props) => {
  const { colorMode } = useColorMode();
  const newTheme = {
    img: (props: any) => {
      const { children, src } = props;
      return (
        <Box
          pos={"relative"}
          height="400px"
          width={"100%"}
          overflow={"hidden"}
          borderRadius="10px"
        >
          <NextImage
            layout={"fill"}
            objectFit={"contain"}
            src={src}
            alt={src}
          />
        </Box>
      );
    },
    blockquote: (props: any) => {
      const { children } = props;
      return <Box fontStyle={"italic"}>{children}</Box>;
    },
    code: (props: any) => {
      const { children } = props;
      return (
        <Box
          bgColor={colorMode == "dark" ? "gray.800" : "gray.100"}
          p="4"
          borderRadius={"md"}
          overflow={"auto"}
          my="2"
        >
          {children}
        </Box>
      );
    },
  };

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
    <MainLayout>
      <VStack align="stretch" experimental_spaceY={"5"}>
        <Text fontSize={"4xl"} fontWeight={"black"}>
          {frontMatter.title}
        </Text>
        <Box
          pos={"relative"}
          height="400px"
          width={"100%"}
          overflow={"hidden"}
          borderRadius="10px"
        >
          <NextImage
            src={post.cover_image}
            alt={post.cover_image}
            layout={"fill"}
          />
        </Box>
        <HStack color={"grey"}>
          <ViewCounter shouldRegisterView={true} slug={post.slug} />
          <Text>{` • `}</Text>
          <Text>{`${frontMatter.readingTime} mins`}</Text>
          <Spacer />
          <Text align="end">
            {moment(frontMatter.publishedAt).format("D MMM YYYY")}
          </Text>
        </HStack>
        <ReactMarkdown skipHtml components={ChakraUIRenderer(newTheme)}>
          {post.body_markdown}
        </ReactMarkdown>
      </VStack>
    </MainLayout>
  );
};

export default BlogPost;
///
export async function getStaticPaths() {
  const posts = await blogArticles();
  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.slug,
      },
    })),
    fallback: `blocking`,
  };
}
///
export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = await articleBySlug(params.slug);
  return { props: { post }, revalidate: 21600 };
}
