import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ScreenType } from './types';
import { HomeScreen } from './components/HomeScreen';
import { WebsiteScreen } from './components/WebsiteScreen';
import { ConnectScreen } from './components/ConnectScreen';
import { ProfilesScreen } from './components/ProfilesScreen';
import { ProjectsScreen } from './components/ProjectsScreen';
import { ImpactScreen } from './components/ImpactScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('home');

  // Handle browser back button smoothly
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace('#', '') as ScreenType;
      if (['home', 'website', 'connect', 'profiles', 'projects', 'impact'].includes(hash)) {
        setCurrentScreen(hash);
      } else {
        setCurrentScreen('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (screen: ScreenType) => {
    setCurrentScreen(screen);
    window.history.pushState({ screen }, '', screen === 'home' ? '#' : `#${screen}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goHome = () => {
    navigateTo('home');
  };

  const renderActiveScreen = () => {
    switch (currentScreen) {
      case 'website':
        return <WebsiteScreen onBack={goHome} />;
      case 'connect':
        return <ConnectScreen onBack={goHome} />;
      case 'profiles':
        return <ProfilesScreen onBack={goHome} />;
      case 'projects':
        return <ProjectsScreen onBack={goHome} />;
      case 'impact':
        return <ImpactScreen onBack={goHome} />;
      case 'home':
      default:
        return <HomeScreen onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#040d12] text-slate-100 flex justify-center items-start selection:bg-amber-500 selection:text-black overflow-x-hidden">
      {/* Centered Mobile App Shell (max-width: 440px) */}
      <div className="w-full max-w-[440px] min-h-screen bg-gradient-to-b from-[#064e3b]/30 via-[#022c22] to-[#040d12] border-x border-emerald-900/40 shadow-2xl relative flex flex-col">
        
        {/* Subtle decorative background ambient glows */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[440px] h-64 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[440px] h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* Seamless Animated Screen Container */}
        <div className="w-full flex-1 flex flex-col relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScreen}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
              className="w-full flex-1 flex flex-col"
            >
              {renderActiveScreen()}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
