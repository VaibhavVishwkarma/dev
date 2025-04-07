import { useEffect } from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/SkillsSection";
import CertificationsSection from "./components/CertificationsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { Toaster } from "@/components/ui/toaster";

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e: MouseEvent) => {
      // Check if the clicked element is an <a> tag or its child
      let target = e.target as HTMLElement;
      
      // If we clicked on a child of an <a> tag, find the parent <a> tag
      while (target && target.tagName !== 'A') {
        if (target.parentElement) {
          target = target.parentElement;
        } else {
          break;
        }
      }
      
      // Now check if we found an <a> tag with hash link
      if (target && target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId!);
        if (targetElement) {
          // Smooth scroll with offset for the header
          window.scrollTo({
            top: (targetElement as HTMLElement).offsetTop - 80,
            behavior: 'smooth'
          });
          
          // Close mobile menu if it's open
          const mobileMenuButton = document.querySelector('[aria-label*="menu"]');
          if (mobileMenuButton && window.innerWidth < 768) {
            (mobileMenuButton as HTMLButtonElement).click();
          }
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <CertificationsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
