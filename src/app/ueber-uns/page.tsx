import { ContentContainer } from "@/components/content-container";
import { Footer } from "@/components/footer";
import { History } from "@/components/history";
import { NavWithTitle } from "@/components/nav-with-title";
import { Team } from "@/components/team";
import { TitleSection } from "@/components/title-section";
import { Metadata } from "next";

const aboutUs = {
  title: "Wer wir sind",
  intro:
    "Wir sind ein kleines Team aus erfahrenen Frauen und freuen uns, Sie auch persönlich kennzulernen.",
  teamSubtitle: "Unser Team",
  historySubtitle: "Unsere Geschichte",
};

const teamMembers = [
  {
    name: "Mariella Wirth-Kleinstein",
    role: "Geschäftsinhaberin",
    imageUrl: "/images/team/mariella_wirth.jpg",
    bio: "Schon meine Grosseltern wussten mit Licht Emotionen zu wecken. In dritter Generation lebe ich diese Leidenschaft weiter und möchte andere dafür begeistern. Licht ist Wohngefühl, Licht ist Leben.",
  },
  {
    name: "Regula Kleinstein-Wehrli",
    role: "",
    imageUrl: "/images/team/regula_kleinstein.jpg",

    bio: "Nach meiner 30-jährigen Führung des Unternehmens, freue ich mich, dieses nun an meine Tochter weiterzugeben. Gerne unterstütze ich Sie weiterhin mit meiner Erfahrung und Know-How.",
  },
  {
    name: "Anita Wagner",
    role: "",
    imageUrl: "/images/team/anita_wagner.jpg",
    bio: "In einem starken Frauenpower Team meine kreativen Fähigkeiten einzubringen & stetig zu erweitern bereitet mir grosse Freude! Mit Licht & dessen Wirkung Neues zu erschaffen fasziniert mich.",
  },
];

const historyItems = [
  {
    name: "Gründung Wehrli Lampenatelier St.Gallen",
    description:
      "In den späten 40-iger Jahren beginnt die Geschichte von Wehrli Lampenatelier an der Brühlgasse in St. Gallen.",
    date: "1948",
    dateTime: "1948",
    imageUrl: "/images/history/1948.jpg",
  },
  {
    name: "Wehrli Lampenatelier Goldach",
    description:
      "Die Gründer Emmy und Karl Wehrli verlegen das Lampenatelier und den Elektroinstallationsbetrieb an die Blumenstrasse 66, in Goldach. Nach und nach wurde der Betrieb erweitert.",
    date: "1952",
    dateTime: "1952",
    imageUrl: "/images/history/1952.jpg",
  },
  {
    name: "Zweite Generation",
    description:
      "Wurde das Unternehmen von Regula Kleinstein-Wehrli in zweiter Generation übernommen. Das Angebot von Wohnraumleuchten und Lampenschirmen nach Mass wurde stets erweitert und mit Dynamik und Geschick den Wandel in Geschmack und Zeitgeist, Licht und Werkstofftechnik, Beratung und Vertrieb erfolgreich gemeistert. Dieser einzigartige Erfahrungsschatz aus Tradition und Know how macht Wehrli Lampenatelier zum kompetenten Handelspartner und Hersteller von Objektleuchten und Lampenschirmen, in eigener Manufaktur (oder: eigenem Atelier) ",
    date: "1988",
    dateTime: "1988",
    imageUrl: "/images/history/1988.jpg",
  },
  {
    name: "Dritte Generation – Wehrli Licht GmbH",
    description:
      "Die Geschichte von Wehrli Lampenatelier geht ein Kapitel weiter und an die dritte Generation über. Mariella Kleinstein, eidg. dipl. Lichtplanerin, führt das Geschäftsmodell nun fort und bringt die Lichtplanung als neues Element mit ein. Die Gründung von Wehrli Licht GmbH verkörpert einen neuen Abschnitt in der Geschichte des Unternehmens.",
    date: "Seit 2020",
    dateTime: "Seit 2020",
    imageUrl: "/images/history/2020.jpg",
  },
];

export const metadata: Metadata = {
  title: aboutUs.title,
  description: aboutUs.intro,
};

export default function AboutUs() {
  return (
    <>
      <NavWithTitle title={aboutUs.title} />
      <ContentContainer>
        <TitleSection title={aboutUs.teamSubtitle} />
        <Team teamMembers={teamMembers} />
        <TitleSection title={aboutUs.historySubtitle} />
        <History historyItems={historyItems} />
      </ContentContainer>
      <Footer />
    </>
  );
}
