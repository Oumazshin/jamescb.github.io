import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import Hero from './pages/Hero';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
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
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
