'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './ui/SectionTitle';
import Badge from './ui/Badge';
import { GraduationCap, Code2, Database, Wrench, Sparkles, Paintbrush } from 'lucide-react';

const skillsData = [
  {
    category: 'Languages & Core',
    icon: <Code2 className="text-accent" size={18} />,
    skills: ['JavaScript', 'TypeScript', 'React.js', 'Next.js', 'PHP', 'Laravel', 'HTML/CSS']
  },
  {
    category: 'Styling & UI',
    icon: <Paintbrush className="text-accent" size={18} />,
    skills: ['Tailwind CSS', 'Material UI', 'Bootstrap']
  },
  {
    category: 'Databases',
    icon: <Database className="text-accent" size={18} />,
    skills: ['MySQL', 'MongoDB', 'Oracle']
  },
  {
    category: 'Developer Tools',
    icon: <Wrench className="text-accent" size={18} />,
    skills: ['Figma', 'Git', 'GitHub', 'VS Code', 'Google Analytics', 'OBS']
  },
  {
    category: 'AI Tools',
    icon: <Sparkles className="text-accent" size={18} />,
    skills: ['Antigravity', 'GitHub Copilot', 'Claude', 'Cursor', 'Codex', 'Gemini CLI', 'ChatGPT']
  }
];

export const About: React.FC = () => {
  return (
    <section id="about" className="w-full py-20 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative vertical divider or background graphic */}
      <div className="absolute right-0 top-1/4 w-72 h-72 bg-accent/5 rounded-full filter blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
        >
          <SectionTitle label="01. ABOUT" title="About Me" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
            {/* Bio & Education Column */}
            <div className="lg:col-span-7 flex flex-col space-y-8">
              <div className="space-y-4 text-text-secondary text-base leading-relaxed font-sans">
                <p>
                  I'm a dedicated Web Developer with 2+ years of professional experience building
                  modern, high-performance web applications. I specialize in <strong className="text-text-primary">React.js and Next.js</strong> for frontend engineering, backed by solid database integrations and responsive design principles.
                </p>
                <p>
                  Currently, I am working at <strong className="text-accent">ITXITPro</strong> in Jaipur, where I take ownership of end-to-end project deliveries—from initial requirements analysis to final deployments—while serving as a technical mentor for junior team members. Previously, at <strong className="text-text-primary">Drift Point Technologies</strong>, I successfully shipped 10+ client websites and built essential UI components that enhanced team productivity.
                </p>
                <p>
                  I possess a strong eye for detail, using Figma and Photoshop to bridge the gap between design concepts and scalable, pixel-perfect production code.
                </p>
              </div>

              {/* Education Card */}
              <div className="p-6 bg-bg-secondary border border-border-custom hover:border-accent/30 rounded-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4 select-none">
                  <div className="p-2 bg-accent/10 border border-accent/20 rounded text-accent">
                    <GraduationCap size={20} />
                  </div>
                  <h3 className="text-lg font-mono font-bold text-text-primary">Education</h3>
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h4 className="font-bold text-text-primary text-sm font-mono">Jaipur National University</h4>
                    <span className="text-accent font-mono text-xs font-medium">Aug. 2021 – May 2024</span>
                  </div>
                  <p className="text-text-secondary text-sm mb-3">Bachelor of Computer Application (BCA) &bull; Jaipur, Rajasthan</p>
                  <p className="text-text-secondary text-xs leading-relaxed font-sans border-l-2 border-border-custom pl-3">
                    Focused on core computer science concepts including programming paradigms, data structures, 
                    database systems, and software engineering. Developed practical troubleshooting skills through rigorous 
                    academic coursework and projects.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Column */}
            <div className="lg:col-span-5 flex flex-col space-y-6">
              <h3 className="text-lg font-mono font-bold text-text-primary border-b border-border-custom pb-2 select-none">
                Technical Stack
              </h3>
              
              <div className="space-y-6 font-sans">
                {skillsData.map((group) => (
                  <div key={group.category} className="space-y-3">
                    <div className="flex items-center gap-2 text-text-primary text-xs font-mono font-semibold uppercase tracking-wider select-none">
                      {group.icon}
                      <span>{group.category}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <Badge key={skill} label={skill} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
