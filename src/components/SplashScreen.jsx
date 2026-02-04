import { useState, useEffect } from 'react';

const SplashScreen = ({ onComplete }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timeline = [
      { time: 300, stage: 1 },     // Orbits appear
      { time: 800, stage: 2 },     // Title + subtitle + code block
      { time: 4000, stage: 3 },    // Exit animation begins (give time to read)
      { time: 5000, stage: 4 }     // Complete fade-out
    ];

    const timers = timeline.map(({ time, stage: s }) =>
      setTimeout(() => setStage(s), time)
    );

    const completeTimer = setTimeout(onComplete, 5000);
    return () => {
      timers.forEach(t => clearTimeout(t));
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-gradient-to-br from-[#212842] via-[#1a1f35] to-[#212842] flex items-center justify-center overflow-hidden transition-all duration-1000 ${
      stage >= 4 ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
    }`}>
      
      <style jsx>{`
        @keyframes orbitingSphere {
          0% { transform: rotate(0deg) translateX(80px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(80px) rotate(-360deg); }
        }

        @keyframes spherePulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.2); opacity: 1; }
        }

        @keyframes titleMorphIn {
          0% { 
            opacity: 0; 
            transform: perspective(1000px) rotateX(90deg) scale(0.5);
            filter: blur(20px);
          }
          100% { 
            opacity: 1; 
            transform: perspective(1000px) rotateX(0deg) scale(1);
            filter: blur(0px);
          }
        }

        @keyframes subtitleSlideIn {
          0% { 
            opacity: 0; 
            transform: translateX(-60px);
            filter: blur(10px);
          }
          100% { 
            opacity: 1; 
            transform: translateX(0);
            filter: blur(0px);
          }
        }

        @keyframes codeBlockAppear {
          0% { 
            opacity: 0; 
            transform: translateY(30px) scaleY(0);
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) scaleY(1);
          }
        }

        @keyframes exitFadeUp {
          0% { 
            opacity: 1;
            transform: translateY(0);
          }
          100% { 
            opacity: 0;
            transform: translateY(-50px);
          }
        }

        .orbit { animation: orbitingSphere 3s linear infinite; }
        .sphere-pulse { animation: spherePulse 1.5s ease-in-out infinite; }
        .title-morph { animation: titleMorphIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1); }
        .subtitle-slide { animation: subtitleSlideIn 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
        .code-block { animation: codeBlockAppear 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
        .exit-fade { animation: exitFadeUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards; }

        .grid-bg {
          background-image: 
            linear-gradient(rgba(240, 231, 213, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(240, 231, 213, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          background-position: center;
        }
      `}</style>

      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30"></div>

      {/* Floating gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F0E7D5]/5 rounded-full blur-3xl" style={{
          animation: stage >= 3 ? 'exitFadeUp 0.8s forwards' : 'none'
        }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#212842]/10 rounded-full blur-2xl" style={{
          animation: stage >= 3 ? 'exitFadeUp 0.8s 0.2s forwards' : 'none'
        }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center" style={{
        animation: stage >= 3 ? 'exitFadeUp 0.8s forwards' : 'none'
      }}>
        
        {/* Orbiting elements container */}
        {stage >= 1 && (
          <div className="relative mb-12 w-40 h-40 mx-auto">
            {/* Center dot */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-3 bg-[#F0E7D5] rounded-full shadow-lg" style={{
                boxShadow: '0 0 30px rgba(240, 231, 213, 0.6)'
              }}></div>
            </div>
            
            {/* Orbiting spheres */}
            <div className="absolute inset-0 orbit">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#F0E7D5]/80 rounded-full sphere-pulse" style={{
                boxShadow: '0 0 15px rgba(240, 231, 213, 0.5)'
              }}></div>
            </div>
            <div className="absolute inset-0 orbit" style={{ animationDelay: '-1.33s' }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#F0E7D5]/60 rounded-full sphere-pulse" style={{
                boxShadow: '0 0 12px rgba(240, 231, 213, 0.4)',
                animationDelay: '0.5s'
              }}></div>
            </div>
            <div className="absolute inset-0 orbit" style={{ animationDelay: '-2.66s' }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#F0E7D5]/40 rounded-full sphere-pulse" style={{
                boxShadow: '0 0 10px rgba(240, 231, 213, 0.3)',
                animationDelay: '1s'
              }}></div>
            </div>
          </div>
        )}

        {/* Main title */}
        {stage >= 1 && (
          <div className="title-morph mb-6">
            <h1 className="text-7xl sm:text-8xl font-bold text-[#F0E7D5] tracking-tight">
              James Clark
            </h1>
          </div>
        )}

        {/* Subtitle */}
        {stage >= 2 && (
          <div className="subtitle-slide mb-8">
            <p className="text-[#F0E7D5]/70 text-lg font-light tracking-widest uppercase">
              Creative Developer
            </p>
          </div>
        )}

        {/* Code block */}
        {stage >= 2 && (
          <div className="code-block max-w-md mx-auto mt-8">
            <div className="bg-[#F0E7D5]/5 backdrop-blur-sm border border-[#F0E7D5]/20 rounded-lg p-4 text-left font-mono text-sm">
              <div className="text-[#F0E7D5]/60">
                <span className="text-[#F0E7D5]/40">&lt;</span><span className="text-[#F0E7D5]">Portfolio</span><span className="text-[#F0E7D5]/40">&gt;</span>
              </div>
              <div className="text-[#F0E7D5]/50 ml-4">
                <span className="text-[#F0E7D5]/40">&lt;</span><span className="text-[#F0E7D5]/70">Building</span><span className="text-[#F0E7D5]/40">&gt;</span>
                <span className="text-[#F0E7D5]/60 inline-block ml-2">Digital Experiences</span>
              </div>
              <div className="text-[#F0E7D5]/50 ml-4">
                <span className="text-[#F0E7D5]/40">&lt;</span><span className="text-[#F0E7D5]/70">With</span><span className="text-[#F0E7D5]/40">&gt;</span>
                <span className="text-[#F0E7D5]/60 inline-block ml-2">React, Vite & Passion</span>
              </div>
              <div className="text-[#F0E7D5]/60">
                <span className="text-[#F0E7D5]/40">&lt;/</span><span className="text-[#F0E7D5]">Portfolio</span><span className="text-[#F0E7D5]/40">&gt;</span>
              </div>
            </div>
          </div>
        )}

        {/* Status indicator */}
        {stage >= 2 && (
          <div className="mt-8 flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-[#F0E7D5] rounded-full animate-pulse"></div>
            <span className="text-[#F0E7D5]/60 text-sm">Entering portfolio</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SplashScreen;
