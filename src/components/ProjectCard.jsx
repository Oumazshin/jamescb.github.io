const ProjectCard = ({ project }) => {
  const { title, description, image, technologies, githubUrl, liveUrl } = project;

  return (
    <div className="group bg-slate-800/40 backdrop-blur-md rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-6 hover:shadow-2xl hover:shadow-blue-500/20 border border-slate-700/50 hover:border-blue-500/30 w-full max-w-lg mx-auto relative">
      <style jsx>{`
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        @keyframes techPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .shimmer-effect {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          animation: shimmer 2s infinite;
        }

        .tech-tag {
          animation: techPulse 2s ease-in-out infinite;
        }

        .tech-tag:nth-child(1) { animation-delay: 0s; }
        .tech-tag:nth-child(2) { animation-delay: 0.1s; }
        .tech-tag:nth-child(3) { animation-delay: 0.2s; }
        .tech-tag:nth-child(4) { animation-delay: 0.3s; }
      `}</style>

      <div className="relative overflow-hidden h-40 sm:h-48">
        {typeof image === 'string' ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-125 group-hover:rotate-1"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-700/50 to-slate-800/50 transition-all duration-500 group-hover:scale-125 group-hover:from-slate-600/60 group-hover:to-slate-700/60">
            {image}
          </div>
        )}
        
        {/* Enhanced shimmer effect */}
        <div className="shimmer-effect group-hover:opacity-0 transition-opacity duration-300"></div>
        
        {/* Enhanced overlay with better gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
            {githubUrl && (
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-transparent border-2 border-[#F0E7D5] text-[#F0E7D5] hover:bg-[#F0E7D5] hover:text-[#212842] rounded-lg font-semibold transition-all duration-300 text-center text-sm hover:scale-110 hover:shadow-lg hover:shadow-blue-500/40 active:scale-95 whitespace-nowrap"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Code
              </a>
            )}
            {liveUrl && liveUrl !== "#" && (
              <a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#F0E7D5] hover:bg-[#F0E7D5]/90 text-[#212842] rounded-lg font-semibold transition-all duration-300 text-center text-sm hover:scale-110 hover:shadow-lg hover:shadow-blue-500/40 active:scale-95 whitespace-nowrap"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        </div>
        
        {/* Enhanced ripple effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-blue-500/10 rounded-full group-hover:w-full group-hover:h-full group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 transition-all duration-700 ease-out"></div>
        </div>
      </div>
      
      <div className="p-4 sm:p-6 relative">
        {/* Background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl"></div>
        
        <h3 className="relative text-lg sm:text-xl font-semibold text-[#F0E7D5] mb-2 group-hover:text-blue-300 transition-colors duration-300 transform group-hover:translate-x-1">
          {title}
        </h3>
        <p className="relative text-[#F0E7D5]/70 mb-4 leading-relaxed text-sm sm:text-base group-hover:text-[#F0E7D5] transition-colors duration-300">
          {description}
        </p>
        
        <div className="relative flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="tech-tag bg-slate-700/40 hover:bg-blue-500/20 text-[#F0E7D5]/80 hover:text-[#F0E7D5] px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border border-slate-600/50 hover:border-blue-500/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
