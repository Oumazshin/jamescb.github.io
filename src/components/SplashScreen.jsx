import { useState, useEffect } from 'react';

const SplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);
  const [textPhase, setTextPhase] = useState(0); // 0: hidden, 1: "Welcome", 2: "to my", 3: "Portfolio"

  // Modern, smooth sequence
  useEffect(() => {
    const sequence = async () => {
      // Initial fade in
      setTimeout(() => setIsVisible(true), 200);
      
      // Logo appears with elegant timing
      setTimeout(() => setLogoVisible(true), 800);
      
      // Text phases with natural timing
      setTimeout(() => setTextPhase(1), 1600); // "Welcome"
      setTimeout(() => setTextPhase(2), 2400); // "to my" 
      setTimeout(() => setTextPhase(3), 3000); // "Portfolio"
      
      // Exit with smooth transition
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(onComplete, 600);
      }, 5000);
    };

    sequence();
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-gradient-to-br from-[#212842] via-[#212842]/98 to-[#212842] flex items-center justify-center transition-all duration-700 ease-out ${
      !isVisible ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
    }`}>
      
      {/* Modern CSS Animations */}
      <style jsx>{`
        @keyframes logoFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(2deg); }
        }
        
        @keyframes textSlideUp {
          0% { 
            opacity: 0; 
            transform: translateY(30px) scale(0.9); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0px) scale(1); 
          }
        }
        
        @keyframes wordGlow {
          0%, 100% { 
            text-shadow: 0 0 20px rgba(240, 231, 213, 0.3);
          }
          50% { 
            text-shadow: 0 0 40px rgba(240, 231, 213, 0.6);
          }
        }
        
        @keyframes portfolioEntrance {
          0% { 
            opacity: 0; 
            transform: translateY(40px) scale(0.8); 
            filter: blur(8px);
          }
          60% { 
            opacity: 0.8; 
            transform: translateY(-5px) scale(1.02); 
            filter: blur(2px);
          }
          100% { 
            opacity: 1; 
            transform: translateY(0px) scale(1); 
            filter: blur(0px);
          }
        }
        
        .logo-float { animation: logoFloat 4s ease-in-out infinite; }
        .text-slide-up { animation: textSlideUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }
        .word-glow { animation: wordGlow 3s ease-in-out infinite; }
        .portfolio-entrance { animation: portfolioEntrance 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
      `}</style>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#212842] via-[#212842]/95 to-[#212842]/90"></div>
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#F0E7D5]/4 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 -right-32 w-80 h-80 bg-[#F0E7D5]/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 text-center">
        {/* Elegant Logo */}
        <div className={`mb-12 transition-all duration-1000 ease-out ${
          logoVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-90'
        }`}>
          <div className="relative">
            <div className="w-20 h-20 mx-auto mb-4 logo-float">
              <div className="absolute inset-0 border-2 border-[#F0E7D5]/30 rounded-full"></div>
              <div className="absolute inset-2 border border-[#F0E7D5]/50 border-dashed rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute inset-4 bg-gradient-to-br from-[#F0E7D5]/20 to-[#F0E7D5]/10 rounded-full flex items-center justify-center">
                <div className="text-2xl text-[#F0E7D5]">◆</div>
              </div>
            </div>
          </div>
        </div>

        {/* Modern Text Animation */}
        <div className="space-y-4">
          {/* Welcome */}
          {textPhase >= 1 && (
            <div className="text-slide-up">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#F0E7D5] word-glow">
                Welcome
              </h1>
            </div>
          )}

          {/* to my */}
          {textPhase >= 2 && (
            <div className="text-slide-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#F0E7D5]/90 word-glow">
                to my
              </h2>
            </div>
          )}

          {/* Portfolio */}
          {textPhase >= 3 && (
            <div className="portfolio-entrance">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-[#F0E7D5] via-[#F0E7D5]/90 to-[#F0E7D5] bg-clip-text text-transparent">
                Portfolio
              </h1>
            </div>
          )}
        </div>

        {/* Elegant bottom accent */}
        <div className={`mt-16 transition-all duration-1000 delay-1000 ${
          textPhase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#F0E7D5]/50 to-transparent mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
