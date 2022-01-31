import { Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import MainLayout from "../layouts/main-layout";

const BlogPage: NextPage = () => {
  return (
    <MainLayout>
      <Text fontWeight={"black"} fontSize={"3xl"}>
        Blog
      </Text>
    </MainLayout>
  );
};
export default BlogPage;
