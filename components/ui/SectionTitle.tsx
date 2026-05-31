import React from 'react';

interface SectionTitleProps {
  label: string;  // e.g. "01. ABOUT"
  title: string;  // e.g. "About Me"
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ label, title }) => {
  return (
    <div className="mb-12 flex flex-col items-start select-none">
      <span className="text-accent font-mono text-xs md:text-sm tracking-[0.2em] uppercase mb-2">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold font-mono text-text-primary tracking-tight">
        {title}
      </h2>
      <div className="w-16 h-[3px] bg-accent mt-4 rounded-full shadow-[0_0_8px_rgba(57,255,20,0.5)]" />
    </div>
  );
};

export default SectionTitle;
