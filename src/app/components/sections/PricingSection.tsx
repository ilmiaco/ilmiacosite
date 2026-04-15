import { useState } from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';

type Billing = 'monthly' | 'yearly';

const plans = [
  {
    name: 'ライト',
    monthly: '15,000',
    yearly: '12,750',
    yearlyTotal: '153,000',
    target: 'クリニックおすすめ',
    description: 'まずは試してみたい方に。7日間の無料トライアル付き。',
    features: [
      'スライド生成 月50枚',
      'ライブラリ上限 10件',
      'AI画像生成 月10枚',
      'AI音声 月15,000文字',
      '一括AI画像化',
      '高品質音声（標準）',
    ],
    recommended: false,
  },
  {
    name: 'スタンダード',
    monthly: '30,000',
    yearly: '25,500',
    yearlyTotal: '306,000',
    target: '中小規模病院おすすめ',
    description: '入院説明・マニュアル用に最適な中心プラン。',
    features: [
      'スライド生成 月150枚',
      'ライブラリ上限 30件',
      'AI画像生成 月30枚',
      'AI音声 月75,000文字',
      '一括AI画像化',
      '高品質音声（標準 + 高品質）',
      '動画エクスポート',
    ],
    recommended: true,
  },
  {
    name: 'プロ',
    monthly: '60,000',
    yearly: '51,000',
    yearlyTotal: '612,000',
    target: '大規模病院おすすめ',
    description: '講演会・研修用に。複数部門の大量運用向け。',
    features: [
      'スライド生成 月500枚',
      'ライブラリ上限 100件',
      'AI画像生成 月100枚',
      'AI音声 月400,000文字',
      '一括AI画像化',
      '高品質音声（標準 + 高品質）',
      '動画エクスポート',
    ],
    recommended: false,
  },
];

export default function PricingSection() {
  const [billing, setBilling] = useState<Billing>('monthly');

  return (
    <section id="pricing" className="py-20 md:py-12 px-5 sm:px-6 bg-[#FAF6F0]">
      <div className="max-w-5xl mx-auto">
        {/* Editorial heading */}
        <div className="mb-10 md:mb-8 reveal">
          <h2 className="text-[1.625rem] sm:text-[2rem] md:text-5xl font-bold mb-6 text-[#3D2C1E] leading-tight">
            イルミアガイド<span className="text-[#D98324]">料金プラン</span>
          </h2>
          <p className="text-base sm:text-lg text-[#2C3E40]/80 leading-[2] max-w-2xl">
            シンプルな料金体系で、すぐに始められます。ライトプランは7日間無料でお試しいただけます。
          </p>
        </div>

        {/* Billing period toggle */}
        <div className="flex justify-center mb-10 reveal reveal-delay-1">
          <div className="inline-flex items-center bg-white border border-[#3D2C1E]/15 p-1">
            <button
              type="button"
              onClick={() => setBilling('monthly')}
              className={`px-5 sm:px-7 py-2 text-sm font-bold tracking-wider transition-colors ${
                billing === 'monthly'
                  ? 'bg-[#3D2C1E] text-white'
                  : 'text-[#6B7273] hover:text-[#3D2C1E]'
              }`}
              aria-pressed={billing === 'monthly'}
            >
              月額
            </button>
            <button
              type="button"
              onClick={() => setBilling('yearly')}
              className={`px-5 sm:px-7 py-2 text-sm font-bold tracking-wider transition-colors inline-flex items-center gap-2 ${
                billing === 'yearly'
                  ? 'bg-[#3D2C1E] text-white'
                  : 'text-[#6B7273] hover:text-[#3D2C1E]'
              }`}
              aria-pressed={billing === 'yearly'}
            >
              年額
              <span className={`text-[10px] tracking-wide px-1.5 py-0.5 font-bold ${
                billing === 'yearly' ? 'bg-[#F0B254] text-[#3D2C1E]' : 'bg-[#D98324]/15 text-[#D98324]'
              }`}>
                15% OFF
              </span>
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 sm:gap-0 max-w-5xl mx-auto mb-12 reveal reveal-delay-2 sm:items-stretch">
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
                <p className={`text-sm mb-3 ${plan.recommended ? 'text-white/65' : 'text-[#6B7273]'}`}>
                  {plan.target}
                </p>
                <p className={`text-xs mb-7 leading-relaxed ${plan.recommended ? 'text-white/55' : 'text-[#6B7273]/80'}`}>
                  {plan.description}
                </p>

                {/* Price */}
                <div className={`pb-6 mb-6 border-b ${plan.recommended ? 'border-white/15' : 'border-[#3D2C1E]/10'}`}>
                  <div className="flex items-baseline gap-0.5">
                    <span className={`text-sm ${plan.recommended ? 'text-white/55' : 'text-[#6B7273]'}`}>¥</span>
                    <span className={`text-4xl sm:text-5xl font-black ${plan.recommended ? 'text-[#F0B254]' : 'text-[#3D2C1E]'}`}>
                      {billing === 'monthly' ? plan.monthly : plan.yearly}
                    </span>
                    <span className={`text-sm ${plan.recommended ? 'text-white/55' : 'text-[#6B7273]'}`}>/月（税抜）</span>
                  </div>
                  {billing === 'yearly' && (
                    <p className={`text-xs mt-2 ${plan.recommended ? 'text-white/55' : 'text-[#6B7273]'}`}>
                      年額 ¥{plan.yearlyTotal} 一括払い
                    </p>
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
            年間契約で15%OFF（2か月分お得）。表示価格はすべて税抜です。別途送客費が加算されます。
          </p>
          <a
            href="https://guide.ilmiaco.com/"
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
