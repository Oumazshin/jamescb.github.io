import { useState, useEffect } from 'react';

const SplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
    setTimeout(() => setShowContent(true), 400);
    setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 600);
    }, 4200);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-[#212842] flex items-center justify-center overflow-hidden transition-all duration-700 ease-out ${
      !isVisible ? 'opacity-0' : 'opacity-100'
    }`}>
      
      <style jsx>{`
        @keyframes minimalistFadeScale {
          0% {
            opacity: 0;
            transform: scale(0.8);
            filter: blur(10px);
          }
          50% {
            opacity: 1;
            transform: scale(1);
            filter: blur(0px);
          }
          100% {
            opacity: 1;
            transform: scale(1);
            filter: blur(0px);
          }
        }

        @keyframes lineExpand {
          0% {
            width: 0;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            width: 100%;
            opacity: 1;
          }
        }

        @keyframes dotPulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes textReveal {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatingElements {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-30px);
            opacity: 0.4;
          }
        }

        .minimalist-fade { animation: minimalistFadeScale 2s cubic-bezier(0.34, 1.56, 0.64, 1); }
        .line-expand { animation: lineExpand 2.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }
        .dot-pulse { animation: dotPulse 1.5s ease-in-out infinite; }
        .text-reveal { animation: textReveal 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }
        .floating { animation: floatingElements 3s ease-in-out infinite; }

        .letter {
          display: inline-block;
        }
      `}</style>

      {/* Background floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#F0E7D5]/5 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-[#F0E7D5]/5 rounded-full blur-3xl floating" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-[#F0E7D5]/3 rounded-full blur-2xl floating" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Minimalist content */}
      <div className="relative z-10 text-center max-w-2xl px-6">
        
        {/* Main title - fade and scale */}
        {showContent && (
          <>
            <div className="minimalist-fade mb-8">
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-[#F0E7D5] tracking-tight">
                James Clark
              </h1>
            </div>

            {/* Animated line */}
            <div className="mb-8 h-1 bg-gradient-to-r from-transparent via-[#F0E7D5] to-transparent line-expand mx-auto max-w-xs"></div>

            {/* Subtitle with staggered animation */}
            <div className="text-reveal mb-12" style={{ animationDelay: '0.6s' }}>
              <p className="text-[#F0E7D5]/80 text-lg sm:text-xl font-light tracking-wide">
                Full-Stack Developer & Designer
              </p>
            </div>

            {/* Loading dots */}
            <div className="flex justify-center gap-3 mt-12">
              <div className="w-2 h-2 bg-[#F0E7D5] rounded-full dot-pulse"></div>
              <div className="w-2 h-2 bg-[#F0E7D5] rounded-full dot-pulse" style={{ animationDelay: '0.3s' }}></div>
              <div className="w-2 h-2 bg-[#F0E7D5] rounded-full dot-pulse" style={{ animationDelay: '0.6s' }}></div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SplashScreen;
