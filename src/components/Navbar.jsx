import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleSectionChange = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleSectionChange);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleSectionChange);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: '' },
    { id: 'about', label: 'About', icon: '' },
    { id: 'skills', label: 'Skills', icon: '' },
    { id: 'projects', label: 'Projects', icon: '' },
    { id: 'contact', label: 'Contact', icon: '' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-[#212842]/80 backdrop-blur-xl border-b border-[#F0E7D5]/10 shadow-2xl shadow-[#212842]/20' 
        : 'bg-[#212842]/60 backdrop-blur-md border-b border-[#F0E7D5]/5'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo with animation */}
          <div className="flex items-center group cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="relative">
              <h2 className="text-[#F0E7D5] text-xl sm:text-2xl font-bold relative z-10 transition-all duration-300 group-hover:scale-105">
                <span className="bg-gradient-to-r from-[#F0E7D5] via-[#F0E7D5]/90 to-[#F0E7D5] bg-clip-text text-transparent gradient-shift">
                  Portfolio
                </span>
              </h2>
              <div className="absolute -inset-2 bg-gradient-to-r from-[#F0E7D5]/10 to-[#F0E7D5]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2 bg-[#F0E7D5]/5 backdrop-blur-sm rounded-full px-6 py-2 border border-[#F0E7D5]/10">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)} 
                className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 group flex items-center justify-center ${
                  activeSection === item.id 
                    ? 'text-[#212842] bg-[#F0E7D5] shadow-lg' 
                    : 'text-[#F0E7D5] hover:text-[#212842] hover:bg-[#F0E7D5]/20'
                }`}
              >
                <span className="relative z-10 text-sm">
                  {item.label}
                </span>
                {activeSection === item.id && (
                  <div className="absolute inset-0 bg-[#F0E7D5] rounded-full scale-100 transition-transform duration-300"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-[#F0E7D5]/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden relative">
            <button 
              className="flex flex-col cursor-pointer p-3 rounded-full bg-[#F0E7D5]/10 backdrop-blur-sm border border-[#F0E7D5]/20 transition-all duration-300 hover:bg-[#F0E7D5]/20 hover:scale-105 active:scale-95" 
              onClick={toggleMenu}
            >
              <span className={`w-5 h-0.5 bg-[#F0E7D5] transition-all duration-300 rounded-full ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-[#F0E7D5] my-1 transition-all duration-300 rounded-full ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-[#F0E7D5] transition-all duration-300 rounded-full ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-500 ${
        isMenuOpen 
          ? 'max-h-screen opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="bg-[#212842]/95 backdrop-blur-xl border-t border-[#F0E7D5]/10 px-4 py-6">
          <div className="space-y-2">
            {navItems.map((item, index) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)} 
                className={`w-full text-center px-6 py-4 rounded-xl font-medium transition-all duration-300 group flex items-center justify-center ${
                  activeSection === item.id 
                    ? 'text-[#212842] bg-[#F0E7D5] shadow-lg' 
                    : 'text-[#F0E7D5] hover:text-[#212842] hover:bg-[#F0E7D5]/20'
                } ${isMenuOpen ? 'fade-in-up' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">
                  {item.label}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#F0E7D5]/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
