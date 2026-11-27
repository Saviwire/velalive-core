import React, { Suspense, lazy, useState } from 'react';
import { useRoute } from './useRoute';
import { getToolById } from './tools/registry';
import ToolPage from './components/ToolPage';
import Hero from './components/Hero';
import TopHighlights from './components/TopHighlights';
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
import { AuthProvider, useAuth } from './auth';

// three.js lives only in this section, so load it in its own chunk: the
// initial bundle stays small and the 3D chunk arrives on demand.
const Carousel3D = lazy(() => import('./components/Carousel3D'));

function Shell() {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [currentView, setCurrentView] = useState('landing');
  const auth = useAuth();
  const route = useRoute();

  const requestedTool = route.toolId ? getToolById(route.toolId) : null;

  const handleAuthSuccess = () => {
    setCurrentView('dashboard');
  };

  const handleSignOut = () => {
    setCurrentView('landing');
    auth.signOut();
  };

  // Start Creating always opens the sign-up step. There is no local flag to
  // read: whether someone is already signed in is answered by Supabase.
  const handleStartCreating = () => {
    setIsSignUpOpen(true);
  };

  // A requested tool route wins over the dashboard/landing split. Unknown
  // ids fall through to a not-found page rather than a blank screen.
  if (route.toolId) {
    return <ToolPage tool={requestedTool} toolId={route.toolId} />;
  }

  if (currentView === 'dashboard') {
    return <Dashboard onSignOut={handleSignOut} onBackToSite={() => setCurrentView('landing')} />;
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f0] font-sans">
      <SignUpModal isOpen={isSignUpOpen} onClose={() => setIsSignUpOpen(false)} onAuthSuccess={handleAuthSuccess} />
      <SignInModal isOpen={isSignInOpen} onClose={() => setIsSignInOpen(false)} onAuthSuccess={handleAuthSuccess} />

      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0a0a0a]/90 px-4 py-4 backdrop-blur-md md:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <a href="#top" className="text-lg font-bold tracking-[0.2em] text-white no-underline md:text-2xl">VELALIVE</a>
          <div className="flex items-center gap-2 md:gap-6">
            <a href="#pricing" className="hidden text-xs font-bold text-gray-300 no-underline hover:text-white sm:inline md:text-sm">Pricing</a>
            {auth.signedIn ? (
              <>
                <button type="button" onClick={() => setCurrentView('dashboard')} className="border-none bg-transparent text-xs font-bold text-[#d4af37] md:text-sm">Dashboard</button>
                <button type="button" onClick={handleSignOut} className="border-none bg-transparent text-xs font-bold text-white md:text-sm">Sign Out</button>
              </>
            ) : (
              <button type="button" onClick={() => setIsSignInOpen(true)} className="border-none bg-transparent text-xs font-bold text-white md:text-sm">Sign In</button>
            )}
            {!auth.signedIn ? (
              <button type="button" onClick={() => setIsSignUpOpen(true)} className="rounded-full bg-[#d4af37] px-3 py-2 text-[11px] font-bold text-black transition-colors hover:bg-white md:px-5 md:text-sm">Sign Up</button>
            ) : null}
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <div id="top" />
        <Hero onStart={handleStartCreating} />
        <TopHighlights />
        <div id="studio">
          <Suspense fallback={<div className="h-96 bg-[#0a0a0a]" />}>
            <Carousel3D />
          </Suspense>
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

export default function App() {
  return (
    <AuthProvider>
      <Shell />
    </AuthProvider>
  );
}
