import { useState, useEffect } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const footer = document.querySelector('footer');
    if (footer) {
      observer.observe(footer);
    }

    return () => observer.disconnect();
  }, []);

  const quickLinks = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '' },
    { id: 'skills', label: 'Skills', icon: '' },
    { id: 'projects', label: 'Projects', icon: '' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative mt-auto overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#212842] via-[#212842]/95 to-[#212842]/90"></div>
      <div className="absolute inset-0 bg-[#F0E7D5]/[0.02] backdrop-blur-sm"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-4 left-4 w-16 h-16 bg-[#F0E7D5]/5 rounded-full blur-xl morphing"></div>
      <div className="absolute bottom-4 right-4 w-20 h-20 bg-[#F0E7D5]/3 rounded-full blur-2xl floating"></div>
      <div className="absolute top-8 right-1/4 w-12 h-12 bg-[#F0E7D5]/4 rounded-full blur-lg floating" style={{animationDelay: '1s'}}></div>

      <div className="relative z-10 border-t border-[#F0E7D5]/10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          
          {/* Main Footer Content */}
          <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-12 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
            
            {/* Personal Brand Section */}
            <div className={`text-center lg:text-left ${isVisible ? 'fade-in-up stagger-1' : 'opacity-0'}`}>
              <div className="group mb-6">
                <h3 className="text-[#F0E7D5] text-2xl sm:text-3xl font-bold mb-3 relative">
                  <span className="bg-gradient-to-r from-[#F0E7D5] via-[#F0E7D5]/90 to-[#F0E7D5] bg-clip-text text-transparent gradient-shift">
                    James Clark Bacolor
                  </span>
                </h3>
                <div className="w-16 h-0.5 bg-gradient-to-r from-[#F0E7D5] to-[#F0E7D5]/60 mx-auto lg:mx-0 rounded-full"></div>
              </div>
              
              <p className="text-[#F0E7D5]/80 text-base sm:text-lg mb-4 leading-relaxed">
                Computer Science Student & Web Developer
              </p>
              <p className="text-[#F0E7D5]/60 text-sm sm:text-base leading-relaxed">
                Crafting digital experiences with passion and precision
              </p>
              
              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start mt-6">
                {['React', 'JavaScript', 'CSS3', 'Node.js'].map((tech, index) => (
                  <span 
                    key={tech}
                    className={`px-3 py-1 bg-[#F0E7D5]/10 backdrop-blur-sm text-[#F0E7D5]/80 text-xs rounded-full border border-[#F0E7D5]/20 hover:border-[#F0E7D5]/40 transition-all duration-300 hover:bg-[#F0E7D5]/20 ${isVisible ? 'scale-in' : 'opacity-0 scale-0'}`}
                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Quick Navigation */}
            <div className={`text-center ${isVisible ? 'fade-in-up stagger-2' : 'opacity-0'}`}>
              <h3 className="text-[#F0E7D5] text-xl sm:text-2xl font-semibold mb-6">Quick Navigation</h3>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link, index) => (
                  <button 
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`group flex items-center gap-3 px-4 py-3 rounded-xl bg-[#F0E7D5]/5 backdrop-blur-sm border border-[#F0E7D5]/10 text-[#F0E7D5]/80 hover:text-[#F0E7D5] hover:bg-[#F0E7D5]/15 hover:border-[#F0E7D5]/30 transition-all duration-300 hover:scale-105 hover-lift-secondary ${isVisible ? 'slide-in-scale' : 'opacity-0'}`}
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform duration-300">{link.icon}</span>
                    <span className="text-sm font-medium">{link.label}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#F0E7D5]/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Call to Action */}
            <div className={`text-center lg:text-right ${isVisible ? 'fade-in-up stagger-3' : 'opacity-0'}`}>
              <h3 className="text-[#F0E7D5] text-xl sm:text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-[#F0E7D5]/70 text-sm sm:text-base mb-6 leading-relaxed">
                Ready to collaborate on your next project or discuss opportunities?
              </p>
              <button 
                onClick={() => scrollToSection('contact')}
                className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#F0E7D5] to-[#F0E7D5]/90 text-[#212842] rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#F0E7D5]/20 relative overflow-hidden"
              >
                <span className="relative z-10">Get In Touch</span>
                <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">📧</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className={`text-center pt-8 border-t border-[#F0E7D5]/10 ${isVisible ? 'fade-in-up stagger-4' : 'opacity-0'}`}>
            <div className="space-y-4">
              <p className="text-[#F0E7D5]/60 text-sm sm:text-base">
                &copy; {currentYear} James Clark Bacolor. Built with React & Vite.
              </p>
              <div className="flex items-center justify-center gap-4 text-xs sm:text-sm text-[#F0E7D5]/50">
                <span className="flex items-center gap-2">
                  Made with <span className="text-red-400 animate-pulse">code</span> and lots of <span className="text-yellow-400">passion</span>
                </span>
              </div>
              
              {/* Back to Top Button */}
              <button 
                onClick={() => scrollToSection('home')}
                className="group inline-flex items-center gap-2 px-4 py-2 mt-4 bg-[#F0E7D5]/10 backdrop-blur-sm text-[#F0E7D5]/70 hover:text-[#F0E7D5] rounded-full border border-[#F0E7D5]/20 hover:border-[#F0E7D5]/40 transition-all duration-300 hover:bg-[#F0E7D5]/20 hover:scale-105"
              >
                <span className="text-sm">Back to Top</span>
                <span className="text-lg group-hover:-translate-y-1 transition-transform duration-300">⬆️</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
