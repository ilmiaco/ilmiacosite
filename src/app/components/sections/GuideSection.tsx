import { BookOpen, Mic, Languages, Users } from 'lucide-react';
import FeatureCard from './FeatureCard';

export default function GuideSection() {
  return (
    <section id="guide-ai" className="py-20 md:py-12 px-5 sm:px-6 bg-white" aria-labelledby="guide-heading">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14 md:mb-8 reveal">
          <h2 id="guide-heading" className="text-[1.625rem] sm:text-[2rem] md:text-5xl font-bold mb-6 text-[#D98324] leading-tight">
            「説明が伝わる。現場が止まらない。」
          </h2>
          <p className="text-base sm:text-lg text-[#2C3E40]/80 max-w-2xl leading-[2]">
            院内マニュアルを読み込ませるだけで、AIがスタッフの患者説明をサポート。
            <br className="hidden sm:block" />
            スキルのバラつきをなくし、クリニック全体の説明品質を底上げします。
          </p>
        </div>

        <FeatureCard
          number="01"
          label="SETUP"
          title={<>マニュアルを読み込ませるだけ。<br /><span className="text-[#D98324]">最短3分でセットアップ完了。</span></>}
          description="PDFやテキストの院内マニュアルをアップロードするだけで準備完了。大掛かりなシステム導入は不要。スモールスタートで、すぐに使い始められます。"
          checkpoints={[
            'PDF・テキスト形式の院内マニュアルに対応',
            '最短3分でセットアップ完了',
            '既存の運用を変えずに導入可能',
          ]}
          illustration={
            <div className="w-full max-w-[300px] sm:max-w-xs mx-auto">
              <div className="bg-[#FAF6F0] border border-[#3D2C1E]/15 p-7">
                <BookOpen className="w-12 h-12 text-[#D98324] mb-5" />
                <div className="space-y-3.5">
                  {['マニュアルをアップロード', 'AIが内容を学習', 'すぐに使い始められる'].map((text, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-[#2C3E40]/80">
                      <div className="w-2.5 h-2.5 bg-[#D98324] rounded-full" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-[#3D2C1E]/8">
                  <div className="text-xs text-[#6B7273]">セットアップ時間</div>
                  <div className="text-lg font-black text-[#3D2C1E] mt-0.5">最短3分</div>
                  <div className="text-xs text-[#6B7273] mt-0.5">初期費用0円</div>
                </div>
              </div>
            </div>
          }
        />

        <FeatureCard
          number="02"
          label="VOICE & CHAT"
          reversed
          title={<>音声でもチャットでも、<br /><span className="text-[#D98324]">ワークフローを止めない。</span></>}
          description="PCやタブレットの画面操作に気を取られることなく、音声でも利用可能。患者様の目を見ながら、対話のテンポを崩さずにスムーズな説明を実現します。"
          checkpoints={[
            '音声・チャット両対応でシーンに合わせて選べる',
            '患者と目を合わせながら対話を維持できる',
            '診察フローを中断せずに説明が進む',
          ]}
          illustration={
            <div className="w-full max-w-[300px] sm:max-w-xs mx-auto">
              <div className="bg-[#FAF6F0] border border-[#3D2C1E]/15 p-7">
                <Mic className="w-12 h-12 text-[#D98324] mb-5" />
                <div className="space-y-3.5">
                  {['音声モードに対応', 'チャットモードに対応', 'リアルタイム応答'].map((text, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-[#2C3E40]/80">
                      <div className="w-2.5 h-2.5 bg-[#D98324] rounded-full" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-[#3D2C1E]/8">
                  <div className="text-xs text-[#6B7273]">対応モード</div>
                  <div className="text-lg font-black text-[#3D2C1E] mt-0.5">音声 + チャット</div>
                  <div className="text-xs text-[#6B7273] mt-0.5">切り替え不要</div>
                </div>
              </div>
            </div>
          }
        />

        <FeatureCard
          number="03"
          label="AUTO TRANSLATE"
          title={<>専門用語を、<br /><span className="text-[#D98324]">患者に伝わる言葉に自動変換。</span></>}
          description="そのままでは伝わりにくい医療用語も、患者様目線で理解しやすく、不安を和らげる表現へAIが自動で整えます。質問対応の時間が減り、診察全体の効率化につながります。"
          checkpoints={[
            '医療専門用語を患者向けの平易な言葉に変換',
            '患者の不安を和らげる表現を自動で選択',
            '説明後の質問対応時間が大幅に短縮',
          ]}
          illustration={
            <div className="w-full max-w-[300px] sm:max-w-xs mx-auto">
              <div className="bg-[#FAF6F0] border border-[#3D2C1E]/15 p-7">
                <Languages className="w-12 h-12 text-[#D98324] mb-5" />
                <div className="space-y-3.5">
                  {['専門用語を自動変換', '患者目線で再構成', '不安を和らげる表現'].map((text, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-[#2C3E40]/80">
                      <div className="w-2.5 h-2.5 bg-[#D98324] rounded-full" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-[#3D2C1E]/8">
                  <div className="text-xs text-[#6B7273]">変換対象</div>
                  <div className="text-lg font-black text-[#3D2C1E] mt-0.5">医療用語全般</div>
                  <div className="text-xs text-[#6B7273] mt-0.5">質問対応時間を短縮</div>
                </div>
              </div>
            </div>
          }
        />

        <FeatureCard
          number="04"
          label="STANDARDIZE"
          reversed
          title={<>属人化を解消し、<br /><span className="text-[#D98324]">院内方針に沿った説明品質を担保。</span></>}
          description="既存の院内マニュアルを読み込ませるだけで、スタッフごとの言い回しの差を減らし、毎回『当院として伝えるべきこと』をブレずに、同じ水準で案内できます。"
          checkpoints={[
            'スタッフによる説明の差をなくす',
            '院内マニュアルに沿った回答を保証',
            '新人スタッフもベテランと同じ品質を実現',
          ]}
          illustration={
            <div className="w-full max-w-[300px] sm:max-w-xs mx-auto">
              <div className="bg-[#FAF6F0] border border-[#3D2C1E]/15 p-7">
                <Users className="w-12 h-12 text-[#D98324] mb-5" />
                <div className="space-y-3.5">
                  {['言い回しの差を解消', '院内方針に沿う', '全員が同じ水準'].map((text, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-[#2C3E40]/80">
                      <div className="w-2.5 h-2.5 bg-[#D98324] rounded-full" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-[#3D2C1E]/8">
                  <div className="text-xs text-[#6B7273]">説明品質</div>
                  <div className="text-lg font-black text-[#3D2C1E] mt-0.5">全員均一</div>
                  <div className="text-xs text-[#6B7273] mt-0.5">新人もベテラン水準</div>
                </div>
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
}
