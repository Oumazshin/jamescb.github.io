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
    <section id="about" className="min-h-screen py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-slate-800/20 to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F0E7D5]/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#212842]/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#F0E7D5] mb-6 relative">
            About Me
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-[#F0E7D5] to-transparent rounded-full"></div>
          </h2>
          <p className="text-lg sm:text-xl text-[#F0E7D5]/70 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating meaningful digital experiences through innovative technology
          </p>
        </div>
        
        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column - Profile Image */}
          <div className={`lg:col-span-5 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-700/30 backdrop-blur-sm rounded-3xl border border-[#F0E7D5]/20 overflow-hidden group-hover:border-[#F0E7D5]/40 transition-all duration-500 p-6">
                <div className="aspect-[3/4] w-full max-w-md mx-auto relative">
                  <img 
                    src={profilePic} 
                    alt="James Clark Bacolor - Computer Science Student" 
                    className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-2xl"></div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-[#F0E7D5]/60 rounded-full animate-ping"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-[#F0E7D5]/40 rounded-full animate-pulse"></div>
              </div>
              
              {/* Stats Cards Below Image */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-center p-4 bg-[#F0E7D5]/5 backdrop-blur-sm rounded-xl border border-[#F0E7D5]/20 hover:border-[#F0E7D5]/40 hover:bg-[#F0E7D5]/10 transition-all duration-300">
                  <div className="text-2xl font-bold text-[#F0E7D5] mb-1">10+</div>
                  <div className="text-sm text-[#F0E7D5]/70">Projects</div>
                </div>
                <div className="text-center p-4 bg-[#F0E7D5]/5 backdrop-blur-sm rounded-xl border border-[#F0E7D5]/20 hover:border-[#F0E7D5]/40 hover:bg-[#F0E7D5]/10 transition-all duration-300">
                  <div className="text-2xl font-bold text-[#F0E7D5] mb-1">3rd</div>
                  <div className="text-sm text-[#F0E7D5]/70">Year CS</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className={`lg:col-span-7 space-y-8 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            
            {/* Introduction Card */}
            <div className="bg-[#F0E7D5]/5 backdrop-blur-sm rounded-2xl border border-[#F0E7D5]/20 p-8 hover:border-[#F0E7D5]/30 hover:bg-[#F0E7D5]/8 transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#F0E7D5] mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[#F0E7D5]/20 to-[#F0E7D5]/10 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-[#F0E7D5] rounded-full"></div>
                </div>
                My Journey
              </h3>
              <div className="space-y-4 text-[#F0E7D5]/90 leading-relaxed">
                <p className="text-lg">
                  I'm a passionate <span className="text-[#F0E7D5] font-semibold bg-[#F0E7D5]/10 px-2 py-1 rounded-md">Computer Science student</span> at 
                  <span className="text-[#F0E7D5] font-semibold"> PUP Sta. Mesa Manila</span>, driven by the belief that technology should serve humanity and create meaningful impact.
                </p>
                <p>
                  My journey began with curiosity about how digital solutions can solve real-world problems. Through hands-on projects and collaborative teamwork, 
                  I've discovered that the best innovations emerge when technical expertise meets creative thinking and diverse perspectives.
                </p>
              </div>
            </div>
            
            {/* Skills & Focus Areas */}
            <div className="bg-[#F0E7D5]/5 backdrop-blur-sm rounded-2xl border border-[#F0E7D5]/20 p-8 hover:border-[#F0E7D5]/30 hover:bg-[#F0E7D5]/8 transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#F0E7D5] mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[#F0E7D5]/20 to-[#F0E7D5]/10 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-[#F0E7D5] rounded-sm"></div>
                </div>
                Areas of Focus
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: 'Full-Stack Development', icon: '🚀' },
                  { name: 'User Experience Design', icon: '🎨' },
                  { name: 'Problem Solving', icon: '🧩' },
                  { name: 'Team Collaboration', icon: '🤝' },
                  { name: 'Web Technologies', icon: '💻' },
                  { name: 'Software Engineering', icon: '⚙️' }
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-[#F0E7D5]/5 rounded-lg border border-[#F0E7D5]/10 hover:border-[#F0E7D5]/30 hover:bg-[#F0E7D5]/10 transition-all duration-300 group"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
                    <span className="text-[#F0E7D5]/90 font-medium group-hover:text-[#F0E7D5] transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Education & Goals */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#F0E7D5]/5 backdrop-blur-sm rounded-xl border border-[#F0E7D5]/20 p-6 hover:border-[#F0E7D5]/30 hover:bg-[#F0E7D5]/8 transition-all duration-300">
                <h4 className="text-lg font-bold text-[#F0E7D5] mb-4 flex items-center gap-2">
                  <div className="w-6 h-6 bg-[#F0E7D5]/20 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-[#F0E7D5] rounded-full"></div>
                  </div>
                  Education
                </h4>
                <div className="space-y-2 text-[#F0E7D5]/80">
                  <p className="font-semibold text-[#F0E7D5]">Computer Science</p>
                  <p className="text-sm">Polytechnic University of the Philippines</p>
                  <p className="text-sm">Sta. Mesa Manila • 2022 - Present</p>
                </div>
              </div>
              
              <div className="bg-[#F0E7D5]/5 backdrop-blur-sm rounded-xl border border-[#F0E7D5]/20 p-6 hover:border-[#F0E7D5]/30 hover:bg-[#F0E7D5]/8 transition-all duration-300">
                <h4 className="text-lg font-bold text-[#F0E7D5] mb-4 flex items-center gap-2">
                  <div className="w-6 h-6 bg-[#F0E7D5]/20 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 border border-[#F0E7D5] rounded-full"></div>
                  </div>
                  Current Focus
                </h4>
                <div className="space-y-2 text-[#F0E7D5]/80">
                  <p className="font-semibold text-[#F0E7D5]">Seeking Opportunities</p>
                  <p className="text-sm">Ready for internships and collaborative projects</p>
                  <p className="text-sm">Building meaningful digital solutions</p>
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="bg-gradient-to-r from-[#F0E7D5]/10 to-[#F0E7D5]/5 backdrop-blur-sm rounded-xl border border-[#F0E7D5]/30 p-6 text-center">
              <p className="text-[#F0E7D5] font-medium mb-4">
                Let's collaborate and build something amazing together!
              </p>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-[#F0E7D5] rounded-full animate-pulse"></div>
                <span className="text-[#F0E7D5]/80 text-sm">Always open to new opportunities</span>
                <div className="w-2 h-2 bg-[#F0E7D5] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
