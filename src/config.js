// Configuration file for environment variables
// This centralizes all configuration for easy management across environments

export const config = {
  // Contact Information
  email: import.meta.env.VITE_CONTACT_EMAIL || 'bacolorjamesclark@gmail.com',
  
  // Social Links
  linkedIn: import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/james-clark-bacolor-7b6b34296',
  github: import.meta.env.VITE_GITHUB_URL || 'https://github.com/Oumazshin',
  instagram: import.meta.env.VITE_INSTAGRAM_URL || 'https://www.instagram.com/jamsxc_',
  
  // API Configuration (for future use)
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || '',
  
  // Feature Flags
  enableErrorTracking: import.meta.env.VITE_ENABLE_ERROR_TRACKING === 'true',
  enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
  
  // Environment
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
};

export default config;
