import { Brain, Activity, Users, Check, ExternalLink } from 'lucide-react';

const otherProducts = [
  {
    id: 'ilmiacall',
    name: 'イルミアコール',
    subtitle: 'ILMIA Call',
    description: '医療従事者向けAI採用プラットフォーム',
    target: '医療機関の採用担当者',
    features: ['AI自動マッチング', 'チャット面談', '定額月額制', '縛りなし・いつでも退会可能'],
    accentColor: '#D98324',
    icon: Users,
    external: 'https://recruit.ilmiaco.com/',
  },
  {
    id: 'dx-hub-ilmia',
    name: 'DX-Hub Ilmia',
    subtitle: 'デンタルワン',
    description: '医療機関向け予約管理システム',
    target: '一般クリニック・医療法人',
    features: ['医療現場特化の予約管理', '院内オペレーション最適化', 'AI連携を前提とした設計'],
    accentColor: '#3D2C1E',
    icon: Activity,
  },
  {
    id: 'pibu-ai',
    name: 'PIBU AI',
    subtitle: 'ピブ エーアイ',
    description: '美容クリニック向け統合AIプラットフォーム',
    target: '美容外科・美容皮膚科',
    features: ['予約から診療まで一気通貫', 'レセプト機能搭載', 'AIコンサルタント機能'],
    accentColor: '#F0B254',
    icon: Brain,
  },
];

export default function OtherProductsSection() {
  return (
    <section id="other-products" className="py-20 md:py-28 px-5 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Editorial heading */}
        <div className="mb-12 md:mb-16 reveal">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-bold tracking-[0.3em] text-[#D98324]">OTHER SERVICES</span>
            <div className="h-px flex-1 max-w-[80px] bg-[#D98324]/30" />
          </div>
          <h2 className="text-[1.875rem] sm:text-4xl md:text-4xl font-bold text-[#3D2C1E] leading-tight">
            その他のサービス
          </h2>
        </div>

        <div className="reveal reveal-delay-1" role="list" aria-label="その他のサービス一覧">
          {otherProducts.map((product, i) => (
            <article
              key={product.id}
              id={product.id}
              role="listitem"
              className={`relative bg-white border border-[#3D2C1E]/15 ${i > 0 ? 'border-t-0' : ''} group hover:bg-[#FAF6F0]/50 transition-colors`}
            >
              {/* Top accent bar (only on first row) */}
              {i === 0 && (
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ backgroundColor: product.accentColor }} />
              )}

              <div className="flex flex-col md:flex-row">
                {/* Left: number + product info */}
                <div className="md:w-2/5 p-6 sm:p-8 md:border-r border-b md:border-b-0 border-[#3D2C1E]/10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold tracking-[0.25em]" style={{ color: product.accentColor }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="h-px w-8" style={{ backgroundColor: `${product.accentColor}66` }} />
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${product.accentColor}15` }}>
                      <product.icon className="w-6 h-6" style={{ color: product.accentColor }} />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#3D2C1E] leading-tight">{product.name}</h3>
                      <p className="text-xs text-[#6B7273] mt-1 tracking-wide">{product.subtitle}</p>
                      <p className="text-sm text-[#3D2C1E]/80 mt-2 leading-relaxed">{product.description}</p>
                    </div>
                  </div>
                </div>

                {/* Right: features + target + action */}
                <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between gap-5">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#6B7273] mb-4 tracking-wide">
                      <Users className="w-3.5 h-3.5" />
                      対象 ／ {product.target}
                    </div>
                    <ul className="space-y-2">
                      {product.features.map((feature, fi) => (
                        <li key={fi} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: product.accentColor }} />
                          <span className="text-sm text-[#2C3E40]/85 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {product.external && (
                    <a
                      href={product.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-bold tracking-wide hover:opacity-70 transition-opacity self-start"
                      style={{ color: product.accentColor }}
                    >
                      詳しくはこちら
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
