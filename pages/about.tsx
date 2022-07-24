import { Box, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import MainLayout from "../layouts/main-layout";
const AboutPage: NextPage = () => {
  return (
    <MainLayout meta={{ title: "About - Navin Kodag, Developer" }}>
      <Text fontWeight={"black"} fontSize={"3xl"}>
        About
      </Text>

      <Box py="30px">
        <Text>
          I build efficient products using different tech stacks. I use Flutter,
          React, NextJs or Svelte for the Front-end. With Node.js, NestJs,
          Gin-gonic, Gofiber or Firebase for Back-end. I&apos;ve created
          consistent and realtime APIs with GraphQL and REST.
        </Text>
      </Box>
    </MainLayout>
  );
};

export default AboutPage;
