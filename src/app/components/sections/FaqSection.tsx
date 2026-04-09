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
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#3D2C1E] mb-4">
            よくある<span className="text-[#D98324]">ご質問</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div key={i} className="bg-[#FAF6F0] border border-[#3D2C1E]/8 rounded-lg p-5 sm:p-6">
              <h3 className="text-sm font-bold text-[#3D2C1E] mb-2.5">{item.q}</h3>
              <p className="text-xs text-[#2C3E40]/70 leading-[1.8]">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
