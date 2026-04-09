import { Brain, Activity, Users, Check, ExternalLink } from 'lucide-react';

const otherProducts = [
  {
    id: 'ilmiacall',
    name: 'イルミアコール',
    subtitle: 'ILMIA Call',
    description: '医療従事者向けAI採用プラットフォーム',
    target: '医療機関の採用担当者',
    features: ['AI自動マッチング', 'チャット面談', '定額月額制', '縛りなし・いつでも退会可能'],
    headerBg: 'bg-[#D98324]',
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
    headerBg: 'bg-[#3D2C1E]/70',
    icon: Activity,
  },
  {
    id: 'pibu-ai',
    name: 'PIBU AI',
    subtitle: 'ピブ エーアイ',
    description: '美容クリニック向け統合AIプラットフォーム',
    target: '美容外科・美容皮膚科',
    features: ['予約から診療まで一気通貫', 'レセプト機能搭載', 'AIコンサルタント機能'],
    headerBg: 'bg-[#F0B254]',
    icon: Brain,
  },
];

export default function OtherProductsSection() {
  return (
    <section id="other-products" className="py-16 md:py-24 px-5 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-[#3D2C1E] mb-3">
            その他のサービス
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-4" role="list" aria-label="その他のサービス一覧">
          {otherProducts.map((product) => (
            <article
              key={product.id}
              id={product.id}
              role="listitem"
            >
              <div className="bg-white rounded-lg overflow-hidden border border-[#3D2C1E]/8 h-full flex flex-col shadow-sm hover:shadow-md transition-shadow">
                <div className={`${product.headerBg} p-4 sm:p-5`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-bold text-white">{product.name}</h3>
                      <p className="text-white/70 text-[10px] mt-0.5">{product.subtitle}</p>
                    </div>
                    <product.icon className="w-6 h-6 text-white/40" />
                  </div>
                </div>
                <div className="p-4 sm:p-5 flex-1 flex flex-col">
                  <p className="text-xs font-semibold text-[#3D2C1E] mb-1.5">{product.description}</p>
                  <div className="flex items-center gap-1.5 text-[#8A9698] mb-4 text-[10px]">
                    <Users className="w-3 h-3" />
                    <span>{product.target}</span>
                  </div>
                  <div className="space-y-1.5 flex-1">
                    {product.features.map((feature, fi) => (
                      <div key={fi} className="flex items-start gap-1.5">
                        <Check className="w-3 h-3 text-[#8A9698]/60 flex-shrink-0 mt-0.5" />
                        <span className="text-[10px] text-[#8A9698]">{feature}</span>
                      </div>
                    ))}
                  </div>
                  {product.external && (
                    <a
                      href={product.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#D98324] font-semibold mt-4 hover:text-[#c27520] transition-colors"
                    >
                      詳しくはこちら
                      <ExternalLink className="w-3 h-3" />
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
