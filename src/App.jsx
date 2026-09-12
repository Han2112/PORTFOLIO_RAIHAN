import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

// Components
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";
import NavbarUI from "./components/NavbarUI";
import FooterUI from "./components/FooterUI";
import BackToTop from "./components/BackToTop";
import BackgroundElements from "./components/BackgroundElements";

// Sections
import HeroSection from "./sections/HeroSection";
import SkillMarquee from "./components/SkillMarquee";
import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";
import CertificateSection from "./sections/CertificateSection";
import ProjectSection from "./sections/ProjectSection";
import GallerySection from "./sections/GallerySection";
import ContactSection from "./sections/ContactSection";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // --- GIMMICK: JUDUL TAB DINAMIS ---
  useEffect(() => {
    const originalTitle = document.title;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Pesan saat user meninggalkan tab
        document.title = "Wait, come back❗";
      } else {
        // Balik ke judul asli saat user kembali
        document.title = originalTitle;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    
    // Cleanup agar tidak terjadi memory leak
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);
  // ----------------------------------

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <main className="min-vh-100 position-relative">
          <BackgroundElements /> 

          <CustomCursor />
          
          <NavbarUI />
          
          <HeroSection />
          <SkillMarquee />
          <AboutSection />
          <ExperienceSection />
          <CertificateSection />
          <ProjectSection />
          <GallerySection />
          
          <ContactSection />
          <FooterUI />

          <BackToTop />
        </main>
      )}
    </>
  );
}

export default App;