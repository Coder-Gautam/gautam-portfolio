'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Coffee, Code, CheckCircle2 } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: '2+', icon: <Briefcase size={20} /> },
  { label: 'Projects Delivered', value: '15+', icon: <CheckCircle2 size={20} /> },
  { label: 'Happy Clients', value: '10+', icon: <Users size={20} /> },
  { label: 'Cups of Coffee', value: '500+', icon: <Coffee size={20} /> },
  { label: 'Lines of Code', value: '50K+', icon: <Code size={20} /> },
];

export const Stats: React.FC = () => {
  return (
    <section className="w-full py-16 bg-bg-secondary/30 relative">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-3 p-3 bg-accent/5 border border-accent/10 rounded-full text-accent group-hover:scale-110 group-hover:bg-accent/10 transition-all duration-300">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-text-primary mb-1 font-mono tracking-tighter">
                {stat.value}
              </h3>
              <p className="text-text-secondary text-xs font-mono uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
