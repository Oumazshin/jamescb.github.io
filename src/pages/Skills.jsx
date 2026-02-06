import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from '../components/TechIcons';

const SKILLS_DATA = [
  { name: "HTML", Icon: Icons.HTMLIcon, category: "Frontend", description: "Semantic markup and modern HTML5 features" },
  { name: "CSS", Icon: Icons.CSSIcon, category: "Frontend", description: "Advanced styling and responsive design" },
  { name: "Tailwind CSS", Icon: Icons.TailwindIcon, category: "Frontend", description: "Utility-first CSS framework" },
  { name: "JavaScript", Icon: Icons.JavaScriptIcon, category: "Programming", description: "Modern ES6+ and DOM manipulation" },
  { name: "React", Icon: Icons.ReactIcon, category: "Frontend", description: "Component-based UI development" },
  { name: "Python", Icon: Icons.PythonIcon, category: "Programming", description: "Versatile scripting and data processing" },
  { name: "Vite", Icon: Icons.ViteIcon, category: "Tools", description: "Fast build tool and dev server" },
  { name: "React Native", Icon: Icons.ReactIcon, category: "Mobile", description: "Cross-platform mobile apps" },
  { name: "Expo", Icon: Icons.ExpoIcon, category: "Mobile", description: "React Native platform and tools" },
  { name: "MySQL", Icon: Icons.MySQLIcon, category: "Database", description: "Relational database design" },
  { name: "Supabase", Icon: Icons.SupabaseIcon, category: "Database", description: "Open-source Firebase alternative" },
  { name: "Git", Icon: Icons.GitIcon, category: "Tools", description: "Version control" },
  { name: "Figma", Icon: Icons.FigmaIcon, category: "Design", description: "UI/UX design and prototyping" },
  { name: "Photoshop", Icon: Icons.PhotoshopIcon, category: "Design", description: "Digital image manipulation" },
  { name: "Adobe Illustrator", Icon: Icons.AdobeIllustratorIcon, category: "Design", description: "Vector graphics and illustration" }
];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }
    })
  };

  const containerStyles = "bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300";

  const categories = useMemo(() => 
    ['All', ...new Set(SKILLS_DATA.map(s => s.category))], 
  []);

  const filteredSkills = selectedCategory === 'All' 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter(s => s.category === selectedCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="min-h-screen py-24 relative bg-[#0a0f1d] text-[#F0E7D5] selection:bg-[#F0E7D5] selection:text-slate-900 overflow-hidden">
      {/* Ambient Background Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-[-5%] w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-purple-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header - Matching About Template */}
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="mb-12 text-left">
          <h2 className="text-5xl font-black uppercase tracking-tighter flex items-center gap-4">
            Skills <span className="text-white/20">/ Toolkit</span>
          </h2>
          <div className="h-1.5 w-20 bg-[#F0E7D5] mt-4 rounded-full" />
        </motion.div>

        {/* Tab Navigation */}
        <nav className="flex flex-wrap justify-start gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`relative px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 outline-none
                ${selectedCategory === cat ? 'text-slate-900' : 'text-[#F0E7D5]/40 hover:text-[#F0E7D5]'}`}
            >
              {selectedCategory === cat && (
                <motion.div layoutId="activeTab" className="absolute inset-0 bg-[#F0E7D5] rounded-full" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </nav>

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatePresence mode='popLayout'>
            {filteredSkills.map((skill, index) => (
              <motion.div
                layout
                key={skill.name}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                exit={{ opacity: 0, scale: 0.9 }}
                className={`${containerStyles} group cursor-default`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 p-4 bg-white/5 rounded-2xl border border-white/5 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                    <skill.Icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-lg font-bold uppercase tracking-tight mb-2">{skill.name}</h3>
                  <p className="text-[11px] text-[#F0E7D5]/40 leading-relaxed font-medium">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;