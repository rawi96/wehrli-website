import { AllOffers } from "@/components/all-offers";
import { ContentContainer } from "@/components/content-container";
import { Feedback } from "@/components/feedback";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { HomeTeaser } from "@/components/home-teaser";
import { JobModal } from "@/components/job-modal";
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
      {/* {<JobModal />} */}
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
        <HomeTeaser />
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

        <Feedback />
      </ContentContainer>
      <Footer />
    </>
  );
}
