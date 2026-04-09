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
  return (
    <section className="py-20 md:py-28 px-5 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#3D2C1E] mb-4">
            クリニック経営、<span className="text-[#D98324]">こんな課題</span>はありませんか？
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {painPoints.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-[#3D2C1E]/8 border-l-[3px] border-l-[#D98324] rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-sm font-bold text-[#3D2C1E] mb-2 leading-snug">{item.title}</h3>
              <p className="text-xs text-[#8A9698] leading-[1.8]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
