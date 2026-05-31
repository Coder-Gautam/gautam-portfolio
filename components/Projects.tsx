'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './ui/SectionTitle';
import { Github, ExternalLink, Award, Sparkles, Star } from 'lucide-react';

const projectsData = [
  {
    title: 'Hyku Consulting',
    description: 'Mentored 15 students toward acceptance at top US boarding schools. Achieved a success rate by designing a collaborative, ecosystem-driven learning framework.',
    tags: ['Trello', 'Miro', 'Google Suite', 'Education'],
    highlight: '100% Success Rate',
    icon: <Award size={18} className="text-accent" />,
    links: {
      github: '#',
      external: '#'
    }
  },
  {
    title: 'Minimal Icon Pack',
    description: 'Designed and released 100+ minimal iOS and Android custom icons from scratch. Built a complete workflow, promoted via YouTube, and sold globally.',
    tags: ['Figma', 'Procreate', 'Branding', 'iOS', 'Android'],
    highlight: '$250+ Sales | 100+ Icons',
    icon: <Sparkles size={18} className="text-accent" />,
    links: {
      github: '#',
      external: 'https://gumroad.com'
    }
  },
  {
    title: 'CommonIntern',
    description: 'Automated job application pipelines on Glassdoor using web scraping scripts. Handled rate limits and sessions, gaining massive open-source momentum.',
    tags: ['Python', 'BeautifulSoup', 'Selenium', 'Automation'],
    highlight: '500+ Stars | Hackaday Front Page',
    icon: <Star size={18} className="text-accent" />,
    links: {
      github: 'https://github.com',
      external: '#'
    }
  }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const
    }
  }
};

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="w-full py-20 bg-bg-primary relative overflow-hidden">
      {/* Visual neon light leak */}
      <div className="absolute left-0 bottom-1/4 w-80 h-80 bg-accent/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
        >
          <SectionTitle label="03. PROJECTS" title="Selected Works" />

          {/* Grid Layout */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          >
            {projectsData.map((project) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover={{ y: -8, borderColor: 'rgba(124, 92, 255, 0.5)', boxShadow: '0 20px 45px -24px rgba(56,189,248,0.35)' }}
                transition={{ duration: 0.25, ease: 'easeInOut' as const }}
                className="bg-bg-card border border-border-custom hover:shadow-lg rounded-lg p-6 flex flex-col justify-between h-full group"
              >
                <div>
                  {/* Top Bar with Icon and Links */}
                  <div className="flex items-center justify-between mb-6 select-none">
                    <div className="p-2 bg-bg-secondary border border-border-custom group-hover:border-accent/30 rounded text-accent">
                      {project.icon}
                    </div>
                    
                    <div className="flex items-center gap-3 text-text-secondary">
                      {project.links.github !== '#' && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-accent hover:scale-110 transition-all duration-200"
                          aria-label="View Source on GitHub"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.links.external !== '#' && (
                        <a
                          href={project.links.external}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-accent hover:scale-110 transition-all duration-200"
                          aria-label="View Live Project"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-mono font-bold text-text-primary group-hover:text-accent transition-colors duration-200 mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-text-secondary font-sans text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Highlight Stat Tag */}
                  <div className="mb-4 py-2 px-3 bg-accent/5 border border-accent/15 rounded flex items-center gap-2 select-none text-[11px] font-mono text-accent font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    <span dangerouslySetInnerHTML={{ __html: project.highlight }} />
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 font-sans">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono text-text-secondary border border-border-custom bg-bg-secondary px-2 py-0.5 rounded uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
