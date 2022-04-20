import { GridItem, SimpleGrid } from "@chakra-ui/react";
import type { NextPage } from "next";
import ProjectCard from "../components/project_card";
import MainLayout from "../layouts/main-layout";
import { projects } from "../lib/work";

const WorkPage: NextPage = () => {
  const meta = {
    title: "Work - Navin Kodag | Developer",
  };
  return (
    <MainLayout meta={meta}>
      <SimpleGrid py="20px" columns={{ sm: 1, md: 2, lg: 2, xl: 3 }} gap={4}>
        {projects.reverse().map((e, _i) => {
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
