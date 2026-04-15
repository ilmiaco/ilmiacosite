import { TrendingDown, Zap, RefreshCw, ChevronsRight } from 'lucide-react';

const results = [
  {
    icon: TrendingDown,
    stat: '75%',
    statLabel: '削減',
    title: '事務作業を大幅に削減',
    description: 'AIが問診・カルテ・レセプトを一気通貫で自動化。毎日の事務作業を75%削減し、診察に集中できる時間を取り戻します。',
  },
  {
    icon: Zap,
    stat: '3分',
    statLabel: 'でカルテ完成',
    title: 'カルテ作成時間を劇的に短縮',
    description: '診察中の会話をAIがリアルタイムでSOAP形式に記録。診察後のカルテ作成がわずか3分で完了します。',
  },
  {
    icon: RefreshCw,
    stat: '98%',
    statLabel: 'の算定精度',
    title: '請求漏れ・返戻リスクを最小化',
    description: '提出前にAIが算定漏れや病名の不一致をチェック。算定チェック精度98%で、月末の不安を解消します。',
  },
];

export default function ResultsSection() {
  return (
    <section id="results" className="py-20 md:py-12 px-5 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Editorial heading */}
        <div className="mb-14 md:mb-10 reveal">
          <h2 className="text-[1.625rem] sm:text-[2rem] md:text-5xl font-bold text-[#3D2C1E] leading-tight mb-6">
            イルミアカルテ<span className="text-[#D98324]"> 導入効果</span>
          </h2>
          <p className="text-base sm:text-lg text-[#2C3E40]/80 max-w-2xl leading-[2]">
            問診・カルテ・レセプトをAIで一気通貫。導入いただいた医療機関で実現される主な効果です。
          </p>
        </div>

        {/* Mobile-only swipe hint */}
        <div className="sm:hidden flex items-center gap-1.5 mb-4 text-xs font-medium text-[#D98324]" aria-hidden="true">
          <ChevronsRight className="w-4 h-4 swipe-hint-arrow" />
          <span>横にスワイプできます</span>
        </div>

        <div className="reveal reveal-delay-1 -mx-5 sm:mx-0 px-5 sm:px-0 flex sm:grid sm:grid-cols-3 overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none gap-4 sm:gap-0 sm:border sm:border-[#3D2C1E]/15 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {results.map((item, i) => (
            <div
              key={i}
              className={`relative bg-white p-5 sm:p-10 group sm:hover:bg-[#FAF6F0] transition-colors snap-center w-[70vw] sm:w-auto flex-shrink-0 sm:flex-shrink border border-[#3D2C1E]/15 sm:border-0 ${
                i > 0 ? 'sm:border-l sm:border-[#3D2C1E]/15' : ''
              }`}
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#D98324]" />

              {/* Number label */}
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <span className="text-xs font-bold tracking-[0.25em] text-[#D98324]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="h-px w-8 bg-[#D98324]/40" />
                <item.icon className="w-4 h-4 text-[#D98324]" />
              </div>

              {/* Big stat */}
              <div className="mb-5 pb-5 sm:mb-6 sm:pb-6 border-b border-[#3D2C1E]/10">
                <div className="text-[2.5rem] sm:text-6xl font-black text-[#D98324] leading-none mb-2">
                  {item.stat}
                </div>
                <div className="text-sm text-[#6B7273] tracking-wide">{item.statLabel}</div>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-[#3D2C1E] mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-[#6B7273] leading-[1.7] sm:leading-[1.9]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
