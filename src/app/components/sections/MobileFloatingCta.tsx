import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function MobileFloatingCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after scrolling past 60% of viewport height
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = window.innerHeight * 0.6;
      const contactSection = document.getElementById('contact');

      // Only show when contact section is still below the viewport.
      // Hides both when contact is visible and when the user has scrolled past it (footer area).
      let isContactBelowViewport = true;
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        isContactBelowViewport = rect.top >= window.innerHeight;
      }

      setIsVisible(scrollY > threshold && isContactBelowViewport);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`lg:hidden fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
      aria-hidden={!isVisible}
    >
      <div className="bg-white/95 backdrop-blur-md border-t border-[#3D2C1E]/15 px-4 py-3 shadow-[0_-4px_20px_rgba(61,44,30,0.08)]">
        <a
          href="#contact"
          className="group flex items-center justify-center gap-2.5 w-full bg-[#D98324] text-white font-bold text-base py-4 hover:bg-[#c27520] transition-colors"
          tabIndex={isVisible ? 0 : -1}
        >
          お問い合わせ
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
}
