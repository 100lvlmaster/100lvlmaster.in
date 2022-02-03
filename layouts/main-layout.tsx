import { Box, Container, Flex, useColorMode, VStack } from "@chakra-ui/react";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
interface Props {
  children: JSX.Element | JSX.Element[];
}

const MainLayout = ({ children }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      flexDirection={"column"}
      borderTop={"2px"}
      minH={"100vh"}
      backgroundColor={colorMode == "light" ? "#fff" : "#101111"}
      borderColor={"blue.500"}
    >
      <Container minW={{ lg: "55%", sm: "100%", md: "80%" }}>
        <NavBar />
        {children}
        <Footer />
      </Container>
    </Flex>
  );
};

export default MainLayout;
