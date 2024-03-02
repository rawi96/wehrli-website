import { projects } from "@/data/project-items";
import { Project } from "@/types/project";
import { ProjectWithHeaderImage } from "@/types/project-with-header-image";
import fs from "fs";
import path from "path";

export const getAllProjectsWithHeaderImages = (): ProjectWithHeaderImage[] => {
  return projects.map((project) => {
    const headerImage = getHeaderImageByProject(project);
    return { ...project, headerImage };
  });
};

const getHeaderImageByProject = (project: Project) => {
  const headerImageDirectory = path.join(
    getImageDirectoryByProject(project),
    "headerImage",
  );
  const headerImageName = fs.readdirSync(headerImageDirectory)[0];
  return {
    src: path.join(project.imagesPath, "headerImage", headerImageName),
    altText: transformIntoAltText(headerImageName),
  };
};

const getImageDirectoryByProject = (project: Project) =>
  path.join(process.cwd(), "public", project.imagesPath);

const transformIntoAltText = (imageName: string) =>
  imageName.split(".")[0].replace(/[-_]/g, " ");
