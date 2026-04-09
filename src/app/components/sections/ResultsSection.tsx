import { TrendingDown, Zap, RefreshCw } from 'lucide-react';

const results = [
  {
    icon: TrendingDown,
    title: '請求の取りこぼしを減らす',
    description: 'AIが見落としやすい項目を自動で見つけ、請求漏れによる売上ロスを防ぎます。',
  },
  {
    icon: Zap,
    title: 'カルテ記載時間を大幅短縮',
    description: '音声認識と電子カルテ自動生成で、診察後の記載作業を最小限に。医師の時間を診察に集中させます。',
  },
  {
    icon: RefreshCw,
    title: '差し戻しややり直しを減らす',
    description: '提出前に違和感のある内容をチェックし、あとから修正に追われる時間を減らします。',
  },
];

export default function ResultsSection() {
  return (
    <section id="results" className="py-20 md:py-28 px-5 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#D98324] mb-4">
            導入効果
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 sm:gap-6">
          {results.map((item, i) => (
            <div key={i} className="bg-white rounded-lg p-7 sm:p-8 border border-[#3D2C1E]/8 h-full shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#D98324]/10 rounded-lg flex items-center justify-center mb-5">
                <item.icon className="w-7 h-7 text-[#D98324]" />
              </div>
              <h3 className="text-base font-bold text-[#3D2C1E] mb-3">{item.title}</h3>
              <p className="text-sm text-[#2C3E40]/70 leading-[1.8]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
