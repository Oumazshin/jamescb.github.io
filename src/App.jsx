import { useState, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import ErrorBoundary from './components/ErrorBoundary';
import Hero from './pages/Hero';

const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Skills = lazy(() => import('./pages/Skills'));
const Contact = lazy(() => import('./pages/Contact'));

const LazyLoadFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#0a0f1d]">
    <div className="text-[#F0E7D5]/60 text-lg font-mono uppercase tracking-widest">Initialising...</div>
  </div>
);

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => setShowSplash(false);

  if (showSplash) return <SplashScreen onComplete={handleSplashComplete} />;

  return (
    <ErrorBoundary>
      {/* Root container with the consistent dark theme */}
      <div className="min-h-screen flex flex-col bg-[#0a0f1d] relative selection:bg-[#F0E7D5] selection:text-slate-900">
        
        {/* GLOBAL BACKGROUND ELEMENTS: These span all sections */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          {/* Top-left glow */}
          <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-500/5 blur-[150px] rounded-full" />
          {/* Bottom-right glow */}
          <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-purple-500/5 blur-[150px] rounded-full" />
          
          {/* Subtle global grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #F0E7D5 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <Navbar />
        
        {/* Content sections are transparent to show the global background */}
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