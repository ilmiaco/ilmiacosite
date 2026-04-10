import { ArrowRight, Mail, Check } from 'lucide-react';
import logoImage from '@/assets/brand.svg';

interface CtaSectionProps {
  medicalProductUrl: string;
}

export default function CtaSection({ medicalProductUrl }: CtaSectionProps) {
  return (
    <section className="py-20 md:py-28 px-5 sm:px-6 bg-[#D98324]/6">
      <div className="max-w-3xl mx-auto text-center">
        <img src={logoImage} alt="ILMIA イルミアテック" className="h-14 md:h-16 w-auto mx-auto mb-7" />
        <h2 className="text-[1.875rem] sm:text-4xl md:text-4xl font-black text-[#3D2C1E] mb-5 leading-tight">
          クリニック経営を、<br />
          <span className="text-[#D98324]">AIで、次のステージへ。</span>
        </h2>
        <p className="text-sm sm:text-base text-[#6B7273] mb-9 max-w-xl mx-auto leading-[1.8]">
          電子カルテAIとレセプトAIで、診察の質を上げながら収益を守る。
          <br />
          まずは無料デモで、その効果をお確かめください。
        </p>
        <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
          <a
            href={medicalProductUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 bg-[#D98324] text-white px-7 py-3.5 sm:px-9 sm:py-4 font-bold text-sm sm:text-base hover:bg-[#c27520] transition-colors"
          >
            無料デモを申し込む
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2.5 bg-white border border-[#3D2C1E]/15 text-[#2C3E40] px-7 py-3.5 sm:px-9 sm:py-4 font-semibold text-sm sm:text-base hover:border-[#D98324]/40 transition-colors"
          >
            お問い合わせ
            <Mail className="w-4 h-4" />
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-7 text-xs text-[#6B7273]">
          {['導入相談無料', '院内デモ対応', '既存システム連携相談可'].map((text) => (
            <span key={text} className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#D98324]" />{text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
