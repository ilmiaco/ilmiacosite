# LUMINQ

## AI Clinic Operating System | AI診療オペレーティングシステム

**"診察から請求まで、AIが漏れなく最適化"**

An integrated medical AI platform that combines consultation AI, electronic medical records (EMR), and receipt/billing optimization to accelerate clinic operations. LUMINQ's Receipt AI automatically suggests missing diagnoses with verified SSK/ICD-10 codes, unlocks higher-value billing items, and keeps master data current — turning every consultation into maximum legitimate reimbursement.

問診AI・電子カルテ・レセプト最適化を統合した医療AIプラットフォームです。レセプトAIが病名の漏れを自動検出し、正確なSSK・ICD-10コードと共に提案。算定可能な管理料・指導料を最大化し、マスターデータを自動更新して常に最新の状態を維持します。

---

## 概要 (Japanese Summary)

LUMINQは、クリニック向けのAI搭載オペレーティングシステムです。

- **電子カルテAI** — 患者管理、リアルタイム音声認識によるAI診察、SOAPノート自動生成
- **レセプト支援AI** — 医科レセプト向けの根拠ベース支援ワークスペース。AI病名提案、加算提案エンジン、病名チェック、UKE/ORCA提出、Aceチェッカー連携、知見蓄積ループ、マスター自動同期、AI改定分析を一元化
- **コンサルタント設定** — 専門科・問診スタイル・優先度・コミュニケーション設定のカスタマイズ

---

## Table of Contents / 目次

- [Features / 機能](#features--機能)
  - [EMR AI (電子カルテAI)](#emr-ai-電子カルテai)
  - [Receipt Support AI (レセプト支援AI)](#receipt-support-ai-レセプト支援ai)
  - [Consultant Profile & Settings](#consultant-profile--settings-コンサルタント設定)
  - [Access Control & Plans](#access-control--plans-アクセス制御)
- [Tech Stack / 技術スタック](#tech-stack--技術スタック)
- [Project Structure / プロジェクト構成](#project-structure--プロジェクト構成)
- [AI Models & Integrations](#ai-models--integrations)
- [Getting Started / はじめに](#getting-started--はじめに)
- [Available Scripts / スクリプト一覧](#available-scripts--スクリプト一覧)
- [API Reference / API リファレンス](#api-reference--apiリファレンス)
- [Architecture / アーキテクチャ](#architecture--アーキテクチャ)
- [Firestore Collections](#firestore-collections)
- [Deployment / デプロイ](#deployment--デプロイ)

---

## Features / 機能

### EMR AI (電子カルテAI)

A complete electronic medical records system with AI-powered consultation support.

#### Dashboard (ダッシュボード)

- Real-time statistics: total patients, consultations today, draft notes, finalized notes this week
- Recent patients list with status indicators (needs follow-up, scheduled, completed)
- Activity charts for tracking consultation trends over time
- Quick actions panel and system alerts

#### Patient Management (患者管理)

- Create, edit, and delete patient records with structured medical data
- Search patients by name, furigana (reading), or phone number
- Filter by blood type (A, B, O, AB)
- Grid and list view modes with color-coded avatars
- Patient detail pages with quick stats (total notes, drafts, finalized, latest diagnosis)
- Medical history fields: allergies, chronic conditions, current medications

#### Pre-Consultation Questionnaire (問診票)

- Configurable questionnaire links shared with patients before visits
- Patients fill out symptoms, medical history, and chief complaint via web form
- Responses are linked to the patient record and available during consultation
- Supports multiple questionnaire templates per clinic

#### Live AI Consultation (AI診察)

Real-time AI-assisted medical consultation using voice recognition and streaming AI analysis.

- **Voice Input**: Real-time speech-to-text via AmiVoice medical speech recognition engine
  - WebSocket-based streaming with speaker diarization (doctor vs patient)
  - Medical terminology optimized (`-a-medical` engine)
  - Interim and final transcript segments displayed in real-time
- **AI Medical Assistant** provides streaming suggestions as the consultation progresses:
  - **Diagnosis suggestions** with confidence levels (high/medium/low)
  - **Follow-up questions** categorized as: clarification, rule-out, severity, history
  - **Test recommendations** prioritized as: essential, recommended, optional
  - **Treatment plans** including: medication, procedure, referral, lifestyle, observation
  - **Detected symptoms** tracked throughout the conversation
- **Patient context awareness**: AI considers allergies, chronic conditions, current medications, and prior visit history
- Consultation sessions are recorded and used as input for SOAP note generation

#### SOAP Notes (SOAPノート)

Structured clinical documentation generated from consultation transcripts.

- **Automatic generation**: Gemini AI transforms consultation transcript + questionnaire data into structured SOAP format
  - **S (Subjective)**: Chief complaint, history of present illness, review of systems
  - **O (Objective)**: Vital signs, physical examination findings, test results
  - **A (Assessment)**: Primary diagnosis, differential diagnoses with ICD-10 codes
  - **P (Plan)**: Medications prescribed, procedures ordered, tests ordered, follow-up instructions, patient education
- Draft and finalized workflow with human review gate
- Browse all records with search and status filtering (all, draft, finalized)
- Notes sorted by date with patient name, diagnosis, and status badges
- Finalized SOAP notes can feed into receipt case creation (EMR-linked intake)

#### AI Consultant Settings (AI設定)

Fine-tune the AI assistant's behavior per practitioner.

- Medical specialty selector (内科, 外科, 小児科, etc.)
- Interview style configuration:
  - Question depth: comprehensive, focused, adaptive
  - Follow-up intensity: high, medium, low
- Counseling approach selector
- Priority ranking for AI suggestions (cost effectiveness, latest technology, downtime minimization, comprehensive care, proven results)
- Communication preference toggles (technical terms, analogies, results focus, safety emphasis, pricing details)
- Custom instructions textarea (up to 2,000 characters, Japanese)

---

### Receipt Support AI (レセプト支援AI)

Agent-led Japanese medical billing workspace for `医科` (medical) claims. Covers the full lifecycle from case creation through submission, post-submission outcome tracking, and continuous improvement through knowledge accumulation.

#### Scope

| Code | Type | Status |
| --- | --- | --- |
| `medical` | 医科 (Medical) | Supported |

`DPC`, `歯科`, `調剤`, `訪問看護` are not part of the current workflow.

#### Receipt Screens

| Route | Screen | Purpose |
| --- | --- | --- |
| `/receipt` | Inbox | Open/completed cases with filtering by month, stage, source |
| `/receipt/cases/:caseId` | Case Workspace | Evidence gaps, candidates, suggestions, citations, audit trail |
| `/receipt/import` | Import | CSV/JSON parsing, column mapping, preview, bulk case creation |
| `/receipt/settings` | Settings | Place profile, facility info, clinic aliases, import templates, knowledge rules, master sync, revision analysis |
| `/receipt/help` | Help | Comprehensive system documentation and glossary |

#### Initial Setup (初期設定)

Before using receipt support, configure:

1. **Place Profile** (`/receipt/settings`):
   - Facility name and place ID
   - Medical capabilities (imaging, ultrasound, ECG, endoscopy, rehabilitation, etc.)
   - Pathway exclusions (billing items this facility never performs)
   - Facility size: clinic (診療所), hospital_small (<100 beds), hospital_medium (100-200 beds), hospital_large (>200 beds) — affects point values for management fees
   - Facility code (医療機関コード, 7 digits), prefecture code (都道府県コード), point table code (点数表番号)
2. **Submission Method**:
   - `UKE`: Direct UKE file export for manual submission
   - `ORCA`: API-based submission to ORCA billing server (requires ORCA endpoint configuration)
3. **Clinic Settings**: Service aliases and import templates for CSV/JSON intake

#### Case Lifecycle

```text
Intake → Open → [AI病名提案 → Accept/Dismiss] → [Resolve evidence gaps] → Approved → Export/Submit
                        ↓ (cascade)                                                       ↓
                 Re-evaluate candidates                                          Outcome tracking
                 + new billing suggestions                                            ↓
                                                                          Returned/Deducted → Reopen
                                                                                      ↓
                                                                          Knowledge rule created
```

**Stages**: `open` → `approved` → `exported` → `accepted` / `returned` / `deducted`

#### Case Creation (ケース作成)

Two intake methods:

1. **EMR-Linked**: Select a patient and finalized SOAP note. The system extracts services from the clinical record using Gemini AI (gemini-2.0-flash) and creates a case with pre-populated diagnoses and performed services.
2. **CSV/JSON Import**: Upload structured billing data via `/receipt/import` with column mapping and preview before case creation.

#### AI Service Extraction

When creating a case from EMR data, Gemini AI analyzes the SOAP note to extract billable services:

**Extracted as services**:

- Tests (blood tests, antigen tests, ECG, imaging)
- Procedures (wound care, inhalation, injections)
- Prescriptions and medications
- Medical management fees (指導料, 管理料)

**NOT extracted** (explicitly excluded):

- General lifestyle advice (rest, hydration, hand washing)
- Treatment policy descriptions (conservative treatment, observation)
- Patient instructions (sick day management, dietary restrictions)
- Clinical observations and symptom progression notes

#### Case Workspace (ワークスペース)

The workspace displays:

- **Evidence Gaps**: Missing information needed for billing (e.g., missing diagnosis documentation, missing order details)
- **Supported Candidates**: Billing items with sufficient evidence, including official citations
- **Needs Evidence Candidates**: Items that could be billed if additional documentation is provided
- **Excluded Candidates**: Items excluded due to facility limitations, conflicting rules, or insufficient evidence
- **AI Byomei Suggestions**: Proactive recommendations for missing diagnoses with verified SSK/ICD-10 codes (see AI Byomei Suggestion below)
- **AI Billing Suggestions**: Proactive recommendations for additional billable items (see Suggestion Engine below)
- **Byomei Check**: Order-time diagnosis validation results
- **Audit Trail**: Timestamped log of all case actions

#### AI Suggestion Engine (加算提案エンジン)

After evaluating performed services, a rule engine inspects diagnoses and service patterns to recommend additional billing items that may have been missed.

**Current Rules**:

| Rule | Target Fee | Trigger | Points |
| --- | --- | --- | --- |
| `kasan_tokutei` | 特定疾患療養管理料 | Outpatient + qualifying 主病 (32 conditions: TB, neoplasms, thyroid, IHD, arrhythmia, HF, CVD, COPD, asthma, ulcers, etc.) | 225/147/87 (by facility size) |
| `kasan_lifestyle` | 生活習慣病管理料(II) | Outpatient + 主病 is diabetes/hypertension/dyslipidemia | 333 |
| `kasan_prescription` | 処方箋料 | Any visit + medication service + no prescription billed | varies |
| `kasan_dispensing` | 調剤料 | Prescription present + no dispensing fee | varies |
| `kasan_pain` | 疼痛管理料 | Pain assessment activity present | varies |
| `kasan_psych_therapy` | 精神科外来治療 | Visit + psychiatric diagnosis | varies |
| `kasan_epilepsy` | てんかん指導料 | Epilepsy diagnosis as 主病 | varies |
| `kasan_allergy` | アレルギー指導料 | Allergy diagnosis as 主病 | varies |
| `kasan_medication_guidance` | 薬剤管理指導料 | Prescription + medication review activity | varies |
| `kasan_referral` | 紹介状料 | Referral information in case facts | varies |

**Key design decisions**:

- `kasan_tokutei` and `kasan_lifestyle` are **mutually exclusive** (cannot bill both)
- Reflects **令和6年 (2024) revision**: diabetes, hypertension, dyslipidemia moved from 特定疾患 to 生活習慣病管理料(II)
- Only triggers on **主病** (primary disease), not secondary/differential diagnoses
- Respects facility capabilities, pathway exclusions, and `excluded_with` conflicts
- Staff can **accept** (adds to candidates + re-evaluates) or **dismiss** (with optional reason) each suggestion

#### AI Byomei Suggestion (AI病名提案)

> **算定漏れの最大原因は「病名の付け忘れ」。LUMINQが自動で検出し、正確なコード付きで提案します。**

AI-powered diagnosis suggestion engine that identifies missing 病名 (disease names) to maximize legitimate reimbursement. This is a separate Gemini call from the extractor — extraction is factual, suggestion is inferential.

**How it works**:

1. After evidence extraction and candidate evaluation, Gemini AI analyzes the clinical record
2. Suggests up to 5 病名 per case, each with:
   - Official 傷病名マスター SSK code (7-digit)
   - ICD-10 code (validated)
   - Clinical basis and reasoning in Japanese
   - Related orders and billing candidates
   - Confidence score (0-1)
3. Staff reviews and accepts or dismisses each suggestion

**Two suggestion strategies**:

| Strategy | Example | Benefit |
| --- | --- | --- |
| **Order-implied** | HbA1c ordered but no diabetes diagnosis → suggest 「2型糖尿病」 | Prevents 返戻 (claim return) |
| **Billing optimization** | Patient has diabetes → suggest to unlock 「生活習慣病管理料(II)」(333点) | Maximizes legitimate revenue |

**Code accuracy — multi-tier validation**:

Every suggested 病名 code passes through a 4-tier validation pipeline:

1. **Exact match** — direct lookup against the full 傷病名マスター (~30,000 entries)
2. **Fuzzy match** — normalized matching handles katakana/hiragana variation, fullwidth/halfwidth characters, spacing differences
3. **Curated fallback** — 160+ hardcoded common 病名 with verified SSK codes, ICD-10 codes, and aliases, ensuring the system works even before master data is synced
4. **AI grounding validation** — for unresolved codes, Gemini with Google Search grounding validates against official SSK sources in real-time

**Cascade recomputation**: When a staff member accepts a suggested 病名, the system automatically:

- Adds the diagnosis to the clinical record
- Re-evaluates all billing candidates (conditional items may become supported)
- Generates new billing suggestions (e.g., accepting 「糖尿病」 triggers 生活習慣病管理料 suggestion)

#### Byomei Check (病名チェック)

Order-time diagnosis validation that runs when a SOAP note is finalized:

- Each order (medication, procedure, test) is checked against the billing catalog
- If a matched pathway requires a documented diagnosis and none is found, a warning is generated
- Non-blocking — SOAP finalization succeeds regardless; warnings are surfaced in the receipt case workspace
- Results stored per SOAP note for reference during receipt review

#### Export & Submission (提出)

Two export methods based on facility configuration:

**UKE File Export** (for non-ORCA facilities):

- Generates standard UKE format (CSV records with record type identifiers)
- Record types: IR (facility), RE (common), HO (insurer), SY (disease names), SI (services), IY (medications), CO (comments), GO (totals)
- Encoding: UTF-8 (online submission) or Shift_JIS (media submission)
- Uses official レセプト電算処理マスターコード for all codes (not internal IDs)
- Validates facility_code, prefecture_code, and other required fields before export

**ORCA Submission** (for ORCA facilities):

- Direct API submission to ORCA billing server
- Supports both HAORI API (recommended) and Legacy API
- Authentication modes: basic auth or token-based
- Optional mTLS certificate support for secure connections
- Submission tracking with status polling

#### Checker Integration (チェッカー連携)

Two-pronged approach for claim validation:

**Ace File-Loop** (for clinics using Ace checker):

1. Export UKE file (which Ace reads directly)
2. Staff runs Ace externally
3. Import Ace results back into the system (manual entry or CSV import)
4. Issues are linked to specific cases and tracked to resolution

**Built-in SSK Rules**:

- Subset of official 受付・事務点検ASP check rules
- Validates 病名×診療行為 combination validity
- Checks 算定回数 limits and 併算定不可 (incompatible billing combinations)

Checker data model:

- `CheckerRun`: Groups of cases checked together with status tracking
- `CheckerIssue`: Individual issues with severity (error/warning), resolution status, and notes

#### Knowledge Loop (知見蓄積)

Automatic learning from claim outcomes:

1. When a case results in **返戻** (returned) or **減点** (deducted), the system auto-generates a `ReceiptKnowledgeRule`
2. The rule captures the pattern: which pathway + diagnosis combination caused the rejection
3. Future cases matching the same pattern receive **compliance warnings** during evaluation
4. Rules can be toggled active/inactive from settings
5. Checker issues can also be saved as knowledge rules

This creates an organizational memory that improves billing accuracy over time.

#### Master Sync (マスター同期)

> **厚労省マスターを自動取得・自動更新。改定時の手動作業を完全排除。**

Keep billing codes and point values current with official revisions — automatically.

- **診療行為マスター** (service codes and points)
- **傷病名マスター** (disease name codes, ~30,000 entries)
- **薬価マスター** (drug prices and codes)

**Automatic sync** (default — no manual action required):

1. Monthly scheduled Cloud Function checks the official MHLW download page (`shinryohoshu.mhlw.go.jp`)
2. Compares remote version against the last synced version
3. If a newer revision is found: downloads the CSV, decodes from Shift-JIS, parses, and stores in Firestore
4. In-memory code maps are updated with new codes and point values
5. Sync history records version, date, record count, and source URL

**Manual sync** (also available):

- Admin triggers sync from settings page or via the `receiptMasterSyncManual` API endpoint
- Supports CSV upload or automated crawl of the MHLW website

Medical fee revisions (診療報酬改定) happen approximately every 2 years. The monthly check is low-cost (one HTTP request) and catches revisions promptly, including mid-cycle corrections.

**Curated fallback data**: Even before the first sync, the system includes 160+ hardcoded common 病名 with verified SSK/ICD-10 codes so billing validation works from day one.

#### AI Revision Analyzer (AI改定分析)

Gemini-powered analysis of 診療報酬 revision announcements:

1. Admin pastes revision text (e.g., 厚労省 改定概要)
2. Gemini AI extracts structured changes: point updates, added/removed diseases, new exclusion rules, new billing conditions
3. System generates **draft** rule proposals with confidence scores
4. Each proposed change requires **human approval** before being applied
5. Approved changes update the catalog and suggestion engine rules

Change types: `point_update`, `disease_add`, `disease_remove`, `exclusion_add`, `rule_add`, `rule_modify`

#### Billing Catalog

200+ billing pathways organized by category:

| Category | Examples |
| --- | --- |
| `consultation` | 初診料, 再診料, 外来診療料 |
| `management` | 特定疾患療養管理料, 生活習慣病管理料(I/II), 各種指導料 |
| `prescription` | 処方箋料, 調剤料, 処方料 |
| `injection` | 皮下注射, 静脈注射, 点滴注射 |
| `test_general` | 血液検査, 尿検査, 生化学検査 |
| `rapid_antigen_test` | インフルエンザ, アデノウイルス, A群β溶連菌, RSウイルス, ノロウイルス, マイコプラズマ |
| `imaging` | X線, CT, MRI, 超音波 |
| `procedure` | 創傷処置, 消炎鎮痛処置, 各種手術 |
| `rehabilitation` | 運動器リハ, 脳血管リハ, 呼吸器リハ |
| `psychiatry` | 精神科専門療法, 通院精神療法 |
| `home_care` | 在宅患者訪問診療, 訪問看護指示料 |
| `endoscopy` | 上部消化管内視鏡, 下部消化管内視鏡 |

Each pathway defines: service code, Japanese name, unit points, evaluation criteria, required capabilities, and exclusion rules.

#### Post-Submission Workflow

After export/submission:

| Outcome | Action |
| --- | --- |
| **査定** (Accepted) | Case marked complete |
| **返戻** (Returned) | Case reopened with evidence gaps + knowledge rule created |
| **減点** (Deducted) | Deduction recorded + knowledge rule created + case available for appeal |

---

### Consultant Profile & Settings (コンサルタント設定)

Customize AI behavior and consultation preferences per practitioner.

- Medical specialty selector (専門科)
- Interview style configuration (question depth, follow-up intensity)
- Counseling approach selector
- Priority ranking for AI suggestions
- Communication preference toggles
- Custom instructions textarea (up to 2,000 characters, Japanese)

---

### Access Control & Plans (アクセス制御)

Plan-based feature gating for modular access.

| Plan Code | EMR AI | Receipt AI |
| --- | --- | --- |
| `emr` | Yes | No |
| `receipt` | No | Yes |
| `both` | Yes | Yes |

- Server-side enforcement via `requireFeature()` middleware on Cloud Functions
- Client-side enforcement via `RequireFeature` component and `useAccessStore`
- Plan data stored in Firestore `consultant_profiles` collection
- Backward-compatible: missing plan defaults to `both`
- Access denied page with upgrade CTA for gated features

---

### Billing & Pricing (料金プラン)

> **使った分だけ、見える化。** 音声AI利用量をリアルタイムで計測し、月額基本料＋従量制の明瞭な料金体系で安心してご利用いただけます。

#### Plans

| Plan | Monthly Price | Included Minutes | Overage Rate | Target |
| --- | --- | --- | --- | --- |
| **Clinic** | ¥79,000 | 6,000 min (100h) | ¥10/min | クリニック・診療所 |
| **Hospital** | ¥299,000 | 24,000 min (400h) | ¥9/min | 中規模病院 |
| **Other** | ¥699,000 | 60,000 min (1,000h) | ¥8/min | 大規模病院・特殊施設 |

- All plans include `no_logging` speech mode — audio is never stored or logged
- Default plan: `clinic` (applied automatically on signup)
- Plan changes take effect immediately; usage is tracked per calendar month
- Soft overage billing — no hard cutoff, service continues beyond included minutes

#### Usage Metering

Speech recognition usage is metered in real time via heartbeat events from the client:

| Event | Behavior |
| --- | --- |
| `start` | Opens or resumes an audio session for the current month (idempotent) |
| `tick` | Accumulates delta: `min(max(client_ts - last_seen_at, 0), 45s)` — capped at 45s per tick to prevent stale-tab inflation |
| `stop` | Closes the session; no-op if session doesn't exist |

- `used_minutes = ceil(total_seconds / 60)` — always rounded up
- Monthly usage stored in `billing_usage_monthly` collection
- Session-level detail stored in `billing_audio_sessions` collection
- Estimated bill: `plan_price_yen + overage_minutes × overage_rate_yen_per_min`

#### Billing UI

The consultant profile page includes a real-time billing dashboard:

- Plan selector with instant switching
- Usage progress bar (used / included minutes)
- Overage indicator when usage exceeds plan allowance
- Estimated monthly bill in yen

---

### Additional Features

- **Progressive Web App (PWA)** — installable on mobile devices with offline capabilities
- **Internationalization** — full Japanese language support via i18next
- **Responsive Design** — sidebar navigation on desktop, bottom navigation on mobile
- **Authentication** — email/password login and signup via Firebase Auth
- **Marketing Landing Page** — feature highlights, testimonials, performance metrics, CTA buttons

---

## Tech Stack / 技術スタック

| Layer | Technology |
| --- | --- |
| **Frontend** | React 19, TypeScript 5.9, Vite 7, Tailwind CSS 4 |
| **State Management** | Zustand 5 |
| **Routing** | React Router DOM 7 |
| **UI/Animation** | Framer Motion, React Icons, Recharts |
| **i18n** | i18next (Japanese) |
| **Backend** | Firebase Cloud Functions v2, Express, Node 22 |
| **AI / LLM** | Google Gemini (2.0 Flash, 3.0 Flash Preview), LangChain |
| **Speech-to-Text** | AmiVoice (WebSocket, medical engine) |
| **Vector Search** | MongoDB Atlas Vector Search, Gemini Embedding 001 |
| **Database** | Cloud Firestore |
| **Storage** | Firebase Cloud Storage |
| **Hosting** | Firebase Hosting |
| **Auth** | Firebase Authentication |
| **Testing** | Vitest, React Testing Library, MSW |
| **Image Processing** | Sharp |

---

## Project Structure / プロジェクト構成

```text
LUMINQ/
├── src/                            # Frontend source
│   ├── components/                 # Shared UI components
│   │   ├── layout/                 #   Layout (Sidebar, Header, PageHeader)
│   │   ├── ui/                     #   Primitives (Button, Modal, Input, Card, Badge, Tabs)
│   │   ├── skeletons/              #   Loading skeletons
│   │   └── AuthForms.tsx           #   Login / Signup forms
│   ├── modules/
│   │   ├── emr/                    # EMR module
│   │   │   ├── pages/              #   Dashboard, PatientList, PatientDetail, Records
│   │   │   │                       #   QuestionnaireLinksTab, QuestionnaireResponseTab
│   │   │   ├── consultation/       #   LiveConsultation, speech recognition hooks
│   │   │   ├── store/              #   patientStore, soapStore
│   │   │   └── services/           #   API client services
│   │   ├── receipt/                # Receipt support module
│   │   │   ├── pages/              #   Inbox, Case, Import, Settings, Help
│   │   │   ├── services/           #   Receipt support API client
│   │   │   ├── types/              #   Case / candidate / suggestion type definitions
│   │   │   └── utils/              #   Import parsing and labels
│   │   └── access/                 # Access control
│   │       ├── RequireFeature.tsx   #   Route guard component
│   │       ├── useAccessStore.ts    #   Plan state management
│   │       └── ModuleChooserPage.tsx
│   ├── consultant/                 # AI assistant UI components
│   │   └── AssistantPanel.tsx       #   Real-time AI suggestion display
│   ├── pages/                      # Top-level pages
│   │   ├── MarketingHomePage.tsx
│   │   └── ConsultantProfilePage.tsx
│   ├── store/authStore.ts          # Auth state (Zustand)
│   ├── i18n/                       # Internationalization
│   │   ├── config.ts
│   │   └── ja.json                 #   Japanese translations
│   ├── config/firebase.ts          # Firebase initialization
│   ├── App.tsx                     # Root component with routing
│   └── main.tsx                    # Entry point
│
├── functions/                      # Firebase Cloud Functions
│   └── src/
│       ├── functions/              # Standalone functions
│       │   ├── admin/              #   Health check
│       │   └── profile/            #   getProfile, saveProfile
│       ├── modules/
│       │   ├── emr/functions/      # EMR cloud functions
│       │   │   ├── amivoice/       #   AmiVoice token generation
│       │   │   └── assistant/      #   AI consultation suggestion engine
│       │   ├── receipt/            # Receipt cloud functions
│       │   │   ├── functions/      #   Cases, place-profile, clinic-settings, import, schema,
│       │   │   │                   #   master-sync (scheduled + manual)
│       │   │   └── services/       #   orchestrator, extractor, evaluator, catalog,
│       │   │                       #   suggestionEngine, byomeiSuggester, byomeiChecker,
│       │   │                       #   ukeExporter, orcaConnector, checkerService,
│       │   │                       #   masterSync, masterCrawler, masterCodeMap,
│       │   │                       #   curatedByomei, revisionAnalyzer, citationService,
│       │   │                       #   repository
│       │   └── access/             #   Feature guard, plan resolver
│       ├── services/               # Shared services (vector store, Gemini, etc.)
│       └── index.ts                # Functions entry point
│
├── public/                         # Static assets, PWA icons, manifest
├── docs/                           # Documentation
├── firebase.json                   # Firebase hosting & functions config
├── firestore.rules                 # Firestore security rules
├── storage.rules                   # Storage security rules
├── vite.config.ts                  # Vite + PWA configuration
├── tailwind.config.js              # Custom theme (lavender, mint, peach, rose, sky, cream)
└── package.json                    # Dependencies & scripts
```

---

## AI Models & Integrations

### Gemini Models

| Model | Usage | Purpose |
| --- | --- | --- |
| `gemini-3-flash-preview` | EMR Consultation | Real-time medical AI suggestions during live consultations |
| `gemini-3-flash-preview` | SOAP Generation | Transform consultation transcript into structured SOAP notes |
| `gemini-3-flash-preview` | Byomei Suggestion | AI-powered 病名 suggestion with billing optimization |
| `gemini-3-flash-preview` | Byomei Grounding | Google Search grounding to validate SSK/ICD-10 codes |
| `gemini-2.0-flash` | Receipt Extraction | Extract billable services from SOAP clinical records |
| `gemini-2.0-flash` | Revision Analysis | Analyze 診療報酬 revision texts and propose rule changes |
| `text-embedding-004` | Vector Embeddings | Generate embeddings for medical knowledge vector search |

### AmiVoice Speech Recognition

- Medical-optimized speech engine (`-a-medical`)
- WebSocket streaming with real-time interim results
- Speaker diarization (doctor / patient separation)
- Token-based authentication (one-time tokens issued via Cloud Function)

### MongoDB Atlas Vector Search

- Stores medical knowledge embeddings for RAG (Retrieval-Augmented Generation)
- Used by the consultation AI to provide evidence-based suggestions
- Gemini Embedding 001 for vector generation

---

## Getting Started / はじめに

### Prerequisites / 前提条件

- **Node.js** >= 20.0.0
- **npm** (included with Node.js)
- **Firebase CLI** — `npm install -g firebase-tools`

### Installation / インストール

```bash
# Clone the repository
git clone <repository-url>
cd LUMINQ

# Install frontend dependencies
npm install

# Install Cloud Functions dependencies
cd functions && npm install && cd ..
```

### Environment Setup / 環境設定

Create a `.env` file in the project root:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
VITE_API_URL=https://your_project.web.app/api
VITE_AMIVOICE_RECOGNITION_ENGINE=-a-medical
```

Cloud Functions require these secrets configured via Firebase Secret Manager:

```text
GEMINI_API_KEY          # Google Gemini API key
OPENAI_API_KEY          # OpenAI API key (legacy, optional)
ATLAS_URI               # MongoDB Atlas connection string
AMIVOICE_APPKEY         # AmiVoice speech recognition API key
ORCA_CREDENTIALS_MAIN   # ORCA credentials JSON (optional, for ORCA submission)
```

Set secrets using:

```bash
firebase functions:secrets:set SECRET_NAME
```

Example `ORCA_CREDENTIALS_MAIN` JSON:

```json
{
  "username": "ormaster",
  "api_key": "YOUR_ORCA_API_KEY",
  "ca_cert_path": "/workspace/certs/root.crt",
  "client_cert_path": "/workspace/certs/client.crt",
  "client_key_path": "/workspace/certs/client.pem",
  "client_key_passphrase": "YOUR_CERT_PASSWORD"
}
```

### Running Locally / ローカル実行

```bash
# Start the Vite dev server (port 3000)
npm run dev

# Or start with Firebase emulators (hosting:5000, Firestore:8080, functions:5001)
npm run emulators
```

When running on `http://localhost:3000`, the app calls the hosted Firebase endpoint directly. Browser access works because the HTTP functions return CORS headers and enforce Firebase Auth inside the handlers.

---

## Available Scripts / スクリプト一覧

### Development / 開発

| Script | Description | 説明 |
| --- | --- | --- |
| `npm run dev` | Start Vite dev server (port 3000) | Vite開発サーバー起動 |
| `npm run preview` | Preview production build | 本番ビルドのプレビュー |
| `npm run emulators` | Start all Firebase emulators | Firebase全エミュレーター起動 |
| `npm run emulators:hosting` | Start hosting + functions emulators only | ホスティング＋関数エミュレーターのみ |

### Build / ビルド

| Script | Description | 説明 |
| --- | --- | --- |
| `npm run build` | Compile TypeScript + Vite production build | TypeScriptコンパイル＋Vite本番ビルド |
| `npm run build:functions` | Build Cloud Functions | Cloud Functions ビルド |

### Quality / 品質

| Script | Description | 説明 |
| --- | --- | --- |
| `npm run lint` | Run ESLint | ESLint実行 |
| `npm run test` | Run Vitest | テスト実行 |
| `npm run test:ui` | Run Vitest with browser UI | ブラウザUI付きテスト |
| `npm run test:coverage` | Generate test coverage report | カバレッジレポート生成 |

### Deployment / デプロイ

| Script | Description | 説明 |
| --- | --- | --- |
| `npm run deploy` | Deploy everything (functions + hosting) | 全体デプロイ |
| `npm run deploy:hosting` | Deploy hosting only | ホスティングのみデプロイ |
| `npm run deploy:functions` | Deploy Cloud Functions only | Cloud Functionsのみデプロイ |

---

## API Reference / APIリファレンス

All endpoints are hosted as Firebase Cloud Functions in `asia-northeast1`. Authentication is required via Bearer token in the `Authorization` header.

### Assistant / AIアシスタント

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/api/assistant/suggest` | Get real-time medical AI suggestions during consultation |
| GET | `/api/assistant/health` | Assistant service health check (includes Gemini status) |

### Profile / プロファイル

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/api/profile` | Get consultant profile for authenticated user |
| POST | `/api/profile/save` | Create or update consultant profile |

### Receipt Cases / レセプトケース

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/api/receipt/cases` | List receipt cases (filterable by target_month, stage, source, place_id) |
| POST | `/api/receipt/cases/intake` | Create a receipt case from EMR data or normalized import row |
| GET | `/api/receipt/cases/:caseId` | Fetch a single case workspace |
| POST | `/api/receipt/cases/:caseId/resolve` | Submit evidence updates and recompute |
| POST | `/api/receipt/cases/:caseId/recompute` | Rebuild candidate support state and citations |
| POST | `/api/receipt/cases/:caseId/approve` | Approve case after blockers are cleared |
| POST | `/api/receipt/cases/:caseId/export` | Generate structured handoff package |
| POST | `/api/receipt/cases/:caseId/export-uke` | Generate UKE file for external submission |
| POST | `/api/receipt/cases/:caseId/submit-orca` | Submit claim to ORCA API |
| POST | `/api/receipt/cases/:caseId/outcome` | Record accepted/returned/deducted outcome |
| POST | `/api/receipt/cases/:caseId/accept-suggestion` | Accept an AI billing suggestion (adds to candidates) |
| POST | `/api/receipt/cases/:caseId/dismiss-suggestion` | Dismiss an AI billing suggestion (with optional reason) |
| POST | `/api/receipt/cases/:caseId/accept-byomei-suggestion` | Accept an AI 病名 suggestion (adds to diagnoses + cascade recompute) |
| POST | `/api/receipt/cases/:caseId/dismiss-byomei-suggestion` | Dismiss an AI 病名 suggestion (with optional reason) |

### Receipt Configuration / レセプト設定

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/api/receipt/place-profile` | Load place-level profile |
| POST | `/api/receipt/place-profile` | Save place-level profile (capabilities, facility info) |
| GET | `/api/receipt/clinic-settings` | Load clinic-level settings |
| POST | `/api/receipt/clinic-settings` | Save clinic-level settings (aliases, templates) |
| POST | `/api/receipt/imports/preview` | Preview and validate import data before case creation |

### Byomei Check / 病名チェック

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/api/receipt/byomei-check` | Get byomei check results for a SOAP note |

### Checker / チェッカー

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/api/receipt/checker-runs` | List checker runs for the clinic |
| POST | `/api/receipt/checker-runs` | Create a new checker run |
| GET | `/api/receipt/checker-runs/:runId` | Get checker run details with issues |
| POST | `/api/receipt/checker-runs/:runId/import-issues` | Import checker issues (from Ace CSV) |
| POST | `/api/receipt/checker-issues/:issueId/resolve` | Resolve a checker issue |

### Knowledge Rules / 知見ルール

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/api/receipt/knowledge-rules` | List all knowledge rules for the clinic |
| POST | `/api/receipt/knowledge-rules/:ruleId/toggle` | Toggle a knowledge rule active/inactive |

### Master Sync / マスター同期

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/api/receipt/master-sync` | Sync official master data (CSV upload) |
| GET | `/api/receipt/master-sync/history` | Get master sync history |
| POST | `receiptMasterSyncManual` (Cloud Function) | Trigger manual MHLW master data crawl and sync |
| — | `receiptMasterAutoSync` (Scheduled) | Monthly auto-sync from MHLW (1st of each month, 3:00 AM JST) |

### Revision Analysis / 改定分析

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/api/receipt/revision-analyses` | List all revision analyses |
| POST | `/api/receipt/revision-analyses` | Analyze revision text with AI |
| GET | `/api/receipt/revision-analyses/:id` | Get specific revision analysis |
| POST | `/api/receipt/revision-analyses/:id/approve-change` | Approve/reject a proposed change |

### Billing / 請求

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/api/billing/audio-session` | Report speech session events (start/tick/stop) for usage metering |
| GET | `/api/billing/summary` | Get billing summary for a month (`?month=YYYY-MM`, defaults to current) |
| POST | `/api/billing/plan` | Update subscription plan (`clinic` / `hospital` / `other`) |

### Voice / 音声

| Method | Endpoint | Description |
| --- | --- | --- |
| GET/POST | `/api/amivoice/token` | Issue one-time WebSocket token for AmiVoice |

### Admin / 管理

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/api/admin/health` | System health check |

---

## Architecture / アーキテクチャ

### Overview

```text
┌──────────────────────────────────────────────────────────────┐
│                      Firebase Hosting                         │
│                React SPA (Vite + Tailwind)                    │
├──────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌──────────┐  ┌──────────────────┐  ┌───────────────────┐   │
│  │ EMR      │  │ Receipt          │  │ Access Control    │   │
│  │ Module   │  │ Module           │  │ Module            │   │
│  └────┬─────┘  └────────┬─────────┘  └───────────────────┘   │
│       │                 │                                     │
├───────┼─────────────────┼─────────────────────────────────────┤
│       │  Firebase Cloud Functions (v2, asia-northeast1)       │
│       │                 │                                     │
│  ┌────┴─────┐  ┌────────┴─────────────────────────────────┐  │
│  │ Assistant │  │ Receipt Services                         │  │
│  │ (Gemini) │  │ orchestrator, evaluator, extractor,      │  │
│  │          │  │ suggestionEngine, byomeiSuggester,        │  │
│  │          │  │ byomeiChecker, ukeExporter,               │  │
│  │          │  │ orcaConnector, checkerService,            │  │
│  │          │  │ masterSync, masterCrawler,                │  │
│  │          │  │ revisionAnalyzer, citationService         │  │
│  └────┬─────┘  └────────┬─────────────────────────────────┘  │
│       │                 │                                     │
├───────┼─────────────────┼─────────────────────────────────────┤
│       │                 │                                     │
│  ┌────┴────┐  ┌─────────┴──┐  ┌──────────┐  ┌───────────┐   │
│  │ Gemini  │  │ Firestore  │  │ MongoDB  │  │ AmiVoice  │   │
│  │ AI      │  │            │  │ Atlas    │  │ (Speech)  │   │
│  └─────────┘  └────────────┘  │ (Vector) │  └───────────┘   │
│                               └──────────┘                    │
│  ┌────────────┐  ┌──────────────┐  ┌────────────────┐        │
│  │ Firebase   │  │ Firebase     │  │ ORCA Server    │        │
│  │ Auth       │  │ Storage      │  │ (optional)     │        │
│  └────────────┘  └──────────────┘  └────────────────┘        │
└──────────────────────────────────────────────────────────────┘
```

### Key Patterns

- **Modular Architecture** — features organized by domain (`emr`, `receipt`, `access`) in both frontend and backend
- **Serverless Backend** — all backend logic runs as Firebase Cloud Functions, no traditional server
- **Feature Gating** — plan-based access control enforced at both API and UI levels
- **AI Pipeline (EMR)** — consultation transcript → Gemini analysis → structured suggestions → SOAP notes
- **AI Pipeline (Receipt)** — intake → AI extraction → candidate evaluation → byomei suggestion → billing suggestion → citation attachment → approval gate → export/submit → outcome tracking → knowledge loop
- **Multi-tier Code Validation** — exact match → normalized fuzzy match → curated fallback → AI grounding validation (cascading, cheapest-first)
- **Scheduled Sync** — monthly MHLW master data crawl via `onSchedule` Cloud Function with version comparison
- **Zustand Stores** — lightweight client-side state for auth, patients, SOAP notes, and access plans
- **Streaming AI** — real-time suggestion streaming during consultations via SSE

---

## Firestore Collections

| Collection | Purpose |
| --- | --- |
| `patients` | Patient records (practitioner-scoped) |
| `soap_notes` | SOAP medical notes with draft/finalized status |
| `consultant_profiles` | Doctor profiles with plan and AI preferences |
| `consultations` | Consultation session records |
| `consultation_summaries` | AI-generated consultation summaries |
| `receipt_support_cases` | Receipt cases for inbox and guided workspace |
| `receipt_place_profiles` | Place-level capability, facility info, and exclusion data |
| `receipt_clinic_settings` | Alias library and import templates |
| `receipt_reference_cache` | Cached official citation content |
| `receipt_exports` | Structured handoff payloads for submission workflows |
| `receipt_byomei_checks` | Order-time diagnosis validation results |
| `receipt_checker_runs` | Checker run tracking (Ace file-loop) |
| `receipt_checker_issues` | Individual checker issues linked to cases |
| `receipt_knowledge_rules` | Auto-generated knowledge rules from outcomes (clinic-scoped) |
| `receipt_master_syncs` | Master data sync history records |
| `receipt_master_data` | Persisted SSK master records (傷病名 + 診療行為, ~30k+ entries) |
| `receipt_master_config` | Configurable crawl URL patterns for MHLW downloads |
| `receipt_revision_analyses` | AI revision analysis results with proposed changes |

---

## Production Deployment / 本番デプロイ

### Deploy Everything

```bash
npm run deploy
```

This builds Cloud Functions and deploys both hosting and functions to Firebase.

### Deploy Individually

```bash
# Hosting only (frontend)
npm run deploy:hosting

# Cloud Functions only (backend)
npm run deploy:functions
```

### Environment Configuration

| Environment | API URL | File |
| --- | --- | --- |
| Development | `https://your_project.web.app/api` | `.env` |
| Production | `/api` (relative) | `.env.production` |

### Firebase Emulators

For local development with emulators:

```bash
npm run emulators
```

| Service | Port |
| --- | --- |
| Hosting | 5000 |
| Firestore | 8080 |
| Functions | 5001 |
| Emulator UI | Enabled (auto-assigned) |

### Cache Configuration

- **JS/CSS**: 1 year immutable cache (`Cache-Control: max-age=31536000`)
- **Images**: 24 hour cache (`Cache-Control: max-age=86400`)

---

## License

All rights reserved.
