import { Box, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import ViewCounter from "../../components/views_count";
import MainLayout from "../../layouts/main-layout";
import { blogArticles } from "../../lib/devto";
import { Post } from "../../lib/types";

const BlogPage = ({ posts }: { posts: Post[] }) => {
  return (
    <MainLayout meta={{ title: "Blog - Navin Kodag | Developer" }}>
      <Text fontWeight={"black"} fontSize={"3xl"}>
        Blog
      </Text>
      <VStack py="10" experimental_spaceY={"5"} align={"stretch"}>
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
                    <Box color={"grey"} fontSize={"xs"} alignItems={"end"}>
                      <ViewCounter slug={e.slug} />
                    </Box>
                  </VStack>
                </Box>
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
