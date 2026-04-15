import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const painPoints = [
  {
    title: 'スタッフによって説明の質にバラつきがある',
    description: '患者への説明はスタッフに任せていても、伝え方や内容に差が出てしまう。クレームの原因になることも少なくありません。',
  },
  {
    title: '説明に時間がかかり、待合室が混雑する',
    description: '一人ひとりの患者への説明に時間が取られ、後の患者を待たせてしまう。診察の流れが止まります。',
  },
  {
    title: '新しいスタッフの習得に時間がかかる',
    description: 'マニュアルを渡しても、実際に「使える説明」ができるようになるまでには、時間とOJTが必要です。',
  },
  {
    title: '専門用語がそのまま患者に伝わっていない',
    description: '医療用語をそのまま使うと患者の理解が追いつかず、不安を抱えたまま帰宅してしまいます。質問が増えて診察時間も伸びます。',
  },
  {
    title: '説明内容が院内方針からずれてしまう',
    description: 'スタッフが自己流で説明してしまい、クリニックとして伝えるべきことが一貫して伝わっていない場合があります。',
  },
  {
    title: '新システムを入れても、現場が使いこなせるか不安',
    description: '「操作が難しいのでは」「現場が混乱しないか」と導入に踏み出せないことも多い。現場が止まるリスクを避けたい。',
  },
];

export default function PainPointsSection() {
  const [expanded, setExpanded] = useState(false);
  const MOBILE_PREVIEW = 3;

  return (
    <section className="py-20 md:py-12 px-5 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Editorial heading */}
        <div className="mb-14 md:mb-10 reveal">
          <h2 className="text-[1.625rem] sm:text-[2rem] md:text-5xl font-bold text-[#3D2C1E] leading-tight">
            院長先生、<br className="sm:hidden" />
            <span className="text-[#D98324]">こんなお悩み</span>はありませんか？
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
