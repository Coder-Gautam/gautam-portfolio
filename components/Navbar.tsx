'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle scroll listener to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Highlight active section on scroll
      const sections = ['about', 'experience', 'projects', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of navbar offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(targetId);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full h-16 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-bg-primary/80 backdrop-blur-md border-b border-border-custom shadow-[0_10px_40px_rgba(0,0,0,0.18)]' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-6xl mx-auto h-full px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          className="font-mono text-xl font-bold tracking-wider text-accent hover:glow transition-all duration-300"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setActiveSection('');
          }}
        >
          GC<span className="text-text-primary">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 font-mono text-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative py-1 transition-colors duration-300 ${
                  isActive ? 'text-accent' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-accent to-accent-alt rounded shadow-[0_0_12px_rgba(124,92,255,0.55)]" />
                )}
              </a>
            );
          })}
          
          {/* Hire Me Call-to-action */}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="px-4 py-1.5 border border-accent text-accent hover:bg-accent hover:text-white rounded-md transition-all duration-300 font-medium"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-text-primary hover:text-accent p-1 transition-colors duration-300"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`fixed inset-0 top-16 w-full h-[calc(100vh-64px)] bg-bg-primary/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-8 font-mono text-lg transition-all duration-300 z-40 md:hidden ${
        isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
      }`}>
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.replace('#', '');
          return (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`transition-colors duration-300 ${
                isActive ? 'text-accent glow' : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {link.name}
            </a>
          );
        })}
        <a
          href="#contact"
          onClick={(e) => handleLinkClick(e, '#contact')}
          className="px-6 py-2 border border-accent text-accent hover:bg-accent hover:text-white rounded-md transition-all duration-300 font-semibold"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
