'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Cpu, 
  Globe, 
  Layers, 
  Layout, 
  Smartphone, 
  Zap,
  Server,
  ShieldCheck,
  Search
} from 'lucide-react';

const techStack = [
  { name: 'React', icon: <Code2 size={24} /> },
  { name: 'Next.js', icon: <Layers size={24} /> },
  { name: 'TypeScript', icon: <Cpu size={24} /> },
  { name: 'Tailwind CSS', icon: <Layout size={24} /> },
  { name: 'Node.js', icon: <Server size={24} /> },
  { name: 'UI/UX Design', icon: <Globe size={24} /> },
  { name: 'Performance', icon: <Zap size={24} /> },
  { name: 'Responsive', icon: <Smartphone size={24} /> },
  { name: 'Security', icon: <ShieldCheck size={24} /> },
  { name: 'SEO', icon: <Search size={24} /> },
];

export const TechStack: React.FC = () => {
  // Duplicate the list for seamless looping
  const duplicatedStack = [...techStack, ...techStack, ...techStack];

  return (
    <div className="w-full py-12 bg-bg-primary/50 border-y border-border-custom overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-bg-primary to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-bg-primary to-transparent z-10" />
      
      <motion.div 
        className="flex items-center gap-12 md:gap-24 whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        {duplicatedStack.map((tech, index) => (
          <div 
            key={`${tech.name}-${index}`} 
            className="flex items-center gap-3 text-text-secondary hover:text-accent transition-colors duration-300 group cursor-default"
          >
            <div className="p-2 bg-bg-secondary border border-border-custom group-hover:border-accent/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
              {tech.icon}
            </div>
            <span className="font-mono text-sm font-bold tracking-widest uppercase">
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechStack;
