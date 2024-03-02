import { Footer } from "@/components/footer";
import { AllOffers } from "@/components/all-offers";
import { ContentContainer } from "@/components/content-container";
import { Feedback } from "@/components/feedback";
import { Hero } from "@/components/hero";
import { ProjectsTeaserRow } from "@/components/projects-teaser-row";
import { Testimonial as TestimonialComponent } from "@/components/testimonial";
import { TitleSection } from "@/components/title-section";
import { testimonials } from "@/data/testimonials";
import { getAllProjectsWithHeaderImages } from "@/utils/projects";
import { Metadata } from "next";

const home = {
  title: "Aus Liebe zum Licht",
  intro:
    "Das Fachgeschäft für hochwertige Innenbeleuchtung, massgeschneiderte Lampenschirme und professionelle Lichtplanung und -beratung.",
  primaryButton: {
    text: "Online Shop",
    link: "/shop",
  },
  secondaryButton: {
    text: "Kontakt",
    link: "/kontakt",
  },
  offerSubTitle: "Unser Angebot",
  projectsSubTitle: "Aktuelle Lichtprojekte",
  testimonialsSubTitle: "Was unsere Kund*innen sagen",
  feedbackSubTitle: "Wir freuen uns über euer Feedback",
  feedbackPrimaryButton: {
    text: "Bewerten",
    link: "https://www.google.com/search?q=wehrli+licht&ei=PAJaZJnCJdT4sAeouZaIAQ&gs_ssp=eJzj4tZP1zcsSctJM8vKMGC0UjWoMDG3TDJMskg1sjQxNEqzMLQyqEhOMk1JMjJJMU-yNEw2t7Dw4ilPzSjKyVTIyUzOKAEAdEgTjQ&oq=wehrli+licht&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgAMg0ILhATEK8BEMcBEIAEMggIABCKBRCGAzIICAAQigUQhgMyGwguEBMQrwEQxwEQgAQQlwUQ3AQQ3gQQ4AQYAToKCAAQRxDWBBCwAzoICAAQigUQkQI6CwgAEIAEELEDEIMBOgsILhCABBCxAxCDAToFCAAQgAQ6CwgAEIoFELEDEIMBOgsIABCKBRCxAxCRAjoUCC4QgAQQsQMQgwEQxwEQ0QMQ1AI6EQguEIAEELEDEIMBEMcBENEDOgsILhCABBDHARDRAzoLCC4QigUQ1AIQkQI6CAguEIAEENQCOgsILhCKBRCxAxCDAToZCC4QigUQ1AIQkQIQlwUQ3AQQ3gQQ3wQYAToOCAAQigUQsQMQgwEQkQI6DQgAEIAEELEDEIMBEAo6EAgAEIAEELEDEIMBEMkDEAo6CAgAEIoFEJIDOgoIABCABBCxAxAKOgcIABCABBAKOgcILhCABBAKOg0ILhCABBDHARCvARAKOhsILhCABBDHARCvARAKEJcFENwEEN4EEOAEGAE6BwgAEA0QgAQ6BggAEB4QDToFCC4QgAQ6CwguEIAEEMcBEK8BOhkILhCABBDHARCvARCXBRDcBBDeBBDgBBgBOgYIABAWEB5KBAhBGABQ5wZY2TdgpkFoCnABeACAAdEBiAHJE5IBBjQuMTMuMpgBAKABAcgBA8ABAdoBBggBEAEYFA&sclient=gws-wiz-serp#lrd=0x479b1b8e29412f81:0xcb5db24d7b91c788,3,,,,",
  },
  feedbackSecondaryButton: {
    text: "Bewertungen lesen",
    link: "https://www.google.com/search?q=wehrli+licht&ei=PAJaZJnCJdT4sAeouZaIAQ&gs_ssp=eJzj4tZP1zcsSctJM8vKMGC0UjWoMDG3TDJMskg1sjQxNEqzMLQyqEhOMk1JMjJJMU-yNEw2t7Dw4ilPzSjKyVTIyUzOKAEAdEgTjQ&oq=wehrli+licht&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgAMg0ILhATEK8BEMcBEIAEMggIABCKBRCGAzIICAAQigUQhgMyGwguEBMQrwEQxwEQgAQQlwUQ3AQQ3gQQ4AQYAToKCAAQRxDWBBCwAzoICAAQigUQkQI6CwgAEIAEELEDEIMBOgsILhCABBCxAxCDAToFCAAQgAQ6CwgAEIoFELEDEIMBOgsIABCKBRCxAxCRAjoUCC4QgAQQsQMQgwEQxwEQ0QMQ1AI6EQguEIAEELEDEIMBEMcBENEDOgsILhCABBDHARDRAzoLCC4QigUQ1AIQkQI6CAguEIAEENQCOgsILhCKBRCxAxCDAToZCC4QigUQ1AIQkQIQlwUQ3AQQ3gQQ3wQYAToOCAAQigUQsQMQgwEQkQI6DQgAEIAEELEDEIMBEAo6EAgAEIAEELEDEIMBEMkDEAo6CAgAEIoFEJIDOgoIABCABBCxAxAKOgcIABCABBAKOgcILhCABBAKOg0ILhCABBDHARCvARAKOhsILhCABBDHARCvARAKEJcFENwEEN4EEOAEGAE6BwgAEA0QgAQ6BggAEB4QDToFCC4QgAQ6CwguEIAEEMcBEK8BOhkILhCABBDHARCvARCXBRDcBBDeBBDgBBgBOgYIABAWEB5KBAhBGABQ5wZY2TdgpkFoCnABeACAAdEBiAHJE5IBBjQuMTMuMpgBAKABAcgBA8ABAdoBBggBEAEYFA&sclient=gws-wiz-serp#lrd=0x479b1b8e29412f81:0xcb5db24d7b91c788,1,,,,",
  },
};

export const metadata: Metadata = {
  title: home.title,
  description: home.intro,
};

export default function Home() {
  const projectsWithHeaderImages = getAllProjectsWithHeaderImages();
  const twoRandomTestimonials = testimonials
    .sort(() => 0.5 - Math.random())
    .slice(0, 2);

  return (
    <>
      <Hero
        image={{
          src: "/images/essbereich.jpg",
          altText: "Essbereich Beleuchtung",
        }}
        title={home.title}
        intro={home.intro}
        primaryButton={home.primaryButton}
        secondaryButton={home.secondaryButton}
      />
      <ContentContainer>
        <TitleSection title={home.offerSubTitle} />
        <AllOffers />

        <TitleSection title={home.projectsSubTitle} />
        <ProjectsTeaserRow
          projectsWithHeaderImages={projectsWithHeaderImages.slice(0, 5)}
        />

        <TitleSection title={home.testimonialsSubTitle} />
        {twoRandomTestimonials.map((testimonial, index) => (
          <TestimonialComponent key={index} {...testimonial} />
        ))}

        <Feedback
          title={home.feedbackSubTitle}
          button1={{
            text: home.feedbackPrimaryButton.text,
            link: home.feedbackPrimaryButton.link,
          }}
          button2={{
            text: home.feedbackSecondaryButton.text,
            link: home.feedbackSecondaryButton.link,
          }}
        />
      </ContentContainer>
      <Footer />
    </>
  );
}
