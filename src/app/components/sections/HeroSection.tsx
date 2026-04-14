import heroBgImage from '@/assets/hero-bg.jpg';

interface HeroSectionProps {
  medicalProductUrl: string;
}

export default function HeroSection({ medicalProductUrl }: HeroSectionProps) {
  return (
    <section
      className="relative min-h-[100svh] md:h-screen flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <img src={heroBgImage} alt="" className="w-full h-full object-cover fixed-bg" loading="eager" />
        {/* Mobile: vertical gradient lets the image breathe through the upper portion */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/90 to-white md:hidden" />
        {/* Desktop: horizontal gradient */}
        <div className="absolute inset-0 hidden md:block md:bg-gradient-to-r md:from-white md:via-white/90 md:to-transparent" />
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 pt-[88px] pb-6 sm:pt-28 sm:pb-10 md:pt-32 md:pb-14">
          <div className="max-w-3xl">
            {/* Editorial label */}
            <div className="flex items-center gap-3 mb-2.5 sm:mb-6">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] text-[#D98324]">MEDICAL AI</span>
              <div className="h-px flex-1 max-w-[60px] bg-[#D98324]/40" />
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] text-[#3D2C1E]/60">SINCE 2025</span>
            </div>

            {/* Tagline badge */}
            <div className="mb-3 sm:mb-7 inline-block bg-[#3D2C1E]/4 border-l-[3px] sm:border-l-2 border-[#D98324] pl-4 pr-3 py-1.5 sm:py-2.5">
              <p className="text-xs sm:text-base text-[#2C3E40]/80 leading-snug sm:leading-relaxed tracking-wide">
                <span className="font-bold text-[#3D2C1E]">電子カルテAI × レセプトAI</span>
                <span className="hidden sm:inline text-[#6B7273] mx-2">／</span>
                <span className="sm:hidden"> — </span>
                診察から請求まで、<span className="font-bold text-[#D98324]">AIが漏れなく最適化</span>
              </p>
            </div>

            {/* Hero heading */}
            <h1
              id="hero-heading"
              className="text-[1.875rem] sm:text-4xl md:text-5xl lg:text-[4rem] font-bold mb-3 sm:mb-8 leading-[1.2] tracking-tight"
              itemProp="headline"
            >
              <span className="text-[#3D2C1E]">AIが診察を支え、</span>
              <br />
              <span className="text-[#3D2C1E]">請求漏れを防ぐ。</span>
              <br />
              <span className="text-[#D98324]">医療AIの新基準。</span>
            </h1>

            <p className="text-xs sm:text-lg md:text-xl text-[#6B7273] mb-4 sm:mb-10 leading-[1.7] sm:leading-[2] max-w-2xl">
              音声認識AIがリアルタイムで診察を支援し、電子カルテを自動生成。<br className="hidden sm:block" />
              レセプトAIが請求前の見落としや入力ミスをチェックし、<span className="text-[#3D2C1E] font-bold">売上の取りこぼしを防ぎます</span>。
            </p>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-4 sm:mb-10">
              <a
                href={medicalProductUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 bg-[#D98324] text-white px-6 py-3 sm:px-9 sm:py-5 font-bold text-sm sm:text-lg hover:bg-[#c27520] transition-colors"
              >
                無料デモを申し込む
              </a>
              <a
                href="#about"
                className="group inline-flex items-center justify-center gap-2.5 bg-transparent sm:bg-white border-0 sm:border sm:border-[#3D2C1E]/15 text-[#2C3E40]/75 sm:text-[#2C3E40] px-6 py-2.5 sm:px-9 sm:py-5 font-semibold text-xs sm:text-lg hover:text-[#D98324] sm:hover:text-[#2C3E40] sm:hover:border-[#D98324]/40 transition-colors"
              >
                私たちについて
              </a>
            </div>

            <ul className="flex flex-row flex-wrap gap-x-5 gap-y-2 sm:gap-x-8 text-[11px] sm:text-sm text-[#6B7273]">
              {['音声入力でカルテ作成を短縮', '請求前の見落としを自動チェック', '最新ルールの更新に自動対応'].map((text) => (
                <li key={text} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D98324] flex-shrink-0" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
