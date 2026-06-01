'use client';

import React, { useState, useEffect } from 'react';

const Terminal: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = `> const developer = {
  name: "Gautam Choudhary",
  role: "Web Developer",
  status: "Available for Hire",
  location: "Jaipur, India",
  skills: ["React", "Next.js", "Node.js"]
};
> developer.hire();
// Contacting Gautam...
// Success! Ready to collaborate.`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div className="w-full max-w-lg bg-bg-primary/80 backdrop-blur-xl border border-border-custom rounded-xl overflow-hidden shadow-2xl font-mono text-xs md:text-sm">
      <div className="flex items-center justify-between px-4 py-3 bg-bg-secondary/50 border-b border-border-custom">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="text-text-secondary opacity-50 text-[10px] uppercase tracking-widest">bash</div>
      </div>
      <div className="p-6 h-64 overflow-y-auto custom-scrollbar">
        <pre className="text-accent leading-relaxed">
          {text}
          <span className="animate-pulse">_</span>
        </pre>
      </div>
    </div>
  );
};

export default Terminal;
