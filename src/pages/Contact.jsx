import { useState, useEffect } from 'react';
import { EmailIcon, LinkedInIcon, GitHubIcon, InstagramIcon } from '../components/TechIcons';
import { config } from '../config';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

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

    const section = document.getElementById('contact');
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setSubmitStatus('error');
      return false;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setSubmitStatus('error');
      return false;
    }
    if (!formData.message.trim()) {
      setSubmitStatus('error');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      alert('Please fill in all fields correctly.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // For now, this logs to console. In production, integrate with:
      // - EmailJS (npm install @emailjs/browser)
      // - Formspree
      // - Backend API endpoint
      // Example with EmailJS:
      // const response = await emailjs.send(
      //   process.env.VITE_EMAILJS_SERVICE_ID,
      //   process.env.VITE_EMAILJS_TEMPLATE_ID,
      //   {
      //     to_email: config.email,
      //     from_name: formData.name,
      //     from_email: formData.email,
      //     message: formData.message
      //   },
      //   process.env.VITE_EMAILJS_PUBLIC_KEY
      // );

      console.log('Form submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Auto-clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      // Auto-clear error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen py-20 sm:py-24 lg:py-28 relative overflow-hidden">
      {/* Enhanced Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 to-transparent"></div>
      <div className="absolute top-10 left-10 w-20 h-20 bg-[#212842]/10 rounded-full blur-xl morphing"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#212842]/5 rounded-full blur-2xl floating"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-12 sm:mb-16 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-[#F0E7D5] relative break-words">
            <span className="text-[#F0E7D5]">
              Get In Touch
            </span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#F0E7D5]/60 rounded-full -mb-2"></span>
          </h2>
          <p className="max-w-3xl mx-auto mb-8 text-base sm:text-lg text-[#F0E7D5]/80 px-4 leading-relaxed">
            I'm actively seeking <span className="text-[#F0E7D5] font-bold bg-[#F0E7D5]/10 px-2 py-1 rounded-md">internship opportunities</span> and meaningful collaborations. 
            Whether you're interested in discussing technology, exploring potential projects, or simply connecting with a passionate developer—I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto items-stretch">
          {/* Contact Cards */}
          <div className={`flex flex-col justify-between space-y-4 sm:space-y-6 order-2 lg:order-1 ${isVisible ? 'fade-in-left stagger-2' : 'opacity-0'}`}>
            <div className="group p-6 sm:p-8 bg-slate-800/70 backdrop-blur-sm rounded-2xl border border-slate-600/50 hover:border-[#F0E7D5]/40 transition-all duration-500 hover-lift relative overflow-hidden shadow-lg hover:shadow-xl flex-1 min-h-[120px] sm:min-h-[130px]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#F0E7D5]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex flex-col justify-center h-full relative z-10">
                <h3 className="text-[#F0E7D5] text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-3">
                  <EmailIcon className="w-6 h-6 sm:w-7 sm:h-7 text-[#F0E7D5] transition-transform duration-300 group-hover:scale-110" />
                  Email
                </h3>
                <a 
                  href={`mailto:${config.email}`} 
                  className="text-slate-300 hover:text-[#F0E7D5] transition-colors duration-300 block text-base sm:text-lg font-medium break-all"
                >
                  {config.email}
                </a>
              </div>
            </div>
            
            <div className="group p-6 sm:p-8 bg-slate-800/70 backdrop-blur-sm rounded-2xl border border-slate-600/50 hover:border-blue-400/50 transition-all duration-500 hover-lift relative overflow-hidden shadow-lg hover:shadow-xl flex-1 min-h-[120px] sm:min-h-[130px]">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex flex-col justify-center h-full relative z-10">
                <h3 className="text-blue-400 text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-3">
                  <LinkedInIcon className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:scale-110" />
                  LinkedIn
                </h3>
                <a 
                  href={config.linkedIn} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-300 block text-base sm:text-lg font-medium"
                >
                  Connect with me professionally
                </a>
              </div>
            </div>
            
            <div className="group p-6 sm:p-8 bg-slate-800/70 backdrop-blur-sm rounded-2xl border border-slate-600/50 hover:border-gray-300/50 transition-all duration-500 hover-lift relative overflow-hidden shadow-lg hover:shadow-xl flex-1 min-h-[120px] sm:min-h-[130px]">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-300/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex flex-col justify-center h-full relative z-10">
                <h3 className="text-gray-300 text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-3">
                  <GitHubIcon className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:scale-110" />
                  GitHub
                </h3>
                <a 
                  href={config.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-300 hover:text-gray-300 transition-colors duration-300 block text-base sm:text-lg font-medium"
                >
                  Check out my repositories
                </a>
              </div>
            </div>
            
            <div className="group p-6 sm:p-8 bg-slate-800/70 backdrop-blur-sm rounded-2xl border border-slate-600/50 hover:border-pink-400/50 transition-all duration-500 hover-lift relative overflow-hidden shadow-lg hover:shadow-xl flex-1 min-h-[120px] sm:min-h-[130px]">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex flex-col justify-center h-full relative z-10">
                <h3 className="text-pink-400 text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-3">
                  <InstagramIcon className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:scale-110" />
                  Instagram
                </h3>
                <a 
                  href={config.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-300 hover:text-pink-400 transition-colors duration-300 block text-base sm:text-lg font-medium"
                >
                  Follow my journey
                </a>
              </div>
            </div>
          </div>
          
          {/* Enhanced Contact Form */}
          <form 
            className={`bg-slate-800/70 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-600/50 order-1 lg:order-2 relative hover-glow shadow-lg hover:shadow-xl flex flex-col justify-between min-h-full ${isVisible ? 'fade-in-right stagger-3' : 'opacity-0'}`} 
            onSubmit={handleSubmit}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#F0E7D5]/5 to-transparent rounded-2xl opacity-50"></div>
            
            {/* Form header */}
            <div className="mb-6 sm:mb-8 text-center relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#F0E7D5] text-glow">
                Send Message
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mt-2">I'd love to hear from you</p>
            </div>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-4 p-4 bg-green-900/30 border border-green-500/50 rounded-lg text-green-200 text-sm relative z-10">
                ✓ Thank you! I'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mb-4 p-4 bg-red-900/30 border border-red-500/50 rounded-lg text-red-200 text-sm relative z-10">
                ✗ Please fill in all fields correctly and try again.
              </div>
            )}
            
            <div className="flex-1 flex flex-col space-y-6 sm:space-y-8 relative z-10">
              <div className="form-group">
                <label htmlFor="name" className="block text-[#F0E7D5] font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 sm:py-4 bg-slate-900/90 border border-slate-600/60 rounded-lg text-[#F0E7D5] focus:outline-none focus:border-[#F0E7D5]/60 focus:ring-2 focus:ring-[#F0E7D5]/20 transition-all duration-300 placeholder-slate-400 text-sm sm:text-base hover:border-slate-500/80 hover:bg-slate-900/95 disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="block text-[#F0E7D5] font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 sm:py-4 bg-slate-900/90 border border-slate-600/60 rounded-lg text-[#F0E7D5] focus:outline-none focus:border-[#F0E7D5]/60 focus:ring-2 focus:ring-[#F0E7D5]/20 transition-all duration-300 placeholder-slate-400 text-sm sm:text-base hover:border-slate-500/80 hover:bg-slate-900/95 disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="block text-[#F0E7D5] font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows="5"
                  placeholder="Share your vision, ideas, or simply say hello. I'd love to hear from you..."
                  className="w-full px-4 py-3 sm:py-4 bg-slate-900/90 border border-slate-600/60 rounded-lg text-[#F0E7D5] focus:outline-none focus:border-[#F0E7D5]/60 focus:ring-2 focus:ring-[#F0E7D5]/20 transition-all duration-300 placeholder-slate-400 resize-vertical min-h-[140px] sm:min-h-[160px] text-sm sm:text-base hover:border-slate-500/80 hover:bg-slate-900/95 disabled:opacity-50 disabled:cursor-not-allowed"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="group w-full py-4 sm:py-5 bg-[#F0E7D5] text-[#212842] rounded-xl font-bold text-lg sm:text-xl transition-all duration-300 hover:bg-[#F0E7D5]/90 hover:scale-105 hover:shadow-lg hover:shadow-[#F0E7D5]/20 active:scale-95 mt-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span className="flex items-center justify-center gap-2 sm:gap-3">
                  {isSubmitting ? 'Sending...' : 'Let\'s Connect'}
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
