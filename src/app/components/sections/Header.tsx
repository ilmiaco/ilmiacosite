import { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import logoImage from '@/assets/brand.svg';

const products = [
  { name: 'イルミアガイド', subtitle: '患者説明AI', href: 'https://guide.ilmiaco.com/' },
  { name: 'イルミアカルテ', subtitle: '統合型AI電子カルテ', href: 'https://medical.ilmiaco.com' },
  { name: 'イルミアレセプト', subtitle: 'AIレセプト点検', href: 'https://medical.ilmiaco.com' },
  { name: 'イルミアブック', subtitle: '無料AI採用プラットフォーム', href: 'https://book.ilmiaco.com/' },
];

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
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  // Close desktop dropdown on outside click or Escape
  useEffect(() => {
    if (!productsOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setProductsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [productsOpen]);

  return (
    <header
      className={`fixed w-full z-50 top-0 transition-all duration-300 border-b border-white/10 ${
        scrolled
          ? 'bg-[#3D2C1E] backdrop-blur-md'
          : 'bg-[#3D2C1E]/95 backdrop-blur-sm'
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
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center h-full gap-9" aria-label="メインナビゲーション" role="navigation">
            {/* Products dropdown */}
            <div className="relative h-full flex items-center" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setProductsOpen(!productsOpen)}
                className={`relative flex items-center gap-1.5 h-full text-[15px] font-bold tracking-wider transition-colors group ${
                  productsOpen ? 'text-[#F0B254]' : 'text-white/70 hover:text-[#F0B254]'
                }`}
                aria-expanded={productsOpen}
                aria-haspopup="true"
              >
                製品
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
                <span
                  className={`absolute -bottom-0.5 left-0 h-[1.5px] bg-[#F0B254] transition-all duration-300 ${
                    productsOpen ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>

              {/* Dropdown panel */}
              {productsOpen && (
                <div className="absolute top-full left-0 min-w-[320px] bg-[#3D2C1E] border border-white/10 shadow-2xl shadow-black/40">
                  <div className="flex items-center gap-3 px-5 pt-4 pb-3 border-b border-white/10">
                    <span className="text-[10px] font-bold tracking-[0.3em] text-[#F0B254]">PRODUCTS</span>
                    <div className="h-px flex-1 bg-[#F0B254]/30" />
                  </div>
                  <div className="py-2">
                    {products.map((product) => (
                      <a
                        key={product.name}
                        href={product.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setProductsOpen(false)}
                        className="group/item flex items-center gap-4 px-5 py-3.5 border-l-[3px] border-transparent hover:border-[#F0B254] hover:bg-white/5 transition-all"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-bold text-white group-hover/item:text-[#F0B254] transition-colors">
                            {product.name}
                          </div>
                          <div className="text-[11px] text-white/50 mt-0.5 tracking-wide">
                            {product.subtitle}
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-white/30 group-hover/item:text-[#F0B254] group-hover/item:translate-x-0.5 transition-all flex-shrink-0" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative flex items-center h-full text-[15px] font-bold tracking-wider transition-colors group ${
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
              className="group inline-flex items-center gap-2.5 text-[15px] font-bold tracking-wider px-5 py-2.5 bg-[#D98324] text-white border border-[#D98324] hover:bg-transparent hover:border-[#F0B254] hover:text-[#F0B254] transition-all"
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
              {/* Products accordion */}
              <div className="border-b border-white/10">
                <button
                  type="button"
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className="flex items-center justify-between w-full py-4 px-1 text-sm font-bold tracking-wider text-white/85 hover:text-[#F0B254] transition-colors"
                  aria-expanded={mobileProductsOpen}
                >
                  製品
                  <ChevronDown className={`w-4 h-4 opacity-60 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileProductsOpen && (
                  <div className="pb-3 space-y-0">
                    {products.map((product) => (
                      <a
                        key={product.name}
                        href={product.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center justify-between py-3 pl-5 pr-1 border-l-[3px] border-[#D98324]/30 hover:border-[#F0B254] hover:bg-white/5 transition-colors"
                      >
                        <div className="min-w-0">
                          <div className="text-sm font-bold text-white/90">{product.name}</div>
                          <div className="text-[11px] text-white/45 mt-0.5 tracking-wide">{product.subtitle}</div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-white/40 flex-shrink-0" />
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between py-4 px-1 border-b border-white/10 text-sm font-bold tracking-wider text-white/85 hover:text-[#F0B254] transition-colors"
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
