import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details for monitoring
    console.error('Error caught by boundary:', error, errorInfo);
    
    // In production, you could send this to an error tracking service
    if (process.env.NODE_ENV === 'production') {
      // Example: sendErrorToMonitoring(error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#212842] relative overflow-hidden px-4">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-[#212842] via-[#212842]/95 to-[#212842]/90"></div>
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-[#F0E7D5]/3 rounded-full blur-3xl opacity-50"></div>
          </div>

          {/* Error content */}
          <div className="relative z-10 max-w-md mx-auto text-center">
            <div className="mb-6">
              <div className="text-6xl mb-4">⚠️</div>
              <h1 className="text-4xl font-bold text-[#F0E7D5] mb-4">
                Oops! Something went wrong
              </h1>
              <p className="text-[#F0E7D5]/80 text-lg mb-6">
                We're sorry, but something unexpected happened. Please try refreshing the page or contact support if the problem persists.
              </p>
            </div>

            {/* Error details in development */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-6 text-left">
                <p className="text-red-300 font-mono text-sm whitespace-pre-wrap break-words">
                  {this.state.error.toString()}
                </p>
              </div>
            )}

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-[#F0E7D5] text-[#212842] font-bold rounded-lg hover:bg-[#F0E7D5]/90 transition-all duration-300 hover:scale-105"
              >
                Refresh Page
              </button>
              <button
                onClick={() => window.location.href = '/'}
                className="px-6 py-3 bg-transparent border-2 border-[#F0E7D5] text-[#F0E7D5] font-bold rounded-lg hover:bg-[#F0E7D5]/10 transition-all duration-300 hover:scale-105"
              >
                Go Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
