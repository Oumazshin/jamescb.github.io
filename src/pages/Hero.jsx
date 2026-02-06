import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { throttle } from '../utils/helpers';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const roles = [
    { text: 'Computer Science Student', color: 'text-white' },
    { text: 'VP of Finance @ JBECP', color: 'text-white' },
    { text: 'Web Developer', color: 'text-white' },
    { text: 'Frontend Specialist', color: 'text-white' }
  ];

  useEffect(() => {
    let timeout;
    const currentRole = roles[currentRoleIndex];

    if (isTyping) {
      if (typedText.length < currentRole.text.length) {
        timeout = setTimeout(() => {
          setTypedText(currentRole.text.slice(0, typedText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (typedText.length > 0) {
        timeout = setTimeout(() => {
          setTypedText(typedText.slice(0, -1));
        }, 40);
      } else {
        setIsTyping(true);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [typedText, isTyping, currentRoleIndex]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-transparent text-[#F0E7D5] px-6">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col items-center text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">Open for 2026 Internships</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85]">
              James Clark <br />
              <span className="text-white/20">Bacolor</span>
            </h1>
          </motion.div>
          
          <div className="bg-white/5 border border-white/10 backdrop-blur-md px-8 py-3 rounded-2xl mb-8 min-h-[60px] flex items-center">
            <span className="text-lg md:text-2xl font-mono tracking-tight text-white/80">
              {typedText}
              <span className="w-2 h-5 bg-[#F0E7D5] ml-2 inline-block animate-pulse" />
            </span>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            className="max-w-2xl text-base md:text-lg mb-10 leading-relaxed font-medium"
          >
            Bridge between technical logic and user-centric design. 
            3rd year <span className="text-white">Computer Science</span> student at PUP Sta. Mesa Manila, 
            building scalable web systems with React and leadership through Agile practices.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button 
              onClick={() => scrollToSection('projects')} 
              className="group relative px-8 py-4 bg-[#F0E7D5] text-[#0a0f1d] rounded-full font-black uppercase text-xs tracking-[0.2em] transition-all hover:scale-105 active:scale-95"
            >
              View Projects
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')} 
              className="px-8 py-4 bg-white/5 border border-white/10 text-[#F0E7D5] rounded-full font-black uppercase text-xs tracking-[0.2em] transition-all hover:bg-white/10 hover:border-white/20 active:scale-95"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;