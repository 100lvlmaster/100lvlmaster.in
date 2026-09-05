import type { NextPage } from "next";
import ProjectCard from "../components/project_card";
import MainLayout from "../layouts/main-layout";
import { SITE_URL } from "../lib/site";
import { projects } from "../lib/work";

const WorkPage: NextPage = () => {
  const meta = {
    title: "Work - Navin Kodag | Developer",
    url: `${SITE_URL}/work`,
  };
  return (
    <MainLayout meta={meta}>
      <div className="grid gap-4 py-5 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {projects.reverse().map((e) => {
          return (
            <ProjectCard
              key={e.description.split(" ").join("-").toLowerCase()}
              project={e}
            />
          );
        })}
      </div>
    </MainLayout>
  );
};
export default WorkPage;
