import { useState, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import ErrorBoundary from './components/ErrorBoundary';
import Hero from './pages/Hero';

// Lazy load below-the-fold sections for improved initial load performance
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Skills = lazy(() => import('./pages/Skills'));
const Contact = lazy(() => import('./pages/Contact'));

// Fallback component for lazy loaded sections
const LazyLoadFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#212842]">
    <div className="text-[#F0E7D5]/60 text-lg">Loading...</div>
  </div>
);

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col bg-[#212842] relative overflow-hidden">
        {/* Optimized Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Primary background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#212842] via-[#212842]/95 to-[#212842]/90"></div>
          
          {/* Reduced floating orbs for better performance */}
          <div className="absolute top-1/4 -left-20 w-72 h-72 bg-[#F0E7D5]/3 rounded-full blur-3xl morphing"></div>
          <div className="absolute top-3/4 -right-20 w-80 h-80 bg-[#F0E7D5]/2 rounded-full blur-3xl floating"></div>
          
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.01]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #F0E7D5 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <Navbar />
        <main className="flex-1 relative z-10">
          <Hero />
          <Suspense fallback={<LazyLoadFallback />}>
            <About />
          </Suspense>
          <Suspense fallback={<LazyLoadFallback />}>
            <Skills />
          </Suspense>
          <Suspense fallback={<LazyLoadFallback />}>
            <Projects />
          </Suspense>
          <Suspense fallback={<LazyLoadFallback />}>
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default App;
