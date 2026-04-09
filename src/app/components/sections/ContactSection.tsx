import { ShieldCheck, Clock } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 px-5 sm:px-6 bg-white" aria-labelledby="contact-heading">
      <div className="max-w-3xl mx-auto">
        {/* Editorial heading */}
        <div className="mb-12 md:mb-16 reveal">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-bold tracking-[0.3em] text-[#D98324]">CONTACT</span>
            <div className="h-px flex-1 max-w-[80px] bg-[#D98324]/30" />
          </div>
          <h2 id="contact-heading" className="text-[1.875rem] sm:text-4xl md:text-5xl font-bold mb-6 text-[#3D2C1E] leading-tight">
            お問い合わせ
          </h2>
          <p className="text-base sm:text-lg text-[#6B7273] leading-[2] max-w-2xl">
            デモのお申し込み、料金のご相談、既存システムとの連携についてなど、お気軽にお問い合わせください。
          </p>
        </div>

        {/* Form */}
        <form
          className="reveal reveal-delay-1"
          action="https://formspree.io/f/xgvapkaz"
          method="POST"
        >
          <div className="space-y-7">
            <FormField label="お問い合わせ種別" htmlFor="inquiryType">
              <select
                id="inquiryType"
                name="inquiryType"
                className="w-full px-4 py-3.5 text-base border-b-2 border-[#3D2C1E]/15 focus:border-[#D98324] outline-none bg-transparent transition-colors"
              >
                <option value="電子カルテAIについて">電子カルテAIについて</option>
                <option value="レセプトAIについて">レセプトAIについて</option>
                <option value="料金プランについて">料金プランについて</option>
                <option value="デモのお申し込み">デモのお申し込み</option>
                <option value="その他">その他</option>
              </select>
            </FormField>

            <FormField label="医療機関名" htmlFor="companyName">
              <input
                type="text"
                id="companyName"
                name="companyName"
                className="w-full px-4 py-3.5 text-base border-b-2 border-[#3D2C1E]/15 focus:border-[#D98324] outline-none bg-transparent transition-colors"
                placeholder="○○クリニック"
              />
            </FormField>

            <div className="grid sm:grid-cols-2 gap-7">
              <FormField label="お名前" htmlFor="fullName" required>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="w-full px-4 py-3.5 text-base border-b-2 border-[#3D2C1E]/15 focus:border-[#D98324] outline-none bg-transparent transition-colors"
                  placeholder="山田 太郎"
                  required
                />
              </FormField>
              <FormField label="メールアドレス" htmlFor="email" required>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3.5 text-base border-b-2 border-[#3D2C1E]/15 focus:border-[#D98324] outline-none bg-transparent transition-colors"
                  placeholder="example@yourmail.com"
                  required
                />
              </FormField>
            </div>

            <FormField label="電話番号" htmlFor="phone" required>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3.5 text-base border-b-2 border-[#3D2C1E]/15 focus:border-[#D98324] outline-none bg-transparent transition-colors"
                placeholder="080-1234-5678"
                required
              />
            </FormField>

            <FormField label="お問い合わせ内容" htmlFor="message" required>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3.5 text-base border-2 border-[#3D2C1E]/15 rounded-lg focus:border-[#D98324] outline-none resize-none bg-transparent transition-colors"
                placeholder="ご質問やご希望などをご記入ください。"
                required
              />
            </FormField>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-10 mb-8 text-sm text-[#6B7273]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#D98324]" />
              個人情報の取り扱いについて
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#D98324]" />
              営業日内に返信
            </span>
          </div>

          {/* Submit button */}
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center bg-[#D98324] px-14 py-4 sm:py-5 rounded-lg font-bold text-white text-base sm:text-lg hover:bg-[#c27520] transition-colors min-w-[280px]"
            >
              送信する
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function FormField({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="flex items-center gap-2 text-sm font-bold mb-3 text-[#3D2C1E]">
        {label}
        {required && (
          <span className="text-[10px] font-bold text-white bg-[#D98324] px-1.5 py-0.5 rounded tracking-wide">
            必須
          </span>
        )}
      </label>
      {children}
    </div>
  );
}
