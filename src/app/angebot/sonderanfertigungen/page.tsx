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
  title: "Sonderanfertigungen",
  description:
    "Sie stellen sich eine bestimmte Leuchte vor, welche so noch nicht existiert? Wir helfen Ihnen dabei Ihre Wünsche zu verwirklichen.",
};

export default function SonderanfertigungenPage() {
  const projectsWithHeaderImages = getAllProjectsWithHeaderImages();

  return (
    <>
      <NavWithTitle title="Sonder&shy;anfertigungen" />

      <ContentContainer>
        <div className="mb-20 grid gap-4 md:grid-cols-2">
          <div>
            <h2 className="mb-2 font-bold">Vielfalt in Stil und Auswahl</h2>
            <p>
              Jeder Mensch ist verschieden, ebenso wie Geschmäcker und
              Einrichtungsstile. Unsere grosse Auswahl an Leuchten in
              verschiedenen Grössen, Formen und Farben ermöglicht es, für jeden
              individuellen Geschmack und Raum das passende Beleuchtungselement
              zu finden. Egal ob minimalistisch, modern, verspielt oder
              klassisch - bei uns findet jeder seinen persönlichen Stil.
            </p>
          </div>
          <div>
            <h2 className="mb-2 font-bold">
              Massgeschneiderte Lösungen und Anpassungen
            </h2>
            <p>
              Durch unsere direkte Zusammenarbeit mit den Herstellern bieten wir
              die Möglichkeit für Sonderanfertigungen und individuelle
              Anpassungen. So können Sie Ihre Beleuchtung ganz nach Ihren
              Vorstellungen gestalten und Ihren persönlichen Stempel auf Ihre
              Einrichtung setzen. Wir helfen Ihnen dabei, Ihre individuellen
              Bedürfnisse zu erfüllen und Ihre Leuchte zu einem einzigartigen
              Highlight in Ihrem Raum zu machen.
            </p>
            <div className="my-4">
              <Button type="primary" text="Kontakt" href="/kontakt" />
            </div>
          </div>
        </div>
        <ServiceTeaser
          title={"Leuchten Sonderanfertigungen"}
          imageUrl="/images/teasers/sonderanfertigungen.jpg"
          items={[
            "Verlängerung oder Kürzung von Pendelleuchten",
            "Leuchten nach RAL-Farben lackieren",
            "Steuerung der Leuchte auf das vorhandene Smart Home System anpassen",
            "Lichtfarbe ändern",
            "Komplett neue Leuchte anfertigen",
            "Bedrucken von Stoffschirmen",
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
