import { Footer } from "./footer";
import { Hero } from "./hero";

export const NotFound = () => (
  <>
    <Hero
      image={{
        src: "/images/essbereich.jpg",
        altText: "Essbereich Beleuchtung",
      }}
      title={"Hier gibts leider nichts zu sehen."}
      intro={"Die Seite wurde nicht gefunden."}
      primaryButton={{ text: "Home", link: "/" }}
      secondaryButton={{ text: "Kontakt", link: "/kontakt" }}
    />
    <div className="-mt-20">
      <Footer />
    </div>
  </>
);
