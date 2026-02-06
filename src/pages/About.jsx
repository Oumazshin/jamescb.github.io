import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/images/profile.png';

/**
 * Professional Identity & Technical Strategy
 * Theme: Industrial Bento (Seamless Refactor)
 * Update: Removed local bg color and overflows to prevent "cutout" lines.
 */

const About = () => {
  const industrialEase = [0.215, 0.61, 0.355, 1];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.1, 
        duration: 0.5, 
        ease: industrialEase 
      }
    })
  };

  // Added backdrop-blur-sm to make the bento cards "pop" against the global blurs
  const containerStyles = "bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 backdrop-blur-sm";

  return (
    /* Changed bg-[#0a0f1d] to bg-transparent and removed overflow-hidden */
    <section id="about" className="min-h-screen py-24 relative bg-transparent text-[#F0E7D5] selection:bg-[#F0E7D5] selection:text-slate-900 px-6">
      
      {/* Local Ambient Background removed. 
          The glows are now handled globally in App.jsx to ensure they don't 
          get cut off when scrolling between sections.
      */}

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: industrialEase }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-2">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40">Identity_Protocol</span>
            <div className="h-[1px] w-12 bg-white/20" />
          </div>
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter">
            About <span className="text-white/20">/ Profile</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4">
          
          {/* Visual Identity Card */}
          <motion.div 
            custom={0} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className={`${containerStyles} md:col-span-3 lg:col-span-4 lg:row-span-2 flex flex-col gap-6`}
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-white/10 group">
              <img 
                src={profilePic} 
                alt="James Clark Bacolor" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" 
              />
              {/* Overlay uses a subtle gradient that fades into the global dark theme */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d]/60 via-transparent to-transparent" />
            </div>
            
            <div className="space-y-4">
              <div>
                <p className="text-[10px] text-white/40 uppercase font-mono tracking-widest mb-1">Education</p>
                <p className="text-sm font-bold">BS Computer Science</p>
                <p className="text-xs text-white/60">PUP Sta. Mesa, Manila</p>
              </div>
              <div className="pt-4 border-t border-white/10">
                <p className="text-[10px] text-white/40 uppercase font-mono tracking-widest mb-1">Current_Roles</p>
                <p className="text-sm font-bold opacity-80">VP Finance — JBECP PUP</p>
                <p className="text-sm font-bold opacity-80">Web Developer</p>
              </div>
            </div>
          </motion.div>

          {/* Professional Narrative */}
          <motion.div 
            custom={1} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className={`${containerStyles} md:col-span-3 lg:col-span-8`}
          >
            <h3 className="text-[10px] font-black text-white/40 mb-6 uppercase tracking-[0.3em]">Biography</h3>
            <p className="text-xl lg:text-3xl font-medium leading-tight tracking-tight">
              I bridge the gap between <span className="text-white">technical logic</span> and <span className="text-white">system efficiency</span>. 
              Focused on building scalable full-stack architectures and implementing Agile team workflows for high-performance development.
            </p>
          </motion.div>

          {/* Tech Stack Breakdown */}
          <motion.div 
            custom={2} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className={`${containerStyles} md:col-span-3 lg:col-span-4`}
          >
            <h3 className="text-[10px] font-black text-white/40 mb-6 uppercase tracking-[0.3em]">Core_Tech</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Tailwind', 'Node.js', 'PostgreSQL', 'Python', 'Expo', 'Figma', 'Photoshop', 'Project Manager', 'Illustrator'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Strategy / Professional Skills */}
          <motion.div 
            custom={3} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className={`${containerStyles} md:col-span-3 lg:col-span-4`}
          >
            <h3 className="text-[10px] font-black text-white/40 mb-6 uppercase tracking-[0.3em]">Strategy</h3>
            <div className="grid grid-cols-1 gap-2">
              {['Project Leadership', 'RESTful API Design', 'Automata Theory', 'Database Optimization'].map(skill => (
                <div key={skill} className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-[#F0E7D5] rounded-full" />
                  <span className="text-[11px] font-bold uppercase tracking-tight opacity-70">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Internship Status Card */}
          <motion.div 
            custom={4} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="bg-[#F0E7D5] text-[#0a0f1d] rounded-2xl p-6 md:col-span-3 lg:col-span-6 flex flex-col justify-center gap-4"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
              <p className="text-[10px] font-black uppercase tracking-widest">Open for 2026 Internships</p>
            </div>
            <p className="text-2xl lg:text-3xl font-black leading-none uppercase tracking-tighter">
              Looking For internships <br /> engineering-driven teams.
            </p>
          </motion.div>

          {/* Professional Performance Metrics */}
          <div className="md:col-span-3 lg:col-span-6 grid grid-cols-3 gap-4">
            {[
              { label: 'Open Source', value: 'GitHub Active', icon: '🌿' },
              { label: 'Logic', value: 'Algorithms', icon: '🧠' },
              { label: 'Architecture', value: 'Scalability', icon: '🏗️' }
            ].map((item, idx) => (
              <motion.div 
                key={item.label}
                custom={5 + idx} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className={`${containerStyles} flex flex-col items-center justify-center text-center p-4`}
              >
                <span className="text-xl mb-2">{item.icon}</span>
                <p className="text-[8px] font-bold uppercase opacity-40 mb-1">{item.label}</p>
                <p className="text-[10px] font-black tracking-tight">{item.value}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;