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
        <div className="text-center mb-12 md:mb-16">
          <h2 id="about-heading" className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 text-[#D98324]">
            私たちについて
          </h2>
          <p className="text-sm sm:text-base text-[#2C3E40]/80 max-w-2xl mx-auto leading-[1.8]" itemProp="description">
            ILMIAは、診察のしやすさと請求の正確さを両立させるための医療AIをつくっています。
            <br className="hidden sm:block" />
            医師とAIエンジニアが一緒に開発し、現場で本当に使いやすい形にこだわっています。
          </p>
        </div>

        <article
          className="bg-white rounded-lg overflow-hidden border border-[#3D2C1E]/8 shadow-sm"
          itemScope
          itemType="https://schema.org/Person"
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-72 sm:h-80 md:h-auto overflow-hidden">
              <img
                src={cooImage}
                alt="イルミアテック創業者 - 脳神経外科医として長年の臨床経験を持つ医療AI開発の専門家"
                className="w-full h-full object-cover object-top"
                itemProp="image"
                loading="lazy"
              />
            </div>
            <div className="p-6 sm:p-10 md:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-1.5 bg-[#D98324]/10 text-[#D98324] px-3.5 py-1.5 rounded-lg text-xs font-semibold mb-5 w-fit">
                <Users className="w-3.5 h-3.5" />
                取締役
              </div>
              <h3 className="text-2xl font-bold mb-2 text-[#3D2C1E]">三神和幸</h3>
              <p className="text-sm text-[#8A9698] mb-5">医療現場の声をカタチに</p>
              <p className="text-sm text-[#2C3E40]/80 mb-4 leading-[1.8]">
                当社の創業者の一人は、<span className="font-semibold text-[#D98324]">脳神経外科医</span>として長年の臨床経験を持ち、
                現場の大変さを日々見てきました。
              </p>
              <p className="text-sm text-[#2C3E40]/80 leading-[1.8]">
                その経験をもとに、医師とAIエンジニアが協力して、
                毎日の診療や事務作業を少しでも楽にする仕組みを開発しています。
              </p>
            </div>
          </div>
        </article>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {companyInfo.map((item, i) => (
            <div key={i} className="bg-white rounded-lg p-4 sm:p-5 border border-[#3D2C1E]/8">
              <dt className="text-[10px] text-[#D98324] font-bold uppercase tracking-widest mb-1.5">{item.label}</dt>
              <dd className="text-xs sm:text-sm font-bold text-[#3D2C1E] break-words">{item.value}</dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
