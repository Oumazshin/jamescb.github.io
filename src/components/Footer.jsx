import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * Optimized Industrial Footer
 * Task: Simplified Container Naming & UI Polish
 */

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  // Industrial Motion & Theme Tokens
  const industrialEase = [0.215, 0.61, 0.355, 1];
  const containerStyles = "bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] hover:border-[#F0E7D5]/20 transition-all duration-500 relative overflow-hidden";
  
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1, y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: industrialEase }
    })
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    const footer = document.querySelector('footer');
    if (footer) observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0a0f1d] pt-32 pb-12 overflow-hidden px-6 selection:bg-[#F0E7D5] selection:text-[#0a0f1d]">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Row 1: Brand Identity */}
        <motion.div 
          custom={0} variants={fadeUp} initial="hidden" animate={isVisible ? "visible" : "hidden"}
          className="mb-16 border-b border-white/5 pb-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-[#F0E7D5]">
                James Clark <br />
                <span className="text-white/20">Bacolor</span>
              </h2>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mt-6">
                Systemized Design • Technical Execution • Creative Leadership
              </p>
            </div>
            <div className="hidden lg:block text-right">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 mb-2">Core Stack</p>
              <div className="flex gap-3 justify-end">
                {['React', 'Python', 'Tailwind', 'PostgreSQL'].map(tech => (
                  <span key={tech} className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 border border-white/10 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Row 2: Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* A. Quick Links */}
          <motion.div 
            custom={1} variants={fadeUp} initial="hidden" animate={isVisible ? "visible" : "hidden"}
            className={`${containerStyles} md:col-span-3 flex flex-col justify-between`}
          >
            <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30 mb-8">Quick Links</p>
            <nav className="flex flex-col gap-3">
              {['home', 'about', 'projects', 'contact'].map((link) => (
                <button 
                  key={link}
                  onClick={() => scrollToSection(link)}
                  className="group flex items-center justify-between text-[11px] font-black uppercase tracking-widest text-white/60 hover:text-[#F0E7D5] transition-colors"
                >
                  {link}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </button>
              ))}
            </nav>
          </motion.div>

          {/* B. Background & Affiliations */}
          <motion.div 
            custom={2} variants={fadeUp} initial="hidden" animate={isVisible ? "visible" : "hidden"}
            className={`${containerStyles} md:col-span-6 flex flex-col justify-between`}
          >
            <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30 mb-8">Background</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <p className="text-[11px] font-black uppercase tracking-tight text-[#F0E7D5]">PUP Sta. Mesa Manila</p>
                <p className="text-[10px] text-white/40 font-medium">BS Computer Science • 3rd Year</p>
              </div>
              <div className="space-y-4 border-l border-white/10 pl-6">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#F0E7D5]">VP Finance</p>
                  <p className="text-[9px] text-white/40 uppercase">JBECP-PUP Org</p>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#F0E7D5]">Web Development</p>
                  <p className="text-[9px] text-white/40 uppercase">GDG Campus-PUP</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* C. Improved Return Button */}
          <motion.div 
            custom={3} variants={fadeUp} initial="hidden" animate={isVisible ? "visible" : "hidden"}
            className="relative bg-white/5 border border-white/10 rounded-2xl md:col-span-3 overflow-hidden group cursor-pointer h-full"
            onClick={() => scrollToSection('home')}
          >
            <div className="absolute inset-0 bg-[#F0E7D5] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.215,0.61,0.355,1]" />
            
            <div className="relative z-10 p-6 h-full flex flex-col justify-between transition-colors duration-500 group-hover:text-[#0a0f1d]">
              <div className="flex justify-between items-start">
                <span className="text-[9px] font-black uppercase tracking-[0.3em] opacity-40">Top</span>
                <motion.span whileHover={{ y: -5 }} className="text-2xl font-light">↑</motion.span>
              </div>
              
              <div className="mt-8">
                <p className="text-[11px] font-black uppercase tracking-[0.2em] leading-none mb-1">Return to Top</p>
                <p className="text-[8px] opacity-40 uppercase">Back to Start</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Row 3: Technical Metadata */}
        <div className="mt-20 pt-10 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              <div className="flex flex-col">
                <span className="text-[8px] font-black uppercase tracking-widest text-white/20">Location</span>
                <span className="text-[10px] font-bold uppercase">Manila, PH</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] font-black uppercase tracking-widest text-white/20">Gaming</span>
                <span className="text-[10px] font-bold uppercase">Frontend Development</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] font-black uppercase tracking-widest text-white/20">Build</span>
                <span className="text-[10px] font-bold uppercase">V_03.0</span>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 leading-loose">
                Built with React & Framer <br />
                © {currentYear} JAMES CLARK BACOLOR
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;