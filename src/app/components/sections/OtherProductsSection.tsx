import { ClipboardList, FileCheck, Check } from 'lucide-react';

const otherProducts = [
  {
    id: 'ilmia-carte',
    name: 'イルミアカルテ',
    subtitle: 'ILMIA Carte',
    description: '統合型AI電子カルテ。問診→カルテ→レセプトをAIで一気通貫。診察後の残業をなくす。',
    target: 'クリニック・中小病院',
    price: '¥79,000〜/月',
    features: [
      'AI問診（患者スマホ回答を自動整理・カルテ転送）',
      '電子カルテAI（会話をリアルタイムSOAP形式に自動記録）',
      'レセプトAI（算定漏れ・病名不一致を提出前にチェック）',
      '初期費用0円・14日間無料トライアル',
    ],
    icon: ClipboardList,
  },
  {
    id: 'ilmia-receipt',
    name: 'イルミアレセプト',
    subtitle: 'ILMIA Receipt',
    description: 'AIレセプト点検。算定漏れ・返戻リスクを最小化。月末集中作業を日次に平準化。',
    target: 'クリニック・中小病院',
    price: '¥79,000〜/月',
    features: [
      'CSV/JSONデータを自動整理・算定候補を抽出',
      '算定漏れ防止・病名チェックで返戻リスクを低減',
      '提出前レビューでケース単位の管理が可能',
      'イルミアカルテとの連携でさらに効果UP',
    ],
    icon: FileCheck,
  },
];

export default function OtherProductsSection() {
  return (
    <section id="other-products" className="py-20 md:py-28 px-5 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Editorial heading */}
        <div className="mb-12 md:mb-16 reveal">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-bold tracking-[0.3em] text-[#D98324]">OTHER PRODUCTS</span>
            <div className="h-px flex-1 max-w-[80px] bg-[#D98324]/30" />
          </div>
          <h2 className="text-[1.875rem] sm:text-4xl md:text-5xl font-bold text-[#3D2C1E] leading-tight">
            さらに深く使いたい方へ
          </h2>
          <p className="text-base sm:text-lg text-[#2C3E40]/80 max-w-2xl leading-[2] mt-5">
            イルミアガイドと組み合わせることで、診察から請求まで一気通貫で最適化できます。
          </p>
        </div>

        <div className="reveal reveal-delay-1" role="list" aria-label="その他の製品一覧">
          {otherProducts.map((product, i) => (
            <article
              key={product.id}
              id={product.id}
              role="listitem"
              className={`relative bg-white border border-[#3D2C1E]/15 ${i > 0 ? 'border-t-0' : ''} group hover:bg-[#FAF6F0]/50 transition-colors`}
            >
              {/* Top accent bar (only on first row) */}
              {i === 0 && (
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#D98324]" />
              )}

              <div className="flex flex-col md:flex-row">
                {/* Left: number + product info */}
                <div className="md:w-2/5 p-6 sm:p-8 md:border-r border-b md:border-b-0 border-[#3D2C1E]/10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold tracking-[0.25em] text-[#D98324]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="h-px w-8 bg-[#D98324]/40" />
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#D98324]/10 flex items-center justify-center flex-shrink-0">
                      <product.icon className="w-6 h-6 text-[#D98324]" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#3D2C1E] leading-tight">{product.name}</h3>
                      <p className="text-xs text-[#6B7273] mt-1 tracking-wide">{product.subtitle}</p>
                      <p className="text-sm text-[#3D2C1E]/80 mt-2 leading-relaxed">{product.description}</p>
                      <p className="text-sm font-bold text-[#D98324] mt-3">{product.price}</p>
                    </div>
                  </div>
                </div>

                {/* Right: features + target */}
                <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between gap-5">
                  <div>
                    <div className="text-xs text-[#6B7273] mb-4 tracking-wide">
                      対象 ／ {product.target}
                    </div>
                    <ul className="space-y-2">
                      {product.features.map((feature, fi) => (
                        <li key={fi} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#D98324]" />
                          <span className="text-sm text-[#2C3E40]/85 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
