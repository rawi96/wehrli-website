import { AllProjects } from "@/components/all-projects";
import { Button } from "@/components/button";
import { CallToAction } from "@/components/call-to-action";
import { ContentContainer } from "@/components/content-container";
import { Footer } from "@/components/footer";
import { getAllProjectsWithHeaderImages } from "@/utils/projects";
import { Metadata } from "next";

const projects = {
  title: "Projekte",
  intro: "Hier finden Sie eine Auswahl unserer Projekte.",
  primaryButton: {
    text: "Online Shop",
    link: "/shop",
  },
  secondaryButton: {
    text: "Kontakt",
    link: "/kontakt",
  },
};

export const metadata: Metadata = {
  title: projects.title,
  description: projects.intro,
};

export default function Projects() {
  const projectsWithHeaderImages = getAllProjectsWithHeaderImages();

  return (
    <>
      <CallToAction title={projects.title}>
        <Button
          type="secondary"
          text={projects.primaryButton.text}
          href={projects.primaryButton.link}
        />
        <Button
          type="tertiary"
          text={projects.secondaryButton.text}
          href={projects.secondaryButton.link}
        />
      </CallToAction>
      <ContentContainer>
        <AllProjects projectsWithHeaderImages={projectsWithHeaderImages} />
      </ContentContainer>
      <Footer />
    </>
  );
}
