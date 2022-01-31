import { Box, Container, useColorMode, VStack } from "@chakra-ui/react";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
interface Props {
  children: JSX.Element | JSX.Element[];
}

const MainLayout = ({ children }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <VStack
      borderTop={"2px"}
      minH={"100vh"}
      backgroundColor={colorMode == "light" ? "#fff" : "#101111"}
      borderColor={"blue.500"}
    >
      <Container w={{ lg: "60%", sm: "100%", md: "70%" }}>
        <NavBar />
        <Box>{children}</Box>
        <Footer />
      </Container>
    </VStack>
  );
};

export default MainLayout;
