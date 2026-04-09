# ILMIA Website — Endpoint Route Flow

ဤပရောဂျက်သည် **Single Page Application (SPA)** ဖြစ်ပြီး React Router ကဲ့သို့ routing library မသုံးပါ။ Navigation အားလုံးကို **anchor links** (`#section-id`) ဖြင့် ဆောင်ရွက်သည်။ Firebase Hosting က SPA rewrite rule ဖြင့် `/**` path အားလုံးကို `index.html` သို့ ပြန်ညွှန်းသည်။

## Route Flow Diagram

```mermaid
graph TD
    subgraph Firebase_Hosting["Firebase Hosting"]
        R301A["/index.html → / (301)"]
        R301B["/home → / (301)"]
        RSPA["/** → /index.html (SPA Rewrite)"]
    end

    subgraph Entry["Application Entry"]
        INDEX["index.html"]
        MAIN["main.tsx"]
        APP["App.tsx"]
    end

    subgraph Page_Sections["Page Sections (Scroll Navigation)"]
        direction TB
        ANNOUNCE["AnnouncementBanner"]
        HEADER["Header (Fixed)"]

        subgraph Main_Content["main#main-content"]
            HERO["HeroSection"]
            ABOUT["AboutSection<br/>#about"]
            PAIN["PainPointsSection"]
            PLATFORM["PlatformOverview"]
            EMR["EmrSection<br/>#emr-ai"]
            RECEIPT["ReceiptSection<br/>#receipt-ai"]
            QUOTE["QuoteBanner"]
            RESULTS["ResultsSection"]
            PRICING["PricingSection<br/>#pricing"]
            FAQ["FaqSection"]
            SCENARIOS["ScenariosSection<br/>#scenarios"]
            OTHER["OtherProductsSection"]
            CTA["CtaSection"]
            CONTACT["ContactSection<br/>#contact"]
        end

        FOOTER["Footer"]
    end

    subgraph Nav_Links["Header Navigation Links"]
        NAV1["電子カルテAI → #emr-ai"]
        NAV2["レセプトAI → #receipt-ai"]
        NAV3["料金 → #pricing"]
        NAV4["導入シナリオ → #scenarios"]
        NAV5["ABOUT → #about"]
        NAV6["お問い合わせ → #contact"]
    end

    subgraph External_Links["External Endpoints"]
        MEDICAL["medical.ilmiaco.com<br/>(Product App)"]
        FORMSPREE["formspree.io<br/>(Form Submission)"]
    end

    %% Entry flow
    R301A --> INDEX
    R301B --> INDEX
    RSPA --> INDEX
    INDEX --> MAIN
    MAIN --> APP

    %% App renders sections
    APP --> ANNOUNCE
    APP --> HEADER
    APP --> HERO
    HERO --> ABOUT
    ABOUT --> PAIN
    PAIN --> PLATFORM
    PLATFORM --> EMR
    EMR --> RECEIPT
    RECEIPT --> QUOTE
    QUOTE --> RESULTS
    RESULTS --> PRICING
    PRICING --> FAQ
    FAQ --> SCENARIOS
    SCENARIOS --> OTHER
    OTHER --> CTA
    CTA --> CONTACT
    CONTACT --> FOOTER

    %% Navigation links
    HEADER --> NAV1
    HEADER --> NAV2
    HEADER --> NAV3
    HEADER --> NAV4
    HEADER --> NAV5
    HEADER --> NAV6

    NAV1 -.-> EMR
    NAV2 -.-> RECEIPT
    NAV3 -.-> PRICING
    NAV4 -.-> SCENARIOS
    NAV5 -.-> ABOUT
    NAV6 -.-> CONTACT

    %% External links
    HERO -- "無料デモを申し込む" --> MEDICAL
    PRICING -- "申し込み" --> MEDICAL
    CTA -- "CTA Button" --> MEDICAL
    ANNOUNCE -- "Banner Link" --> MEDICAL
    FOOTER -- "Product Link" --> MEDICAL
    CONTACT -- "POST form" --> FORMSPREE

    %% Styling
    classDef firebase fill:#FFA726,stroke:#E65100,color:#fff
    classDef entry fill:#42A5F5,stroke:#1565C0,color:#fff
    classDef section fill:#66BB6A,stroke:#2E7D32,color:#fff
    classDef nav fill:#AB47BC,stroke:#6A1B9A,color:#fff
    classDef external fill:#EF5350,stroke:#B71C1C,color:#fff
    classDef anchor fill:#78909C,stroke:#37474F,color:#fff

    class R301A,R301B,RSPA firebase
    class INDEX,MAIN,APP entry
    class ANNOUNCE,HEADER,HERO,ABOUT,PAIN,PLATFORM,EMR,RECEIPT,QUOTE,RESULTS,PRICING,FAQ,SCENARIOS,OTHER,CTA,CONTACT,FOOTER section
    class NAV1,NAV2,NAV3,NAV4,NAV5,NAV6 nav
    class MEDICAL,FORMSPREE external
```

## Flow အကျဉ်းချုပ်

### Request Flow
1. User သည် `ilmiaco.com` သို့ ဝင်ရောက်သည်
2. Firebase Hosting က `/index.html` ကို serve လုပ်သည် (SPA rewrite)
3. `/index.html` နှင့် `/home` URLs များကို `/` သို့ 301 redirect လုပ်သည်
4. `index.html` → `main.tsx` → `App.tsx` အစဉ်လိုက် load ဖြစ်သည်

### Page Navigation (Anchor Links)
| Navigation Item | Target Section ID |
|----------------|-------------------|
| 電子カルテAI | `#emr-ai` |
| レセプトAI | `#receipt-ai` |
| 料金 | `#pricing` |
| 導入シナリオ | `#scenarios` |
| ABOUT | `#about` |
| お問い合わせ | `#contact` |

### External Endpoints
| Endpoint | Purpose | Method |
|----------|---------|--------|
| `https://medical.ilmiaco.com` | Product application (demo signup) | Link (GET) |
| `https://formspree.io/f/xgvapkaz` | Contact form submission | POST |

### Static Assets & Special Routes
| Path | Purpose |
|------|---------|
| `/robots.txt` | Search engine crawl rules |
| `/sitemap.xml` | Sitemap for SEO |
| `/manifest.json` | PWA manifest |
| `/.well-known/llms.txt` | LLM discovery |
| `/.well-known/security.txt` | Security contact info |
| `/opensearch.xml` | OpenSearch description |
| `/api-directory.json` | API directory |
| `/knowledge-base.json` | Knowledge base data |
| `/404.html` | Custom 404 page |
