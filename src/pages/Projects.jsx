import { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';

// Enhanced SVG placeholder component with animation
const ProjectPlaceholder = ({ title }) => (
  <svg width="400" height="200" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-105 transition-transform duration-300">
    <defs>
      <linearGradient id={`grad-${title}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#212842" />
        <stop offset="100%" stopColor="#212842" />
      </linearGradient>
      <filter id={`glow-${title}`}>
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge> 
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/> 
        </feMerge>
      </filter>
    </defs>
    <rect width="400" height="200" fill={`url(#grad-${title})`} opacity="0.1" rx="12"/>
    <rect x="20" y="20" width="360" height="160" fill="none" stroke={`url(#grad-${title})`} strokeWidth="2" strokeDasharray="5,5" rx="8" className="animate-pulse"/>
    <circle cx="200" cy="100" r="30" fill={`url(#grad-${title})`} opacity="0.3" filter={`url(#glow-${title})`} className="pulse-glow"/>
    <text x="200" y="140" textAnchor="middle" fill="#F0E7D5" fontSize="16" fontFamily="Arial, sans-serif" className="font-semibold">{title}</text>
    <text x="200" y="160" textAnchor="middle" fill="#64748b" fontSize="12" fontFamily="Arial, sans-serif">Project Preview</text>
  </svg>
);

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visible by default after a short delay as fallback
    const fallbackTimer = setTimeout(() => {
      setIsVisible(true);
    }, 150);

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

    const section = document.getElementById('projects');
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

  // Enhanced project data with verified links
  const projects = [
    {
      title: "Venture",
      description: "A gamified productivity platform that transforms everyday tasks into engaging adventures. Users build character stats, maintain streaks, and level up across life categories like fitness, academics, and personal growth—proving that productivity can be both rewarding and fun.",
      image: <ProjectPlaceholder title="Venture" />,
      technologies: ["React.js", "Vite", "Tailwind CSS", "Supabase"],
      githubUrl: "https://github.com/paisenpai/venture_app",
      liveUrl: null
    },
    {
      title: "eHanda",
      description: "A disaster-preparedness mobile app that empowers communities to navigate flood-prone areas safely and locate nearby evacuation centers during typhoons. Built collaboratively with my team, this app demonstrates our commitment to using technology for community safety and emergency preparedness.",
      image: <ProjectPlaceholder title="eHanda" />,
      technologies: ["React Native", "JavaScript", "Supabase"],
      githubUrl: "https://github.com/Oumazshin/eHANDA",
      liveUrl: null
    },
    {
      title: "StateCare",
      description: "A symptom-based preliminary diagnosis web application. StateCare is a modern, trustworthy health-support platform for symptom assessment and health tracking, providing informational results to help users understand their symptoms and make informed health decisions. ⚠️ Medical Disclaimer: StateCare provides informational support only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult with qualified healthcare professionals for medical concerns.",
      image: <ProjectPlaceholder title="StateCare" />,
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      githubUrl: "https://github.com/shousrn/statecare-app",
      liveUrl: null
    },
    {
      title: "EaseAccess",
      description: "An inclusive web platform designed to bridge the digital divide for Persons with Disabilities (PWDs). This accessibility-focused application streamlines government form submissions with thoughtful UX design, featuring an intuitive admin dashboard that prioritizes dignity and ease of use.",
      image: <ProjectPlaceholder title="EaseAccess" />,
      technologies: ["HTML", "CSS3", "JavaScript", "MySQL"],
      githubUrl: "https://github.com/jdrewt/EaseAccess",
      liveUrl: null
    },
    {
      title: "Personal Portfolio",
      description: "A modern, responsive showcase of my journey as a developer—built with performance and aesthetics in mind. This portfolio features smooth animations, optimized performance, and demonstrates my attention to user experience, clean design principles, and the art of storytelling through code.",
      image: <ProjectPlaceholder title="Portfolio" />,
      technologies: ["React", "Tailwind CSS", "Vite", "JavaScript"],
      githubUrl: "https://github.com/Oumazshin/my-portfolio",
      liveUrl: null
    }
  ];

  return (
    <section id="projects" className="py-20 sm:py-24 lg:py-28 relative overflow-hidden">
      {/* Enhanced Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 to-transparent"></div>
      <div className="absolute top-20 left-20 w-16 h-16 bg-[#212842]/10 rounded-full blur-xl floating"></div>
      <div className="absolute bottom-40 right-10 w-24 h-24 bg-[#212842]/5 rounded-full blur-2xl morphing"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-12 sm:mb-16 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-[#F0E7D5] relative break-words">
            <span className="text-[#F0E7D5]">
              My Projects
            </span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#F0E7D5]/60 rounded-full -mb-2"></span>
          </h2>
          <p className="text-center max-w-3xl mx-auto mb-8 text-base sm:text-lg text-[#F0E7D5]/80 px-4 leading-relaxed">
            Real-world solutions born from passion and collaboration. Each project represents a journey of <span className="text-[#F0E7D5] font-bold bg-[#F0E7D5]/10 px-2 py-1 rounded-md">problem-solving</span>, {' '}
            <span className="text-[#F0E7D5] font-bold bg-[#F0E7D5]/10 px-2 py-1 rounded-md">teamwork</span>, and the relentless pursuit of creating technology that serves people and communities.
          </p>
        </div>
        
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 ${isVisible ? 'fade-in-up stagger-2' : 'opacity-0'}`}>
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`transition-all duration-700 ${isVisible ? 'slide-in-scale' : 'opacity-0 translate-y-8 scale-95'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
