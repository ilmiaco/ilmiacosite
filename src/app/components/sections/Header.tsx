import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImage from '@/assets/brand.svg';

const navItems = [
  { label: '電子カルテAI', href: '#emr-ai', highlight: true },
  { label: 'レセプトAI', href: '#receipt-ai', highlight: true },
  { label: '料金', href: '#pricing' },
  { label: '導入シナリオ', href: '#scenarios' },
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
      className={`fixed top-[28px] sm:top-[32px] w-full z-50 transition-all duration-300 border-b border-white/10 ${
        scrolled
          ? 'bg-[#3D2C1E] backdrop-blur-md'
          : 'bg-[#3D2C1E]/95 backdrop-blur-sm'
      }`}
      role="banner"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex justify-between items-center h-16 md:h-[4.5rem]">
          <a
            href="/"
            className="flex items-center gap-2.5"
            aria-label="ILMIA イルミアテック - ホームへ戻る"
            itemProp="url"
          >
            <img src={logoImage} alt="ILMIA イルミアテック" className="h-10 sm:h-12 w-auto brightness-0 invert" itemProp="name" />
          </a>

          <nav className="hidden lg:flex items-center h-16 md:h-[4.5rem] gap-7" aria-label="メインナビゲーション" role="navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`relative flex items-center h-full text-[13px] font-medium transition-colors group ${
                  activeSection === item.href.slice(1) ? 'text-[#F0B254]' : 'text-white/70 hover:text-[#F0B254]'
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#F0B254] transition-all duration-300 ${
                    activeSection === item.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            ))}
            <a
              href="#contact"
              className="text-[13px] font-semibold px-5 py-2 rounded-full bg-[#D98324] text-white hover:bg-[#c27520] transition-colors"
            >
              お問い合わせ
            </a>
          </nav>

          <button
            className="lg:hidden p-2.5 rounded-lg text-white hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav
            id="mobile-menu"
            className="lg:hidden py-3 pb-5 border-t border-white/10"
            aria-label="モバイルナビゲーション"
            role="navigation"
          >
            <div className="space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`block py-3 px-4 rounded-lg text-sm ${
                    item.highlight ? 'text-[#F0B254] font-bold' : 'text-white/80'
                  } hover:bg-white/10 transition-colors`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="block text-center bg-[#D98324] text-white font-semibold text-sm py-3 rounded-lg mt-3 mx-3 hover:bg-[#c27520] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              お問い合わせ
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
