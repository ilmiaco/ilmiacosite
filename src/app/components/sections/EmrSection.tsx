import {
  Stethoscope, Brain, MessageSquare, ClipboardList, HeartPulse,
  FileText, ChevronRight, Mic,
} from 'lucide-react';
import FeatureCard from './FeatureCard';

export default function EmrSection() {
  return (
    <section id="emr-ai" className="py-20 md:py-28 px-5 sm:px-6 bg-white" aria-labelledby="emr-heading">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14 md:mb-20 reveal">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-bold tracking-[0.3em] text-[#D98324]">電子カルテAI</span>
            <div className="h-px flex-1 max-w-[80px] bg-[#D98324]/30" />
          </div>
          <h2 id="emr-heading" className="text-[1.875rem] sm:text-4xl md:text-5xl font-bold mb-6 text-[#D98324] leading-tight">
            「声で診る。AIが書く。」
          </h2>
          <p className="text-base sm:text-lg text-[#2C3E40]/80 max-w-2xl leading-[2]">
            リアルタイム音声認識で診察を支援し、電子カルテを自動生成。
            <br className="hidden sm:block" />
            医師の「書く時間」を「診る時間」に変えます。
          </p>
        </div>

        <FeatureCard
          number="01"
          label="VOICE AI"
          title={<>話すだけで、<br /><span className="text-[#D98324]">カルテが出来上がる。</span></>}
          description="医療向けに最適化されたリアルタイム音声認識で、医師と患者の会話を自動で文字起こし。医療用語に最適化された認識精度で、入力の手間を根本からなくします。"
          checkpoints={[
            '医療専門用語に対応した高精度音声認識',
            '医師・患者の発話を自動で区別（話者分離）',
            'リアルタイムでテキスト表示',
          ]}
          illustration={
            <div className="w-full max-w-[300px] sm:max-w-xs mx-auto">
              <div className="bg-[#FAF6F0] border border-[#3D2C1E]/15 p-7">
                <Mic className="w-12 h-12 text-[#D98324] mb-5" />
                <div className="space-y-3.5">
                  {['音声入力開始', 'リアルタイム文字起こし', 'AI診察支援が同時進行'].map((text, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-[#2C3E40]/80">
                      <div className="w-2.5 h-2.5 bg-[#D98324] rounded-full" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-[#3D2C1E]/8">
                  <div className="text-xs text-[#6B7273]">音声認識</div>
                  <div className="text-lg font-black text-[#3D2C1E] mt-0.5">医療向けAI</div>
                  <div className="text-xs text-[#6B7273] mt-0.5">専門用語に対応</div>
                </div>
              </div>
            </div>
          }
        />

        <FeatureCard
          number="02"
          label="LIVE AI"
          reversed
          title={<>診察中、<br /><span className="text-[#D98324]">AIが隣で考える。</span></>}
          description="診察の進行に合わせて、AIがリアルタイムで診断候補・追加質問・検査推奨・治療計画を提案。見落としを防ぎ、診療の質を底上げします。"
          checkpoints={[
            '鑑別診断の候補を信頼度付きで提示',
            '聞き忘れがちなフォローアップ質問を提案',
            'アレルギー・既往歴を考慮した治療計画',
          ]}
          illustration={
            <div className="w-full max-w-[300px] sm:max-w-xs mx-auto">
              <div className="bg-[#FAF6F0] border border-[#3D2C1E]/15 p-7">
                <div className="space-y-4">
                  {[
                    { icon: Brain, label: '診断候補を提示', detail: '信頼度付き' },
                    { icon: MessageSquare, label: 'フォローアップ質問', detail: '聞き忘れ防止' },
                    { icon: ClipboardList, label: '検査推奨', detail: '優先度付き' },
                    { icon: HeartPulse, label: '治療計画', detail: 'アレルギー考慮' },
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#D98324]/8 flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-4 h-4 text-[#D98324]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[#3D2C1E] text-sm font-medium">{step.label}</div>
                        <div className="text-[#6B7273] text-xs">{step.detail}</div>
                      </div>
                      {i < 3 && <ChevronRight className="w-3.5 h-3.5 text-[#3D2C1E]/20 rotate-90 flex-shrink-0" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          }
        />

        <FeatureCard
          number="03"
          label="カルテ自動生成"
          title={<>診察が終わったら、<br /><span className="text-[#D98324]">カルテも終わっている。</span></>}
          description="診察の音声記録と問診データから、AIが診察内容を整理して電子カルテを自動生成。診断情報まで含めた見やすいカルテを、ワンクリックで作成できます。"
          checkpoints={[
            '主訴・現病歴・所見・診断・治療計画を自動構造化',
            '診断名も自動で整理して反映',
            '下書き→確認→確定の安心ワークフロー',
          ]}
          illustration={
            <div className="w-full max-w-[300px] sm:max-w-xs mx-auto">
              <div className="bg-[#FAF6F0] border border-[#3D2C1E]/15 p-7">
                <ClipboardList className="w-12 h-12 text-[#D98324] mb-5" />
                <div className="space-y-3">
                  {[
                    { label: '患者の訴え', detail: '主訴・現病歴を自動記録' },
                    { label: '診察所見', detail: '所見・検査結果を構造化' },
                    { label: '診断', detail: '診断名を分かりやすく整理' },
                    { label: '治療計画', detail: '処方・指示・フォロー' },
                  ].map((item, i) => (
                    <div key={i} className="bg-white p-3 border border-[#3D2C1E]/15">
                      <div className="text-xs font-bold text-[#D98324]">{item.label}</div>
                      <div className="text-xs text-[#6B7273] mt-0.5">{item.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          }
        />

        <FeatureCard
          number="04"
          label="PATIENT HUB"
          reversed
          title={<>来院前から、<br /><span className="text-[#D98324]">診察の準備が整う。</span></>}
          description="患者への事前問診リンク配信で、来院前に症状・既往歴・主訴を収集。診察時には情報が整理された状態で始められます。"
          checkpoints={[
            '事前問診で来院前に情報収集',
            '患者ごとの既往歴・アレルギー・投薬歴を一元管理',
            '問診内容がAI診察支援に自動反映',
          ]}
          illustration={
            <div className="w-full max-w-[300px] sm:max-w-xs mx-auto">
              <div className="bg-[#FAF6F0] border border-[#3D2C1E]/15 p-7">
                <div className="space-y-4">
                  {[
                    { icon: FileText, label: '事前問診リンク配信', time: '来院前' },
                    { icon: ClipboardList, label: '症状・既往歴を収集', time: '自動整理' },
                    { icon: Brain, label: 'AI診察支援に反映', time: 'リアルタイム' },
                    { icon: Stethoscope, label: '情報が整った状態で診察', time: '即座に' },
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#D98324]/8 flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-4 h-4 text-[#D98324]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[#3D2C1E] text-sm font-medium">{step.label}</div>
                        <div className="text-[#6B7273] text-xs">{step.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
}
