import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import MainLayout from "../../layouts/main-layout";
import { blogArticles } from "../../lib/devto";
import NextLink from "next/link";
import { Post } from "../../lib/types";
import moment from "moment";
import ViewCounter from "../../components/views_count";

const BlogPage = ({ posts }: { posts: Post[] }) => {
  return (
    <MainLayout>
      <Text fontWeight={"black"} fontSize={"3xl"}>
        Blog
      </Text>
      <VStack py="10" experimental_spaceY={"5"} align={"stretch"}>
        {posts &&
          posts?.map((e, i) => {
            return (
              <NextLink href={`/blog/${e.slug}`} key={`${e.slug}-${i}`}>
                <a>
                  <Box>
                    <VStack align={"stretch"}>
                      <Text fontSize={"20px"} fontWeight={"semibold"}>
                        {e.title}
                      </Text>
                      <Text color={"grey"}>{e.description}</Text>
                      <Text color={"grey"} fontSize={"xs"} align={"end"}>
                        <ViewCounter slug={e.slug} />
                      </Text>
                    </VStack>
                  </Box>
                </a>
              </NextLink>
            );
          })}
      </VStack>
    </MainLayout>
  );
};
export default BlogPage;
///
export async function getStaticProps() {
  const posts = await blogArticles();
  return { props: { posts }, revalidate: 21600 };
}
