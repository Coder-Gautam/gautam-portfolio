'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import Terminal from './Terminal';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut' as const,
    },
  },
};

export const Hero: React.FC = () => {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden grid-bg select-none">
      <div className="absolute inset-0 aurora-bg pointer-events-none" />
      <motion.div
        className="absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/25 blur-[110px]"
        animate={{ scale: [1, 1.16, 1], opacity: [0.35, 0.65, 0.35] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[-8rem] top-24 h-80 w-80 rounded-full bg-accent-alt/15 blur-[120px]"
        animate={{ y: [0, 24, 0], x: [0, -12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/10 via-bg-primary/45 to-bg-primary pointer-events-none z-10" />
      
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-20 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <motion.span 
            variants={itemVariants}
            className="font-mono text-accent text-xs md:text-sm tracking-[0.22em] uppercase mb-5 py-1.5 px-4 bg-accent/10 border border-accent/20 rounded-full shadow-[0_0_30px_rgba(124,92,255,0.16)]"
          >
            Available for modern web projects
          </motion.span>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl xl:text-8xl font-bold font-mono tracking-tight mb-5 text-text-primary leading-[0.95]"
          >
            Gautam <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-alt to-[#f8fbff] glow">Choudhary</span>
          </motion.h1>

          <motion.h2 
            variants={itemVariants}
            className="text-lg md:text-2xl font-mono text-text-secondary tracking-wide mb-6 cursor-blink font-medium"
          >
            Web Developer | UI/UX | React & Next.js
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-text-secondary text-sm md:text-lg max-w-2xl mb-9 leading-relaxed font-sans"
          >
            I craft fast, polished, and conversion-focused web experiences with clean interfaces,
            smooth interactions, and production-ready frontend architecture.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10 w-full font-mono text-sm"
          >
            <button
              onClick={handleScrollToProjects}
              className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-accent to-accent-alt text-white font-bold rounded-md shadow-[0_14px_40px_rgba(124,92,255,0.34)] hover:shadow-[0_18px_55px_rgba(56,189,248,0.28)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              View My Work <ArrowDown size={16} className="animate-bounce" />
            </button>
            <a
              href="/resume.pdf"
              download="Gautam_Choudhary_Resume.pdf"
              className="w-full sm:w-auto px-8 py-3 border border-accent/50 text-text-primary font-bold rounded-md hover:bg-accent/10 hover:border-accent hover:shadow-[0_0_24px_rgba(124,92,255,0.18)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-5"
          >
            <a
              href="https://github.com/Coder-Gautam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-alt transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="https://linkedin.com/in/Gautam Choudhary"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-alt transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:codergautam7@gmail.com"
              className="text-text-secondary hover:text-accent-alt transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' as const }}
          className="relative hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Terminal />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
