import { Button } from "@/components/button";
import { ContentContainer } from "@/components/content-container";
import { Footer } from "@/components/footer";
import { LogoCloud } from "@/components/logo-cloud";
import { NavWithTitle } from "@/components/nav-with-title";
import { ProjectsTeaserRow } from "@/components/projects-teaser-row";
import { TitleSection } from "@/components/title-section";
import { getAllProjectsWithHeaderImages } from "@/utils/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sonderanfertigungen",
  description:
    "Hochwertige Verarbeitung und neuste Designs. Wir legen Wert auf beste Qualität und Individualität. Mit unseren europäischen Partnern fertigen wir gerne Ihre individuelle Leuchte an.",
};

export default function WohnraumleuchtenPage() {
  const projectsWithHeaderImages = getAllProjectsWithHeaderImages();

  return (
    <>
      <NavWithTitle title="Wohn&shy;raum&shy;leuchten" />

      <ContentContainer>
        <div className="mb-20 grid gap-4 md:grid-cols-2">
          <div>
            <h2 className="mb-2 font-bold">
              Hochwertige Leuchten für ein stimmungsvolles Zuhause
            </h2>
            <p>
              Licht spielt eine entscheidende Rolle beim Schaffen einer
              angenehmen Wohnatmosphäre. Es unterstützt und betont die
              vorherrschenden Materialien und die Einrichtung von Wohnräumen. Um
              das perfekte Lichtkonzept zu verwirklichen, bieten wir in unserem
              Showroom eine breite Auswahl an hochwertigen Leuchten europäischer
              Hersteller.
            </p>
          </div>
          <div>
            <h2 className="mb-2 font-bold">
              Bequem online einkaufen – grosse Auswahl an Wohnraumleuchten
            </h2>
            <p>
              Besuchen Sie unseren Online-Shop und entdecken Sie eine grosse
              Auswahl an stilvollen Wohnraumleuchten. Unsere hochwertigen
              Produkte setzen Ihr Zuhause gekonnt in Szene und verleihen jedem
              Raum eine besondere Atmosphäre.
            </p>
            <div className="my-4">
              <Button type="primary" text="Zum Online Shop" href="/shop" />
            </div>
          </div>
        </div>

        <LogoCloud />
        <TitleSection title="Lichtprojekte" />
        <ProjectsTeaserRow
          projectsWithHeaderImages={projectsWithHeaderImages.slice(0, 5)}
        />
      </ContentContainer>
      <Footer />
    </>
  );
}
