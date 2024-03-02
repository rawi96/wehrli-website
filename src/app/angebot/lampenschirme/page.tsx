import { ImageGallery } from "@/components/Image-gallery";
import { ImageGalleryWithSubtitles } from "@/components/Image-gallery-with-subtitles";
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
  title: "Lampenschirme",
  description:
    "Wir fertigen seit über 75 Jahren Lampenschirme nach Mass in Handarbeit an.",
};

export default function LampenSchirmePage() {
  const projectsWithHeaderImages = getAllProjectsWithHeaderImages();

  return (
    <>
      <NavWithTitle title="Lampen&shy;schirme" />

      <ContentContainer>
        <div className="mb-16">
          <div className="mb-20 grid gap-4 md:grid-cols-2">
            <div>
              <h2 className="mb-2 font-bold">
                Tradition und Qualität seit drei Generationen
              </h2>
              <p>
                Jeder Lampenschirm wird gemäss Wunsch des Kunden angefertigt. Um
                ein perfektes Ergebnis zu erreichen, werden die Komponenten
                individuell zusammengestellt. Die Produktion sowie die Reparatur
                von Lampenschirmen wird vollumfänglich in unseren Atelierräumen
                in Goldach vorgenommen. Unser starkes Team fertigt täglich mit
                viel Herz und Leidenschaft jeden Lampenschirm in Handarbeit an.
                Perfektion ist unser oberstes Gebot.
              </p>
            </div>
            <div>
              <h2 className="mb-2 font-bold">
                Massgeschneiderte Lampenschirme für perfekte Ergebnisse
              </h2>
              <p>
                In unserer über 70-jährigen Firmengeschichte ist die Entwicklung
                und Herstellung von Lampenschirmen eine starke Konstante.
                Material sowie Arbeitsabläufe werden laufend verbessert. In der
                Herstellung sind uns beinahe keine Grenzen gesetzt.
              </p>
              <div className="my-4">
                <Button type="primary" text="Kontakt" href="/kontakt" />
              </div>
            </div>
          </div>
          <ServiceTeaser
            title={"Lampenschirme nach Mass"}
            imageUrl="/images/angebote/lampenschirme/diverse_lampenschirme.jpg"
            items={[
              "Anfrage telefonisch, per E-Mail oder persönlich bei uns im Showroom",
              "Soll ein neuer Lampenschirm kreiert oder ein bestehender Lampenschirm neu überzogen werden?",
              "Allenfalls Form und Masse bereithalten",
              "Auswahl der Stoffart und -farbe",
              "Allfällige zusätzliche Details wie Bordüre, Spezialfolien oder Applikationen besprechen",
              "Uns Zeit geben um Ihr Meisterwerk anzufertigen und sich darauf freuen",
            ]}
          />
        </div>
        <div className="mb-16">
          <TitleSection title="Lampen&shy;schirm Formen" />
          <div className="mt-10">
            <ImageGalleryWithSubtitles
              images={[
                {
                  src: "/images/angebote/lampenschirme/formen/01_rund_zylindrisch.jpg",
                  altText: "Rund zylindrisch",
                },
                {
                  src: "/images/angebote/lampenschirme/formen/02_rund_konisch.jpg",
                  altText: "Rund konisch",
                },
                {
                  src: "/images/angebote/lampenschirme/formen/03_elliptisch_oval.jpg",
                  altText: "Elliptisch oval",
                },
                {
                  src: "/images/angebote/lampenschirme/formen/04_quadratisch_zylindrisch.jpg",
                  altText: "Quadratisch zylindrisch",
                },
                {
                  src: "/images/angebote/lampenschirme/formen/05_quadratisch_konisch.jpg",
                  altText: "Quadratisch konisch",
                },
                {
                  src: "/images/angebote/lampenschirme/formen/06_rechteckig_konisch.jpg",
                  altText: "Rechteckig konisch",
                },
                {
                  src: "/images/angebote/lampenschirme/formen/07_rechteckig_zylindrisch.jpg",
                  altText: "Rechteckig zylindrisch",
                },
                {
                  src: "/images/angebote/lampenschirme/formen/08_Halbschild_rund_zylindrisch.jpg",
                  altText: "Halbschild rund zylindrisch",
                },
                {
                  src: "/images/angebote/lampenschirme/formen/09_Halbschild_oval_zylindrisch.jpg",
                  altText: "Halbschild oval zylindrisch",
                },
                {
                  src: "/images/angebote/lampenschirme/formen/10_Halbschild_oval_konisch.jpg",
                  altText: "Halbschild oval konisch",
                },
                {
                  src: "/images/angebote/lampenschirme/formen/11_Halbschild_eckig.jpg",
                  altText: "Halbschild eckig",
                },
                {
                  src: "/images/angebote/lampenschirme/formen/12_rund_konisch_flach.jpg",
                  altText: "Rund konisch flach",
                },
                {
                  src: "/images/angebote/lampenschirme/formen/13_rund_zylindrisch_flach.jpg",
                  altText: "Rund zylindrisch flach",
                },
                {
                  src: "/images/angebote/lampenschirme/formen/14_oval_gerade_Seiten.jpg",
                  altText: "Oval gerade Seiten",
                },
                {
                  src: "/images/angebote/lampenschirme/formen/15_abgeschnittenes_oval.jpg",
                  altText: "Abgeschnittenes oval",
                },
                {
                  src: "/images/angebote/lampenschirme/formen/16_Spitzoval.jpg",
                  altText: "Spitzoval",
                },
                {
                  src: "/images/angebote/lampenschirme/formen/17_Mehrfach_Zylinder.jpg",
                  altText: "Mehrfach Zylinder",
                },
                {
                  src: "/images/angebote/lampenschirme/formen/18_Pagode.jpg",
                  altText: "Pagode",
                },
                {
                  src: "/images/angebote/lampenschirme/formen/19_Pagode_mit_Doppelrand.jpg",
                  altText: "Pagode mit Doppelrand",
                },
                {
                  src: "/images/angebote/lampenschirme/formen/20_Pagode_mit_gewelltem_Doppelrand.jpg",
                  altText: "Pagode mit gewelltem Doppelrand",
                },
                {
                  src: "/images/angebote/lampenschirme/formen/21_Pagode_oben_und_unten.jpg",
                  altText: "Pagode oben und unten",
                },
              ]}
            />
          </div>
        </div>
        <TitleSection title="Lampen&shy;schirm Beispiele" />
        <div className="mt-10">
          <ImageGallery
            images={[
              {
                src: "/images/angebote/lampenschirme/lampenschirm_alpaufzug.jpg",
                altText: "Lampenschirme mit Alpaufzug",
              },
              {
                src: "/images/angebote/lampenschirme/lampenschirm_bedruckt.jpg",
                altText: "Bedruckter Lampenschirme",
              },
              {
                src: "/images/angebote/lampenschirme/lampenschirm_cachiert-innen-gold.jpg",
                altText: "Lampenschirme cachiert innen gold",
              },
              {
                src: "/images/angebote/lampenschirme/lampenschirm_cachiert-innen-transparent.jpg",
                altText: "Lampenschirme cachiert innen transparent",
              },
              {
                src: "/images/angebote/lampenschirme/lampenschirm_cachiert-innen-weiss-orissa.jpg",
                altText: "Lampenschirme cachiert innen weiss",
              },
              {
                src: "/images/angebote/lampenschirme/lampenschirm_handarbeit.jpg",
                altText: "Lampenschirme handarbeit",
              },
              {
                src: "/images/angebote/lampenschirme/lampenschirm_klassisch_plissiert_schraeg.jpg",
                altText: "Lampenschirme klassisch plissiert schräg",
              },
              {
                src: "/images/angebote/lampenschirme/lampenschirm_klassisch_plissiert.jpg",
                altText: "Lampenschirme klassisch plissiert",
              },
              {
                src: "/images/angebote/lampenschirme/lampenschirm_modern_plissiert.jpg",
                altText: "Lampenschirme modern plissiert",
              },
              {
                src: "/images/angebote/lampenschirme/lampenschirm_oval.jpg",
                altText: "Lampenschirme oval",
              },
              {
                src: "/images/angebote/lampenschirme/lampenschirm_pagode_seide.jpg",
                altText: "Lampenschirme pagode seide",
              },
              {
                src: "/images/angebote/lampenschirme/lampenschirm_plissiert_rueschchen.jpg",
                altText: "Lampenschirme plissiert mit Räuschchen",
              },
              {
                src: "/images/angebote/lampenschirme/lampenschirm_rote_seide.jpg",
                altText: "Lampenschirme mit roter Seide",
              },
              {
                src: "/images/angebote/lampenschirme/lampenschirm_steckschirm.jpg",
                altText: "Lampenschirme Steckschirm",
              },
              {
                src: "/images/angebote/lampenschirme/lampenschirm_stgaller_stickerei.jpg",
                altText: "Lampenschirme mit St.Galler Stickerei",
              },
            ]}
          />
        </div>

        <TitleSection title="Lichtprojekte" />
        <ProjectsTeaserRow
          projectsWithHeaderImages={projectsWithHeaderImages.slice(0, 5)}
        />
      </ContentContainer>
      <Footer />
    </>
  );
}
