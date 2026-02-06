import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Industrial Navigation System v2.0
 * Features: Dynamic Section Sync, Scroll-Margin awareness, and Terminal-grade UI
 */

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const industrialEase = [0.215, 0.61, 0.355, 1];

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Toolkit' },
    { id: 'projects', label: 'Works' },
    { id: 'contact', label: 'Inbound' }
  ];

  // Logic: High-performance section tracking
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-25% 0px -65% 0px', // Adjusted for better trigger timing
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Sync: Automatically observe all items defined in navItems
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Sync: Prevent background scrolling when mobile UI is active
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  // Logic: Clean scroll with Navbar offset
  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; 
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
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      scrolled 
        ? 'bg-[#0a0f1d]/70 backdrop-blur-xl border-b border-white/5 py-3' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center">
          
          {/* Brand Mark: Reactive System Indicator */}
          <div 
            className="group cursor-pointer flex items-center gap-3" 
            onClick={() => scrollToSection('home')}
          >
            <div className="relative flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-[#F0E7D5] rounded-full group-hover:scale-125 transition-transform" />
              <div className="absolute w-5 h-5 border border-[#F0E7D5]/20 rounded-full animate-spin [animation-duration:4s]" />
              <div className="absolute inset-0 w-2.5 h-2.5 bg-[#F0E7D5] rounded-full animate-ping opacity-40" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-[#F0E7D5] text-sm font-black uppercase tracking-[0.2em] leading-none">
                Portfolio
              </h2>
              <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest mt-1">
                By James Clark Bacolor
              </span>
            </div>
          </div>
          
          {/* Desktop Navigation: Industrial Pill */}
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
                    className="absolute inset-0 bg-[#F0E7D5] rounded-full shadow-[0_0_15px_rgba(240,231,213,0.4)]"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Trigger */}
          <button 
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`w-5 h-[1.5px] bg-[#F0E7D5] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[4.5px]' : ''}`} />
            <span className={`w-5 h-[1.5px] bg-[#F0E7D5] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[4px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu: Terminal Grade Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-[#0a0f1d] z-[-1] md:hidden"
          >
            {/* Scanline Effect */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_2px,3px_100%]" />
            
            <div className="flex flex-col p-8 pt-32 gap-6 h-full">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20">Navigation_Menu</span>
                <div className="h-[1px] flex-1 bg-white/10" />
              </div>
              
              {navItems.map((item, idx) => (
                <motion.button 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.08, ease: industrialEase }}
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left flex items-end justify-between group py-2 border-b border-white/5`}
                >
                  <span className={`text-5xl font-black uppercase tracking-tighter transition-all duration-300 ${
                    activeSection === item.id ? 'text-[#F0E7D5] pl-4' : 'text-white/10 group-hover:text-white/40'
                  }`}>
                    {item.label}
                  </span>
                  <span className="text-xs font-mono opacity-20 mb-2">0{idx + 1}</span>
                </motion.button>
              ))}
              
              <div className="mt-auto pb-12 opacity-20">
                <p className="text-[9px] font-mono tracking-[0.2em] uppercase">User_Status: Authorized</p>
                <p className="text-[9px] font-mono tracking-[0.2em] uppercase">Location: Manila_Sta.Mesa</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;