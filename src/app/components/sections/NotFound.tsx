import { useEffect } from 'react';
import { ArrowLeft, Mail } from 'lucide-react';
import logoImage from '@/assets/brand.svg';

export default function NotFound() {
  useEffect(() => {
    // Set document title and noindex for SEO
    const previousTitle = document.title;
    document.title = '404 - ページが見つかりません | ILMIA イルミアテック';

    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);

    return () => {
      document.title = previousTitle;
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <div className="min-h-screen bg-surface relative overflow-hidden flex flex-col">
      {/* Minimal header — logo only */}
      <header className="w-full bg-[#3D2C1E] border-b border-white/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="flex items-center h-16 md:h-[4.75rem]">
            <a
              href="/"
              className="flex items-center gap-3.5"
              aria-label="ILMIA イルミアテック - ホームへ戻る"
            >
              <img src={logoImage} alt="ILMIA イルミアテック" className="h-10 sm:h-12 w-auto brightness-0 invert" />
            </a>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center px-5 sm:px-6 py-20 md:py-12">
        <div className="max-w-3xl mx-auto w-full">
          {/* Editorial label */}
          <div className="flex items-center gap-3 mb-7 sm:mb-8">
            <span className="text-xs font-bold tracking-[0.3em] text-[#D98324]">ERROR 404</span>
            <div className="h-px flex-1 max-w-[80px] bg-[#D98324]/40" />
            <span className="text-xs font-bold tracking-[0.25em] text-[#3D2C1E]/60">NOT FOUND</span>
          </div>

          {/* Giant 404 numeral */}
          <div className="text-[5.5rem] sm:text-[8rem] md:text-[10rem] font-black leading-none text-[#3D2C1E]/12 mb-2 sm:mb-4 tracking-tight">
            404
          </div>

          {/* Heading */}
          <h1 className="text-[1.875rem] sm:text-4xl md:text-5xl font-bold mb-6 text-[#3D2C1E] leading-tight">
            お探しのページが<br />
            <span className="text-[#D98324]">見つかりませんでした。</span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base text-[#2C3E40]/80 mb-9 sm:mb-12 leading-[1.9] sm:leading-[2] max-w-2xl">
            お探しのページは削除されたか、URLが変更された可能性があります。
            <br className="hidden sm:block" />
            お手数ですが、トップページからお探しください。
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <a
              href="/"
              className="group inline-flex items-center justify-center gap-2.5 bg-[#D98324] text-white px-7 py-4 sm:px-9 sm:py-5 font-bold text-base sm:text-lg hover:bg-[#c27520] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              トップページへ戻る
            </a>
            <a
              href="/#contact"
              className="group inline-flex items-center justify-center gap-2.5 bg-transparent sm:bg-white border-0 sm:border sm:border-[#3D2C1E]/15 text-[#2C3E40]/75 sm:text-[#2C3E40] px-7 py-3 sm:px-9 sm:py-5 font-semibold text-sm sm:text-lg hover:text-[#D98324] sm:hover:text-[#2C3E40] sm:hover:border-[#D98324]/40 transition-colors"
            >
              お問い合わせ
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </main>

      {/* Minimal footer */}
      <footer className="border-t border-[#3D2C1E]/10 py-6 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto text-center text-xs text-[#6B7273]">
          © {new Date().getFullYear()} 株式会社イルミアテック
        </div>
      </footer>
    </div>
  );
}
