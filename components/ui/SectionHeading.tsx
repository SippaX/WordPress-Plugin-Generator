import React from 'react';

interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ badge, title, subtitle, align = 'center' }) => {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'} relative z-10`}>
      <span className="inline-block py-1 px-3 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold tracking-wider text-neutral-400 uppercase mb-4">
        {badge}
      </span>
      <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500 mb-6 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};