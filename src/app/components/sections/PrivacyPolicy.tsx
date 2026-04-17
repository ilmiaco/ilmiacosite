import { useEffect } from 'react';
import { ArrowLeft, Mail, MapPin } from 'lucide-react';
import logoImage from '@/assets/brand.svg';
import Footer from './Footer';
import {
  privacyPolicyMeta,
  privacyPolicySections,
} from '@/app/data/privacyPolicyData';

export default function PrivacyPolicy() {
  const medicalProductUrl = 'https://medical.ilmiaco.com';
  const { title, lastUpdated, intro, companyInfo } = privacyPolicyMeta;

  useEffect(() => {
    const prevTitle = document.title;
    document.title = `${title} | ILMIA イルミアテック`;

    const metaDesc = document.createElement('meta');
    metaDesc.name = 'description';
    metaDesc.content =
      '株式会社イルミアテックのプライバシーポリシー。個人情報の取扱い、利用目的、安全管理措置等について記載しています。';
    document.head.appendChild(metaDesc);

    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = 'https://ilmiaco.com/privacy-policy';
    document.head.appendChild(canonical);

    window.scrollTo(0, 0);

    return () => {
      document.title = prevTitle;
      document.head.removeChild(metaDesc);
      document.head.removeChild(canonical);
    };
  }, [title]);

  return (
    <div className="min-h-screen bg-surface relative overflow-hidden flex flex-col">
      {/* Minimal header — logo only */}
      <header className="w-full bg-[#3D2C1E] border-b border-white/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="flex items-center h-16 md:h-[4.75rem]">
            <a
              href="/"
              className="flex items-center gap-3.5"
              aria-label="ILMIA イルミアテック - ホームへ戻る"
            >
              <img
                src={logoImage}
                alt="ILMIA イルミアテック"
                className="h-10 sm:h-12 w-auto brightness-0 invert"
              />
            </a>
          </div>
        </div>
      </header>

      {/* Main */}
      <main
        className="flex-1 px-5 sm:px-6 py-16 md:py-20"
        role="main"
        itemScope
        itemType="https://schema.org/WebPage"
      >
        <div className="max-w-3xl mx-auto w-full">
          {/* Editorial label */}
          <div className="flex items-center gap-3 mb-7 sm:mb-8">
            <span className="text-xs font-bold tracking-[0.3em] text-[#D98324]">
              LEGAL
            </span>
            <div className="h-px flex-1 max-w-[80px] bg-[#D98324]/40" />
            <span className="text-xs font-bold tracking-[0.25em] text-[#3D2C1E]/60">
              PRIVACY POLICY
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#3D2C1E] leading-tight"
            itemProp="name"
          >
            {title}
          </h1>

          {/* Metadata */}
          <p className="text-xs sm:text-sm text-[#2C3E40]/60 mb-10 sm:mb-12 tracking-wide">
            制定日：{lastUpdated}
          </p>

          {/* Intro */}
          <p className="text-sm sm:text-base text-[#2C3E40]/80 leading-[1.9] mb-12">
            {intro}
          </p>

          {/* Sections */}
          {privacyPolicySections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="mb-10 sm:mb-12"
            >
              <h2 className="text-lg sm:text-xl font-bold text-[#3D2C1E] mt-12 mb-4 pl-3 border-l-4 border-[#D98324]">
                {section.number}. {section.title}
              </h2>
              {section.body.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-sm sm:text-base text-[#2C3E40]/80 leading-[1.9] mb-3"
                >
                  {paragraph}
                </p>
              ))}
              {section.list && (
                <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-[#2C3E40]/80 leading-[1.9] mt-3">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              {/* Contact info block for section 10 */}
              {section.id === 'contact' && (
                <div className="mt-5 p-5 sm:p-6 bg-white/60 border border-[#3D2C1E]/10">
                  <p className="font-bold text-[#3D2C1E] mb-3 text-sm sm:text-base">
                    {companyInfo.name}
                  </p>
                  <ul className="space-y-2.5 text-sm text-[#2C3E40]/80">
                    <li>代表者：{companyInfo.representative}</li>
                    <li className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#D98324]/80" />
                      <span>
                        {companyInfo.postalCode}
                        <br />
                        {companyInfo.address}
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#D98324]/80" />
                      <a
                        href={`mailto:${companyInfo.email}`}
                        className="hover:text-[#D98324] transition-colors"
                      >
                        {companyInfo.email}
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </section>
          ))}

          {/* Back to top CTA */}
          <div className="mt-16 pt-8 border-t border-[#3D2C1E]/10">
            <a
              href="/"
              className="group inline-flex items-center gap-2.5 text-[#2C3E40]/75 hover:text-[#D98324] transition-colors font-semibold text-sm sm:text-base"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              トップページへ戻る
            </a>
          </div>
        </div>
      </main>

      <Footer medicalProductUrl={medicalProductUrl} />
    </div>
  );
}
