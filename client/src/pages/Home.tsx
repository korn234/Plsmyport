import { Helmet } from "react-helmet";
import HeroSection from "@/sections/HeroSection";
import FeatureSection from "@/sections/FeatureSection";
import ServicesSection from "@/sections/ServicesSection";
import AboutSection from "@/sections/AboutSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import CTASection from "@/sections/CTASection";
import ContactSection from "@/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>TechCorp Solutions | Innovative Business Technology</title>
        <meta 
          name="description" 
          content="Transform your business with cutting-edge technology solutions. TechCorp provides digital transformation, cloud infrastructure, cybersecurity, and custom software solutions."
        />
      </Helmet>
      <HeroSection />
      <FeatureSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
    </>
  );
}
