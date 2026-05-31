'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './ui/SectionTitle';
import { Mail, MapPin, Linkedin, Send, AlertCircle, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setStatus('submitting');

    try {
      // Formspree Integration
      // To configure: Replace the endpoint or create a form on Formspree and paste the URL.
      // By default we fallback to a fetch to submit form data or mock successful submit.
      const FORMSPREE_ENDPOINT = 'https://formspree.io/f/placeholder'; // Placeholder for user customization
      
      if (FORMSPREE_ENDPOINT.includes('placeholder')) {
        // Mock successful API post
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          setStatus('success');
          setFormData({ name: '', email: '', message: '' });
        } else {
          throw new Error('Something went wrong. Please try again.');
        }
      }
    } catch (err: unknown) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Failed to submit form. Please contact me directly via email.');
    }
  };

  return (
    <section id="contact" className="w-full py-20 bg-bg-secondary relative overflow-hidden">
      {/* Background visual overlay */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-accent/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
        >
          <SectionTitle label="04. CONTACT" title="Let&apos;s Work Together" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
            {/* Direct Details & Info */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8 lg:space-y-0">
              <div className="space-y-6">
                <h3 className="text-xl font-bold font-mono text-text-primary">
                  Let&apos;s create something extraordinary.
                </h3>
                <p className="text-text-secondary text-sm md:text-base leading-relaxed font-sans">
                  Have an exciting project, a role open, or simply want to say hello? Drop me a message
                  and I will get back to you as soon as possible.
                </p>
              </div>

              {/* Quick Details Cards */}
              <div className="space-y-4 font-mono text-sm">
                <a
                  href="mailto:gautamjat@gmail.com"
                  className="flex items-center gap-4 p-4 bg-bg-primary border border-border-custom hover:border-accent/40 rounded-lg group transition-all duration-300"
                >
                  <div className="p-2.5 bg-accent/10 border border-accent/20 rounded text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary font-semibold uppercase">Email Me</p>
                    <p className="text-text-primary text-xs md:text-sm font-bold mt-0.5">gautamjat@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-bg-primary border border-border-custom rounded-lg transition-all duration-300">
                  <div className="p-2.5 bg-accent/10 border border-accent/20 rounded text-accent">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary font-semibold uppercase">Location</p>
                    <p className="text-text-primary text-xs md:text-sm font-bold mt-0.5">Jaipur, Rajasthan, India</p>
                  </div>
                </div>

                <a
                  href="https://linkedin.com/in/Gautam Choudhary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-bg-primary border border-border-custom hover:border-accent/40 rounded-lg group transition-all duration-300"
                >
                  <div className="p-2.5 bg-accent/10 border border-accent/20 rounded text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <Linkedin size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary font-semibold uppercase">LinkedIn Profile</p>
                    <p className="text-text-primary text-xs md:text-sm font-bold mt-0.5">Gautam Choudhary</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="p-6 md:p-8 bg-bg-primary border border-border-custom rounded-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Status Banners */}
                  {status === 'success' && (
                    <div className="p-4 bg-accent/10 border border-accent/30 text-accent rounded flex items-center gap-3 text-sm font-mono select-none">
                      <CheckCircle2 size={18} className="shrink-0" />
                      <span>Message sent successfully! I&apos;ll get back to you soon.</span>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-400 rounded flex items-center gap-3 text-sm font-mono select-none">
                      <AlertCircle size={18} className="shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Input Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-text-secondary font-semibold">
                        Full Name <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        disabled={status === 'submitting'}
                        className="w-full bg-bg-secondary border border-border-custom focus:border-accent focus:glow-box focus:outline-none rounded px-4 py-3 text-sm text-text-primary font-sans transition-all duration-300 disabled:opacity-50"
                        placeholder="e.g. Gautam Choudhary"
                      />
                    </div>

                    <div className="flex flex-col space-y-2">
                      <label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-text-secondary font-semibold">
                        Email Address <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        disabled={status === 'submitting'}
                        className="w-full bg-bg-secondary border border-border-custom focus:border-accent focus:glow-box focus:outline-none rounded px-4 py-3 text-sm text-text-primary font-sans transition-all duration-300 disabled:opacity-50"
                        placeholder="e.g. gautamjat@gmail.com"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label htmlFor="message" className="font-mono text-xs uppercase tracking-wider text-text-secondary font-semibold">
                      Your Message <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      className="w-full bg-bg-secondary border border-border-custom focus:border-accent focus:glow-box focus:outline-none rounded px-4 py-3 text-sm text-text-primary font-sans transition-all duration-300 resize-none disabled:opacity-50"
                      placeholder="Write your project details or collaboration request here..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-3.5 bg-gradient-to-r from-accent to-accent-alt text-white font-mono text-xs md:text-sm font-bold uppercase tracking-wider rounded-md shadow-[0_14px_40px_rgba(124,92,255,0.3)] hover:shadow-[0_18px_52px_rgba(56,189,248,0.28)] active:scale-[0.98] hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {status === 'submitting' ? (
                      <>
                        Sending Message
                        <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      </>
                    ) : (
                      <>
                        Send Message <Send size={14} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
