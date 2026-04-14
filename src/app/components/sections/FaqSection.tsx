const faqs = [
  {
    q: 'セットアップにどのくらいかかりますか？',
    a: '院内マニュアル（PDF・テキスト）をアップロードするだけで、最短3分でご利用を開始できます。大掛かりなシステム導入や専門知識は不要です。',
  },
  {
    q: '既存の院内マニュアルをそのまま使えますか？',
    a: 'はい。PDF・テキスト形式の既存マニュアルをそのままアップロードしてご利用いただけます。フォーマットの変換や作り直しは不要です。',
  },
  {
    q: '患者データのセキュリティはどうなっていますか？',
    a: 'すべてのデータはGoogle Cloud上で暗号化されて保管されます。Firebase Authenticationによる認証、Firestoreセキュリティルールによるアクセス制御を実装しています。',
  },
  {
    q: '音声とチャット、どちらでも使えますか？',
    a: 'はい。音声モードとチャットモードの両方に対応しています。患者様と話しながら音声で使うこともできますし、画面操作でチャット形式でご利用いただくことも可能です。',
  },
  {
    q: '導入後のサポート体制はどうなっていますか？',
    a: 'ライトプラン・標準プランともにメールサポートをご利用いただけます。標準プランでは優先サポートと院内導入支援を提供しています。大規模導入の場合は専任サポートで伴走します。',
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-20 md:py-28 px-5 sm:px-6 bg-white" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto">
        {/* Editorial heading */}
        <div className="mb-14 md:mb-20 reveal">
          <h2 id="faq-heading" className="text-[1.875rem] sm:text-4xl md:text-5xl font-bold text-[#3D2C1E] leading-tight">
            よくある<span className="text-[#D98324]">ご質問</span>
          </h2>
        </div>

        <div className="border-t border-[#3D2C1E]/15 reveal reveal-delay-1">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="border-b border-[#3D2C1E]/15 py-7 sm:py-8 group"
            >
              <div className="flex gap-5 sm:gap-7">
                {/* Q number marker */}
                <div className="flex-shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold tracking-[0.25em] text-[#D98324]">
                      Q.{String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-[#3D2C1E] mb-3 leading-snug">
                    {item.q}
                  </h3>
                  <div className="flex gap-3 pl-4 border-l-2 border-[#D98324]/40">
                    <p className="text-sm sm:text-base text-[#2C3E40]/80 leading-[1.9]">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
