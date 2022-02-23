import type { NextPage } from "next";
import MainLayout from "../layouts/main-layout";
import { projects } from "../lib/work";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  SimpleGrid,
  Spacer,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import ProjectCard from "../components/project_card";

const WorkPage: NextPage = () => {
  const { colorMode } = useColorMode();

  return (
    <MainLayout>
      <SimpleGrid py="20px" columns={{ sm: 2, md: 3 }} gap={4}>
        {projects.reverse().map((e, i) => {
          return (
            <GridItem key={e.description.split(" ").join("-").toLowerCase()}>
              <ProjectCard project={e} />
            </GridItem>
          );
        })}
      </SimpleGrid>
    </MainLayout>
  );
};
export default WorkPage;
