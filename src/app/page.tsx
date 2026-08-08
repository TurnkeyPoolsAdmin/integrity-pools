import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import AfterHeroBanner from "@/components/AfterHeroBanner";
import RecentProjects from "@/components/RecentProjects";
import TestimonialsSection from "@/components/Testimonials";
import Benefits from "@/components/Benefits";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import ServicesGrid from "@/components/ServicesGrid";
import SpecialFeatures from "@/components/SpecialFeatures";
import ProcessSteps from "@/components/ProcessSteps";
import ServiceAreas from "@/components/ServiceAreas";
import Partners from "@/components/Partners";
import ContactForm from "@/components/ContactForm";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AfterHeroBanner />
      <RecentProjects />
      <TestimonialsSection />
      <Benefits />
      <AboutSection />
      <TeamSection />
      <ServicesGrid />
      <SpecialFeatures />
      <ProcessSteps />
      <ServiceAreas />
      <Partners />
      <ContactForm />
      <CTASection />
    </>
  );
}
