# Homepage Content Update — Design Spec

**Date:** 2026-04-14  
**Status:** Approved

---

## Background

The current homepage (ilmiaco.com) is focused on イルミアカルテ (AI EMR) + イルミアレセプト (Receipt AI) as primary products. However, company data shows the #1 priority product is **イルミアガイド** (Patient Explanation AI) — the primary Facebook ads product, lowest entry barrier, and most likely to generate early paid contracts. The company has a 3-month runway (until June 2026), so conversion is critical.

---

## Goal

Reposition the homepage to center **イルミアガイド** as the primary product, while keeping カルテ/レセプト visible as secondary products. Remove irrelevant content. Update all stats and text to match actual company data from internal documents.

**Design language stays the same** — no color, typography, or layout system changes.

---

## Section-by-Section Changes

### 1. Hero Section
**Change:** Full content update.
- Tagline badge: `患者説明AI × スタッフの属人化解消`
- Headline: イルミアガイド focused (e.g. 「スタッフの説明を、AIが支える。」)
- Subtext: 最短3分セットアップ、音声・チャット対応、専門用語を自動変換
- Bullet points: ガイドの3つの強み (属人化解消 / ワークフローを止めない / 患者向け言葉に自動変換)
- CTA: 無料デモを申し込む (same)

### 2. PainPoints Section
**Change:** Update pain points to reflect イルミアガイド target customer pain.
- Remove: カルテ記載・請求系 pain points
- Add: スタッフによる説明バラつき / 説明時間が長く待合が混む / 新システム導入への不安 / 専門用語が伝わらない問題

### 3. EmrSection → GuideSection (full replace)
**Change:** Replace entirely with イルミアガイド feature section.
- Section title: 「説明が伝わる。現場が止まらない。」
- Feature 01: 院内マニュアル読み込み（最短3分セットアップ）
- Feature 02: 音声・チャット対応（ワークフローを止めない）
- Feature 03: 専門用語→患者向け表現に自動変換
- Feature 04: 属人化解消・院内方針に沿った説明品質を担保

### 4. ReceiptSection → OtherProducts Section (full replace)
**Change:** Remove the 4-card receipt feature section. Replace with compact "その他の製品" block showing:
- **イルミアカルテ** — 統合型AI電子カルテ（¥79,000〜/月）
- **イルミアレセプト** — AIレセプト点検（¥79,000〜/月）
- Design: 2-column tiles, editorial style, brief description + CTA to contact

### 5. Results Section
**Change:** Move to appear AFTER OtherProducts (so stats are clearly associated with カルテ, not ガイド). Update stats to actual numbers from internal docs.
- Stat 1: `75%` — 事務作業削減
- Stat 2: `3分` — カルテ作成時間
- Stat 3: `98%` — 算定チェック精度
- Section title: 「イルミアカルテ 導入効果」to make association clear

### 6. Pricing Section
**Change:** Restructure to show イルミアガイド as primary, カルテ as secondary.
- Primary plans: ライト (¥9,800/月) + 標準 (¥29,800/月) + 大規模（要問い合わせ）
- Secondary note: イルミアカルテ (¥79,000〜) — link/mention below main pricing
- Keep same card design/layout

### 7. Scenarios Section
**Change:** Remove 美容クリニック scenario (references PIBU AI which is not a current product). Keep 3 scenarios:
- 内科クリニック
- 一般病院（外来）
- 小規模クリニック（1人院長）
- Update scenario text to focus on ガイド benefits where relevant

### 8. FAQ Section
**Change:** Update questions to reflect イルミアガイド as primary product.
- Add: セットアップにどのくらいかかりますか？ (最短3分)
- Add: 既存の院内マニュアルをそのまま使えますか？
- Update: existing カルテ-specific Q&A → ガイド-specific
- Keep security/support FAQs (still relevant)

### 9. Contact Section
**Change:** Add イルミアガイド to inquiry type dropdown.
- New first option: `イルミアガイドについて`
- Keep: 電子カルテAIについて / レセプトAIについて / 料金プランについて / デモのお申し込み / その他

### 10. About Section
**Change:** Minor update only.
- Company info table: already accurate (設立 2025年9月, 代表 フッサム ワファ, 所在地 大阪市北区梅田)
- Description text: update to mention medical AI platform (ガイド + カルテ ecosystem)
- No photo/layout changes

---

## What Gets Removed

| Item | Reason |
|---|---|
| ReceiptSection (4 feature cards) | Replaced by compact OtherProducts block |
| 美容クリニック scenario | References PIBU AI (not a current product) |
| イルミアブック mention | Free tool, not a revenue product — excluded to keep focus |
| EmrSection (カルテ feature cards) | Replaced by GuideSection |

---

## What Does NOT Change

- Design language (colors, typography, spacing, editorial style)
- Contact form structure (add one dropdown option only)
- About section layout and photo
- Header / Footer
- Page routing and component architecture

---

## Pre-Implementation Steps

1. Git push current uncommitted changes
2. Add `kumano/` to `.gitignore`

---

## Success Criteria

- Homepage hero and primary sections reflect イルミアガイド as the #1 product
- All stats/numbers match actual kumano data
- No references to PIBU AI or irrelevant scenarios
- Design language unchanged
- Website builds without errors
