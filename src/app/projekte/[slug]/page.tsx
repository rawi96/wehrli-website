import { ImageGallery } from "@/components/Image-gallery";
import { ContentContainer } from "@/components/content-container";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { NotFound } from "@/components/not-found";
import {
  getAllProjectsWithHeaderImages,
  getImagesByProject,
} from "@/utils/projects";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const allProjects = getAllProjectsWithHeaderImages();

  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectSlugPage({ params: { slug } }: Props) {
  const allProjects = getAllProjectsWithHeaderImages();
  const activeProject = allProjects.find((project) => project.slug === slug);

  if (!activeProject) {
    return <NotFound />;
  }

  return (
    <>
      <Hero
        image={activeProject.headerImage}
        title={activeProject.title}
        intro={activeProject.intro}
        primaryButton={{
          text: "Projekte anschauen",
          link: "/projekte",
        }}
        secondaryButton={{
          text: "Kontakt",
          link: "/kontakt",
        }}
      />
      <ContentContainer>
        <div className="mb-16 text-center">
          {activeProject.lines.map((line) => (
            <h2
              key={line}
              className="text-lg font-semibold leading-8 tracking-tight text-gray-900"
            >
              {line}
            </h2>
          ))}
        </div>

        <ImageGallery images={getImagesByProject(activeProject)} />
      </ContentContainer>
      <Footer />
    </>
  );
}
