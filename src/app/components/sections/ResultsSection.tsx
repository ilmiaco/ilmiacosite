import { TrendingDown, Zap, RefreshCw } from 'lucide-react';

const results = [
  {
    icon: TrendingDown,
    stat: '¥0',
    statLabel: '取りこぼし',
    title: '請求の取りこぼしを減らす',
    description: 'AIが見落としやすい項目を自動で見つけ、請求漏れによる売上ロスを防ぎます。',
  },
  {
    icon: Zap,
    stat: '−2h',
    statLabel: '/ 日あたり',
    title: 'カルテ記載時間を大幅短縮',
    description: '音声認識と電子カルテ自動生成で、診察後の記載作業を最小限に。医師の時間を診察に集中させます。',
  },
  {
    icon: RefreshCw,
    stat: '90%',
    statLabel: '削減',
    title: '差し戻しややり直しを減らす',
    description: '提出前に違和感のある内容をチェックし、あとから修正に追われる時間を減らします。',
  },
];

export default function ResultsSection() {
  return (
    <section id="results" className="py-20 md:py-28 px-5 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Editorial heading */}
        <div className="mb-14 md:mb-20 reveal">
          <h2 className="text-[1.875rem] sm:text-4xl md:text-5xl font-bold text-[#3D2C1E] leading-tight">
            導入効果
          </h2>
        </div>

        <div className="reveal reveal-delay-1 -mx-5 sm:mx-0 px-5 sm:px-0 flex sm:grid sm:grid-cols-3 overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none gap-4 sm:gap-0 sm:border sm:border-[#3D2C1E]/15 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {results.map((item, i) => (
            <div
              key={i}
              className={`relative bg-white p-7 sm:p-10 group sm:hover:bg-[#FAF6F0] transition-colors snap-center min-w-[82%] sm:min-w-0 flex-shrink-0 sm:flex-shrink border border-[#3D2C1E]/15 sm:border-0 ${
                i > 0 ? 'sm:border-l sm:border-[#3D2C1E]/15' : ''
              }`}
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#D98324]" />

              {/* Number label */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-bold tracking-[0.25em] text-[#D98324]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="h-px w-8 bg-[#D98324]/40" />
                <item.icon className="w-4 h-4 text-[#D98324]" />
              </div>

              {/* Big stat */}
              <div className="mb-6 pb-6 border-b border-[#3D2C1E]/10">
                <div className="text-5xl sm:text-6xl font-black text-[#D98324] leading-none mb-2">
                  {item.stat}
                </div>
                <div className="text-sm text-[#6B7273] tracking-wide">{item.statLabel}</div>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-[#3D2C1E] mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-[#6B7273] leading-[1.9]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
