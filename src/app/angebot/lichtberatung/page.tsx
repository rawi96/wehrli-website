import { Button } from "@/components/button";
import { ContentContainer } from "@/components/content-container";
import { Footer } from "@/components/footer";
import { NavWithTitle } from "@/components/nav-with-title";
import { ProjectsTeaserRow } from "@/components/projects-teaser-row";
import { ServiceTeaser } from "@/components/service-teaser";
import { TitleSection } from "@/components/title-section";
import { getAllProjectsWithHeaderImages } from "@/utils/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lichtberatung",
  description:
    "Wir beraten Sie bei der Auswahl der passenden Leuchten und der optimalen Beleuchtung für Ihre Räume.",
};

export default function LichtBeratungPage() {
  const projectsWithHeaderImages = getAllProjectsWithHeaderImages();

  return (
    <>
      <NavWithTitle title="Licht&shy;beratung" />

      <ContentContainer>
        <div className="mb-20 grid gap-4 md:grid-cols-2">
          <div>
            <h2 className="mb-2 font-bold">Ins rechte Licht gerückt</h2>
            <p>
              Besondere Projekte verdienen eine besondere Beleuchtung und die
              entsprechenden Leuchten dazu. Unsere aussergewöhnlichen
              Designerleuchten versprechen ein gelungenes Ergebnis. Um sich eine
              noch nicht realisierte Beleuchtungssituation vorstellen zu können
              benötigt es ein grossen Vorstellungsvermögen.
            </p>
          </div>
          <div>
            <h2 className="mb-2 font-bold">
              Professionelle Unterstützung und Beratung
            </h2>
            <p>
              Wir unterstützen und beraten Sie dabei gerne mit unserem
              Fachwissen und unserer Erfahrung. In unserem Showroom oder bei
              Ihnen vor Ort stehen wir Ihnen mit Rat und Tat zu Seite.
            </p>
            <div className="my-4">
              <Button type="primary" text="Kontakt" href="/kontakt" />
            </div>
          </div>
        </div>
        <ServiceTeaser
          title={"Wobei wir Sie unterstützen können"}
          imageUrl="/images/angebote/lichtberatung/Mariella_Wirth_Lichtberatung.jpg"
          items={[
            "Architektonisch anspruchsvolle Räume",
            "Unsicherheit bei der Leuchtenauswahl",
            "Beratung bezüglich Lichtleistung, -verteilung & -wirkung",
            "Individuelle Wünsche bezüglich Leuchten oder Licht",
            "Unterstützung zur besseren Visualisierung",
          ]}
        />

        <TitleSection title="Lichtprojekte" />
        <ProjectsTeaserRow
          projectsWithHeaderImages={projectsWithHeaderImages.slice(0, 5)}
        />
      </ContentContainer>
      <Footer />
    </>
  );
}
