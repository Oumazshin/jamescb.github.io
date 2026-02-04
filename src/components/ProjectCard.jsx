const ProjectCard = ({ project }) => {
  const { title, description, image, technologies, githubUrl, liveUrl } = project;

  return (
    <div className="group bg-slate-800/60 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-[#212842]/20 border border-slate-600/50 hover:border-[#212842]/50 w-full max-w-lg mx-auto relative">
      <div className="relative overflow-hidden h-40 sm:h-48">
        {typeof image === 'string' ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-slate-700/50 transition-all duration-500 group-hover:scale-110">
            {image}
          </div>
        )}
        
        {/* Enhanced overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            {githubUrl && (
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-transparent border-2 border-[#212842] text-[#212842] hover:bg-[#212842] hover:text-[#F0E7D5] rounded-lg font-medium transition-all duration-300 text-center text-sm hover:scale-105"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            )}
            {liveUrl && liveUrl !== "#" && (
              <a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-[#212842] hover:bg-[#212842]/80 text-[#F0E7D5] rounded-lg font-medium transition-all duration-300 text-center text-sm hover:scale-105"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        </div>
        
        {/* Ripple effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-[#212842]/20 rounded-full group-hover:w-full group-hover:h-full group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 transition-all duration-700 ease-out"></div>
        </div>
      </div>
      
      <div className="p-4 sm:p-6 relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#212842]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl"></div>
        
        <h3 className="relative text-lg sm:text-xl font-semibold text-[#F0E7D5] mb-2 group-hover:text-[#212842] transition-colors duration-300">
          {title}
        </h3>
        <p className="relative text-[#F0E7D5] mb-4 leading-relaxed text-sm sm:text-base group-hover:text-slate-200 transition-colors duration-300">
          {description}
        </p>
        
        <div className="relative flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="bg-slate-700/60 hover:bg-[#212842]/20 text-[#F0E7D5] px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-105 border border-transparent hover:border-[#212842]/30"
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
