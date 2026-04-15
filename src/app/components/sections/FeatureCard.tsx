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
  const accentColor = isAccent ? '#D98324' : '#3D2C1E';

  const contentSide = (
    <div>
      {/* Number + label badge */}
      <div className="flex items-center gap-3 mb-6">
        <span
          className="text-3xl sm:text-4xl font-black leading-none"
          style={{ color: accentColor }}
        >
          {number}
        </span>
        <div className="h-px flex-1 max-w-[60px]" style={{ backgroundColor: `${accentColor}30` }} />
        <span className="text-xs font-bold tracking-widest" style={{ color: accentColor }}>
          {label}
        </span>
      </div>

      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#3D2C1E] mb-5 leading-tight">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-[#6B7273] leading-[1.8] mb-6">
        {description}
      </p>
      <ul className="space-y-3">
        {checkpoints.map((text, i) => (
          <li key={i} className="flex items-start gap-3 text-sm">
            <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: accentColor }} />
            <span className="text-[#2C3E40]/80 leading-relaxed">{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  const illustrationSide = (
    <div className="flex justify-center">
      {illustration}
    </div>
  );

  return (
    <div className="mb-12 lg:mb-12 pb-12 lg:pb-0 border-b border-[#3D2C1E]/10 lg:border-b-0 last:border-b-0 last:pb-0 last:mb-0 lg:last:mb-12">
      <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <div className={reversed ? 'order-2 lg:order-1' : ''}>
          {reversed ? illustrationSide : contentSide}
        </div>
        <div className={reversed ? 'order-1 lg:order-2' : ''}>
          {reversed ? contentSide : illustrationSide}
        </div>
      </div>
    </div>
  );
}
