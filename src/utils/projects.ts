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

export const transformIntoAltText = (imageName: string) =>
  imageName.split(".")[0].replace(/[-_]/g, " ");

export const getImageDirectoryByProject = (project: Project) =>
  path.join(process.cwd(), "public", project.imagesPath);

export const getImagesByProject = (project: Project) => {
  const imagesDirectory = getImageDirectoryByProject(project);
  return fs
    .readdirSync(imagesDirectory)
    .filter((imageName) =>
      fs.statSync(path.join(imagesDirectory, imageName)).isFile(),
    )
    .map((imageName) => ({
      src: path.join(project.imagesPath, imageName),
      altText: transformIntoAltText(imageName),
    }));
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
