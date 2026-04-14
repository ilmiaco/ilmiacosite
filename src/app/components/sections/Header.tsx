import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import logoImage from '@/assets/brand.svg';

const navItems = [
  { label: '機能', href: '#guide-ai' },
  { label: '料金', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'ABOUT', href: '#about' },
];

interface HeaderProps {
  scrolled: boolean;
}

export default function Header({ scrolled }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.slice(1));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 border-b border-white/10 sm:top-[32px] ${
        scrolled
          ? 'top-0 bg-[#3D2C1E] backdrop-blur-md'
          : 'top-[28px] bg-[#3D2C1E]/95 backdrop-blur-sm'
      }`}
      role="banner"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex justify-between items-center h-16 md:h-[4.75rem]">
          {/* Logo + tagline */}
          <a
            href="/"
            className="flex items-center gap-3.5"
            aria-label="ILMIA イルミアテック - ホームへ戻る"
            itemProp="url"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img src={logoImage} alt="ILMIA イルミアテック" className="h-10 sm:h-12 w-auto brightness-0 invert" itemProp="name" />
            <div className="hidden sm:flex items-center gap-3 pl-3.5 border-l border-white/15">
              <span className="text-[10px] font-bold tracking-[0.25em] text-[#F0B254]">医療AI</span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center h-full gap-9" aria-label="メインナビゲーション" role="navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative flex items-center h-full text-[13px] font-bold tracking-wider transition-colors group ${
                    isActive ? 'text-[#F0B254]' : 'text-white/70 hover:text-[#F0B254]'
                  }`}
                >
                  {item.label}
                  {/* Editorial left-anchored underline */}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-[1.5px] bg-[#F0B254] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}

            {/* CTA — rectangular editorial */}
            <a
              href="https://guide.ilmiaco.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 text-[13px] font-bold tracking-wider px-5 py-2.5 bg-[#D98324] text-white border border-[#D98324] hover:bg-transparent hover:border-[#F0B254] hover:text-[#F0B254] transition-all"
            >
              無料デモを試す
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </nav>

          {/* Mobile actions: compact CTA + hamburger */}
          <div className="lg:hidden flex items-center gap-1.5">
            <a
              href="https://guide.ilmiaco.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-bold tracking-wider px-3.5 py-2 bg-[#D98324] text-white hover:bg-[#c27520] transition-colors"
            >
              無料デモ
            </a>
            <button
              className="p-2.5 text-white hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu — editorial bordered list */}
        {isMenuOpen && (
          <nav
            id="mobile-menu"
            className="lg:hidden py-4 pb-6 border-t border-white/10"
            aria-label="モバイルナビゲーション"
            role="navigation"
          >
            <div className="border-t border-white/10">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`flex items-center justify-between py-4 px-1 border-b border-white/10 text-sm font-bold tracking-wider transition-colors ${
                    item.highlight ? 'text-[#F0B254]' : 'text-white/85 hover:text-[#F0B254]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                  <ArrowRight className="w-3.5 h-3.5 opacity-50" />
                </a>
              ))}
            </div>
            <a
              href="https://guide.ilmiaco.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 flex items-center justify-center gap-2.5 bg-[#D98324] text-white font-bold text-sm tracking-wider py-4 hover:bg-[#c27520] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              無料デモを試す
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
