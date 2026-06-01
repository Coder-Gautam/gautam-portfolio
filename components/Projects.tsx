'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './ui/SectionTitle';
import { Github, ExternalLink, Award, Sparkles, Star, Layout } from 'lucide-react';

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
  const featuredProject = {
    title: 'TestNHire Administrative Dashboard',
    description: 'A comprehensive administrative dashboard built for managing candidate evaluations, test results, and user permissions. Features real-time data visualization, modular frontend components, and a robust security layer.',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Redux', 'Chart.js'],
    highlight: 'Production Ready | Scalable Architecture',
    links: {
      github: '#',
      external: '#'
    }
  };

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

          {/* Featured Project */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-12 mb-16 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent-alt/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50" />
            <div className="relative bg-bg-card border border-border-custom hover:border-accent/40 rounded-2xl p-8 md:p-12 overflow-hidden flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-2 text-accent font-mono text-xs font-bold tracking-[0.2em] uppercase">
                  <Sparkles size={14} />
                  <span>Featured Project</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-text-primary group-hover:text-accent transition-colors duration-300">
                  {featuredProject.title}
                </h3>
                
                <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-xl">
                  {featuredProject.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {featuredProject.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-xs font-mono text-accent">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 pt-4">
                  <a href="#" className="flex items-center gap-2 text-text-primary hover:text-accent transition-colors duration-300 font-mono text-sm font-bold">
                    <ExternalLink size={20} />
                    View Case Study
                  </a>
                  <a href="#" className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors duration-300 font-mono text-sm">
                    <Github size={20} />
                    Source Code
                  </a>
                </div>
              </div>
              
              <div className="flex-1 w-full lg:w-auto relative group-hover:scale-[1.02] transition-transform duration-500">
                <div className="aspect-video bg-bg-secondary border border-border-custom rounded-xl overflow-hidden shadow-2xl relative">
                   <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent pointer-events-none" />
                   <div className="flex items-center justify-center h-full">
                      <Layout size={80} className="text-accent/20" />
                   </div>
                   {/* This would be an image tag in a real project */}
                   <div className="absolute bottom-4 left-4 right-4 p-4 bg-bg-primary/80 backdrop-blur-md border border-border-custom rounded-lg flex items-center justify-between">
                      <span className="text-xs font-mono text-accent font-bold uppercase tracking-widest">{featuredProject.highlight}</span>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                        <div className="w-2 h-2 rounded-full bg-accent/40" />
                        <div className="w-2 h-2 rounded-full bg-accent/20" />
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>

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
