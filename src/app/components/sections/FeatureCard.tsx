import { Check } from 'lucide-react';

interface FeatureCardProps {
  number: string;
  label: string;
  title: React.ReactNode;
  description: string;
  checkpoints: string[];
  illustration: React.ReactNode;
  reversed?: boolean;
  variant?: 'accent' | 'primary';
}

export default function FeatureCard({
  number,
  label,
  title,
  description,
  checkpoints,
  illustration,
  reversed = false,
  variant = 'accent',
}: FeatureCardProps) {
  const isAccent = variant === 'accent';
  const badgeBg = isAccent ? 'bg-[#D98324]/10' : 'bg-[#3D2C1E]/8';
  const badgeText = isAccent ? 'text-[#D98324]' : 'text-[#3D2C1E]';
  const checkBg = isAccent ? 'bg-[#D98324]/10' : 'bg-[#3D2C1E]/8';
  const checkText = isAccent ? 'text-[#D98324]' : 'text-[#3D2C1E]';

  const content = (
    <>
      <div className={`inline-flex items-center gap-2 ${badgeBg} px-3.5 py-1.5 rounded-lg mb-5`}>
        <span className={`${badgeText} text-xs font-bold`}>{number}</span>
        <span className={`${badgeText} text-xs font-medium tracking-wide`}>{label}</span>
      </div>
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#3D2C1E] mb-5 leading-tight">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-[#8A9698] leading-[1.8] mb-6">
        {description}
      </p>
      <ul className="space-y-3">
        {checkpoints.map((text, i) => (
          <li key={i} className="flex items-start gap-3 text-sm">
            <div className={`w-5 h-5 ${checkBg} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
              <Check className={`w-3 h-3 ${checkText}`} />
            </div>
            <span className="text-[#2C3E40]/80 leading-relaxed">{text}</span>
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <div className="mb-16 md:mb-24">
      <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <div className={reversed ? 'order-2 lg:order-1 flex justify-center' : ''}>
          {reversed ? illustration : content}
        </div>
        <div className={reversed ? 'order-1 lg:order-2' : 'flex justify-center'}>
          {reversed ? content : illustration}
        </div>
      </div>
    </div>
  );
}
