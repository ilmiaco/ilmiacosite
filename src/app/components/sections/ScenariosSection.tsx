import { Check, Stethoscope, Activity, HeartPulse, Sparkles } from 'lucide-react';

const scenarios = [
  {
    id: 'scenario-naika',
    title: '内科クリニック',
    subtitle: '請求ミスを減らし、診察もスムーズに',
    summary: 'よくある請求の見落としをAIが自動で見つけ、診察しながら電子カルテも完成。毎日の業務を無理なく軽くします。',
    points: ['請求できる項目の見落としを自動でお知らせ', '定期通院の患者情報をまとめて確認できる', 'カルテ記載時間を減らし、診察に集中できる'],
    icon: Stethoscope,
  },
  {
    id: 'scenario-hospital',
    title: '一般病院（外来）',
    subtitle: '部署ごとの確認負担をまとめて軽く',
    summary: '診療科ごとに違う確認ポイントをAIがまとめてチェック。今の運用に組み込みやすく、確認漏れを減らせます。',
    points: ['診療科ごとの確認ポイントを自動で整理', '今の請求フローに追加しやすい設計', '起きやすいミスを院内で共有しやすい'],
    icon: Activity,
  },
  {
    id: 'scenario-small',
    title: '小規模クリニック（1人院長）',
    subtitle: '少人数でも、日々の事務作業を回しやすく',
    summary: 'スタッフが少ない現場でも、AIが請求チェックやカルテ記載を支援。院長一人に負担が集中しにくくなります。',
    points: ['専門スタッフが少なくても請求確認を進めやすい', '音声入力で診察しながらカルテを完成', '月末のまとめ作業を短縮できる'],
    icon: HeartPulse,
  },
  {
    id: 'scenario-beauty',
    title: '美容クリニック',
    subtitle: '自費＋保険の混合診療を正確に管理',
    summary: 'PIBU AIとの連携で、美容施術のカウンセリングから保険診療のレセプト提出までを統合管理。',
    points: ['自費診療と保険診療の請求を一元管理', 'AIカウンセリング支援で対応品質を標準化', '保険分のレセプトAIチェックで返戻を防止'],
    icon: Sparkles,
  },
];

export default function ScenariosSection() {
  return (
    <section id="scenarios" className="py-20 md:py-28 px-5 sm:px-6 bg-[#FAF6F0]" aria-labelledby="scenarios-heading">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 id="scenarios-heading" className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 text-[#3D2C1E]">
            医療AIの<span className="text-[#D98324]">導入シナリオ</span>
          </h2>
          <p className="text-sm sm:text-base text-[#2C3E40]/80 max-w-2xl mx-auto leading-[1.8]">
            内科クリニックから大規模病院まで、現場課題に合わせた導入が可能です。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5" role="list" aria-label="医療AI導入シナリオ一覧">
          {scenarios.map((scenario) => (
            <article
              key={scenario.id}
              id={scenario.id}
              className="bg-white border border-[#3D2C1E]/8 rounded-lg p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
              role="listitem"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#D98324]/10 flex items-center justify-center flex-shrink-0">
                  <scenario.icon className="w-5 h-5 text-[#D98324]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#3D2C1E] leading-tight">{scenario.title}</h3>
                  <p className="text-[#D98324] text-sm font-semibold mt-1">{scenario.subtitle}</p>
                </div>
              </div>

              <p className="text-sm text-[#2C3E40]/70 leading-[1.8] mb-4">{scenario.summary}</p>

              <ul className="space-y-2.5">
                {scenario.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <Check className="w-3.5 h-3.5 text-[#D98324] mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-[#2C3E40]/80 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
