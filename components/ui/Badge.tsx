import React from 'react';

interface BadgeProps {
  label: string;
}

export const Badge: React.FC<BadgeProps> = ({ label }) => {
  return (
    <span className="inline-block px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase font-mono bg-bg-secondary text-accent border border-accent/20 hover:border-accent hover:shadow-[0_0_14px_rgba(124,92,255,0.25)] rounded transition-all duration-300 select-none">
      {label}
    </span>
  );
};

export default Badge;
