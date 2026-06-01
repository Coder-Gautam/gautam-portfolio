'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './ui/SectionTitle';
import { 
  Rocket, 
  Terminal, 
  Smartphone, 
  Layout, 
  Zap, 
  Search 
} from 'lucide-react';

const services = [
  {
    title: 'Frontend Development',
    description: 'Building responsive, high-performance web applications using React and Next.js with a focus on clean code and scalability.',
    icon: <Layout className="text-accent" size={24} />,
    tags: ['React', 'Next.js', 'TypeScript']
  },
  {
    title: 'UI/UX Design',
    description: 'Designing intuitive and aesthetically pleasing user interfaces that provide seamless user experiences across all devices.',
    icon: <Terminal className="text-accent" size={24} />,
    tags: ['Figma', 'Photoshop', 'Procreate']
  },
  {
    title: 'Performance Optimization',
    description: 'Enhancing website speed and Core Web Vitals to ensure the best possible user experience and search engine ranking.',
    icon: <Zap className="text-accent" size={24} />,
    tags: ['SEO', 'Optimization', 'Vercel']
  },
  {
    title: 'Mobile-First Solutions',
    description: 'Ensuring your web applications look and perform flawlessly on every screen size, from mobile to ultra-wide displays.',
    icon: <Smartphone className="text-accent" size={24} />,
    tags: ['Responsive', 'PWA', 'Adaptive']
  },
  {
    title: 'Deployment & CI/CD',
    description: 'Setting up automated deployment pipelines to ensure your applications are always up-to-date and stable.',
    icon: <Rocket className="text-accent" size={24} />,
    tags: ['Vercel', 'Netlify', 'GitHub Actions']
  },
  {
    title: 'SEO Strategy',
    description: 'Implementing best practices for search engine optimization to help your business reach a wider audience.',
    icon: <Search className="text-accent" size={24} />,
    tags: ['Meta Tags', 'Schema', 'Semantic HTML']
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="w-full py-24 bg-bg-primary relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute left-[-10%] top-[20%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-[-5%] bottom-[10%] w-[30%] h-[30%] bg-accent-alt/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle label="04. SERVICES" title="What I Offer" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="bg-bg-secondary/50 border border-border-custom hover:border-accent/40 rounded-xl p-8 transition-all duration-300 group"
              >
                <div className="mb-6 p-4 bg-bg-primary border border-border-custom group-hover:border-accent/30 rounded-2xl w-fit group-hover:scale-110 transition-all duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-text-primary mb-4 group-hover:text-accent transition-colors duration-300 font-mono">
                  {service.title}
                </h3>
                
                <p className="text-text-secondary text-sm leading-relaxed mb-6 font-sans">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {service.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="text-[10px] font-mono font-bold tracking-wider text-accent-alt/80 uppercase px-2 py-1 bg-accent-alt/5 border border-accent-alt/10 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
