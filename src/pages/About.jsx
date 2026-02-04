import { useState, useEffect } from 'react';
import profilePic from '../assets/images/profile.png';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visible by default after a short delay as fallback
    const fallbackTimer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }

    return () => {
      clearTimeout(fallbackTimer);
      if (section) {
        observer.unobserve(section);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <section id="about" className="min-h-screen py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-slate-800/20 to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F0E7D5]/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#212842]/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Compact Header */}
        <div className={`mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#F0E7D5] mb-2 relative inline-block">
            About Me
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#F0E7D5] to-[#F0E7D5]/30 rounded-full"></div>
          </h2>
          <p className="text-base sm:text-lg text-[#F0E7D5]/70 mt-4">
            CS Student at PUP • Building meaningful digital experiences
          </p>
        </div>
        
        {/* Optimized Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[600px]">
          
          {/* Left - Profile Section (Tall) */}
          <div className={`lg:col-span-1 transition-all duration-700 delay-200 flex flex-col ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            {/* Profile Card */}
            <div className="relative group flex-1 flex flex-col">
              <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-700/30 backdrop-blur-sm rounded-2xl border border-[#F0E7D5]/20 overflow-hidden group-hover:border-[#F0E7D5]/40 transition-all duration-500 p-4 flex-1 flex flex-col">
                <div className="aspect-square w-full relative mb-4 flex-shrink-0">
                  <img 
                    src={profilePic} 
                    alt="James Clark Bacolor" 
                    className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-xl"></div>
                </div>
                
                {/* Quick Stats */}
                <div className="space-y-2 flex-grow flex flex-col justify-end">
                  <div className="flex items-center justify-between p-3 bg-[#F0E7D5]/5 rounded-lg border border-[#F0E7D5]/10 hover:border-[#F0E7D5]/30 transition-all">
                    <span className="text-sm text-[#F0E7D5]/70">Projects</span>
                    <span className="text-xl font-bold text-[#F0E7D5]">5</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[#F0E7D5]/5 rounded-lg border border-[#F0E7D5]/10 hover:border-[#F0E7D5]/30 transition-all">
                    <span className="text-sm text-[#F0E7D5]/70">Year</span>
                    <span className="text-xl font-bold text-[#F0E7D5]">3rd</span>
                  </div>
                </div>
                
                {/* Floating Element */}
                <div className="absolute top-3 right-3 w-3 h-3 bg-[#F0E7D5]/60 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
          
          {/* Middle - Journey & Focus */}
          <div className={`lg:col-span-1 transition-all duration-700 delay-300 flex flex-col gap-6 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            {/* Journey Card */}
            <div className="bg-[#F0E7D5]/5 backdrop-blur-sm rounded-2xl border border-[#F0E7D5]/20 p-6 hover:border-[#F0E7D5]/30 hover:bg-[#F0E7D5]/8 transition-all duration-300 flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-[#F0E7D5] mb-3">Journey</h3>
              <p className="text-sm text-[#F0E7D5]/80 leading-relaxed flex-grow">
                Passionate CS student at <span className="font-semibold text-[#F0E7D5]">PUP Sta. Mesa</span> exploring how technology solves real-world problems through hands-on projects and collaboration.
              </p>
              <div className="mt-auto pt-3 border-t border-[#F0E7D5]/10">
                <p className="text-xs text-[#F0E7D5]/60">2022 - Present</p>
              </div>
            </div>
            
            {/* Focus Areas Card */}
            <div className="bg-[#F0E7D5]/5 backdrop-blur-sm rounded-2xl border border-[#F0E7D5]/20 p-6 hover:border-[#F0E7D5]/30 hover:bg-[#F0E7D5]/8 transition-all duration-300 flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-[#F0E7D5] mb-3">Focus</h3>
              <div className="grid grid-cols-2 gap-2 flex-grow">
                {[
                  { name: 'Full-Stack Development' },
                  { name: 'User Experience' },
                  { name: 'Problem Solving' },
                  { name: 'Teamwork' }
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center p-3 bg-[#F0E7D5]/5 rounded-lg border border-[#F0E7D5]/10 hover:border-[#F0E7D5]/30 hover:bg-[#F0E7D5]/10 transition-all group text-center"
                  >
                    <span className="text-xs text-[#F0E7D5]/80 group-hover:text-[#F0E7D5] font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right - Education & CTA */}
          <div className={`lg:col-span-1 transition-all duration-700 delay-400 flex flex-col gap-6 ${isVisible ? 'opacity-100 translate-x-8' : 'opacity-0 translate-x-0'}`}>
            
            {/* Education Card */}
            <div className="bg-gradient-to-br from-[#F0E7D5]/10 to-[#F0E7D5]/5 backdrop-blur-sm rounded-2xl border border-[#F0E7D5]/25 p-6 hover:border-[#F0E7D5]/40 transition-all duration-300 flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#F0E7D5] rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-[#212842]">■</span>
                </div>
                <h3 className="text-lg font-bold text-[#F0E7D5]">Education</h3>
              </div>
              <div className="space-y-2 flex-grow">
                <p className="font-semibold text-[#F0E7D5]">Computer Science</p>
                <p className="text-sm text-[#F0E7D5]/70">Polytechnic University of the Philippines</p>
                <div className="h-1 w-full bg-gradient-to-r from-[#F0E7D5]/30 to-transparent rounded-full my-2"></div>
                <p className="text-xs text-[#F0E7D5]/60">3rd Year • Sta. Mesa Manila</p>
              </div>
            </div>
            
            {/* Opportunities Card */}
            <div className="bg-gradient-to-br from-[#F0E7D5]/10 to-[#F0E7D5]/5 backdrop-blur-sm rounded-2xl border border-[#F0E7D5]/25 p-6 hover:border-[#F0E7D5]/40 transition-all duration-300 flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#F0E7D5] rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-[#212842]">►</span>
                </div>
                <h3 className="text-lg font-bold text-[#F0E7D5]">Open To</h3>
              </div>
              <div className="space-y-2 flex-grow flex flex-col">
                <p className="font-semibold text-[#F0E7D5]">Internships</p>
                <p className="text-sm text-[#F0E7D5]/70">Freelance projects & collaborations</p>
                <div className="h-1 w-full bg-gradient-to-r from-[#F0E7D5]/30 to-transparent rounded-full my-2"></div>
                <div className="flex items-center gap-2 mt-auto pt-2">
                  <div className="w-2 h-2 bg-[#F0E7D5] rounded-full animate-pulse"></div>
                  <span className="text-xs text-[#F0E7D5]/60">Available now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
