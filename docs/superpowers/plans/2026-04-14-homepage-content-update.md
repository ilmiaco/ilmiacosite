# Homepage Content Update Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reposition the homepage to feature イルミアガイド as the primary product, replacing stale/wrong content with accurate company data from internal docs.

**Architecture:** Content-only changes across existing React section components. One new component (GuideSection) replaces EmrSection. OtherProductsSection content updated to show カルテ+レセプト. App.tsx section order adjusted. No routing, API, or style system changes.

**Tech Stack:** React + TypeScript, Tailwind CSS, Vite, Firebase Hosting

---

## File Map

| Action | File | Purpose |
|--------|------|---------|
| Modify | `src/app/App.tsx` | Update imports, remove ReceiptSection render, reorder sections |
| Create | `src/app/components/sections/GuideSection.tsx` | イルミアガイド feature section (replaces EmrSection) |
| Delete | `src/app/components/sections/ReceiptSection.tsx` | No longer rendered |
| Modify | `src/app/components/sections/HeroSection.tsx` | ガイド-focused copy |
| Modify | `src/app/components/sections/PainPointsSection.tsx` | ガイド pain points |
| Modify | `src/app/components/sections/PlatformOverview.tsx` | ガイド left + カルテ right |
| Modify | `src/app/components/sections/OtherProductsSection.tsx` | カルテ + レセプト (remove 3 old products) |
| Modify | `src/app/components/sections/QuoteBanner.tsx` | ガイド-related quote |
| Modify | `src/app/components/sections/ResultsSection.tsx` | Real stats + title update |
| Modify | `src/app/components/sections/PricingSection.tsx` | ガイド plans primary |
| Modify | `src/app/components/sections/FaqSection.tsx` | ガイド FAQs |
| Modify | `src/app/components/sections/ScenariosSection.tsx` | Remove 美容クリニック scenario |
| Modify | `src/app/components/sections/ContactSection.tsx` | Add ガイド inquiry option |
| Modify | `src/app/components/sections/AboutSection.tsx` | Update description text |
| Modify | `.gitignore` | Add kumano/ |

---

## Task 0: Pre-implementation — git push + gitignore

**Files:**
- Modify: `.gitignore`

- [ ] **Step 1: Push current uncommitted changes**

```bash
cd c:/Users/hwckv/OneDrive/Desktop/dev/ilmiacosite/ilmiacosite
git add index.html src/app/components/sections/AboutSection.tsx src/app/components/sections/ContactSection.tsx src/app/components/sections/EmrSection.tsx src/app/components/sections/FaqSection.tsx src/app/components/sections/HeroSection.tsx src/app/components/sections/PainPointsSection.tsx src/app/components/sections/PricingSection.tsx src/app/components/sections/ReceiptSection.tsx src/app/components/sections/ResultsSection.tsx src/app/components/sections/ScenariosSection.tsx src/styles/fonts.css
git commit -m "chore: save work in progress before content update"
git push
```

- [ ] **Step 2: Add kumano to .gitignore**

Open `.gitignore` and add at the end:

```
# Internal company data — do not commit
kumano/
```

- [ ] **Step 3: Commit gitignore change**

```bash
git add .gitignore
git commit -m "chore: add kumano/ to gitignore"
```

---

## Task 1: Create GuideSection.tsx

**Files:**
- Create: `src/app/components/sections/GuideSection.tsx`

This replaces EmrSection entirely with イルミアガイド feature cards.

- [ ] **Step 1: Create the file**

```tsx
import { BookOpen, Mic, Languages, Users } from 'lucide-react';
import FeatureCard from './FeatureCard';

export default function GuideSection() {
  return (
    <section id="guide-ai" className="py-20 md:py-28 px-5 sm:px-6 bg-white" aria-labelledby="guide-heading">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14 md:mb-20 reveal">
          <h2 id="guide-heading" className="text-[1.875rem] sm:text-4xl md:text-5xl font-bold mb-6 text-[#D98324] leading-tight">
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
                <div className="space-y-4">
                  {[
                    { label: '音声モード', detail: 'マイクで話しかけるだけ' },
                    { label: 'チャットモード', detail: 'テキストで素早く確認' },
                    { label: 'リアルタイム回答', detail: '待たせない速さで返答' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#D98324]/8 flex items-center justify-center flex-shrink-0">
                        <Mic className="w-4 h-4 text-[#D98324]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[#3D2C1E] text-sm font-medium">{item.label}</div>
                        <div className="text-[#6B7273] text-xs">{item.detail}</div>
                      </div>
                    </div>
                  ))}
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
                <div className="space-y-3">
                  {[
                    { from: '心房細動', to: '心臓のリズムが乱れる状態' },
                    { from: '虚血性心疾患', to: '心臓への血液が不足する病気' },
                    { from: '浮腫', to: 'むくみ（水分がたまった状態）' },
                  ].map((item, i) => (
                    <div key={i} className="bg-white p-3 border border-[#3D2C1E]/15">
                      <div className="text-xs text-[#6B7273]">{item.from}</div>
                      <div className="text-xs font-bold text-[#D98324] mt-0.5">→ {item.to}</div>
                    </div>
                  ))}
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
                <div className="space-y-3">
                  {[
                    { label: 'ベテランスタッフ', quality: '高品質' },
                    { label: '新人スタッフ', quality: '高品質' },
                    { label: 'アルバイト', quality: '高品質' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between bg-white p-3 border border-[#3D2C1E]/15">
                      <span className="text-xs text-[#2C3E40]/80">{item.label}</span>
                      <span className="text-xs font-bold text-[#D98324]">{item.quality}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-[#3D2C1E]/8 text-center">
                  <div className="text-xs text-[#6B7273]">AIが品質を均一化</div>
                </div>
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/components/sections/GuideSection.tsx
git commit -m "feat: add GuideSection for イルミアガイド features"
```

---

## Task 2: Update HeroSection.tsx

**Files:**
- Modify: `src/app/components/sections/HeroSection.tsx`

- [ ] **Step 1: Replace the file content**

```tsx
import heroBgImage from '@/assets/hero-bg.jpg';

interface HeroSectionProps {
  medicalProductUrl: string;
}

export default function HeroSection({ medicalProductUrl }: HeroSectionProps) {
  return (
    <section
      className="relative min-h-[100svh] md:h-screen flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <img src={heroBgImage} alt="" className="w-full h-full object-cover fixed-bg" loading="eager" />
        {/* Mobile: vertical gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/90 to-white md:hidden" />
        {/* Desktop: horizontal gradient */}
        <div className="absolute inset-0 hidden md:block md:bg-gradient-to-r md:from-white md:via-white/90 md:to-transparent" />
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 pt-[88px] pb-6 sm:pt-28 sm:pb-10 md:pt-32 md:pb-14">
          <div className="max-w-3xl">
            {/* Editorial label */}
            <div className="flex items-center gap-3 mb-2.5 sm:mb-6">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] text-[#D98324]">患者説明AI</span>
              <div className="h-px flex-1 max-w-[60px] bg-[#D98324]/40" />
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] text-[#3D2C1E]/60">SINCE 2025</span>
            </div>

            {/* Tagline badge */}
            <div className="mb-3 sm:mb-7 inline-block bg-[#3D2C1E]/4 border-l-[3px] sm:border-l-2 border-[#D98324] pl-4 pr-3 py-1.5 sm:py-2.5">
              <p className="text-xs sm:text-base text-[#2C3E40]/80 leading-snug sm:leading-relaxed tracking-wide">
                <span className="font-bold text-[#3D2C1E]">患者説明AI × スタッフの属人化解消</span>
                <span className="hidden sm:inline text-[#6B7273] mx-2">／</span>
                <span className="sm:hidden"> — </span>
                説明品質を、<span className="font-bold text-[#D98324]">AIが底上げする</span>
              </p>
            </div>

            {/* Hero heading */}
            <h1
              id="hero-heading"
              className="text-[1.875rem] sm:text-4xl md:text-5xl lg:text-[4rem] font-bold mb-3 sm:mb-8 leading-[1.2] tracking-tight"
              itemProp="headline"
            >
              <span className="text-[#3D2C1E]">スタッフの説明を、</span>
              <br />
              <span className="text-[#3D2C1E]">AIが支える。</span>
              <br />
              <span className="text-[#D98324]">説明品質の新基準。</span>
            </h1>

            <p className="text-xs sm:text-lg md:text-xl text-[#6B7273] mb-4 sm:mb-10 leading-[1.7] sm:leading-[2] max-w-2xl">
              院内マニュアルを読み込ませるだけで、AIがスタッフの患者説明をサポート。<br className="hidden sm:block" />
              スキルのバラつきをなくし、<span className="text-[#3D2C1E] font-bold">クリニック全体の説明品質を一定水準に保ちます</span>。
            </p>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-4 sm:mb-10">
              <a
                href={medicalProductUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 bg-[#D98324] text-white px-6 py-3 sm:px-9 sm:py-5 font-bold text-sm sm:text-lg hover:bg-[#c27520] transition-colors"
              >
                無料デモを申し込む
              </a>
              <a
                href="#about"
                className="group inline-flex items-center justify-center gap-2.5 bg-transparent sm:bg-white border-0 sm:border sm:border-[#3D2C1E]/15 text-[#2C3E40]/75 sm:text-[#2C3E40] px-6 py-2.5 sm:px-9 sm:py-5 font-semibold text-xs sm:text-lg hover:text-[#D98324] sm:hover:text-[#2C3E40] sm:hover:border-[#D98324]/40 transition-colors"
              >
                私たちについて
              </a>
            </div>

            <ul className="flex flex-row flex-wrap gap-x-5 gap-y-2 sm:gap-x-8 text-[11px] sm:text-sm text-[#6B7273]">
              {['最短3分セットアップで導入可能', '音声・チャット両対応でワークフローを止めない', '専門用語を患者向けの言葉に自動変換'].map((text) => (
                <li key={text} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D98324] flex-shrink-0" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/components/sections/HeroSection.tsx
git commit -m "feat: update HeroSection for イルミアガイド"
```

---

## Task 3: Update PainPointsSection.tsx

**Files:**
- Modify: `src/app/components/sections/PainPointsSection.tsx`

- [ ] **Step 1: Replace the `painPoints` array and heading only**

Replace lines 4–29 (the `painPoints` array) with:

```tsx
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
```

Also update the heading in the JSX (around line 41):

```tsx
<h2 className="text-[1.875rem] sm:text-4xl md:text-5xl font-bold text-[#3D2C1E] leading-tight">
  院長先生、<br className="sm:hidden" />
  <span className="text-[#D98324]">こんなお悩み</span>はありませんか？
</h2>
```

- [ ] **Step 2: Commit**

```bash
git add src/app/components/sections/PainPointsSection.tsx
git commit -m "feat: update PainPointsSection for イルミアガイド pain points"
```

---

## Task 4: Update PlatformOverview.tsx

**Files:**
- Modify: `src/app/components/sections/PlatformOverview.tsx`

- [ ] **Step 1: Replace the file content**

```tsx
import { MessageSquare, Stethoscope, Zap, ArrowRight } from 'lucide-react';

export default function PlatformOverview() {
  return (
    <section id="platform" className="py-20 md:py-28 px-5 sm:px-6 bg-[#FAF6F0]">
      <div className="max-w-5xl mx-auto">
        {/* Editorial heading */}
        <div className="mb-14 md:mb-20 reveal">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-bold tracking-[0.3em] text-[#D98324]">PLATFORM</span>
            <div className="h-px flex-1 max-w-[80px] bg-[#D98324]/30" />
          </div>
          <h2 className="text-[1.875rem] sm:text-4xl md:text-5xl font-bold mb-6 text-[#3D2C1E] leading-tight">
            ILMIAが、<br />
            <span className="text-[#D98324]">医療現場を支えます。</span>
          </h2>
          <p className="text-base sm:text-lg text-[#2C3E40]/80 max-w-2xl leading-[2]">
            患者説明AIから電子カルテまで、クリニックの業務全体をカバー。
            <br className="hidden sm:block" />
            小さく始めて、必要に応じて広げられます。
          </p>
        </div>

        {/* Two product modules linked by arrow */}
        <div className="relative reveal reveal-delay-1">
          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-4 items-stretch">
            {/* Guide AI module — primary */}
            <div className="bg-white border border-[#3D2C1E]/8 p-7 sm:p-9 relative group hover:border-[#D98324]/40 transition-colors">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#D98324]" />

              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-[#D98324] flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold tracking-[0.2em] text-[#D98324] mb-1">01 — GUIDE AI</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#3D2C1E] leading-tight">イルミアガイド</h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#6B7273] leading-[1.9] mb-6">
                患者説明AIで、スタッフの<br />
                説明品質を底上げする
              </p>

              <div className="flex items-center gap-2 text-sm font-bold text-[#D98324] group-hover:gap-3 transition-all">
                <span>月額 ¥9,800〜</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Connecting arrow (desktop only) */}
            <div className="hidden md:flex items-center justify-center px-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-px bg-[#D98324]/40" />
                <div className="w-10 h-10 rounded-full bg-[#D98324] flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div className="w-8 h-px bg-[#D98324]/40" />
              </div>
            </div>

            {/* Mobile connector */}
            <div className="md:hidden flex justify-center">
              <div className="flex flex-col items-center gap-1">
                <div className="h-4 w-px bg-[#D98324]/40" />
                <div className="w-9 h-9 rounded-full bg-[#D98324] flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div className="h-4 w-px bg-[#D98324]/40" />
              </div>
            </div>

            {/* EMR AI module — secondary */}
            <div className="bg-white border border-[#3D2C1E]/8 p-7 sm:p-9 relative group hover:border-[#3D2C1E]/40 transition-colors">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#3D2C1E]" />

              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-[#3D2C1E] flex items-center justify-center flex-shrink-0">
                  <Stethoscope className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold tracking-[0.2em] text-[#3D2C1E] mb-1">02 — EMR AI</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#3D2C1E] leading-tight">イルミアカルテ</h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#6B7273] leading-[1.9] mb-6">
                問診からカルテ・レセプトまで、<br />
                AIで一気通貫
              </p>

              <div className="flex items-center gap-2 text-sm font-bold text-[#3D2C1E] group-hover:gap-3 transition-all">
                <span>月額 ¥79,000〜</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Bottom tagline */}
          <div className="mt-10 text-center">
            <p className="inline-flex items-center gap-2 text-sm sm:text-base text-[#3D2C1E] font-bold tracking-wide">
              <span className="h-px w-8 bg-[#D98324]" />
              スモールスタートで、クリニックに合わせて広げられる
              <span className="h-px w-8 bg-[#D98324]" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/components/sections/PlatformOverview.tsx
git commit -m "feat: update PlatformOverview to feature イルミアガイド"
```

---

## Task 5: Update OtherProductsSection.tsx

**Files:**
- Modify: `src/app/components/sections/OtherProductsSection.tsx`

Replace the 3 old/stale products with カルテ + レセプト.

- [ ] **Step 1: Replace the file content**

```tsx
import { ClipboardList, FileCheck, Check } from 'lucide-react';

const otherProducts = [
  {
    id: 'ilmia-carte',
    name: 'イルミアカルテ',
    subtitle: 'ILMIA Carte',
    description: '統合型AI電子カルテ。問診→カルテ→レセプトをAIで一気通貫。診察後の残業をなくす。',
    target: 'クリニック・中小病院',
    price: '¥79,000〜/月',
    features: [
      'AI問診（患者スマホ回答を自動整理・カルテ転送）',
      '電子カルテAI（会話をリアルタイムSOAP形式に自動記録）',
      'レセプトAI（算定漏れ・病名不一致を提出前にチェック）',
      '初期費用0円・14日間無料トライアル',
    ],
    icon: ClipboardList,
  },
  {
    id: 'ilmia-receipt',
    name: 'イルミアレセプト',
    subtitle: 'ILMIA Receipt',
    description: 'AIレセプト点検。算定漏れ・返戻リスクを最小化。月末集中作業を日次に平準化。',
    target: 'クリニック・中小病院',
    price: '¥79,000〜/月',
    features: [
      'CSV/JSONデータを自動整理・算定候補を抽出',
      '算定漏れ防止・病名チェックで返戻リスクを低減',
      '提出前レビューでケース単位の管理が可能',
      'イルミアカルテとの連携でさらに効果UP',
    ],
    icon: FileCheck,
  },
];

export default function OtherProductsSection() {
  return (
    <section id="other-products" className="py-20 md:py-28 px-5 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Editorial heading */}
        <div className="mb-12 md:mb-16 reveal">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-bold tracking-[0.3em] text-[#D98324]">OTHER PRODUCTS</span>
            <div className="h-px flex-1 max-w-[80px] bg-[#D98324]/30" />
          </div>
          <h2 className="text-[1.875rem] sm:text-4xl md:text-4xl font-bold text-[#3D2C1E] leading-tight">
            さらに深く使いたい方へ
          </h2>
          <p className="text-base sm:text-lg text-[#2C3E40]/80 max-w-2xl leading-[2] mt-5">
            イルミアガイドと組み合わせることで、診察から請求まで一気通貫で最適化できます。
          </p>
        </div>

        <div className="reveal reveal-delay-1" role="list" aria-label="その他の製品一覧">
          {otherProducts.map((product, i) => (
            <article
              key={product.id}
              id={product.id}
              role="listitem"
              className={`relative bg-white border border-[#3D2C1E]/15 ${i > 0 ? 'border-t-0' : ''} group hover:bg-[#FAF6F0]/50 transition-colors`}
            >
              {/* Top accent bar (only on first row) */}
              {i === 0 && (
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#D98324]" />
              )}

              <div className="flex flex-col md:flex-row">
                {/* Left: number + product info */}
                <div className="md:w-2/5 p-6 sm:p-8 md:border-r border-b md:border-b-0 border-[#3D2C1E]/10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold tracking-[0.25em] text-[#D98324]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="h-px w-8 bg-[#D98324]/40" />
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#D98324]/10 flex items-center justify-center flex-shrink-0">
                      <product.icon className="w-6 h-6 text-[#D98324]" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#3D2C1E] leading-tight">{product.name}</h3>
                      <p className="text-xs text-[#6B7273] mt-1 tracking-wide">{product.subtitle}</p>
                      <p className="text-sm text-[#3D2C1E]/80 mt-2 leading-relaxed">{product.description}</p>
                      <p className="text-sm font-bold text-[#D98324] mt-3">{product.price}</p>
                    </div>
                  </div>
                </div>

                {/* Right: features + target */}
                <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between gap-5">
                  <div>
                    <div className="text-xs text-[#6B7273] mb-4 tracking-wide">
                      対象 ／ {product.target}
                    </div>
                    <ul className="space-y-2">
                      {product.features.map((feature, fi) => (
                        <li key={fi} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#D98324]" />
                          <span className="text-sm text-[#2C3E40]/85 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/components/sections/OtherProductsSection.tsx
git commit -m "feat: update OtherProductsSection with カルテ and レセプト"
```

---

## Task 6: Update QuoteBanner.tsx

**Files:**
- Modify: `src/app/components/sections/QuoteBanner.tsx`

- [ ] **Step 1: Replace file content**

```tsx
export default function QuoteBanner() {
  return (
    <section className="py-16 md:py-20 px-5 sm:px-6 bg-[#D98324]/6">
      <div className="max-w-3xl mx-auto text-center">
        <blockquote className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#3D2C1E] leading-relaxed">
          「スタッフが説明する。
          <br className="hidden sm:block" />
          AIが品質を守る。
          <br className="hidden sm:block" />
          <span className="text-[#D98324]">患者が、理解して帰れる。</span>」
        </blockquote>
        <p className="text-sm text-[#6B7273] mt-6">説明の印象まで、デザインする。</p>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/components/sections/QuoteBanner.tsx
git commit -m "feat: update QuoteBanner for イルミアガイド"
```

---

## Task 7: Update ResultsSection.tsx

**Files:**
- Modify: `src/app/components/sections/ResultsSection.tsx`

Update stats to real numbers from カルテ internal docs. Add section subtitle to clarify these are カルテ stats.

- [ ] **Step 1: Replace the `results` array and heading**

Replace the `results` array (lines 3–25):

```tsx
const results = [
  {
    icon: TrendingDown,
    stat: '75%',
    statLabel: '削減',
    title: '事務作業を大幅に削減',
    description: 'AIが問診・カルテ・レセプトを一気通貫で自動化。毎日の事務作業を75%削減し、診察に集中できる時間を取り戻します。',
  },
  {
    icon: Zap,
    stat: '3分',
    statLabel: 'でカルテ完成',
    title: 'カルテ作成時間を劇的に短縮',
    description: '診察中の会話をAIがリアルタイムでSOAP形式に記録。診察後のカルテ作成がわずか3分で完了します。',
  },
  {
    icon: RefreshCw,
    stat: '98%',
    statLabel: 'の算定精度',
    title: '請求漏れ・返戻リスクを最小化',
    description: '提出前にAIが算定漏れや病名の不一致をチェック。算定チェック精度98%で、月末の不安を解消します。',
  },
];
```

Also update the section heading in JSX. Find the `<h2>` tag that says `導入効果` and replace with:

```tsx
<h2 className="text-[1.875rem] sm:text-4xl md:text-5xl font-bold text-[#3D2C1E] leading-tight">
  イルミアカルテ<span className="text-[#D98324]"> 導入効果</span>
</h2>
```

- [ ] **Step 2: Commit**

```bash
git add src/app/components/sections/ResultsSection.tsx
git commit -m "feat: update ResultsSection with real カルテ stats"
```

---

## Task 8: Update PricingSection.tsx

**Files:**
- Modify: `src/app/components/sections/PricingSection.tsx`

Restructure to show イルミアガイド plans as primary. Add a note about カルテ below.

- [ ] **Step 1: Replace the `plans` array and section content**

```tsx
import { Check, Star, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'ライト',
    price: '9,800',
    target: 'まず試したい医院様向け',
    note: null,
    features: ['手順登録3件まで', '音声モード対応', 'チャットモード対応', 'メールサポート'],
    recommended: false,
  },
  {
    name: '標準',
    price: '29,800',
    target: '日常運用向け',
    note: null,
    features: ['複数手順・無制限登録', '音声・チャット両対応', '優先サポート', '院内導入支援'],
    recommended: true,
  },
  {
    name: '大規模',
    price: null,
    target: '複数部門・拠点での利用',
    note: '要お問い合わせ',
    features: ['複数部門・拠点対応', 'カスタム運用設計', '専任サポート', '伴走支援'],
    recommended: false,
  },
];

interface PricingSectionProps {
  medicalProductUrl: string;
}

export default function PricingSection({ medicalProductUrl }: PricingSectionProps) {
  return (
    <section id="pricing" className="py-20 md:py-28 px-5 sm:px-6 bg-[#FAF6F0]">
      <div className="max-w-5xl mx-auto">
        {/* Editorial heading */}
        <div className="mb-14 md:mb-20 reveal">
          <h2 className="text-[1.875rem] sm:text-4xl md:text-5xl font-bold mb-6 text-[#3D2C1E] leading-tight">
            イルミアガイド<span className="text-[#D98324]">料金プラン</span>
          </h2>
          <p className="text-base sm:text-lg text-[#2C3E40]/80 leading-[2] max-w-2xl">
            大掛かりなシステム導入は不要。用途に合わせてスモールスタートが可能です。
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 sm:gap-0 max-w-5xl mx-auto mb-12 reveal reveal-delay-1 sm:items-stretch">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative ${
                plan.recommended
                  ? 'bg-[#3D2C1E] text-white order-first sm:order-none sm:scale-105 z-10 shadow-2xl shadow-[#3D2C1E]/20 sm:shadow-2xl border border-[#3D2C1E]'
                  : 'bg-white border border-[#3D2C1E]/15'
              } ${i > 0 ? 'sm:border-t' : ''}`}
            >
              {/* Top accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-[3px] ${plan.recommended ? 'bg-[#F0B254]' : 'bg-[#D98324]'}`} />

              {/* Recommended tab label */}
              {plan.recommended && (
                <div className="absolute -top-[3px] left-1/2 -translate-x-1/2 bg-[#D98324] text-white text-[11px] font-bold tracking-[0.2em] px-4 py-1.5 flex items-center gap-1.5">
                  <Star className="w-3 h-3" />
                  おすすめ
                </div>
              )}

              <div className="p-7 sm:p-9 pt-10 sm:pt-12">
                {/* Plan number + name */}
                <div className="flex items-center gap-3 mb-2">
                  <span className={`text-xs font-bold tracking-[0.25em] ${plan.recommended ? 'text-[#F0B254]' : 'text-[#D98324]'}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className={`h-px w-8 ${plan.recommended ? 'bg-[#F0B254]/40' : 'bg-[#D98324]/40'}`} />
                </div>
                <h3 className={`text-2xl font-bold mb-1 ${plan.recommended ? 'text-white' : 'text-[#3D2C1E]'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-7 ${plan.recommended ? 'text-white/65' : 'text-[#6B7273]'}`}>
                  {plan.target}
                </p>

                {/* Price */}
                <div className={`pb-6 mb-6 border-b ${plan.recommended ? 'border-white/15' : 'border-[#3D2C1E]/10'}`}>
                  {plan.price ? (
                    <div className="flex items-baseline gap-0.5">
                      <span className={`text-sm ${plan.recommended ? 'text-white/55' : 'text-[#6B7273]'}`}>¥</span>
                      <span className={`text-4xl sm:text-5xl font-black ${plan.recommended ? 'text-[#F0B254]' : 'text-[#3D2C1E]'}`}>
                        {plan.price}
                      </span>
                      <span className={`text-sm ${plan.recommended ? 'text-white/55' : 'text-[#6B7273]'}`}>/月</span>
                    </div>
                  ) : (
                    <div className={`text-2xl font-black ${plan.recommended ? 'text-[#F0B254]' : 'text-[#3D2C1E]'}`}>
                      {plan.note}
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((text, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.recommended ? 'text-[#F0B254]' : 'text-[#D98324]'}`} />
                      <span className={`text-sm leading-relaxed ${plan.recommended ? 'text-white/90' : 'text-[#2C3E40]/85'}`}>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center reveal reveal-delay-2">
          <p className="text-sm text-[#6B7273] mb-7 max-w-xl mx-auto leading-relaxed">
            すべてのプランで初期費用0円。まずはライトプランでお試しいただけます。
            イルミアカルテ（¥79,000〜/月）との組み合わせで、診察から請求まで一気通貫で最適化できます。
          </p>
          <a
            href={medicalProductUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 bg-[#D98324] text-white px-9 py-4 sm:px-11 sm:py-5 font-bold text-base sm:text-lg hover:bg-[#c27520] transition-colors"
          >
            無料デモを申し込む
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/components/sections/PricingSection.tsx
git commit -m "feat: update PricingSection with イルミアガイド plans"
```

---

## Task 9: Update ScenariosSection.tsx

**Files:**
- Modify: `src/app/components/sections/ScenariosSection.tsx`

Remove 美容クリニック scenario (PIBU AI reference). Update remaining 3 scenarios to include ガイド benefits.

- [ ] **Step 1: Replace the `scenarios` array and description**

Replace the entire `scenarios` array (lines 3–36):

```tsx
const scenarios = [
  {
    id: 'scenario-naika',
    title: '内科クリニック',
    subtitle: '説明品質を均一化し、診察もスムーズに',
    summary: 'スタッフによる説明のバラつきをAIが解消。院内マニュアルに沿った一定品質の説明を、どのスタッフでも実現できます。',
    points: ['スタッフごとの説明の差をAIが解消', '専門用語を患者向けの言葉に自動変換', '説明時間を短縮し、待合室の混雑を緩和'],
    icon: Stethoscope,
  },
  {
    id: 'scenario-hospital',
    title: '一般病院（外来）',
    subtitle: '診療科をまたいだ説明品質を標準化',
    summary: '診療科ごとに異なる説明内容も、各マニュアルを読み込ませることで対応。部署ごとの品質バラつきを解消できます。',
    points: ['診療科別のマニュアルをそれぞれ設定可能', '音声・チャット対応でどの現場にも馴染む', '新人スタッフもベテランと同じ品質を実現'],
    icon: Activity,
  },
  {
    id: 'scenario-small',
    title: '小規模クリニック（1人院長）',
    subtitle: '少人数でも、説明品質を落とさない運営を',
    summary: 'スタッフが少ない現場でも、AIが説明をサポート。院長一人に負担が集中せず、診察に集中できる環境をつくれます。',
    points: ['最短3分セットアップで導入ハードルが低い', '音声入力で診察を止めずに対応', '新人・アルバイトでも安定した説明が可能'],
    icon: HeartPulse,
  },
];
```

Also update the section description text:

```tsx
<p className="text-base sm:text-lg text-[#2C3E40]/80 leading-[2] max-w-2xl">
  内科クリニックから大規模病院まで、現場の規模に合わせた導入が可能です。
</p>
```

- [ ] **Step 2: Remove unused `Sparkles` import**

At the top of the file, change:

```tsx
import { Check, Stethoscope, Activity, HeartPulse, Sparkles } from 'lucide-react';
```

to:

```tsx
import { Check, Stethoscope, Activity, HeartPulse } from 'lucide-react';
```

- [ ] **Step 3: Commit**

```bash
git add src/app/components/sections/ScenariosSection.tsx
git commit -m "feat: update ScenariosSection — remove 美容クリニック, update scenarios for ガイド"
```

---

## Task 10: Update FaqSection.tsx

**Files:**
- Modify: `src/app/components/sections/FaqSection.tsx`

- [ ] **Step 1: Replace the `faqs` array**

Replace lines 1–22 (the `faqs` array):

```tsx
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
```

- [ ] **Step 2: Commit**

```bash
git add src/app/components/sections/FaqSection.tsx
git commit -m "feat: update FaqSection with イルミアガイド FAQs"
```

---

## Task 11: Update ContactSection.tsx

**Files:**
- Modify: `src/app/components/sections/ContactSection.tsx`

Add イルミアガイド as the first inquiry type option.

- [ ] **Step 1: Update the select options**

Find the `<select>` element and replace its options:

```tsx
<select
  id="inquiryType"
  name="inquiryType"
  className="w-full px-4 py-3.5 text-base border-b-2 border-[#3D2C1E]/15 focus:border-[#D98324] outline-none bg-transparent transition-colors"
>
  <option value="イルミアガイドについて">イルミアガイドについて</option>
  <option value="電子カルテAIについて">電子カルテAIについて</option>
  <option value="レセプトAIについて">レセプトAIについて</option>
  <option value="料金プランについて">料金プランについて</option>
  <option value="デモのお申し込み">デモのお申し込み</option>
  <option value="その他">その他</option>
</select>
```

- [ ] **Step 2: Commit**

```bash
git add src/app/components/sections/ContactSection.tsx
git commit -m "feat: add イルミアガイド inquiry option to ContactSection"
```

---

## Task 12: Update AboutSection.tsx

**Files:**
- Modify: `src/app/components/sections/AboutSection.tsx`

Update the description text to mention the full product lineup.

- [ ] **Step 1: Update the description paragraph**

Find the `<p>` tag in the heading area and replace:

```tsx
<p className="text-sm sm:text-base text-[#2C3E40]/80 max-w-2xl leading-[2]" itemProp="description">
  ILMIAは、患者説明から電子カルテ・レセプトまでをカバーする医療AIをつくっています。
  <br className="hidden sm:block" />
  医師とAIエンジニアが一緒に開発し、現場で本当に使いやすい形にこだわっています。
</p>
```

- [ ] **Step 2: Commit**

```bash
git add src/app/components/sections/AboutSection.tsx
git commit -m "feat: update AboutSection description"
```

---

## Task 13: Wire up App.tsx — swap sections and reorder

**Files:**
- Modify: `src/app/App.tsx`
- Delete: `src/app/components/sections/ReceiptSection.tsx`

New render order:
`HeroSection → AboutSection → PainPointsSection → PlatformOverview → GuideSection → OtherProductsSection → QuoteBanner → ResultsSection → PricingSection → FaqSection → ScenariosSection → CtaSection → ContactSection`

- [ ] **Step 1: Update App.tsx imports and render**

Replace the entire import block and JSX render in `src/app/App.tsx`:

```tsx
import { useState, useEffect } from 'react';
import { useReveal } from './hooks/useReveal';
import AnnouncementBanner from './components/sections/AnnouncementBanner';
import Header from './components/sections/Header';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import PainPointsSection from './components/sections/PainPointsSection';
import PlatformOverview from './components/sections/PlatformOverview';
import GuideSection from './components/sections/GuideSection';
import OtherProductsSection from './components/sections/OtherProductsSection';
import QuoteBanner from './components/sections/QuoteBanner';
import ResultsSection from './components/sections/ResultsSection';
import PricingSection from './components/sections/PricingSection';
import FaqSection from './components/sections/FaqSection';
import ScenariosSection from './components/sections/ScenariosSection';
import CtaSection from './components/sections/CtaSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/sections/Footer';
import MobileFloatingCta from './components/sections/MobileFloatingCta';
import NotFound from './components/sections/NotFound';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const medicalProductUrl = 'https://medical.ilmiaco.com';

  const isNotFound =
    typeof window !== 'undefined' && window.location.pathname !== '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useReveal();

  if (isNotFound) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-surface relative overflow-hidden" itemScope itemType="https://schema.org/WebPage">
      <AnnouncementBanner medicalProductUrl={medicalProductUrl} scrolled={scrolled} />
      <Header scrolled={scrolled} />

      <main id="main-content" role="main">
        <HeroSection medicalProductUrl={medicalProductUrl} />
        <AboutSection />
        <PainPointsSection />
        <PlatformOverview />
        <GuideSection />
        <OtherProductsSection />
        <QuoteBanner />
        <ResultsSection />
        <PricingSection medicalProductUrl={medicalProductUrl} />
        <FaqSection />
        <ScenariosSection />
        <CtaSection medicalProductUrl={medicalProductUrl} />
        <ContactSection />
      </main>

      <Footer medicalProductUrl={medicalProductUrl} />
      <MobileFloatingCta />
    </div>
  );
}
```

- [ ] **Step 2: Delete ReceiptSection.tsx**

```bash
rm src/app/components/sections/ReceiptSection.tsx
```

- [ ] **Step 3: Build check**

```bash
npm run build
```

Expected: build succeeds with no TypeScript errors. If errors appear, fix the type mismatch before proceeding.

- [ ] **Step 4: Commit**

```bash
git add src/app/App.tsx
git add -u src/app/components/sections/ReceiptSection.tsx
git commit -m "feat: wire up GuideSection, remove ReceiptSection, update section order"
```

---

## Task 14: Final verification + push

- [ ] **Step 1: Run dev server and visually verify**

```bash
npm run dev
```

Open `http://localhost:5173` and check:
- Hero shows イルミアガイド copy (not カルテ/レセプト)
- PlatformOverview shows ガイド left / カルテ right
- GuideSection shows 4 ガイド feature cards
- OtherProductsSection shows カルテ + レセプト (not old products)
- QuoteBanner shows updated quote
- ResultsSection shows 75% / 3分 / 98% with イルミアカルテ title
- PricingSection shows ライト(¥9,800) / 標準(¥29,800) / 大規模(要問い合わせ)
- ScenariosSection shows 3 scenarios (no 美容クリニック)
- FAQ shows ガイド-related questions
- Contact dropdown starts with イルミアガイドについて
- No TypeScript errors in console

- [ ] **Step 2: Push all changes**

```bash
git push
```
