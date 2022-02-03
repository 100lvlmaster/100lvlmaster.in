import {
  Box,
  Divider,
  Grid,
  GridItem,
  SimpleGrid,
  Text,
  textDecoration,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import NowPlaying from "./now-playing";

const Footer = () => {
  const data = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "Work",
      href: "/work",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/navin-kodag/",
    },
    {
      name: "Github",
      href: "https://www.github.com/100lvlmaster",
    },
    {
      name: "Medium",
      href: "https://medium.com/@100lvlmaster",
    },
    {
      name: "Dev.to",
      href: "https://dev.to/100lvlmaster",
    },
    {
      name: "Youtube",
      href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      name: "Discord",
      href: "https://discordapp.com/users/392213395031719957",
    },
  ];

  return (
    <VStack
      py="10px"
      experimental_spaceY={"20px"}
      align={"stretch"}
      textAlign={"left"}
    >
      <Divider />
      <NowPlaying />
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        {data.map((e, i) => {
          return (
            <GridItem key={`${e}-${i}`}>
              {e.href.startsWith("http") ? (
                <a rel="noreferrer" target="_blank" href={e.href}>
                  <Text _hover={{ textDecor: "underline" }}>{e.name}</Text>
                </a>
              ) : (
                <NextLink href={e.href}>
                  <Text _hover={{ textDecor: "underline" }}>{e.name}</Text>
                </NextLink>
              )}
            </GridItem>
          );
        })}
      </Grid>
      <Text fontSize={"smaller"} textColor={"gray.500"} textAlign={"center"}>
        Made with nextjs and ❤
      </Text>
    </VStack>
  );
};
export default Footer;
