import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Button,
  Container,
  HStack,
  IconButton,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import NextLink from "next/link";
///
const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container minH={"100vh"} w={"100vw"}>
      <HStack justify={"end"} w={"100%"} padding={"10px"}>
        <NextLink href={"/"}>
          <Button variant="ghost">Home</Button>
        </NextLink>
        <NextLink href={"/about"}>
          <Button variant="ghost">About</Button>
        </NextLink>
        <NextLink href={"/blog"}>
          <Button variant="ghost">Blog</Button>
        </NextLink>
        <NextLink href="/work">
          <Button variant="ghost">Work</Button>
        </NextLink>

        <Spacer />
        <IconButton
          onClick={toggleColorMode}
          aria-label="Toggle dark mode"
          icon={colorMode == "dark" ? <SunIcon /> : <MoonIcon />}
        />
      </HStack>
    </Container>
  );
};

export default Home;
