import { Stethoscope, FileText, Zap, ArrowRight } from 'lucide-react';

export default function PlatformOverview() {
  return (
    <section id="platform" className="py-20 md:py-28 px-5 sm:px-6 bg-[#FAF6F0]">
      <div className="max-w-5xl mx-auto">
        {/* Editorial heading */}
        <div className="mb-14 md:mb-20 reveal">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-bold tracking-[0.3em] text-[#D98324]">PLATFORM</span>
            <div className="h-px flex-1 max-w-[80px] bg-[#D98324]/30" />
          </div>
          <h2 className="text-[1.875rem] sm:text-4xl md:text-5xl font-bold mb-6 text-[#3D2C1E] leading-tight">
            ILMIAが、<br />
            <span className="text-[#D98324]">すべて解決します。</span>
          </h2>
          <p className="text-base sm:text-lg text-[#2C3E40]/80 max-w-2xl leading-[2]">
            診察から請求まで、AIが一気通貫で最適化。
            <br className="hidden sm:block" />
            電子カルテAIとレセプトAIの統合プラットフォーム。
          </p>
        </div>

        {/* Two product modules linked by arrow */}
        <div className="relative reveal reveal-delay-1">
          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-4 items-stretch">
            {/* EMR AI module */}
            <div className="bg-white border border-[#3D2C1E]/8 p-7 sm:p-9 relative group hover:border-[#D98324]/40 transition-colors">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#D98324]" />

              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-[#D98324] flex items-center justify-center flex-shrink-0">
                  <Stethoscope className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold tracking-[0.2em] text-[#D98324] mb-1">01 — VOICE AI</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#3D2C1E] leading-tight">電子カルテAI</h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#6B7273] leading-[1.9] mb-6">
                AIが診察に寄り添い、<br />
                カルテを自動で仕上げる
              </p>

              <div className="flex items-center gap-2 text-sm font-bold text-[#D98324] group-hover:gap-3 transition-all">
                <span>診察を支援</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Connecting arrow (desktop only) */}
            <div className="hidden md:flex items-center justify-center px-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-px bg-[#D98324]/40" />
                <div className="w-10 h-10 rounded-full bg-[#D98324] flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div className="w-8 h-px bg-[#D98324]/40" />
              </div>
            </div>

            {/* Mobile connector */}
            <div className="md:hidden flex justify-center">
              <div className="flex flex-col items-center gap-1">
                <div className="h-4 w-px bg-[#D98324]/40" />
                <div className="w-9 h-9 rounded-full bg-[#D98324] flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div className="h-4 w-px bg-[#D98324]/40" />
              </div>
            </div>

            {/* Receipt AI module */}
            <div className="bg-white border border-[#3D2C1E]/8 p-7 sm:p-9 relative group hover:border-[#3D2C1E]/40 transition-colors">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#3D2C1E]" />

              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-[#3D2C1E] flex items-center justify-center flex-shrink-0">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold tracking-[0.2em] text-[#3D2C1E] mb-1">02 — CHECK AI</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#3D2C1E] leading-tight">レセプトAI</h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#6B7273] leading-[1.9] mb-6">
                請求前の見落としを減らし、<br />
                売上を守る
              </p>

              <div className="flex items-center gap-2 text-sm font-bold text-[#3D2C1E] group-hover:gap-3 transition-all">
                <span>収益を保護</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Bottom tagline */}
          <div className="mt-10 text-center">
            <p className="inline-flex items-center gap-2 text-sm sm:text-base text-[#3D2C1E] font-bold tracking-wide">
              <span className="h-px w-8 bg-[#D98324]" />
              診察から請求まで、AIがシームレスに連携
              <span className="h-px w-8 bg-[#D98324]" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
