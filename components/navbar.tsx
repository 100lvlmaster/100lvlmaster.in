import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Button,
  HStack,
  IconButton,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { pathname } = useRouter();
  return (
    <HStack minW={"100%"} experimental_spaceX={"5"} py="20px">
      <NextLink href={"/"}>
        <Button
          size={"sm"}
          fontWeight={"medium"}
          variant={pathname == "/" ? "solid" : "ghost"}
        >
          Home
        </Button>
      </NextLink>
      <NextLink href={"/about"}>
        <Button
          size={"sm"}
          fontWeight={"medium"}
          variant={pathname == "/about" ? "solid" : "ghost"}
        >
          About
        </Button>
      </NextLink>
      <NextLink href={"/blog"}>
        <Button
          size={"sm"}
          fontWeight={"medium"}
          variant={pathname == "/blog" ? "solid" : "ghost"}
        >
          Blog
        </Button>
      </NextLink>
      <NextLink href="/work">
        <Button
          size={"sm"}
          fontWeight={"medium"}
          variant={pathname == "/work" ? "solid" : "ghost"}
        >
          Work
        </Button>
      </NextLink>

      <Spacer />
      <IconButton
        size={"sm"}
        onClick={toggleColorMode}
        aria-label="Toggle dark mode"
        icon={colorMode == "dark" ? <SunIcon /> : <MoonIcon />}
      />
    </HStack>
  );
};
export default NavBar;
