import { MotionConfig } from 'framer-motion';
import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import ResearchSection from './sections/ResearchSection';
import RecognitionSection from './sections/RecognitionSection';
import ContactSection from './sections/ContactSection';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="bg-[#0C0C0C] font-kanit" style={{ overflowX: 'clip' }}>
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ResearchSection />
        <RecognitionSection />
        <ContactSection />
      </main>
    </MotionConfig>
  );
}
