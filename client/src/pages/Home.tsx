import { Helmet } from "react-helmet";
import HeroSection from "@/sections/HeroSection";
import AboutMeSection from "@/sections/AboutMeSection";
import ServicesSection from "@/sections/ServicesSection";
import ProjectsSection from "@/sections/ProjectsSection";
import CertificateSection from "@/sections/CertificateSection";  // Fix import name

export default function Home() {
  return (
    <>
      <Helmet>
        <title>ปริพัฒน์ รอดหยู่ - Portfolio (Refined)</title>
        <meta 
          name="description" 
          content="Portfolio website of Paripat Rodyoo - Student Developer and Technology Enthusiast"
        />
      </Helmet>
      <HeroSection />
      <AboutMeSection />
      <ServicesSection />
      <ProjectsSection />
      <CertificateSection />  {/* Match the import name */}
    </>
  );
}
