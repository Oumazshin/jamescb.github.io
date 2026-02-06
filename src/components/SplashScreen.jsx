import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * System Boot Loader: Bacolor .SYS
 * Task: Identity Synchronization & Transition Fluidity
 * Theme: Industrial Bento
 */

const SplashScreen = ({ onComplete }) => {
  const [stage, setStage] = useState(0);
  const [progress, setProgress] = useState(0);

  // Global Industrial Motion Token
  const industrialEase = [0.215, 0.61, 0.355, 1];

  useEffect(() => {
    const timeline = [
      { time: 800, stage: 1 },   // Initialize Ambience
      { time: 1800, stage: 2 },  // Reveal Identity
      { time: 4200, stage: 3 },  // System Handshake
      { time: 5000, stage: 4 }   // Termination
    ];

    const timers = timeline.map(({ time, stage: s }) =>
      setTimeout(() => setStage(s), time)
    );

    // Simulated technical progress
    const progressInterval = setInterval(() => {
      setProgress(prev => (prev < 100 ? prev + 1 : 100));
    }, 35);

    const completeTimer = setTimeout(onComplete, 5200);
    
    return () => {
      timers.forEach(t => clearTimeout(t));
      clearInterval(progressInterval);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {stage < 4 && (
        <motion.div 
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            filter: 'blur(20px)', 
            scale: 1.05,
            transition: { duration: 0.8, ease: industrialEase }
          }}
          className="fixed inset-0 z-[100] bg-[#0a0f1d] flex flex-col items-center justify-center overflow-hidden font-mono text-[#F0E7D5] selection:bg-[#F0E7D5] selection:text-[#0a0f1d]"
        >
          {/* Ambient Theme Accents */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-500/[0.03] blur-[180px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-purple-500/[0.03] blur-[180px] rounded-full" />
            
            {/* Sync scanning line with Projects.jsx */}
            <motion.div 
              animate={{ top: ['-10%', '110%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-[1px] bg-[#F0E7D5]/10 blur-sm z-20"
            />
          </div>

          <div className="relative z-10 w-full max-w-4xl px-8">
            
            {/* 1. Header Metadata */}
            <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={stage >= 1 ? { opacity: 1, x: 0 } : {}}
                transition={{ ease: industrialEase }}
              >
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-1">Source_Root</p>
                <h2 className="text-xl font-black uppercase tracking-tighter">PUP_STA_MESA</h2>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={stage >= 1 ? { opacity: 1, x: 0 } : {}}
                transition={{ ease: industrialEase }}
                className="text-right"
              >
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-1">Session_ID</p>
                <h2 className="text-xl font-black uppercase tracking-tighter italic">V_03.0_2026</h2>
              </motion.div>
            </div>

            {/* 2. Identity Reveal */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={stage >= 2 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: industrialEase }}
                className="lg:col-span-8"
              >
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-4">
                  My <br />
                  <span className="text-white/10 italic">Portfolio</span>
                </h1>
                <div className="flex items-center gap-4">
                  <div className="h-[1px] w-12 bg-[#F0E7D5]" />
                  <p className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40">Creative Technologist</p>
                </div>
              </motion.div>

              {/* 3. Terminal Registry */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={stage >= 2 ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, ease: industrialEase }}
                className="lg:col-span-4 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md"
              >
                <div className="space-y-4">
                  <div>
                    <p className="text-[8px] font-black uppercase tracking-widest text-white/20 mb-1">Affiliations</p>
                    <p className="text-[10px] font-bold uppercase leading-tight">VP Finance — JBECP PUP</p>
                    <p className="text-[10px] font-bold uppercase leading-tight">Web Dev — GDG Campus</p>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-[8px] font-black uppercase tracking-widest text-white/20 mb-1">Status</p>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
                      <p className="text-[10px] font-black uppercase tracking-tighter">Handshake_Complete</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* 4. Progress Logic */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-end">
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={stage >= 2 ? { opacity: 0.4 } : {}}
                  className="text-[9px] font-black uppercase tracking-[0.3em]"
                >
                  Initializing_Core_Protocol...
                </motion.span>
                <span className="text-[10px] font-mono font-black">{progress}%</span>
              </div>
              <div className="h-[1px] w-full bg-white/5 relative">
                <motion.div 
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  className="absolute top-0 left-0 h-full bg-[#F0E7D5]"
                />
              </div>
            </div>

          </div>

          {/* Footer Coordinates */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={stage >= 2 ? { opacity: 0.2 } : {}}
            className="absolute bottom-10 left-8 right-8 flex justify-between items-center"
          >
            <p className="text-[9px] font-black uppercase tracking-[0.4em]">14.5995° N | 120.9842° E</p>
            <p className="text-[9px] font-black uppercase tracking-[0.4em]">Auth_Root // JB</p>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;