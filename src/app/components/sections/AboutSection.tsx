import { Users } from 'lucide-react';
import cooImage from '@/assets/ilmia-doc.jpg';

const companyInfo = [
  { label: '法人名', value: '株式会社イルミアテック' },
  { label: '設立', value: '2025年9月' },
  { label: '代表取締役', value: 'フッサム ワファ' },
  { label: '所在地', value: '大阪市北区梅田1-2-2-12-12' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 px-5 sm:px-6 bg-[#FAF6F0]" aria-labelledby="about-heading" itemScope itemType="https://schema.org/AboutPage">
      <div className="max-w-5xl mx-auto">
        {/* Editorial heading */}
        <div className="mb-14 md:mb-20 reveal">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-bold tracking-[0.3em] text-[#D98324]">ABOUT</span>
            <div className="h-px flex-1 max-w-[80px] bg-[#D98324]/30" />
          </div>
          <h2 id="about-heading" className="text-[1.875rem] sm:text-4xl md:text-5xl font-bold mb-6 text-[#3D2C1E] leading-tight">
            私たちについて
          </h2>
          <p className="text-sm sm:text-base text-[#2C3E40]/80 max-w-2xl leading-[2]" itemProp="description">
            ILMIAは、診察のしやすさと請求の正確さを両立させるための医療AIをつくっています。
            <br className="hidden sm:block" />
            医師とAIエンジニアが一緒に開発し、現場で本当に使いやすい形にこだわっています。
          </p>
        </div>

        {/* Founder — editorial layout, flat */}
        <article
          className="mb-16 md:mb-20 reveal"
          itemScope
          itemType="https://schema.org/Person"
        >
          <div className="grid md:grid-cols-5 gap-8 md:gap-12">
            {/* Large photo, 2/5 width */}
            <div className="md:col-span-2">
              <div className="relative aspect-[4/3] md:aspect-[3/4] max-w-[400px] md:max-w-none mx-auto overflow-hidden bg-[#3D2C1E]/5">
                <img
                  src={cooImage}
                  alt="イルミアテック創業者 - 脳神経外科医として長年の臨床経験を持つ医療AI開発の専門家"
                  className="w-full h-full object-cover object-top"
                  itemProp="image"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content, 3/5 width */}
            <div className="md:col-span-3 flex flex-col justify-center">
              <div className="inline-flex items-center gap-1.5 text-[#D98324] text-xs font-bold tracking-[0.2em] mb-4 w-fit">
                <Users className="w-3 h-3" />
                取締役
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-[#3D2C1E] leading-tight" itemProp="name">
                三神和幸
              </h3>
              <p className="text-sm text-[#6B7273] mb-6 tracking-wide">医療現場の声をカタチに</p>
              <div className="h-px w-12 bg-[#D98324] mb-6" />
              <p className="text-sm sm:text-base text-[#2C3E40]/80 mb-4 leading-[2]">
                当社の創業者の一人は、<span className="font-bold text-[#D98324]">脳神経外科医</span>として長年の臨床経験を持ち、
                現場の大変さを日々見てきました。
              </p>
              <p className="text-sm sm:text-base text-[#2C3E40]/80 leading-[2]">
                その経験をもとに、医師とAIエンジニアが協力して、
                毎日の診療や事務作業を少しでも楽にする仕組みを開発しています。
              </p>
            </div>
          </div>
        </article>

        {/* 会社概要 — formal Japanese table style */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold tracking-[0.3em] text-[#D98324]">COMPANY</span>
            <div className="h-px flex-1 max-w-[60px] bg-[#D98324]/30" />
            <h3 className="text-base font-bold text-[#3D2C1E]">会社概要</h3>
          </div>
          <dl className="border-t border-[#3D2C1E]/12">
            {companyInfo.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-[120px_1fr] sm:grid-cols-[180px_1fr] gap-4 py-4 sm:py-5 border-b border-[#3D2C1E]/12"
              >
                <dt className="text-xs sm:text-sm font-bold text-[#6B7273] tracking-wide">{item.label}</dt>
                <dd className="text-sm sm:text-base text-[#3D2C1E] break-words">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
