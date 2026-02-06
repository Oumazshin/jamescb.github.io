import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * Modern Bento-Style Projects Section
 * Theme: Industrial Bento (Dark/Cream)
 * Grid Logic: Balanced 12-Column Distribution
 */

const ProjectPlaceholder = ({ title, category }) => (
  <div className="relative w-full h-full min-h-[200px] lg:min-h-[240px] bg-white/[0.02] overflow-hidden flex items-center justify-center group-hover:bg-white/[0.04] transition-colors duration-700">
    <div className="absolute inset-0 border-[0.5px] border-white/10 m-4 rounded-xl" />
    <div className="flex flex-col items-center gap-2 z-10 text-center px-4">
      <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#F0E7D5]/30">{category}</span>
      <h4 className="text-lg md:text-xl font-black uppercase tracking-tighter text-[#F0E7D5]/50 group-hover:text-[#F0E7D5] transition-colors duration-500">{title}</h4>
    </div>
    
    {/* Optimized scanning line - GPU accelerated */}
    <motion.div 
      animate={{ translateY: ['-100%', '400%'] }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      className="absolute top-0 left-0 right-0 h-[1px] bg-[#F0E7D5]/10 blur-[2px] pointer-events-none" 
    />
  </div>
);

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const industrialEase = [0.215, 0.61, 0.355, 1];
  const containerStyles = "bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#F0E7D5]/30 transition-all duration-500 group relative";
  
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: industrialEase }
    })
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projectData = [
    {
      title: "TaskVenture",
      category: "HCI / Gamification",
      year: "2026",
      description: "A gamified productivity platform transforming academic milestones into interactive adventures.",
      stack: ["React", "Tailwind", "Supabase"],
      span: "md:col-span-12 lg:col-span-8",
      github: "https://github.com/paisenpai/venture_app"
    },
    {
      title: "EaseAccess",
      category: "Accessibility",
      year: "2025",
      description: "Inclusive platform streamlining government form submissions with dignity-focused UX.",
      stack: ["HTML5", "MySQL", "PHP"],
      span: "md:col-span-6 lg:col-span-4",
      github: "https://github.com/jdrewt/EaseAccess"
    },
    {
      title: "StateCare",
      category: "Automata Theory",
      year: "2026",
      description: "Symptom-based diagnosis engine utilizing DFA/PDA logic for medical info support.",
      stack: ["React", "Theory", "Logic"],
      span: "md:col-span-6 lg:col-span-4",
      github: "https://github.com/shousrn/statecare-app"
    },
    {
      title: "WireScript",
      category: "Language Design",
      year: "2026",
      description: "Custom Domain-Specific Language (DSL) designed for logic execution environments.",
      stack: ["Lexical", "Parser"],
      span: "md:col-span-6 lg:col-span-4",
      github: "#"
    },
    {
      title: "eHanda",
      category: "Disaster Response",
      year: "2025",
      description: "Collaborative mobile application focusing on community safety during flood emergencies.",
      stack: ["React Native", "Firebase"],
      span: "md:col-span-6 lg:col-span-4",
      github: "https://github.com/Oumazshin/eHANDA"
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="min-h-screen py-32 relative bg-[#0a0f1d] text-[#F0E7D5] selection:bg-[#F0E7D5] selection:text-slate-900 overflow-hidden px-6">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-blue-500/5 blur-[140px] rounded-full" />
        <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-purple-500/5 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: industrialEase }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#F0E7D5]/40">Selected Works</span>
            <div className="h-[1px] w-12 bg-[#F0E7D5]/20" />
          </div>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
            My <br />
            <span className="text-white/20">Projects</span>
          </h2>
        </motion.div>

        {/* 12-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {projectData.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className={`${containerStyles} ${project.span} flex flex-col`}
            >
              <ProjectPlaceholder title={project.title} category={project.category} />
              
              <div className="p-8 flex flex-col justify-between flex-grow bg-[#0a0f1d]/50 backdrop-blur-sm">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl lg:text-2xl font-black uppercase tracking-tight">{project.title}</h3>
                    <span className="font-mono text-[9px] py-1 px-2 border border-white/10 rounded text-white/40">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-sm text-[#F0E7D5]/60 leading-relaxed mb-8">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map(tech => (
                      <span key={tech} className="text-[9px] font-black uppercase tracking-widest px-2 py-1 bg-white/5 rounded text-[#F0E7D5]/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-2 text-[10px] font-black uppercase tracking-widest border-b border-white/10 pb-1 hover:border-[#F0E7D5] transition-all duration-300"
                  >
                    View Code 
                    <span className="group-hover/link:-rotate-45 transition-transform duration-300">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Metadata Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#F0E7D5]/40">
              Registry: All Nodes Operational
            </p>
          </div>
          <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#F0E7D5]/20">
            Phase_03 // Projects_Index
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;