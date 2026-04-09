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
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#3D2C1E] mb-4">
            シンプルな<span className="text-[#D98324]">料金体系</span>
          </h2>
          <p className="text-sm sm:text-base text-[#2C3E40]/80">使った分だけ、見える化。月額基本料＋従量制の明瞭な料金体系。</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 sm:gap-6 max-w-4xl mx-auto mb-10">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative border ${
                plan.recommended
                  ? 'border-2 border-[#D98324] shadow-md'
                  : 'border-[#3D2C1E]/8 shadow-sm'
              } rounded-lg p-5 sm:p-7 bg-white hover:shadow-md transition-shadow`}
            >
              {plan.recommended && (
                <div className="absolute -top-3.5 left-5 bg-[#D98324] text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5">
                  <Star className="w-3 h-3" />
                  おすすめ
                </div>
              )}
              <div className={plan.recommended ? 'pt-3' : ''}>
                <h3 className="text-lg font-bold text-[#3D2C1E] mb-1">{plan.name}</h3>
                <p className="text-xs text-[#8A9698] mb-4">{plan.target}</p>
                <div className="mb-5">
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-xs text-[#8A9698]">¥</span>
                    <span className={`text-3xl sm:text-4xl font-black ${plan.recommended ? 'text-[#D98324]' : 'text-[#3D2C1E]'}`}>
                      {plan.price}
                    </span>
                    <span className="text-[#8A9698] text-xs">/月</span>
                  </div>
                  <p className="text-xs text-[#8A9698] mt-1.5">音声認識: {plan.minutes}</p>
                  <p className="text-xs text-[#8A9698]">超過: {plan.overage}</p>
                </div>
                <ul className="space-y-2.5">
                  {plan.features.map((text, j) => (
                    <li key={j} className="flex items-center gap-2.5">
                      <div className={`w-4 h-4 ${plan.recommended ? 'bg-[#D98324]' : 'bg-[#3D2C1E]/8'} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <Check className={`w-2.5 h-2.5 ${plan.recommended ? 'text-white' : 'text-[#8A9698]'}`} />
                      </div>
                      <span className="text-xs text-[#2C3E40]/80">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xs text-[#8A9698] mb-6 max-w-xl mx-auto leading-relaxed">
            すべてのプランで電子カルテAI・レセプトAIの全機能をご利用いただけます。
            プラン選択の基準は音声認識の利用時間のみ。音声は一切保存・記録されません。
          </p>
          <a
            href={medicalProductUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 bg-[#D98324] text-white px-7 py-3.5 sm:px-9 sm:py-4 rounded-lg font-bold text-sm sm:text-base hover:bg-[#c27520] transition-colors"
          >
            無料デモを申し込む
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
