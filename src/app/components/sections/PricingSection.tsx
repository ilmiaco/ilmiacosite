import { Check, Star, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Clinic',
    price: '79,000',
    target: 'クリニック・診療所',
    minutes: '6,000分（100時間）',
    overage: '¥10/分',
    features: ['電子カルテAI全機能', 'レセプトAI全機能', '医療向け音声認識', '最新ルールの自動更新', 'メール＆チャットサポート'],
    recommended: false,
  },
  {
    name: 'Hospital',
    price: '299,000',
    target: '中規模病院',
    minutes: '24,000分（400時間）',
    overage: '¥9/分',
    features: ['Clinicプランの全機能', '既存システム連携', '優先サポート', '大規模運用向け設定'],
    recommended: true,
  },
  {
    name: 'Enterprise',
    price: '699,000',
    target: '大規模病院・特殊施設',
    minutes: '60,000分（1,000時間）',
    overage: '¥8/分',
    features: ['ホスピタルプランの全機能', '専任サポート', 'カスタム連携対応', 'オンサイト導入支援'],
    recommended: false,
  },
];

interface PricingSectionProps {
  medicalProductUrl: string;
}

export default function PricingSection({ medicalProductUrl }: PricingSectionProps) {
  return (
    <section id="pricing" className="py-20 md:py-28 px-5 sm:px-6 bg-[#FAF6F0]">
      <div className="max-w-5xl mx-auto">
        {/* Editorial heading */}
        <div className="mb-14 md:mb-20 reveal">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-bold tracking-[0.3em] text-[#D98324]">PRICING</span>
            <div className="h-px flex-1 max-w-[80px] bg-[#D98324]/30" />
          </div>
          <h2 className="text-[1.875rem] sm:text-4xl md:text-5xl font-bold mb-6 text-[#3D2C1E] leading-tight">
            シンプルな<span className="text-[#D98324]">料金体系</span>
          </h2>
          <p className="text-base sm:text-lg text-[#2C3E40]/80 leading-[2] max-w-2xl">
            使った分だけ、見える化。月額基本料＋従量制の明瞭な料金体系。
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 sm:gap-0 max-w-5xl mx-auto mb-12 reveal reveal-delay-1 sm:items-stretch">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative ${
                plan.recommended
                  ? 'bg-[#3D2C1E] text-white order-first sm:order-none sm:scale-105 z-10 shadow-2xl shadow-[#3D2C1E]/20 sm:shadow-2xl border border-[#3D2C1E]'
                  : 'bg-white border border-[#3D2C1E]/15'
              } ${i > 0 ? 'sm:border-t' : ''}`}
            >
              {/* Top accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-[3px] ${plan.recommended ? 'bg-[#F0B254]' : 'bg-[#D98324]'}`} />

              {/* Recommended tab label */}
              {plan.recommended && (
                <div className="absolute -top-[3px] left-1/2 -translate-x-1/2 bg-[#D98324] text-white text-[11px] font-bold tracking-[0.2em] px-4 py-1.5 flex items-center gap-1.5">
                  <Star className="w-3 h-3" />
                  おすすめ
                </div>
              )}

              <div className="p-7 sm:p-9 pt-10 sm:pt-12">
                {/* Plan number + name */}
                <div className="flex items-center gap-3 mb-2">
                  <span className={`text-xs font-bold tracking-[0.25em] ${plan.recommended ? 'text-[#F0B254]' : 'text-[#D98324]'}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className={`h-px w-8 ${plan.recommended ? 'bg-[#F0B254]/40' : 'bg-[#D98324]/40'}`} />
                </div>
                <h3 className={`text-2xl font-bold mb-1 ${plan.recommended ? 'text-white' : 'text-[#3D2C1E]'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-7 ${plan.recommended ? 'text-white/65' : 'text-[#6B7273]'}`}>
                  {plan.target}
                </p>

                {/* Price */}
                <div className={`pb-6 mb-6 border-b ${plan.recommended ? 'border-white/15' : 'border-[#3D2C1E]/10'}`}>
                  <div className="flex items-baseline gap-0.5">
                    <span className={`text-sm ${plan.recommended ? 'text-white/55' : 'text-[#6B7273]'}`}>¥</span>
                    <span className={`text-4xl sm:text-5xl font-black ${plan.recommended ? 'text-[#F0B254]' : 'text-[#3D2C1E]'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-sm ${plan.recommended ? 'text-white/55' : 'text-[#6B7273]'}`}>/月</span>
                  </div>
                </div>

                {/* Usage info — formal table style */}
                <dl className={`text-sm space-y-3 mb-7 pb-6 border-b ${plan.recommended ? 'border-white/15' : 'border-[#3D2C1E]/10'}`}>
                  <div className="flex justify-between gap-2">
                    <dt className={plan.recommended ? 'text-white/60' : 'text-[#6B7273]'}>音声認識</dt>
                    <dd className={`font-bold text-right ${plan.recommended ? 'text-white' : 'text-[#3D2C1E]'}`}>{plan.minutes}</dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt className={plan.recommended ? 'text-white/60' : 'text-[#6B7273]'}>超過料金</dt>
                    <dd className={`font-bold text-right ${plan.recommended ? 'text-white' : 'text-[#3D2C1E]'}`}>{plan.overage}</dd>
                  </div>
                </dl>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((text, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.recommended ? 'text-[#F0B254]' : 'text-[#D98324]'}`} />
                      <span className={`text-sm leading-relaxed ${plan.recommended ? 'text-white/90' : 'text-[#2C3E40]/85'}`}>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center reveal reveal-delay-2">
          <p className="text-sm text-[#6B7273] mb-7 max-w-xl mx-auto leading-relaxed">
            すべてのプランで電子カルテAI・レセプトAIの全機能をご利用いただけます。
            プラン選択の基準は音声認識の利用時間のみ。音声は一切保存・記録されません。
          </p>
          <a
            href={medicalProductUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 bg-[#D98324] text-white px-9 py-4 sm:px-11 sm:py-5 font-bold text-base sm:text-lg hover:bg-[#c27520] transition-colors"
          >
            無料デモを申し込む
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
