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
    <footer className="bg-[#3D2C1E] text-white py-14 md:py-16 px-5 sm:px-6" role="contentinfo" itemScope itemType="https://schema.org/WPFooter">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mb-10">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <img src={logoImage} alt="ILMIA イルミアテック" className="h-9 w-auto brightness-0 invert" />
            </div>
            <p className="text-xs text-white/40 leading-relaxed">診察から請求まで、AIが最適化</p>
          </div>

          {footerColumns(medicalProductUrl).map((col, i) => (
            <div key={i}>
              <h3 className="font-bold mb-4 text-[10px] uppercase tracking-[0.2em] text-white/30">{col.title}</h3>
              <ul className="space-y-2.5">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.href}
                      {...('external' in link && link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="text-xs text-white/45 hover:text-white transition-colors flex items-center gap-1.5"
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
            <h3 className="font-bold mb-4 text-[10px] uppercase tracking-[0.2em] text-white/30">Contact</h3>
            <ul className="space-y-3 text-xs text-white/45">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-[#F0B254]/60" />
                <span>〒530-0001<br />大阪府大阪市北区梅田1-2-2-12-12</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#F0B254]/60" />
                info@ilmiaco.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 pt-7">
          <p className="text-center text-[11px] text-white/30 tracking-wide">
            &copy; 2026 ILMIA Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
