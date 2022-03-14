import { Box, Container, Flex, useColorMode, VStack } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import { Seo } from "../lib/types";
interface Props {
  children: JSX.Element | JSX.Element[];
  meta?: Seo;
}

const MainLayout = ({ meta: metaProps, children }: Props) => {
  const meta = {
    title: "Navin Kodag | Developer 🚀",
    description:
      "Navin Kodag is a software developer based in India. He is a self-taught developer with a passion for building Fullstack applications.",
    url: "https://www.100lvlmaster.in",
    image: "https://www.100lvlmaster.in/avatar.jpeg",
  };
  const { colorMode } = useColorMode();

  return (
    <Flex
      flexDirection={"column"}
      borderTop={"2px"}
      minH={"100vh"}
      backgroundColor={colorMode == "light" ? "#fff" : "#101111"}
      borderColor={"blue.500"}
    >
      <Head>
        <title>{meta.title}</title>
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta name="description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:site_url" content={meta.url} />
      </Head>
      <Container minW={{ lg: "55%", sm: "100%", md: "80%" }}>
        <NavBar />
        {children}
        <Footer />
      </Container>
    </Flex>
  );
};

export default MainLayout;
