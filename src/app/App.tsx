import { useState, useEffect } from 'react';
import AnnouncementBanner from './components/sections/AnnouncementBanner';
import Header from './components/sections/Header';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import PainPointsSection from './components/sections/PainPointsSection';
import PlatformOverview from './components/sections/PlatformOverview';
import EmrSection from './components/sections/EmrSection';
import ReceiptSection from './components/sections/ReceiptSection';
import QuoteBanner from './components/sections/QuoteBanner';
import ResultsSection from './components/sections/ResultsSection';
import PricingSection from './components/sections/PricingSection';
import FaqSection from './components/sections/FaqSection';
import ScenariosSection from './components/sections/ScenariosSection';
import OtherProductsSection from './components/sections/OtherProductsSection';
import CtaSection from './components/sections/CtaSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/sections/Footer';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const medicalProductUrl = 'https://medical.ilmiaco.com';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-surface relative overflow-hidden" itemScope itemType="https://schema.org/WebPage">
      <AnnouncementBanner medicalProductUrl={medicalProductUrl} />
      <Header scrolled={scrolled} />

      <main id="main-content" role="main">
        <HeroSection medicalProductUrl={medicalProductUrl} />
        <AboutSection />
        <PainPointsSection />
        <PlatformOverview />
        <EmrSection />
        <ReceiptSection />
        <QuoteBanner />
        <ResultsSection />
        <PricingSection medicalProductUrl={medicalProductUrl} />
        <FaqSection />
        <ScenariosSection />
        <OtherProductsSection />
        <CtaSection medicalProductUrl={medicalProductUrl} />
        <ContactSection />
      </main>

      <Footer medicalProductUrl={medicalProductUrl} />
    </div>
  );
}
