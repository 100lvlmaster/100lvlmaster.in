import type { NextPage } from "next";
import MainLayout from "../layouts/main-layout";
import { Box, Divider, Grid, GridItem, HStack, Text } from "@chakra-ui/react";
const AboutPage: NextPage = () => {
  return (
    <MainLayout>
      <Text fontWeight={"black"} fontSize={"3xl"}>
        About
      </Text>

      <Box py="30px">
        <Text>
          I started out as a self-taught teenage script kiddie at 16. Then
          pursued bachelors in Computer Science. Now I&apos;m in the last year
          of my degree. I kept doing what I loved which was learning to solve
          problems with tech.
        </Text>
        <br />
        <Text>
          Now I build efficient products using different tech stacks. I use
          Flutter, React, NextJs or Svelte for the Front-end. With Node.js,
          NestJs, Gin-gonic, Gofiber or Firebase for Back-end. I&apos;ve created
          consistent and realtime APIs with GraphQL and REST.
        </Text>
        <Grid py="20px" gap={"5"}>
          <GridItem>
            <Box border={"1px"} p="5" borderRadius={"lg"} borderColor={"gray"}>
              <Text>Hello</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box border={"1px"} p="5" borderRadius={"lg"} borderColor={"gray"}>
              <Text>Hello</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box border={"1px"} p="5" borderRadius={"lg"} borderColor={"gray"}>
              <Text>Hello</Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </MainLayout>
  );
};

export default AboutPage;
