import { useState, useEffect } from 'react';

/**
 * Toast Notification Component
 * Displays temporary messages for success/error states
 */
const Toast = ({ message, type = 'success', onClose, duration = 5000 }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isVisible) {
      onClose?.();
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  const isSuccess = type === 'success';
  const bgColor = isSuccess 
    ? 'bg-green-900/30 border-green-500/50' 
    : 'bg-red-900/30 border-red-500/50';
  const textColor = isSuccess ? 'text-green-200' : 'text-red-200';

  return (
    <div className={`fixed bottom-6 right-6 p-4 ${bgColor} border rounded-lg ${textColor} text-sm max-w-xs z-50 animate-fade-in-up shadow-lg`}>
      <div className="flex items-start gap-3">
        <div className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold ${isSuccess ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
          {isSuccess ? '●' : '!'}
        </div>
        <p className="flex-grow">{message}</p>
        <button
          onClick={() => setIsVisible(false)}
          className="text-lg font-bold flex-shrink-0 hover:opacity-70 transition-opacity"
          aria-label="Close notification"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Toast;
