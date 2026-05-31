'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './ui/SectionTitle';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experienceData = [
  {
    role: 'Web Developer',
    company: 'ITXITPro',
    period: 'Sep. 2025 – Present',
    location: 'Jaipur, Rajasthan',
    type: 'Present',
    description: [
      'Took ownership of end-to-end project delivery, driving requirements analysis, architectural planning, full-stack development, and deployment cycles.',
      'Served as a key technical reference point for junior developers, hosting architectural reviews and providing debugging mentorship.',
      'Analyzed client specifications to propose scalable tech stacks, standardized frameworks, and custom development workflows.'
    ]
  },
  {
    role: 'Web Developer',
    company: 'Drift Point Technologies Pvt. Ltd.',
    period: 'Mar. 2024 – Sept. 2025',
    location: 'Jaipur, Rajasthan',
    type: 'Past',
    description: [
      'Successfully delivered over 10 client websites using WordPress, prioritizing SEO compliance, responsiveness, and performance tuning.',
      'Designed responsive interfaces, key landing pages, and marketing visual resources in Figma and Photoshop.',
      'Authored modular frontend capabilities for the TestNHire application using React.js and Next.js for the administrative and end-user dashboards.',
      'Collaborated inside agile workflows with project managers, UI designers, and fellow developers to deliver stable production features.',
      'Crafted a central library of reusable UI assets, improving consistency across products and reducing frontend development cycles.'
    ]
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="w-full py-20 bg-bg-secondary relative overflow-hidden">
      {/* Background visual dots overlay */}
      <div className="absolute inset-0 grid-bg opacity-[0.4] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
        >
          <SectionTitle label="02. EXPERIENCE" title="Work History" />

          {/* Timeline Wrapper */}
          <div className="relative border-l-2 border-border-custom ml-4 md:ml-6 mt-12 space-y-12">
            {experienceData.map((job, idx) => (
              <div key={job.company + idx} className="relative pl-8 md:pl-10 group">
                {/* Timeline Dot Node */}
                <span className="absolute -left-[9px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-bg-primary border-2 border-border-custom group-hover:border-accent transition-colors duration-300">
                  <span className={`h-1.5 w-1.5 rounded-full ${
                    job.type === 'Present' 
                      ? 'bg-accent shadow-[0_0_12px_rgba(124,92,255,0.85)]' 
                      : 'bg-text-secondary group-hover:bg-accent'
                  } transition-colors duration-300`} />
                </span>

                {/* Content Card with Scroll Entrance */}
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: 'easeOut' as const, delay: idx * 0.1 }}
                  className="bg-bg-primary border border-border-custom hover:border-accent/40 rounded-lg p-6 hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-300 group"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4 select-none">
                    <div>
                      <h3 className="text-xl font-bold text-text-primary group-hover:text-accent font-mono transition-colors duration-300 flex items-center gap-2">
                        <Briefcase size={18} className="text-accent/70" />
                        {job.role}
                      </h3>
                      <p className="text-text-primary font-semibold text-sm mt-1 flex items-center gap-2 font-mono">
                        {job.company}
                        {job.type === 'Present' && (
                          <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 border border-accent bg-accent/5 text-accent rounded font-bold">
                            Present
                          </span>
                        )}
                      </p>
                    </div>

                    <div className="flex flex-row md:flex-col md:items-end gap-3 md:gap-1 text-text-secondary text-xs font-mono">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={12} className="text-accent/50" />
                        <span>{job.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={12} className="text-accent/50" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-3 font-sans text-text-secondary text-sm md:text-[14px] leading-relaxed pl-1">
                    {job.description.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex gap-2 items-start">
                        <span className="text-accent font-mono mt-1 text-xs select-none">&gt;</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
