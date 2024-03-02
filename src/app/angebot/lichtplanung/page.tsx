import { Button } from "@/components/button";
import { ContentContainer } from "@/components/content-container";
import { Footer } from "@/components/footer";
import { NavWithTitle } from "@/components/nav-with-title";
import { ProjectsTeaserRow } from "@/components/projects-teaser-row";
import { ServiceTeaser } from "@/components/service-teaser";
import { TitleSection } from "@/components/title-section";
import { getAllProjectsWithHeaderImages } from "@/utils/projects";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Lichtplanung",
  description:
    "Eine gute Lichtplanung kann einen erheblichen Einfluss auf das Ambiente und die Funktionalität eines Raumes haben. Egal ob Sie ein Wohnzimmer, ein Office oder ein Restaurant gestalten, eine sorgfältige Planung der Beleuchtung kann den Raum von einem einfachen Raum zu einem einladenden und funktionalen Ort verwandeln.",
};

export default function LichtPlanungPage() {
  const projectsWithHeaderImages = getAllProjectsWithHeaderImages();

  return (
    <>
      <NavWithTitle title="Licht&shy;planung" />

      <ContentContainer>
        <div className="mb-20 grid gap-4 md:grid-cols-2">
          <Image
            src={"/images/angebote/lichtplanung/lichtplanung_1.jpg"}
            width={1000}
            height={1000}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            className="full-width rounded-lg"
            alt="Lichtplanung"
          />
          <Image
            src={"/images/angebote/lichtplanung/lichtplanung_2.jpg"}
            width={1000}
            height={1000}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            className="full-width rounded-lg"
            alt="Lichtplanung"
          />
        </div>

        <div className="mb-20 grid gap-4 md:grid-cols-2">
          <div>
            <h2 className="mb-2 font-bold">
              Lichtplanung für energieeffiziente Beleuchtung in allen Räumen
            </h2>
            <p>
              Unsere Lichtplanungsdienstleistungen sind für alle Arten von
              Räumen geeignet, einschließlich Wohnräume, Arbeitsumgebungen und
              öffentliche Gebäude. Wir helfen Ihnen, die richtigen
              LED-Beleuchtungen, Einsatzorte und Steuerungsmöglichkeiten zu
              finden, um den Energieverbrauch zu minimieren und gleichzeitig
              eine hervorragende Beleuchtung zu gewährleisten.
            </p>
          </div>
          <div>
            <h2 className="mb-2 font-bold">
              Kontaktieren Sie uns für eine massgeschneiderte Lichtplanung
            </h2>
            <p>
              Kontaktieren Sie uns heute, um mehr über unsere
              Lichtplanungsdienstleistungen zu erfahren und Ihre
              Beleuchtungsanforderungen zu besprechen.
            </p>
            <div className="my-4">
              <Button type="primary" text="Kontakt" href="/kontakt" />
            </div>
          </div>
        </div>

        <ServiceTeaser
          title={"Lichtplanung auf einem Blick"}
          imageUrl="/images/angebote/lichtplanung/lichtplanung_2.jpg"
          items={[
            "Situation erfassen (vor Ort, gemäss Fotos, gemäss Bauplänen)",
            "Ganzheitliches Beleuchtungskonzept erarbeiten",
            "Lichttechnische Berechnungen gemäss Normen und Richtlinien",
            "Lampenstellen definieren",
            "Beratung allfälliger Lichtsteuerung",
            "Herstellung und/oder Beschaffung der Leuchten",
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
