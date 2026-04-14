import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const painPoints = [
  {
    title: '請求できるはずの分を取りこぼしている',
    description: '小さな見落としでも、毎日積み重なると大きな損失になります。気づかないまま終わっている請求は少なくありません。',
  },
  {
    title: '確認漏れがあると差し戻し対応が増える',
    description: '提出後にミスが見つかると、やり直しの手間が一気に増えます。月末だけの確認では防ぎきれないこともあります。',
  },
  {
    title: '返戻対応に追われる月末',
    description: '返戻1件あたりの対応コストは、金額以上に時間と精神的負担が大きい。再請求の手間が現場を疲弊させています。',
  },
  {
    title: 'カルテ記載に1日2時間',
    description: '診察後のカルテ記載に追われ、患者と向き合う時間が減っていく。手書きや手入力の非効率が、診察の質とスピードを下げています。',
  },
  {
    title: 'ルール変更のたびに確認が大変',
    description: '制度や請求ルールが変わるたびに、何を直せばいいのか調べ直す必要があります。現場だけで追い続けるのは大きな負担です。',
  },
  {
    title: '事務作業が人に依存しすぎている',
    description: '一部の詳しい人しか回せない運用だと、休職や退職がそのまま現場の不安定さにつながります。',
  },
];

export default function PainPointsSection() {
  const [expanded, setExpanded] = useState(false);
  const MOBILE_PREVIEW = 3;

  return (
    <section className="py-20 md:py-28 px-5 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Editorial heading */}
        <div className="mb-14 md:mb-20 reveal">
          <h2 className="text-[1.875rem] sm:text-4xl md:text-5xl font-bold text-[#3D2C1E] leading-tight">
            クリニック経営、<br className="sm:hidden" />
            <span className="text-[#D98324]">こんな課題</span>はありませんか？
          </h2>
        </div>

        <div className="max-w-4xl mx-auto reveal reveal-delay-1">
          <div className="border-t border-[#3D2C1E]/15">
            {painPoints.map((item, i) => (
              <div
                key={i}
                className={`relative flex gap-5 sm:gap-8 py-7 sm:py-8 border-b border-[#3D2C1E]/15 group hover:bg-[#FAF6F0]/40 transition-colors ${
                  i >= MOBILE_PREVIEW && !expanded ? 'hidden sm:flex' : ''
                }`}
              >
                {/* Editorial number */}
                <div className="flex-shrink-0 pt-1">
                  <div className="flex flex-col items-start gap-1">
                    <span className="text-xs font-bold tracking-[0.25em] text-[#D98324]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="h-px w-8 bg-[#D98324]/40" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-[#3D2C1E] mb-2 leading-snug">{item.title}</h3>
                  <p className="text-sm sm:text-base text-[#6B7273] leading-[1.9]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile show-more toggle */}
          {!expanded && (
            <div className="sm:hidden mt-6 text-center">
              <button
                type="button"
                onClick={() => setExpanded(true)}
                className="inline-flex items-center gap-2 text-sm font-bold tracking-wider text-[#D98324] border-b-2 border-[#D98324]/40 pb-1 hover:border-[#D98324] transition-colors"
              >
                さらに{painPoints.length - MOBILE_PREVIEW}件の課題を見る
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
