'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

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
    <section className="relative w-full min-h-screen flex items-center justify-center pt-16 overflow-hidden grid-bg select-none">
      {/* Background radial gradient overlay for focus */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent pointer-events-none z-10" />
      <div className="absolute inset-0 bg-radial-gradient(circle_at_center,transparent_20%,#0a0a0a_80%) pointer-events-none z-10" />
      
      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-20 text-center flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          {/* Tagline intro */}
          <motion.span 
            variants={itemVariants}
            className="font-mono text-accent text-xs md:text-sm tracking-[0.25em] uppercase mb-4 py-1 px-3 bg-accent/5 border border-accent/15 rounded-full"
          >
            Hi, I'm
          </motion.span>

          {/* Main Name */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold font-mono tracking-tight mb-4 text-[#f0f0f0]"
          >
            <span className="text-accent glow">Gautam</span> Choudhary
          </motion.h1>

          {/* Subtitle / Role */}
          <motion.h2 
            variants={itemVariants}
            className="text-lg md:text-2xl font-mono text-text-secondary tracking-wide mb-6 cursor-blink font-medium"
          >
            Web Developer &bull; UI/UX &bull; React & Next.js
          </motion.h2>

          {/* Tagline description */}
          <motion.p 
            variants={itemVariants}
            className="text-text-secondary text-sm md:text-lg max-w-xl mb-10 leading-relaxed font-sans"
          >
            Building fast, highly performant, and beautiful web experiences from Jaipur, Rajasthan.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full font-mono text-sm"
          >
            <button
              onClick={handleScrollToProjects}
              className="w-full sm:w-auto px-8 py-3 bg-accent text-[#0a0a0a] font-bold rounded shadow-[0_0_15px_rgba(57,255,20,0.4)] hover:shadow-[0_0_25px_rgba(57,255,20,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              View My Work <ArrowDown size={16} className="animate-bounce" />
            </button>
            <a
              href="/resume.pdf"
              download="Gautam_Choudhary_Resume.pdf"
              className="w-full sm:w-auto px-8 py-3 border border-accent text-accent font-bold rounded hover:bg-accent/5 hover:shadow-[0_0_15px_rgba(57,255,20,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center"
            >
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-6"
          >
            <a
              href="https://github.com/YOUR_USERNAME" // placeholder to be filled or general
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="https://linkedin.com/in/Gautam Choudhary" // space fits name
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:gautamjat@gmail.com"
              className="text-text-secondary hover:text-accent transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll down indicator arrow at bottom */}
        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-secondary opacity-60 hover:opacity-100 transition-opacity duration-300">
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <ArrowDown size={14} className="animate-bounce" />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
