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
