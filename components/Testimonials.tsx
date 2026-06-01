'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './ui/SectionTitle';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at TechStream',
    content: 'Gautam delivered our project ahead of schedule and the quality of the code was exceptional. His attention to detail in the UI is exactly what we were looking for.',
    avatar: 'SJ'
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager at Drift Point',
    content: 'Working with Gautam was a breeze. He understands complex requirements quickly and translates them into beautiful, functional interfaces.',
    avatar: 'MC'
  },
  {
    name: 'Arjun Verma',
    role: 'Founder of Hyku Consulting',
    content: 'The dashboard Gautam built for us has revolutionized our workflow. It is fast, intuitive, and the architecture is very scalable.',
    avatar: 'AV'
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="w-full py-24 bg-bg-secondary relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-[30%] h-[30%] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle label="05. FEEDBACK" title="Client Testimonials" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-bg-primary border border-border-custom p-8 rounded-2xl relative group hover:border-accent/30 transition-all duration-300"
              >
                <div className="absolute -top-4 left-8 p-3 bg-accent rounded-xl text-white shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform duration-300">
                  <Quote size={20} />
                </div>
                
                <div className="flex gap-1 mb-6 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-text-secondary text-base leading-relaxed mb-8 italic">
                  &quot;{testimonial.content}&quot;
                </p>
                
                <div className="flex items-center gap-4 border-t border-border-custom pt-6">
                  <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-bold font-mono">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-text-primary font-bold text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-text-secondary text-xs font-mono uppercase tracking-wider">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
