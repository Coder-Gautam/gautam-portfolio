'use client';

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-bg-primary border-t border-border-custom py-12 relative overflow-hidden select-none">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col items-center justify-between gap-6 md:flex-row">
        
        {/* Left branding */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <a
            href="#"
            onClick={handleScrollToTop}
            className="font-mono text-lg font-bold text-accent hover:glow transition-all duration-300"
          >
            GC<span className="text-text-primary">.</span>
          </a>
          <p className="text-text-secondary text-xs font-mono">
            Made with <span className="text-accent animate-pulse">&hearts;</span> in Jaipur, Rajasthan
          </p>
        </div>

        {/* Middle quick links or copyright */}
        <div className="text-center md:text-right font-sans text-xs text-text-secondary">
          <p>&copy; {currentYear} Gautam Choudhary. All rights reserved.</p>
          <p className="mt-1 text-[10px] font-mono tracking-wider text-accent/50 uppercase">Web Developer | UI/UX</p>
        </div>

        {/* Right social links */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Coder-Gautam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/Gautam Choudhary"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:gautamjat@gmail.com"
            className="text-text-secondary hover:text-accent transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
