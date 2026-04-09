export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 px-5 sm:px-6 bg-white" aria-labelledby="contact-heading">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 id="contact-heading" className="text-xl sm:text-2xl md:text-3xl font-black mb-4 text-[#3D2C1E]">
            お問い合わせ
          </h2>
          <p className="text-sm text-[#8A9698] leading-relaxed">
            デモのお申し込み、料金のご相談、既存システムとの連携についてなど、お気軽にお問い合わせください。
          </p>
        </div>

        <form
          className="bg-[#FAF6F0] rounded-lg p-6 sm:p-8 border border-[#3D2C1E]/8"
          action="https://formspree.io/f/xgvapkaz"
          method="POST"
        >
          <div className="space-y-5">
            <FormField label="お問い合わせ種別" htmlFor="inquiryType">
              <select
                id="inquiryType"
                name="inquiryType"
                className="w-full px-4 py-3 text-sm border border-[#3D2C1E]/8 rounded-lg focus:ring-2 focus:ring-[#D98324]/20 focus:border-[#D98324] outline-none bg-white transition-colors"
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
                className="w-full px-4 py-3 text-sm border border-[#3D2C1E]/8 rounded-lg focus:ring-2 focus:ring-[#D98324]/20 focus:border-[#D98324] outline-none bg-white transition-colors"
                placeholder="○○クリニック"
              />
            </FormField>

            <div className="grid sm:grid-cols-2 gap-5">
              <FormField label="お名前 *" htmlFor="fullName">
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="w-full px-4 py-3 text-sm border border-[#3D2C1E]/8 rounded-lg focus:ring-2 focus:ring-[#D98324]/20 focus:border-[#D98324] outline-none bg-white transition-colors"
                  placeholder="山田 太郎"
                  required
                />
              </FormField>
              <FormField label="メールアドレス *" htmlFor="email">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 text-sm border border-[#3D2C1E]/8 rounded-lg focus:ring-2 focus:ring-[#D98324]/20 focus:border-[#D98324] outline-none bg-white transition-colors"
                  placeholder="example@yourmail.com"
                  required
                />
              </FormField>
            </div>

            <FormField label="電話番号 *" htmlFor="phone">
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 text-sm border border-[#3D2C1E]/8 rounded-lg focus:ring-2 focus:ring-[#D98324]/20 focus:border-[#D98324] outline-none bg-white transition-colors"
                placeholder="080-1234-5678"
                required
              />
            </FormField>

            <FormField label="お問い合わせ内容 *" htmlFor="message">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 text-sm border border-[#3D2C1E]/8 rounded-lg focus:ring-2 focus:ring-[#D98324]/20 focus:border-[#D98324] outline-none resize-none bg-white transition-colors"
                placeholder="ご質問やご希望などをご記入ください。"
                required
              />
            </FormField>
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-[#D98324] py-3.5 rounded-lg font-bold text-white text-sm hover:bg-[#c27520] transition-colors"
          >
            送信する
          </button>
        </form>
      </div>
    </section>
  );
}

function FormField({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-xs font-semibold mb-2 text-[#2C3E40]/80">{label}</label>
      {children}
    </div>
  );
}
