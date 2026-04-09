import { ArrowRight, ChevronDown } from 'lucide-react';
import heroBgImage from '@/assets/hero-bg.jpg';

interface HeroSectionProps {
  medicalProductUrl: string;
}

export default function HeroSection({ medicalProductUrl }: HeroSectionProps) {
  return (
    <section
      className="relative min-h-[85svh] md:min-h-[100svh] flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <img src={heroBgImage} alt="" className="w-full h-full object-cover fixed-bg" loading="eager" />
        <div className="absolute inset-0 bg-white/90" />
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 pt-28 pb-14 sm:pt-32 md:pt-40 md:pb-20">
          <div className="max-w-3xl">

            <div className="mb-6 sm:mb-8 inline-block bg-[#3D2C1E]/4 border border-[#3D2C1E]/8 rounded-lg px-4 py-2.5 sm:px-5 sm:py-3">
              <p className="text-[11px] sm:text-sm text-[#2C3E40]/80 leading-relaxed tracking-wide">
                <span className="font-semibold text-[#3D2C1E]">電子カルテAI × レセプトAI</span>
                <span className="hidden sm:inline text-[#8A9698] mx-2">|</span>
                <br className="sm:hidden" />
                診察から請求まで、<span className="font-bold text-[#D98324]">AIが漏れなく最適化</span>
              </p>
            </div>

            <h1
              id="hero-heading"
              className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[3.5rem] font-black mb-6 sm:mb-8 leading-[1.12] tracking-tight"
              itemProp="headline"
            >
              <span className="text-[#3D2C1E]">AIが診察を支え、</span>
              <br />
              <span className="text-[#3D2C1E]">請求漏れを防ぐ。</span>
              <br />
              <span className="text-[#D98324]">医療AIの新基準。</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-[#8A9698] mb-8 sm:mb-10 leading-[1.8] max-w-xl">
              音声認識AIがリアルタイムで診察を支援し、電子カルテを自動生成。<br className="hidden sm:block" />
              レセプトAIが請求前の見落としや入力ミスをチェックし、<span className="text-[#3D2C1E] font-semibold">売上の取りこぼしを防ぎます</span>。
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">
              <a
                href={medicalProductUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 bg-[#D98324] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-bold text-sm sm:text-base hover:bg-[#c27520] transition-colors"
              >
                無料デモを申し込む
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#about"
                className="group inline-flex items-center justify-center gap-2.5 bg-white border border-[#3D2C1E]/10 text-[#2C3E40] px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:border-[#D98324]/25 transition-colors"
              >
                私たちについて
                <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>

            <div className="flex flex-wrap gap-x-6 sm:gap-x-8 gap-y-2 text-xs sm:text-[13px] text-[#8A9698]">
              {['音声入力でカルテ作成を短縮', '請求前の見落としを自動チェック', '最新ルールの更新に自動対応'].map((text) => (
                <span key={text} className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#D98324]/40" />
                  {text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-5 h-9 border-2 border-[#3D2C1E]/12 rounded-full flex justify-center">
          <div className="w-1 h-1.5 bg-[#D98324]/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
