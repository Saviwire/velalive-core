import React, { useState } from 'react';
import { useRoute } from './useRoute';
import { getToolById, TOOL_CATALOG } from './tools/registry';
import ToolPage from './components/ToolPage';
import Hero from './components/Hero';
import TopHighlights from './components/TopHighlights';
import Carousel3D from './components/Carousel3D';
import AdvancedFeatures from './components/AdvancedFeatures';
import MasonryGallery from './components/MasonryGallery';
import SwapStudio from './components/SwapStudio';
import Genjutsu from './components/Genjutsu';
import DenseTools from './components/DenseTools';
import AudioReactiveLab from './components/AudioReactiveLab';
import AvatarEngine from './components/AvatarEngine';
import ModelHub from './components/ModelHub';
import InviteEarn from './components/InviteEarn';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import AiSupport from './components/AiSupport';
import SignUpModal from './components/SignUpModal';
import SignInModal from './components/SignInModal';
import Dashboard from './components/Dashboard';

function App() {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [currentView, setCurrentView] = useState('landing');

  const route = useRoute();

  const requestedTool = route.toolId ? getToolById(route.toolId) : null;

  const handleAuthSuccess = (email) => {
    setIsAuthenticated(true);
    setUserEmail(email);
    setCurrentView('dashboard');
  };

  const handleSignOut = () => {
    // The only stored session is a fake one written by the modals; clear it.
    // A real Supabase session is cleared inside the modals themselves.
    localStorage.removeItem('velalive_user');
    setIsAuthenticated(false);
    setUserEmail('');
    setCurrentView('landing');
  };

  const handleStartCreating = () => {
    if (isAuthenticated) {
      setCurrentView('dashboard');
    } else {
      setIsSignUpOpen(true);
    }
  };

  // A requested tool route wins over the dashboard/landing split. Unknown
  // ids fall through to a not-found page rather than a blank screen.
  if (route.toolId) {
    return <ToolPage tool={requestedTool} toolId={route.toolId} />;
  }

  if (currentView === 'dashboard') {
    return (
      <Dashboard
        userEmail={userEmail}
        onSignOut={handleSignOut}
        onBackToSite={() => setCurrentView('landing')}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f0] font-sans">
      <SignUpModal
        isOpen={isSignUpOpen}
        onClose={() => setIsSignUpOpen(false)}
        onAuthSuccess={handleAuthSuccess}
      />
      <SignInModal
        isOpen={isSignInOpen}
        onClose={() => setIsSignInOpen(false)}
        onAuthSuccess={handleAuthSuccess}
      />

      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0a0a0a]/90 px-4 py-4 backdrop-blur-md md:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <a href="#top" className="text-lg font-bold tracking-[0.2em] text-white no-underline md:text-2xl">
            VELALIVE
          </a>
          <div className="flex items-center gap-2 md:gap-6">
            <a href="#pricing" className="hidden text-xs font-bold text-gray-300 no-underline hover:text-white sm:inline md:text-sm">
              Pricing
            </a>
            {isAuthenticated ? (
              <>
                <button
                  onClick={() => setCurrentView('dashboard')}
                  className="border-none bg-transparent text-xs font-bold text-[#d4af37] md:text-sm"
                >
                  Dashboard
                </button>
                <button
                  onClick={handleSignOut}
                  className="border-none bg-transparent text-xs font-bold text-white md:text-sm"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setIsSignInOpen(true)}
                  className="border-none bg-transparent text-xs font-bold text-white md:text-sm"
                >
                  Sign In
                </button>
              </>
            )}
            {!isAuthenticated && (
              <button
                onClick={() => setIsSignUpOpen(true)}
                className="rounded-full bg-[#d4af37] px-3 py-2 text-[11px] font-bold text-black transition-colors hover:bg-white md:px-5 md:text-sm"
              >
                Sign Up
              </button>
            )}
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <div id="top" />
        <Hero onStart={handleStartCreating} />
        <TopHighlights />
        <div id="studio">
          <Carousel3D />
        </div>
        <AdvancedFeatures />
        <MasonryGallery />
        <SwapStudio />
        <div id="genjutsu">
          <Genjutsu />
        </div>
        <DenseTools />
        <AudioReactiveLab />
        <AvatarEngine />
        <ModelHub />
        <InviteEarn />
        <Testimonials />
        <div id="pricing">
          <Pricing onSignUp={() => setIsSignUpOpen(true)} />
        </div>
        <FAQ />
        <Footer />
        <AiSupport />
      </main>
    </div>
  );
}

export default App;
