import { MapPin, Mail, ExternalLink } from 'lucide-react';
import logoImage from '@/assets/brand.svg';

interface FooterProps {
  medicalProductUrl: string;
}

const footerColumns = (medicalProductUrl: string) => [
  {
    title: 'サービス',
    links: [
      { text: '電子カルテAI', href: medicalProductUrl, external: true },
      { text: 'レセプトAI', href: medicalProductUrl, external: true },
      { text: 'イルミアコール', href: 'https://recruit.ilmiaco.com/', external: true },
      { text: 'DX-Hub Ilmia', href: '#other-products' },
      { text: 'PIBU AI', href: '#other-products' },
    ],
  },
  {
    title: '企業情報',
    links: [
      { text: '会社概要', href: '#about' },
      { text: '導入シナリオ', href: '#scenarios' },
      { text: '料金', href: '#pricing' },
      { text: 'お問い合わせ', href: '#contact' },
    ],
  },
];

export default function Footer({ medicalProductUrl }: FooterProps) {
  return (
    <footer className="bg-[#3D2C1E] text-white pt-16 md:pt-20 pb-8 px-5 sm:px-6" role="contentinfo" itemScope itemType="https://schema.org/WPFooter">
      <div className="max-w-5xl mx-auto">
        {/* Editorial heading */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold tracking-[0.3em] text-[#F0B254]">ILMIA TECH</span>
            <div className="h-px flex-1 max-w-[80px] bg-[#F0B254]/40" />
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <img src={logoImage} alt="ILMIA イルミアテック" className="h-12 w-auto brightness-0 invert mb-4" />
              <p className="text-base text-white/70 leading-[1.9] max-w-md">
                診察から請求まで、AIが最適化
              </p>
            </div>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 pt-12 border-t border-white/10">
          {footerColumns(medicalProductUrl).map((col, i) => (
            <div key={i}>
              <h3 className="font-bold mb-5 text-xs uppercase tracking-[0.25em] text-[#F0B254]">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.href}
                      {...('external' in link && link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="text-sm text-white/65 hover:text-[#F0B254] transition-colors flex items-center gap-1.5"
                    >
                      {link.text}
                      {'external' in link && link.external && <ExternalLink className="w-3 h-3" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-bold mb-5 text-xs uppercase tracking-[0.25em] text-[#F0B254]">Contact</h3>
            <ul className="space-y-3.5 text-sm text-white/65">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#F0B254]/70" />
                <span className="leading-relaxed">〒530-0001<br />大阪府大阪市北区梅田<br />1-2-2-12-12</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F0B254]/70" />
                <a href="mailto:info@ilmiaco.com" className="hover:text-[#F0B254] transition-colors">
                  info@ilmiaco.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-14 pt-6 border-t border-white/10">
          <p className="text-center text-xs text-white/40 tracking-wide">
            &copy; 2026 ILMIA Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
