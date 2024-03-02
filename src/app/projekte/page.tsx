import { AllProjects } from "@/components/all-projects";
import { ContentContainer } from "@/components/content-container";
import { Footer } from "@/components/footer";
import { NavWithTitle } from "@/components/nav-with-title";
import { getAllProjectsWithHeaderImages } from "@/utils/projects";
import { Metadata } from "next";

const projects = {
  title: "Projekte",
  intro: "Hier finden Sie eine Auswahl unserer Projekte.",
};

export const metadata: Metadata = {
  title: projects.title,
  description: projects.intro,
};

export default function Projects() {
  const projectsWithHeaderImages = getAllProjectsWithHeaderImages();

  return (
    <>
      <NavWithTitle title={projects.title} />
      <ContentContainer>
        <AllProjects projectsWithHeaderImages={projectsWithHeaderImages} />
      </ContentContainer>
      <Footer />
    </>
  );
}
