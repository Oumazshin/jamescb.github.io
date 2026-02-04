import { useState, useEffect } from 'react';
import { HTMLIcon, JavaScriptIcon, ReactIcon, TailwindIcon, ViteIcon, MySQLIcon, GitHubIcon, CSSIcon, FigmaIcon, CanvaIcon, PhotoshopIcon, ExpoIcon, GitIcon } from '../components/TechIcons';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState(new Set());
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    // Set visible by default after a short delay as fallback
    const fallbackTimer = setTimeout(() => {
      setIsVisible(true);
      // Also trigger skill animations as fallback
      skills.forEach((_, index) => {
        setTimeout(() => {
          setAnimatedSkills(prev => new Set([...prev, index]));
        }, index * 100);
      });
    }, 200);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Stagger the skill card animations
            setTimeout(() => {
              skills.forEach((_, index) => {
                setTimeout(() => {
                  setAnimatedSkills(prev => new Set([...prev, index]));
                }, index * 100);
              });
            }, 300);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const section = document.getElementById('skills');
    if (section) {
      observer.observe(section);
    }

    return () => {
      clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, []);

  const skills = [
    {
      name: "HTML",
      icon: <HTMLIcon className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" />,
      category: "Frontend",
      description: "Semantic markup and modern HTML5 features"
    },
    {
      name: "CSS",
      icon: <CSSIcon className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" />,
      category: "Frontend",
      description: "Advanced styling, animations, and responsive design"
    },
    {
      name: "Tailwind CSS",
      icon: <TailwindIcon className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" />,
      category: "Frontend",
      description: "Utility-first CSS framework for rapid development"
    },
    {
      name: "JavaScript",
      icon: <JavaScriptIcon className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" />,
      category: "Programming",
      description: "Modern ES6+ features and DOM manipulation"
    },
    {
      name: "React",
      icon: <ReactIcon className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" />,
      category: "Frontend",
      description: "Component-based UI development and state management"
    },
    {
      name: "Vite",
      icon: <ViteIcon className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" />,
      category: "Tools",
      description: "Fast build tool and development server"
    },
    {
      name: "React Native",
      icon: <ReactIcon className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" />,
      category: "Mobile",
      description: "Cross-platform mobile application development"
    },
    {
      name: "Expo",
      icon: <ExpoIcon className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" />,
      category: "Mobile",
      description: "React Native development platform and tools"
    },
    {
      name: "MySQL",
      icon: <MySQLIcon className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" />,
      category: "Database",
      description: "Relational database design and query optimization"
    },
    {
      name: "Git",
      icon: <GitIcon className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" />,
      category: "Tools",
      description: "Version control and collaborative development"
    },
    {
      name: "Figma",
      icon: <FigmaIcon className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" />,
      category: "Design",
      description: "UI/UX design and prototyping tool"
    },
    {
      name: "Canva",
      icon: <CanvaIcon className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" />,
      category: "Design",
      description: "Graphic design and visual content creation"
    },
    {
      name: "Photoshop",
      icon: <PhotoshopIcon className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" />,
      category: "Design",
      description: "Photo editing and digital image manipulation"
    }
  ];

  const categories = ['All', ...new Set(skills.map(skill => skill.category))];
  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
        <section id="skills" className="min-h-screen py-20 sm:py-24 lg:py-28 relative overflow-hidden bg-slate-900/20">
      {/* Enhanced Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-transparent"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-[#212842]/10 rounded-full blur-xl morphing"></div>
      <div className="absolute bottom-32 right-20 w-32 h-32 bg-[#212842]/5 rounded-full blur-2xl floating"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#212842]/8 rounded-full blur-lg floating" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-12 sm:mb-16 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-[#F0E7D5] relative break-words">
            <span className="text-[#F0E7D5]">
              Skills
            </span> & 
            <span className="text-[#F0E7D5]"> 
              Technologies
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#F0E7D5]/60 rounded-full"></div>
          </h2>
          <p className={`max-w-3xl mx-auto text-lg sm:text-xl text-[#F0E7D5]/80 leading-relaxed ${isVisible ? 'fade-in-up stagger-1' : 'opacity-0'}`}>
            A diverse toolkit of technologies and skills I've developed through hands-on projects, collaborative team work, and continuous learning. Each technology represents countless hours of exploration and real-world application.
          </p>
        </div>

        {/* Category Pills */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 ${isVisible ? 'fade-in-up stagger-2' : 'opacity-0'}`}>
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 backdrop-blur-sm border rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-[#F0E7D5]/20 border-[#F0E7D5]/60 text-[#F0E7D5] shadow-lg shadow-[#F0E7D5]/20'
                  : 'bg-[#F0E7D5]/5 border-[#F0E7D5]/20 text-[#F0E7D5]/80 hover:border-[#F0E7D5]/40 hover:bg-[#F0E7D5]/10 hover:text-[#F0E7D5]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Skills Grid - Redesigned with larger cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {filteredSkills.map((skill, index) => (
            <div 
              key={index}
              className={`group relative bg-[#F0E7D5]/5 backdrop-blur-sm border border-[#F0E7D5]/10 rounded-2xl p-8 hover:bg-[#F0E7D5]/10 hover:border-[#F0E7D5]/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#F0E7D5]/10 cursor-pointer ${
                animatedSkills.has(index) ? 'scale-in' : 'opacity-0 scale-0'
              }`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Category badge */}
              <div className="absolute top-4 right-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-[#F0E7D5]/10 backdrop-blur-sm text-[#F0E7D5]/80 text-xs px-3 py-1 rounded-full font-medium border border-[#F0E7D5]/20">
                  {skill.category}
                </div>
              </div>
              
              <div className="relative z-10 text-center">
                {/* Icon container */}
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 bg-[#F0E7D5]/5 rounded-2xl group-hover:bg-[#F0E7D5]/10 transition-all duration-300 group-hover:shadow-lg">
                    {skill.icon}
                  </div>
                </div>
                
                {/* Skill name */}
                <h3 className="text-[#F0E7D5] font-bold text-xl mb-3 group-hover:text-[#F0E7D5] transition-colors duration-300">
                  {skill.name}
                </h3>
                
                {/* Description */}
                <p className="text-[#F0E7D5]/70 text-sm leading-relaxed group-hover:text-[#F0E7D5]/90 transition-colors duration-300">
                  {skill.description}
                </p>
              </div>
              
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F0E7D5]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
        
        {/* Bottom section */}
        <div className={`mt-16 text-center ${isVisible ? 'fade-in-up stagger-4' : 'opacity-0'}`}>
          <div className="group inline-flex items-center gap-3 px-8 py-4 bg-[#F0E7D5]/5 backdrop-blur-sm border border-[#F0E7D5]/20 rounded-full hover:border-[#F0E7D5]/40 hover:bg-[#F0E7D5]/10 transition-all duration-500">
            <div className="w-2 h-2 bg-[#F0E7D5] rounded-full animate-pulse"></div>
            <span className="text-[#F0E7D5]/80 text-sm sm:text-base group-hover:text-[#F0E7D5] transition-colors duration-300 font-medium">
              Always evolving, always growing
            </span>
            <div className="w-2 h-2 bg-[#F0E7D5] rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
