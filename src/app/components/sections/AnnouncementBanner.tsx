import { ArrowRight } from 'lucide-react';

interface AnnouncementBannerProps {
  medicalProductUrl: string;
}

export default function AnnouncementBanner({ medicalProductUrl }: AnnouncementBannerProps) {
  return (
    <div className="fixed top-0 w-full z-[60] bg-[#FAF6F0] border-b border-[#3D2C1E]/8 text-center py-1.5 px-3 sm:py-2 sm:px-4">
      <a
        href={medicalProductUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center gap-1.5 sm:gap-3 hover:opacity-80 transition-opacity group"
      >
        <span className="hidden sm:inline text-[#D98324] text-xs font-semibold tracking-wide">電子カルテAI × レセプトAI</span>
        <span className="text-[11px] sm:text-xs font-bold tracking-wide text-[#3D2C1E]">
          <span className="sm:hidden">電子カルテAI × レセプトAI — </span>クリニック経営を、AIが変える時代へ
        </span>
        <ArrowRight className="w-3.5 h-3.5 text-[#D98324]/70 group-hover:translate-x-0.5 transition-transform" />
      </a>
    </div>
  );
}
