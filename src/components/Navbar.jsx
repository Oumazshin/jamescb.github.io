import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Optimized Industrial Navigation System
 * Enhancement: IntersectionObserver for high-performance tracking
 * Theme: Bento Glassmorphism
 */

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const industrialEase = [0.215, 0.61, 0.355, 1];

  // Performance Optimization: Use IntersectionObserver instead of scroll throttle
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Precise trigger window
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // UX Optimization: Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contacts' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      scrolled 
        ? 'bg-[#0a0f1d]/60 backdrop-blur-xl border-b border-white/5 py-3' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center">
          
          {/* Brand Mark with "System" aesthetic */}
          <div 
            className="group cursor-pointer flex items-center gap-3" 
            onClick={() => scrollToSection('home')}
          >
            <div className="relative">
              <div className="w-2.5 h-2.5 bg-[#F0E7D5] rounded-full group-hover:scale-125 transition-transform" />
              <div className="absolute inset-0 w-2.5 h-2.5 bg-[#F0E7D5] rounded-full animate-ping opacity-40" />
            </div>
            <h2 className="text-[#F0E7D5] text-lg font-black uppercase tracking-[0.2em]">
              My <span className="opacity-20">PORTFOLIO</span>
            </h2>
          </div>
          
          {/* Desktop Controls: Industrial Pill Design */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-md rounded-full px-1.5 py-1 border border-white/10 shadow-2xl">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)} 
                className={`relative px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-colors duration-300 ${
                  activeSection === item.id 
                    ? 'text-[#0a0f1d]' 
                    : 'text-white/40 hover:text-white'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                {activeSection === item.id && (
                  <motion.div 
                    layoutId="nav-pill"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                    className="absolute inset-0 bg-[#F0E7D5] rounded-full shadow-[0_0_20px_rgba(240,231,213,0.3)]"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Trigger: Animated Hamburger */}
          <button 
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 bg-white/5 border border-white/10 rounded-xl" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`w-5 h-[1.5px] bg-[#F0E7D5] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[4.5px]' : ''}`} />
            <span className={`w-5 h-[1.5px] bg-[#F0E7D5] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[4px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu: Full-Screen Terminal Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: industrialEase }}
            className="fixed inset-0 top-[60px] md:hidden bg-[#0a0f1d]/95 backdrop-blur-2xl z-[-1] overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-8 mt-12">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 border-b border-white/5 pb-4">System_Navigation</span>
              {navItems.map((item, idx) => (
                <motion.button 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left text-5xl font-black uppercase tracking-tighter flex items-center justify-between group ${
                    activeSection === item.id ? 'text-[#F0E7D5]' : 'text-white/10 hover:text-white/40'
                  }`}
                >
                  {item.label}
                  <span className="text-sm font-mono opacity-20">0{idx + 1}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;