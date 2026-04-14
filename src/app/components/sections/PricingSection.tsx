import { Check, Star, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'ライト',
    price: '9,800',
    target: 'まず試したい医院様向け',
    note: null,
    features: ['手順登録3件まで', '音声モード対応', 'チャットモード対応', 'メールサポート'],
    recommended: false,
  },
  {
    name: '標準',
    price: '29,800',
    target: '日常運用向け',
    note: null,
    features: ['複数手順・無制限登録', '音声・チャット両対応', '優先サポート', '院内導入支援'],
    recommended: true,
  },
  {
    name: '大規模',
    price: null,
    target: '複数部門・拠点での利用',
    note: '要お問い合わせ',
    features: ['複数部門・拠点対応', 'カスタム運用設計', '専任サポート', '伴走支援'],
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
          <h2 className="text-[1.875rem] sm:text-4xl md:text-5xl font-bold mb-6 text-[#3D2C1E] leading-tight">
            イルミアガイド<span className="text-[#D98324]">料金プラン</span>
          </h2>
          <p className="text-base sm:text-lg text-[#2C3E40]/80 leading-[2] max-w-2xl">
            大掛かりなシステム導入は不要。用途に合わせてスモールスタートが可能です。
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
                  {plan.price ? (
                    <div className="flex items-baseline gap-0.5">
                      <span className={`text-sm ${plan.recommended ? 'text-white/55' : 'text-[#6B7273]'}`}>¥</span>
                      <span className={`text-4xl sm:text-5xl font-black ${plan.recommended ? 'text-[#F0B254]' : 'text-[#3D2C1E]'}`}>
                        {plan.price}
                      </span>
                      <span className={`text-sm ${plan.recommended ? 'text-white/55' : 'text-[#6B7273]'}`}>/月</span>
                    </div>
                  ) : (
                    <div className={`text-2xl font-black ${plan.recommended ? 'text-[#F0B254]' : 'text-[#3D2C1E]'}`}>
                      {plan.note}
                    </div>
                  )}
                </div>

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
            すべてのプランで初期費用0円。まずはライトプランでお試しいただけます。
            イルミアカルテ（¥79,000〜/月）との組み合わせで、診察から請求まで一気通貫で最適化できます。
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
