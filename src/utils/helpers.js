// Utility for debouncing functions to optimize performance
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Utility for throttling functions
export const throttle = (func, limit) => {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Safe scroll to element utility
export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return true;
  }
  console.warn(`Element with id "${elementId}" not found`);
  return false;
};

// Get element offset for calculations
export const getElementOffset = (element) => {
  if (!element) return { top: 0, height: 0 };
  return {
    top: element.offsetTop,
    height: element.offsetHeight
  };
};
