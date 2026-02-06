import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { EmailIcon, LinkedInIcon, GitHubIcon, InstagramIcon, CopyIcon } from '../components/TechIcons';
import Toast from '../components/Toast';
import { config } from '../config';

/**
 * Unified Connection Portal
 * Task: Live Status Monitor Design Upgrade
 */

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [toast, setToast] = useState(null);
  const sectionRef = useRef(null);

  const myEmail = "jcbb.jamesclark@gmail.com";
  const industrialEase = [0.215, 0.61, 0.355, 1];
  const containerStyles = "bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.07] hover:border-[#F0E7D5]/30 transition-all duration-500 relative overflow-hidden group";
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1, y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: industrialEase }
    })
  };

  useEffect(() => {
    if (config.emailjs.isConfigured) emailjs.init(config.emailjs.publicKey);
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(myEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (!config.emailjs.isConfigured) throw new Error('Service Unconfigured');
      const response = await emailjs.send(
        config.emailjs.serviceId, config.emailjs.templateId,
        { to_email: myEmail, from_name: formData.name, from_email: formData.email, message: formData.message }
      );
      if (response.status === 200) {
        setToast({ type: 'success', message: 'Inquiry successfully transmitted.' });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      setToast({ type: 'error', message: 'Transmission failure.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} id="contact" className="min-h-screen py-32 relative bg-[#0a0f1d] text-[#F0E7D5] selection:bg-[#F0E7D5] selection:text-slate-900 overflow-hidden px-6">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Unit */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: industrialEase }} className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40">Inbound Requests</span>
            <div className="h-[1px] w-12 bg-white/20" />
          </div>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
            Let's <br /><span className="text-white/20">Collaborate</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Identity Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <motion.div custom={0} variants={cardVariants} initial="hidden" animate={isVisible ? "visible" : "hidden"} className={containerStyles}>
              <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-4">Direct Endpoint</p>
              <div className="flex items-center justify-between cursor-pointer group/copy" onClick={handleCopyEmail}>
                <span className="text-xs font-mono lowercase tracking-tight break-all">{myEmail}</span>
                <div className="opacity-40 group-hover/copy:opacity-100 transition-opacity">
                  {copied ? <span className="text-[9px] font-black uppercase text-green-500">Copied</span> : <CopyIcon className="w-4 h-4" />}
                </div>
              </div>
            </motion.div>

            {/* High-Impact Live Status Card */}
            <motion.div custom={1} variants={cardVariants} initial="hidden" animate={isVisible ? "visible" : "hidden"} className={`${containerStyles} flex-grow flex flex-col`}>
              <div className="flex justify-between items-start mb-8">
                <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Live Status Monitor</p>
                <div className="flex flex-col items-end opacity-20">
                  <span className="text-[8px] font-mono leading-none">FRQ: 60Hz</span>
                  <span className="text-[8px] font-mono leading-none">SYNC: OK</span>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#F0E7D5]">System_Active</p>
              </div>

              <div className="h-[1px] w-full bg-white/10 mb-6" />

              <p className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9] mt-auto">
                Open for <br />
                <span className="text-white/20 group-hover:text-white/40 transition-colors duration-500">2026</span> <br />
                Internships
              </p>
            </motion.div>
          </div>

          {/* Connection Portal (8-Wide) */}
          <motion.div custom={2} variants={cardVariants} initial="hidden" animate={isVisible ? "visible" : "hidden"} className={`${containerStyles} lg:col-span-8`}>
            <h3 className="text-[10px] font-black text-white/40 mb-8 uppercase tracking-[0.3em]">Connection_Portal</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[9px] font-black uppercase tracking-widest text-white/30 ml-1">Full_Name</label>
                  <input type="text" placeholder="Enter name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-[#F0E7D5]/40 outline-none text-sm font-bold transition-all" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}/>
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-black uppercase tracking-widest text-white/30 ml-1">Email_Address</label>
                  <input type="email" placeholder="Enter email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-[#F0E7D5]/40 outline-none text-sm font-bold transition-all" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}/>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-black uppercase tracking-widest text-white/30 ml-1">Message_Inquiry</label>
                <textarea rows="6" placeholder="How can I help you?" required className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-[#F0E7D5]/40 outline-none text-sm font-bold resize-none transition-all" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}/>
              </div>
              <button type="submit" disabled={isSubmitting} className="w-full py-5 bg-[#F0E7D5] text-[#0a0f1d] font-black uppercase text-xs tracking-[0.4em] rounded-xl hover:scale-[1.01] transition-all disabled:opacity-30">
                {isSubmitting ? 'Sending Message...' : 'Submit Inquiry'}
              </button>
            </form>
          </motion.div>

          {/* Social Nexus */}
          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {[
              { label: 'LinkedIn', icon: <LinkedInIcon />, url: config.linkedIn },
              { label: 'GitHub', icon: <GitHubIcon />, url: config.github },
              { label: 'Instagram', icon: <InstagramIcon />, url: config.instagram },
            ].map((social, idx) => (
              <motion.a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer" custom={3 + idx} variants={cardVariants} initial="hidden" animate={isVisible ? "visible" : "hidden"}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center justify-between group hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-5 h-5 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                    {social.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] leading-none">{social.label}</span>
                </div>
                <span className="text-white/20 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </section>
  );
};

export default Contact;