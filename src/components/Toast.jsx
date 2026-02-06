import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * High-Contrast Industrial Toast v3.5
 * Theme: Light-Inverted (#F0E7D5 Background | #0a0f1d Text)
 * Design: High-visibility System Alert / Tactile Bento
 */

const Toast = ({ message, type = 'success', onClose, duration = 5000 }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const handleExitComplete = () => {
    if (!isVisible) {
      onClose?.();
    }
  };

  const isSuccess = type === 'success';

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
          transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
          className="fixed bottom-10 right-10 z-[150] max-w-sm w-full font-mono"
        >
          {/* Inverted High-Contrast Container */}
          <div className="bg-[#F0E7D5] border-[3px] border-[#0a0f1d] rounded-none shadow-[8px_8px_0px_0px_rgba(10,15,29,0.3)] overflow-hidden">
            
            {/* Terminal Header - Inverted Colors */}
            <div className="flex items-center justify-between px-4 py-2 bg-[#0a0f1d] text-[#F0E7D5]">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-none rotate-45 ${isSuccess ? 'bg-green-400' : 'bg-red-500'}`} />
                <span className="text-[9px] font-black uppercase tracking-[0.3em]">
                  {isSuccess ? 'SIGNAL_CAPTURED' : 'SIGNAL_INTERRUPTED'}
                </span>
              </div>
              <button 
                onClick={() => setIsVisible(false)}
                className="hover:rotate-90 transition-transform duration-300 text-lg leading-none"
              >
                ×
              </button>
            </div>

            {/* Inverted Content Area */}
            <div className="p-6 flex gap-4 items-center relative bg-white/40">
              {/* Dark Scanning Line */}
              <motion.div 
                animate={{ left: ['-10%', '110%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 bottom-0 w-[1px] bg-[#0a0f1d]/10 pointer-events-none" 
              />

              <div className={`flex-shrink-0 w-10 h-10 border-2 flex items-center justify-center ${
                isSuccess ? 'border-green-600 text-green-600' : 'border-red-600 text-red-600'
              }`}>
                <span className="text-sm font-black">{isSuccess ? 'OK' : '!!'}</span>
              </div>

              <div className="flex flex-col">
                <p className="text-[12px] font-black text-[#0a0f1d] uppercase tracking-tight leading-tight">
                  {message}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[7px] font-bold uppercase text-[#0a0f1d]/40 italic">Registry: {new Date().toLocaleTimeString('en-GB', { hour12: false })}</span>
                  <div className="h-[1px] w-3 bg-[#0a0f1d]/10" />
                  <span className="text-[7px] font-bold uppercase text-[#0a0f1d]/40">Status: Verified</span>
                </div>
              </div>
            </div>

            {/* Heavy Mechanical Progress Bar */}
            <div className="h-1 w-full bg-[#0a0f1d]/5 relative">
              <motion.div 
                initial={{ width: '100%' }}
                animate={{ width: '0%' }}
                transition={{ duration: duration / 1000, ease: "linear" }}
                className="absolute top-0 left-0 h-full bg-[#0a0f1d]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;