const faqs = [
  {
    q: '患者データのセキュリティはどうなっていますか？',
    a: 'すべてのデータはGoogle Cloud上で暗号化されて保管されます。Firebase Authenticationによる認証、Firestoreセキュリティルールによるアクセス制御を実装。音声データは一切保存・記録されません（no_loggingモード）。',
  },
  {
    q: '既存の電子カルテシステムと連携できますか？',
    a: 'はい。既存の電子カルテや請求システムに合わせた連携相談が可能です。今の運用を大きく変えずに導入できるよう調整します。',
  },
  {
    q: '導入にどのくらい時間がかかりますか？',
    a: 'アカウント作成後、早ければ当日から使い始められます。必要に応じて初期設定や導入支援も行います。',
  },
  {
    q: 'どの診療科に対応していますか？',
    a: '内科、外科、小児科をはじめ、幅広い診療科で使えます。診療科に合わせた設定ができるため、現場に合った使い方が可能です。',
  },
  {
    q: '導入後のサポート体制はどうなっていますか？',
    a: 'メール・チャットによるサポートを全プランでご利用いただけます。ホスピタルプラン以上では優先サポート、エンタープライズプランでは専任担当者によるサポートを提供しています。',
  },
];

export default function FaqSection() {
  return (
    <section className="py-20 md:py-28 px-5 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Editorial heading */}
        <div className="mb-14 md:mb-20 reveal">
          <h2 className="text-[1.875rem] sm:text-4xl md:text-5xl font-bold text-[#3D2C1E] leading-tight">
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
