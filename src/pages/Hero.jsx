import { useEffect, useState } from 'react';
import { throttle } from '../utils/helpers';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const roles = [
    { text: 'Computer Science Student', icon: '', color: 'from-blue-400 to-cyan-500' },
    { text: 'Full-Stack Developer', icon: '', color: 'from-green-400 to-emerald-500' },
    { text: 'Creative Problem Solver', icon: '', color: 'from-purple-400 to-pink-500' },
    { text: 'Tech Innovator', icon: '', color: 'from-yellow-400 to-orange-500' }
  ];

  // Smooth typewriter effect with consistent timing
  useEffect(() => {
    setIsVisible(true);
    
    let timeouts = [];
    
    const typeWriter = () => {
      const currentRole = roles[currentRoleIndex];
      setTypedText('');
      setIsTyping(true);
      
      // Typing phase - consistent 80ms per character
      for (let i = 0; i <= currentRole.text.length; i++) {
        timeouts.push(
          setTimeout(() => {
            setTypedText(currentRole.text.slice(0, i));
            
            // Finished typing
            if (i === currentRole.text.length) {
              setIsTyping(false);
              
              // Pause before backspacing (shorter for better flow)
              timeouts.push(
                setTimeout(() => {
                  setIsTyping(true);
                  
                  // Backspacing phase - faster and consistent
                  for (let j = currentRole.text.length; j >= 0; j--) {
                    timeouts.push(
                      setTimeout(() => {
                        setTypedText(currentRole.text.slice(0, j));
                        
                        // Finished backspacing
                        if (j === 0) {
                          setIsTyping(false);
                          
                          // Brief pause before next role
                          timeouts.push(
                            setTimeout(() => {
                              setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
                            }, 300)
                          );
                        }
                      }, (currentRole.text.length - j) * 40) // Consistent 40ms per character for backspacing
                    );
                  }
                }, 1500) // Reduced pause for better flow
              );
            }
          }, i * 80) // Consistent 80ms per character for typing
        );
      }
    };

    // Start after a brief initial delay
    const initialTimer = setTimeout(typeWriter, 800);
    timeouts.push(initialTimer);

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [currentRoleIndex]);

  // Mouse tracking for parallax effect - throttled for performance
  useEffect(() => {
    const handleMouseMove = throttle((e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50
      });
    }, 50); // Throttle to 50ms for smooth parallax

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const currentRole = roles[currentRoleIndex];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center relative pt-20 sm:pt-24 md:pt-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Ultra-Modern Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dynamic Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(250, 250, 250, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(250, 250, 250, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
          }}
        />
        
        {/* Floating Orbs with Parallax */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full liquid-morph"
            style={{
              width: `${20 + (i % 4) * 15}px`,
              height: `${20 + (i % 4) * 15}px`,
              background: `linear-gradient(45deg, rgba(250, 250, 250, ${0.1 + (i % 3) * 0.05}), rgba(0, 70, 67, ${0.1 + (i % 3) * 0.05}))`,
              left: `${10 + (i * 8)}%`,
              top: `${15 + (i * 7)}%`,
              transform: `translate(${mousePosition.x * (i % 3 + 1) * 0.3}px, ${mousePosition.y * (i % 3 + 1) * 0.3}px)`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${8 + (i % 4)}s`
            }}
          />
        ))}
        
        {/* Geometric Elements with 3D Effect */}
        <div 
          className="absolute top-1/4 left-1/4 glass-card hover-tilt"
          style={{
            width: '80px',
            height: '80px',
            transform: `translate(${mousePosition.x * 0.8}px, ${mousePosition.y * 0.8}px) rotateZ(45deg)`
          }}
        >
          <div className="absolute inset-4 border border-[#F0E7D5]/20 rotate-12 breathe"></div>
          <div className="absolute inset-2 bg-gradient-to-br from-[#F0E7D5]/10 to-transparent rounded-lg"></div>
        </div>
        
        <div 
          className="absolute top-2/3 right-1/4 glass-card hover-tilt"
          style={{
            width: '60px',
            height: '60px',
            transform: `translate(${mousePosition.x * -0.6}px, ${mousePosition.y * -0.6}px) rotateZ(12deg)`
          }}
        >
          <div className="absolute inset-2 bg-gradient-to-br from-[#212842]/20 to-[#212842]/5 rotate-45 breathe" style={{animationDelay: '1s'}}></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto py-8 sm:py-12">
          
          {/* Enhanced Hero Title with Gradient Animation */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'slide-in-blur' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight relative break-words">
              <span className="block mb-2 text-[#F0E7D5]/80 font-light text-lg sm:text-xl md:text-2xl lg:text-3xl">
                Hi, I'm
              </span>
              <span 
                className="text-[#F0E7D5] block sm:inline-block"
                style={{
                  textShadow: '0 0 40px rgba(240, 231, 213, 0.4)',
                  transform: `translateX(${mousePosition.x * 0.02}px) translateY(${mousePosition.y * 0.02}px)`,
                  wordBreak: 'break-word',
                  filter: 'drop-shadow(0 0 20px rgba(240, 231, 213, 0.3))'
                }}
              >
                James Clark Bacolor
              </span>
            </h1>
          </div>
          
          {/* Dynamic Role Display */}
          <div className={`transition-all duration-700 delay-400 ${isVisible ? 'fade-in-left' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative mb-6 sm:mb-8 min-h-[3rem] sm:min-h-[4rem] flex items-center justify-center px-4">
              <div className="bg-[#F0E7D5]/10 backdrop-blur-md px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-2xl border border-[#F0E7D5]/20 hover:bg-[#F0E7D5]/15 transition-all duration-300 max-w-full">
                <div className="flex items-center justify-center">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold break-words text-center">
                    <span className="text-[#F0E7D5]">
                      {typedText}
                    </span>
                    <span className={`w-0.5 h-5 sm:h-6 md:h-7 bg-[#F0E7D5] ml-2 inline-block ${isTyping ? 'animate-pulse' : 'animate-pulse'}`}></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Description */}
          <div className={`transition-all duration-700 delay-600 ${isVisible ? 'fade-in-right' : 'opacity-0 translate-x-8'}`}>
            <div className="relative mb-8 sm:mb-12 max-w-4xl mx-auto">
              <div className="bg-[#F0E7D5]/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-[#F0E7D5]/10 mx-4">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#F0E7D5] leading-relaxed break-words">
                  <span className="text-[#F0E7D5]">3rd year </span>
                  <span className="text-[#F0E7D5] font-bold bg-[#F0E7D5]/10 px-2 py-1 rounded-lg">
                    Computer Science
                  </span> 
                  <span className="text-[#F0E7D5]"> student at </span>
                  <span className="text-[#F0E7D5] font-bold bg-[#F0E7D5]/10 px-2 py-1 rounded-lg">
                    PUP Sta. Mesa Manila
                  </span>
                  <br /><br />
                  <span className="text-[#F0E7D5]">Passionate about crafting </span>
                  <span className="text-[#F0E7D5] font-semibold underline decoration-[#F0E7D5]/50">digital experiences</span> 
                  <span className="text-[#F0E7D5]"> that </span>
                  <span className="text-[#F0E7D5] font-semibold underline decoration-[#F0E7D5]/50">make a difference</span> 
                  <span className="text-[#F0E7D5]">. I transform complex problems into elegant, user-friendly solutions through clean code and creative thinking.</span> 
                  <span className="text-[#F0E7D5]"> new technologies.</span>
                  <br /><br />
                  <span className="text-lg text-[#F0E7D5]/80 italic block text-center">
                    Ready to contribute to your next amazing project!
                  </span>
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className={`transition-all duration-700 delay-800 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center px-4">
              {/* Primary CTA */}
              <button 
                onClick={scrollToProjects} 
                className="group relative w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#F0E7D5] to-[#F0E7D5]/90 hover:from-[#F0E7D5]/90 hover:to-[#F0E7D5] text-[#212842] rounded-xl font-bold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 min-w-[200px] sm:min-w-[220px] active:scale-95"
              >
                <span className="flex items-center gap-2 sm:gap-3">
                  View My Work
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              
              {/* Secondary CTA */}
              <button 
                onClick={scrollToContact} 
                className="group relative w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-[#F0E7D5]/50 hover:border-[#F0E7D5] text-[#F0E7D5] rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:bg-[#F0E7D5]/10 hover:scale-105 min-w-[200px] sm:min-w-[220px] active:scale-95"
              >
                <span className="flex items-center gap-2 sm:gap-3">
                  Get In Touch
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className={`transition-all duration-700 delay-1000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-4'}`}>
            <div className="flex justify-center mt-8 sm:mt-12">
              <div 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex flex-col items-center space-y-2 sm:space-y-3 text-[#F0E7D5]/80 hover:text-[#F0E7D5] transition-all duration-300 cursor-pointer group"
              >
                <span className="text-xs sm:text-sm font-medium">Scroll to explore</span>
                <div className="flex flex-col space-y-1 sm:space-y-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-current rounded-full flex items-center justify-center group-hover:border-[#F0E7D5] transition-colors duration-300">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-current rounded-full animate-bounce"></div>
                  </div>
                  <div className="w-3 h-3 sm:w-4 sm:h-4 border-r-2 border-b-2 border-current transform rotate-45 mx-auto animate-bounce" style={{animationDelay: '0.5s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
