import { useState, useEffect } from 'react';
import { useReveal } from './hooks/useReveal';
import Header from './components/sections/Header';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import PainPointsSection from './components/sections/PainPointsSection';
import PlatformOverview from './components/sections/PlatformOverview';
import GuideSection from './components/sections/GuideSection';
import OtherProductsSection from './components/sections/OtherProductsSection';
import QuoteBanner from './components/sections/QuoteBanner';
import ResultsSection from './components/sections/ResultsSection';
import PricingSection from './components/sections/PricingSection';
import FaqSection from './components/sections/FaqSection';
import ScenariosSection from './components/sections/ScenariosSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/sections/Footer';
import MobileFloatingCta from './components/sections/MobileFloatingCta';
import NotFound from './components/sections/NotFound';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const medicalProductUrl = 'https://medical.ilmiaco.com';

  const isNotFound =
    typeof window !== 'undefined' && window.location.pathname !== '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useReveal();

  if (isNotFound) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-surface relative overflow-hidden" itemScope itemType="https://schema.org/WebPage">
      <Header scrolled={scrolled} />

      <main id="main-content" role="main">
        <HeroSection />
        <PainPointsSection />
        <PlatformOverview />
        <GuideSection />
        <ScenariosSection />
        <PricingSection />
        <QuoteBanner />
        <OtherProductsSection />
        <ResultsSection />
        <FaqSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer medicalProductUrl={medicalProductUrl} />
      <MobileFloatingCta />
    </div>
  );
}
