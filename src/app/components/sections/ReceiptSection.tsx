import {
  FileText, Check, ChevronRight, ShieldCheck, CircleDollarSign,
  Database, BookOpen, RefreshCw,
} from 'lucide-react';
import FeatureCard from './FeatureCard';

export default function ReceiptSection() {
  return (
    <section id="receipt-ai" className="py-20 md:py-28 px-5 sm:px-6 bg-[#FAF6F0]" aria-labelledby="receipt-heading">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-[#3D2C1E]/8 px-4 py-2 rounded-lg mb-5">
            <FileText className="w-3.5 h-3.5 text-[#3D2C1E]" />
            <span className="text-[#3D2C1E] text-xs font-semibold tracking-wider">レセプトAI</span>
          </div>
          <h2 id="receipt-heading" className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 text-[#3D2C1E]">
            「漏れを見つけ、収益を守る。」
          </h2>
          <p className="text-sm sm:text-base text-[#2C3E40]/80 max-w-2xl mx-auto leading-[1.8]">
            請求前のチェック、見落としの発見、ルール更新への対応までをAIが支援。
            <br className="hidden sm:block" />
            人の目だけでは見逃しやすいポイントを、提出前に気づけるようにします。
          </p>
        </div>

        <FeatureCard
          number="01"
          label="CHECK AI"
          variant="primary"
          title={<>提出前の見落としを、<br /><span className="text-[#D98324]">AIが先回りで見つけます。</span></>}
          description="検査内容や入力済みの情報を見ながら、足りない項目や不自然な組み合わせを自動チェック。提出してから気づくミスを、事前に減らせます。"
          checkpoints={[
            '入力漏れの可能性がある項目を自動で表示',
            '医療ルールに沿って内容をチェック',
            '修正後は関連する請求候補も自動で見直し',
          ]}
          illustration={
            <div className="w-full max-w-[300px] sm:max-w-xs mx-auto">
              <div className="bg-white border border-[#3D2C1E]/8 rounded-lg p-7 shadow-sm">
                <ShieldCheck className="w-12 h-12 text-[#3D2C1E] mb-5" />
                <div className="text-xs text-[#8A9698] mb-3">3段階チェック</div>
                <div className="space-y-2.5">
                  {[
                    { step: '1', label: '入力内容を確認', detail: '記入済みの情報を整理' },
                    { step: '2', label: '不足を検出', detail: '抜けや違和感を表示' },
                    { step: '3', label: '修正候補を提案', detail: '次に見るべき項目を案内' },
                  ].map((item, i) => (
                    <div key={i} className="bg-[#3D2C1E]/4 rounded-lg p-3">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xs font-bold text-[#3D2C1E] bg-white rounded-full w-6 h-6 flex items-center justify-center">{item.step}</span>
                        <div>
                          <div className="text-xs font-bold text-[#3D2C1E]">{item.label}</div>
                          <div className="text-[10px] text-[#8A9698]">{item.detail}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          }
        />

        <FeatureCard
          number="02"
          label="請求チェック"
          variant="primary"
          reversed
          title={<>取りこぼしていた請求を、<br /><span className="text-[#D98324]">AIが見つけて教える。</span></>}
          description="本来請求できるのに見逃しやすい項目を、AIが自動で洗い出します。忙しい日でも、あとからまとめて探し直す手間を減らせます。"
          checkpoints={[
            '請求できる可能性がある項目を自動で表示',
            '院内の条件に合わせて候補を絞り込み',
            '見落としが売上に与える影響も把握しやすい',
          ]}
          illustration={
            <div className="w-full max-w-[300px] sm:max-w-xs mx-auto">
              <div className="bg-white border border-[#3D2C1E]/8 rounded-lg p-7 shadow-sm">
                <CircleDollarSign className="w-12 h-12 text-[#3D2C1E] mb-5" />
                <div className="text-xs text-[#8A9698] mb-4">自動チェックの例</div>
                <div className="space-y-2.5">
                  {[
                    '初診・再診まわり',
                    '検査や処置の入力',
                    '処方内容の確認',
                    '指導や管理に関する請求',
                    'よくある見落とし項目',
                    '院内ルールに基づく確認',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-sm">
                      <Check className="w-3.5 h-3.5 text-[#3D2C1E] flex-shrink-0" />
                      <span className="text-[#2C3E40]/80 text-xs">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-[#3D2C1E]/8">
                  <div className="text-xs text-[#8A9698]">対応ルール数</div>
                  <div className="text-2xl font-black text-[#3D2C1E] mt-0.5">10+</div>
                </div>
              </div>
            </div>
          }
        />

        <FeatureCard
          number="03"
          label="自動アップデート"
          variant="primary"
          title={<>ルール変更のたびに<br /><span className="text-[#D98324]">振り回されにくくなる。</span></>}
          description="請求に関わる最新情報を自動で取り込み、ルール変更への対応を支援します。毎回ゼロから調べ直す負担を減らし、現場が普段の業務に集中しやすくなります。"
          checkpoints={[
            '最新の請求ルールを定期的に反映',
            '変更があった箇所を分かりやすく確認',
            '制度変更への対応工数を大幅に削減',
          ]}
          illustration={
            <div className="w-full max-w-[300px] sm:max-w-xs mx-auto">
              <div className="bg-white border border-[#3D2C1E]/8 rounded-lg p-7 shadow-sm">
                <Database className="w-12 h-12 text-[#3D2C1E] mb-5" />
                <div className="text-xs text-[#8A9698] mb-4">自動更新の対象</div>
                <div className="space-y-3">
                  {[
                    { name: '請求ルール', detail: '最新情報を定期反映' },
                    { name: '病名や薬の辞書', detail: '入力候補を新しい状態に' },
                    { name: '院内設定', detail: '運用に合わせて調整可能' },
                  ].map((item, i) => (
                    <div key={i} className="bg-[#3D2C1E]/4 rounded-lg p-3">
                      <div className="text-xs font-bold text-[#3D2C1E]">{item.name}</div>
                      <div className="text-[10px] text-[#8A9698] mt-0.5">{item.detail}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-[#3D2C1E]/8">
                  <div className="text-xs text-[#8A9698]">同期頻度</div>
                  <div className="text-lg font-black text-[#3D2C1E] mt-0.5">毎月自動</div>
                </div>
              </div>
            </div>
          }
        />

        <FeatureCard
          number="04"
          label="提出後も改善"
          variant="primary"
          reversed
          title={<>提出して終わりじゃない。<br /><span className="text-[#D98324]">次回に活かしていく。</span></>}
          description="提出後の結果をもとに、起きやすいミスを次回のチェックに反映。同じ見落としを繰り返しにくい運用をつくれます。"
          checkpoints={[
            '提出方法は既存フローに合わせて選択可能',
            '差し戻しや修正の傾向を蓄積',
            '次回以降は同じポイントを先に警告',
          ]}
          illustration={
            <div className="w-full max-w-[300px] sm:max-w-xs mx-auto">
              <div className="bg-white border border-[#3D2C1E]/8 rounded-lg p-7 shadow-sm">
                <BookOpen className="w-12 h-12 text-[#3D2C1E] mb-5" />
                <div className="text-xs text-[#8A9698] mb-4">改善サイクル</div>
                <div className="space-y-3.5">
                  {[
                    { label: '請求データを提出', color: 'bg-[#D98324]' },
                    { label: '結果を確認', color: 'bg-[#F0B254]' },
                    { label: '起きたミスを記録', color: 'bg-[#3D2C1E]/60' },
                    { label: '次回は事前に警告', color: 'bg-[#D98324]' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-[#2C3E40]/80">
                      <div className={`w-2.5 h-2.5 ${item.color} rounded-full`} />
                      <span className="text-xs">{item.label}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-[#3D2C1E]/8 text-center">
                  <RefreshCw className="w-5 h-5 text-[#3D2C1E]/40 mx-auto mb-1.5" />
                  <div className="text-[10px] text-[#8A9698]">同じミスを二度と繰り返さない</div>
                </div>
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
}
