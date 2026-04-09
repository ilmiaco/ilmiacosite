export default function QuoteBanner() {
  return (
    <section className="py-16 md:py-20 px-5 sm:px-6 bg-[#D98324]/6">
      <div className="max-w-3xl mx-auto text-center">
        <blockquote className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#3D2C1E] leading-relaxed">
          「診察でAIが入力を助け、
          <br className="hidden sm:block" />
          カルテが自動で仕上がり、
          <br className="hidden sm:block" />
          <span className="text-[#D98324]">請求前の見落としまでチェックされる。</span>」
        </blockquote>
        <p className="text-sm text-[#6B7273] mt-6">この一連を、ひとつのプラットフォームで。</p>
      </div>
    </section>
  );
}
