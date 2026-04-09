import { Sparkles, Stethoscope, FileText, Zap } from 'lucide-react';

export default function PlatformOverview() {
  return (
    <section id="platform" className="py-20 md:py-28 px-5 sm:px-6 bg-[#FAF6F0]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-[#D98324]/10 px-4 py-2 rounded-lg mb-7">
          <Sparkles className="w-3.5 h-3.5 text-[#D98324]" />
          <span className="text-xs text-[#D98324] font-semibold tracking-wider">PLATFORM</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#3D2C1E] mb-5">
          ILMIAが、<br />
          <span className="text-[#D98324]">すべて解決します。</span>
        </h2>

        <p className="text-sm sm:text-base text-[#2C3E40]/80 max-w-xl mx-auto leading-[1.8] mb-12">
          診察から請求まで、AIが一気通貫で最適化。
          <br />
          電子カルテAIとレセプトAIの統合プラットフォーム。
        </p>

        <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto mb-10">
          <div className="bg-white rounded-lg border border-[#3D2C1E]/8 p-7 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-[#D98324] rounded-lg flex items-center justify-center mx-auto mb-4">
              <Stethoscope className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-[#3D2C1E] mb-2">電子カルテAI</h3>
            <p className="text-sm text-[#8A9698] leading-relaxed">AIが診察に寄り添い、<br />カルテを自動で仕上げる</p>
          </div>
          <div className="bg-white rounded-lg border border-[#3D2C1E]/8 p-7 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-[#3D2C1E] rounded-lg flex items-center justify-center mx-auto mb-4">
              <FileText className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-[#3D2C1E] mb-2">レセプトAI</h3>
            <p className="text-sm text-[#8A9698] leading-relaxed">請求前の見落としを減らし、<br />売上を守る</p>
          </div>
        </div>

        <div className="inline-flex items-center gap-2.5 bg-[#D98324] text-white px-6 py-3 rounded-full text-sm font-semibold">
          <Zap className="w-4 h-4" />
          診察から請求まで、AIがシームレスに連携
        </div>
      </div>
    </section>
  );
}
