import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * System Boot Loader: Bacolor .SYS
 * Upgrade: Non-linear loading logic, Noise Texture, and "System" Typography
 */

const SplashScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [bootSequence, setBootSequence] = useState([
    "BIO_RELAY_CHECK...OK",
    "MEMORY_ALLOC...OK",
    "MOUNTING_VIRTUAL_DOM...",
    "HANDSHAKE_ESTABLISHED"
  ]);
  const [currentLog, setCurrentLog] = useState(0);

  // Industrial Motion Token
  const industrialEase = [0.215, 0.61, 0.355, 1];

  useEffect(() => {
    // 1. Simulated Non-Linear Loading (More realistic "computing" feel)
    const updateProgress = () => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        // Random jump between 1 and 15
        const jump = Math.floor(Math.random() * 15) + 1;
        const next = Math.min(prev + jump, 100);
        return next;
      });
    };

    // Random tick interval for "processing" effect
    const interval = setInterval(() => {
      updateProgress();
    }, 150);

    // 2. Log Cycler
    const logInterval = setInterval(() => {
      setCurrentLog(prev => (prev + 1) % bootSequence.length);
    }, 800);

    // 3. Completion Trigger
    const completeTimeout = setTimeout(() => {
      clearInterval(interval);
      clearInterval(logInterval);
      setProgress(100);
      setTimeout(onComplete, 800); // Slight delay at 100% before unmount
    }, 4500);

    return () => {
      clearInterval(interval);
      clearInterval(logInterval);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{
          opacity: 0,
          y: -50, // Slight slide up on exit
          filter: 'blur(10px)',
          transition: { duration: 0.8, ease: industrialEase }
        }}
        className="fixed inset-0 z-[200] bg-[#0a0f1d] flex flex-col items-center justify-center overflow-hidden font-mono text-[#F0E7D5] selection:bg-[#F0E7D5] selection:text-[#0a0f1d]"
      >
        {/* === ATMOSPHERE LAYERS === */}
        
        {/* Layer 1: Grain/Noise Texture for "Raw" feel */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
        />

        {/* Layer 2: Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.05] z-0" 
             style={{ 
               backgroundImage: `linear-gradient(#F0E7D5 1px, transparent 1px), linear-gradient(90deg, #F0E7D5 1px, transparent 1px)`, 
               backgroundSize: '40px 40px' 
             }} 
        />

        {/* Layer 3: Ambient Glows */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[-20%] left-[-20%] w-[800px] h-[800px] bg-blue-500/[0.02] blur-[150px] rounded-full" />
          <div className="absolute bottom-[-20%] right-[-20%] w-[800px] h-[800px] bg-purple-500/[0.02] blur-[150px] rounded-full" />
        </div>

        {/* === CORE CONTENT === */}
        <div className="relative z-10 w-full max-w-5xl px-6 flex flex-col justify-between h-[80vh]">
          
          {/* Top Bar: System Metadata */}
          <div className="flex justify-between items-start border-b border-white/5 pb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40">System_Online</span>
              </div>
              <h2 className="text-sm font-bold uppercase tracking-widest">PUP_Sta_Mesa</h2>
            </div>
            <div className="text-right">
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40 mb-1">Session_Hash</p>
              <p className="text-sm font-mono opacity-60">0x{Math.floor(Date.now() / 1000).toString(16).toUpperCase()}</p>
            </div>
          </div>

          {/* Center: Identity Block */}
          <div className="flex flex-col items-center justify-center gap-8">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: industrialEase }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-6">
                James Clark <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5">Bacolor</span>
              </h1>
              
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#F0E7D5]">
                   {bootSequence[currentLog]}
                </span>
                <motion.div 
                  animate={{ opacity: [1, 0] }} 
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="w-1.5 h-3 bg-[#F0E7D5]" 
                />
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar: Loader & Coordinates */}
          <div className="space-y-4">
            <div className="flex justify-between items-end text-[9px] font-black uppercase tracking-[0.2em] text-white/30 mb-2">
              <span>Loading_Assets...</span>
              <span className="text-[#F0E7D5]">{progress}%</span>
            </div>
            
            {/* Custom Industrial Progress Bar */}
            <div className="h-1 w-full bg-white/5 relative overflow-hidden rounded-full">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
                className="absolute top-0 left-0 h-full bg-[#F0E7D5]"
              />
              {/* Scanline overlay on bar */}
              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)] w-full h-full animate-[shimmer_2s_infinite]" />
            </div>

            <div className="flex justify-between items-center pt-2 opacity-30 text-[8px] font-mono">
              <span>LOC: 14.5995° N, 120.9842° E</span>
              <span>DEV_BUILD_2026</span>
            </div>
          </div>

        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;