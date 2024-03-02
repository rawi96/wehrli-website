import { Address } from "@/components/address";
import { ContentContainer } from "@/components/content-container";
import { Footer } from "@/components/footer";
import { Map } from "@/components/map";
import { NavWithTitle } from "@/components/nav-with-title";
import { OpeningHours } from "@/components/opening-hours";
import { TitleSection } from "@/components/title-section";
import { global } from "@/data/global";
import { Metadata } from "next";
import Image from "next/image";

const contact = {
  title: "So finden Sie uns am schnellsten",
  intro: "Wir freuen uns, wenn Sie vorbeikommen.",
};

export const metadata: Metadata = {
  title: contact.title,
  description: contact.intro,
};

export default function Contact() {
  return (
    <>
      <NavWithTitle />
      <ContentContainer>
        <div className="text-center">
          {global.showHolidays && (
            <>
              <TitleSection title="Wir machen Ferien" />
              <Image
                className="mb-6 inline-block w-96"
                src="/images/vacation/winter.jpg"
                width={1000}
                height={1000}
                alt="Ferien"
              />
              <div className="text-md mb-20">
                <div>
                  Vom{" "}
                  <strong>{`${global.holidaysStart} bis ${global.holidaysEnd}`}</strong>{" "}
                  bleibt das Geschäft geschlossen.
                </div>
                <div className="mt-2">
                  Nach Voranmeldung sind wir natürlich sehr gerne für Sie da!
                </div>
              </div>
            </>
          )}
          <TitleSection title="Öffnungszeiten" />
          <div className="mb-20">
            <OpeningHours size="l" />
          </div>
          <Map />
          <TitleSection title="Adresse" />
          <div className="mb-20">
            <Address size="l" />
          </div>
        </div>
      </ContentContainer>
      <Footer />
    </>
  );
}
