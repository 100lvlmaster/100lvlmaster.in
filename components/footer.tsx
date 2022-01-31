import { Divider, GridItem, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import NowPlaying from "./now-playing";

const Footer = () => {
  return (
    <VStack
      py="10px"
      experimental_spaceY={"20px"}
      align={"stretch"}
      textAlign={"left"}
    >
      <Divider />
      <NowPlaying />
      <SimpleGrid columns={3} spacing={5}>
        <GridItem>
          <Text>Home</Text>
        </GridItem>
        <GridItem>
          <Text>Work</Text>
        </GridItem>
        <GridItem>
          <Text>About</Text>
        </GridItem>
        <GridItem>
          <Text>Blog</Text>
        </GridItem>
        <GridItem>
          <Text>LinedIn</Text>
        </GridItem>
        <GridItem>
          <Text>Github</Text>
        </GridItem>
        <GridItem>
          <Text>Medium</Text>
        </GridItem>
        <GridItem>
          <Text>Dev.to</Text>
        </GridItem>
        <GridItem>
          <Text>Youtube</Text>
        </GridItem>
        <GridItem>
          <Text>Discord</Text>
        </GridItem>
      </SimpleGrid>
      <Text fontSize={"smaller"} textColor={"gray.500"} textAlign={"center"}>
        Made with nextjs and ❤
      </Text>
    </VStack>
  );
};
export default Footer;
