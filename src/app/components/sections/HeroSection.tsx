import { ArrowRight } from 'lucide-react';
import heroBgImage from '@/assets/hero-bg.png';

export default function HeroSection() {
  return (
    <section
      className="relative lg:min-h-screen lg:flex lg:items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Desktop-only background: full-bleed image with horizontal fade */}
      <div className="absolute inset-0 hidden lg:block" aria-hidden="true">
        <img
          src={heroBgImage}
          alt=""
          className="w-full h-full object-cover object-right-bottom lg:fixed-bg"
          loading="eager"
        />
        <div className="absolute inset-0 lg:bg-gradient-to-r lg:from-white lg:from-[-10%] lg:via-white/90 lg:via-30% lg:to-transparent lg:to-[70%]" />
      </div>

      <div className="relative z-10 w-full lg:pt-0">
        {/* Mobile/tablet hero image: edge-to-edge at the top, sits under the transparent navbar */}
        <div className="lg:hidden relative w-full aspect-[5/6] overflow-hidden">
          <img
            src={heroBgImage}
            alt=""
            className="w-full h-full object-cover object-[80%_bottom]"
            loading="eager"
          />
          {/* Bottom fade into the text section */}
          <div className="absolute inset-x-0 bottom-0 h-24 md:h-[36rem] bg-gradient-to-t from-white via-white/80 to-transparent" />
        </div>

        <div className="relative z-20 max-w-6xl mx-auto px-5 sm:px-6 -mt-64 md:-mt-[32rem] pt-0 pb-10 lg:mt-0 lg:py-14">
          <div className="max-w-3xl [text-shadow:_-1px_-1px_0_#fff,_1px_-1px_0_#fff,_-1px_1px_0_#fff,_1px_1px_0_#fff,_0_0_10px_rgba(255,255,255,0.9)] lg:[text-shadow:none]">
            {/* Editorial eyebrow */}
            <div className="mb-6 sm:mb-10 flex items-center gap-3 sm:gap-4">
              <div className="h-px w-10 sm:w-14 bg-[#D98324]" />
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#D98324] uppercase">
                患者説明AI · スタッフ支援
              </span>
            </div>

            {/* Hero heading */}
            <h1
              id="hero-heading"
              className="text-[2.25rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-light mb-5 sm:mb-10 leading-[1.25] tracking-tight"
              itemProp="headline"
            >
              <span className="text-[#3D2C1E]">スタッフの説明を、</span>
              <br />
              <span className="text-[#3D2C1E]">AIが支える。</span>
              <br />
              <span className="text-[#D98324] font-bold">説明品質の新基準。</span>
            </h1>

            <p className="text-sm sm:text-lg md:text-xl text-[#6B7273] mb-7 sm:mb-12 leading-[1.8] sm:leading-[2] max-w-2xl">
              院内マニュアルを読み込ませるだけで、AIがスタッフの患者説明をサポート。<br />
              スキルのバラつきをなくし、クリニック全体の説明品質を一定水準に保ちます。
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 mb-8 sm:mb-14">
              <a
                href="https://guide.ilmiaco.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 bg-[#D98324] text-white px-6 py-3.5 sm:px-9 sm:py-5 font-bold text-base sm:text-lg hover:bg-[#c27520] transition-colors [text-shadow:none]"
              >
                無料デモを申し込む
              </a>
              <a
                href="#about"
                className="group inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#3D2C1E] hover:text-[#D98324] transition-colors"
              >
                私たちについて
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="pt-6 sm:pt-8 border-t border-[#3D2C1E]/15">
              <ul className="flex flex-row flex-wrap gap-x-5 gap-y-3 sm:gap-x-10 text-[13px] sm:text-sm text-[#6B7273]">
                {['最短3分セットアップで導入可能', '音声・チャット両対応でワークフローを止めない', '専門用語を患者向けの言葉に自動変換'].map((text, i) => (
                  <li key={text} className="flex items-center gap-2.5">
                    <span className="text-[10px] font-bold text-[#D98324] tracking-[0.15em]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
