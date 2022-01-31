import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Button,
  HStack,
  IconButton,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import NextLink from "next/link";
const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack minW={"100%"} py="20px">
      <NextLink href={"/"}>
        <Button fontWeight={"medium"} variant="ghost">
          Home
        </Button>
      </NextLink>
      <NextLink href={"/about"}>
        <Button fontWeight={"medium"} variant="ghost">
          About
        </Button>
      </NextLink>
      <NextLink href={"/blog"}>
        <Button fontWeight={"medium"} variant="ghost">
          Blog
        </Button>
      </NextLink>
      <NextLink href="/work">
        <Button fontWeight={"medium"} variant="ghost">
          Work
        </Button>
      </NextLink>

      <Spacer />
      <IconButton
        onClick={toggleColorMode}
        aria-label="Toggle dark mode"
        icon={colorMode == "dark" ? <SunIcon /> : <MoonIcon />}
      />
    </HStack>
  );
};
export default NavBar;
