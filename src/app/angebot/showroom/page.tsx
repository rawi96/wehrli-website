import { Button } from "@/components/button";
import { ContentContainer } from "@/components/content-container";
import { Footer } from "@/components/footer";
import { LogoCloud } from "@/components/logo-cloud";
import { NavWithTitle } from "@/components/nav-with-title";
import { ProjectsTeaserRow } from "@/components/projects-teaser-row";
import { StreetView } from "@/components/street-view";
import { TitleSection } from "@/components/title-section";
import { getAllProjectsWithHeaderImages } from "@/utils/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Showroom",
  description:
    "In unserem über 200 Quadratmeter grossen Showroom finden Sie die neusten Designs und zeitlose Klassiker. Lassen Sie sich bei einem vereinbarten Termin fachmännisch beraten und lassen Sie sich von der grossen Auswahl inspirieren.",
};

export default function ShowRoomPage() {
  const projectsWithHeaderImages = getAllProjectsWithHeaderImages();

  return (
    <>
      <NavWithTitle title="Show&shy;room" />

      <ContentContainer>
        <div className="mb-20 grid gap-4 md:grid-cols-2">
          <div>
            <h2 className="mb-2 font-bold">
              Exklusive Wohnraumleuchten in unserem Showroom
            </h2>
            <p>
              Entdecken Sie in unserem Showroom exklusive Wohnraumleuchten.
              Hochwertige Qualität und ansprechendes Design – von klassischen
              Kristalllustern bis hin zu filigranem Minimalismus.
            </p>
          </div>
          <div>
            <h2 className="mb-2 font-bold">
              Inspirierende Vielfalt für jeden Geschmack
            </h2>
            <p>
              Besuchen Sie unseren Showroom und lassen Sie sich inspirieren.
              Vielfältige Auswahl für jeden Geschmack. Finden Sie die perfekte
              Beleuchtungslösung.
            </p>
            <div className="my-4">
              <Button type="primary" text="Anfahrt" href="/kontakt" />
            </div>
          </div>
        </div>

        <StreetView />

        <TitleSection title="Lichtprojekte" />
        <ProjectsTeaserRow
          projectsWithHeaderImages={projectsWithHeaderImages.slice(0, 5)}
        />
      </ContentContainer>
      <Footer />
    </>
  );
}
