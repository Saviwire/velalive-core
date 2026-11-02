import React, { useState } from 'react';
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

function App() {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  return (
    <div style={{ backgroundColor: '#0a0a0a', color: '#f5f5f0', minHeight: '100vh', fontFamily: 'sans-serif', overflowX: 'hidden' }}>
      
      {/* SIGN UP MODAL */}
      <SignUpModal isOpen={isSignUpOpen} onClose={() => setIsSignUpOpen(false)} />

      {/* NAVBAR */}
      <nav style={{ padding: '20px', borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'fixed', width: '100%', top: 0, zIndex: 50, backgroundColor: 'rgba(10,10,10,0.9)', backdropFilter: 'blur(10px)' }}>
        <a href="#" style={{ fontSize: '24px', letterSpacing: '2px', fontWeight: 'bold', color: 'white', textDecoration: 'none' }}>VELALIVE</a>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <a href="#pricing" style={{ color: '#aaa', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold' }}>Pricing</a>
          <button style={{ backgroundColor: 'transparent', color: '#fff', border: 'none', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer' }}>Sign In</button>
          <button 
            onClick={() => setIsSignUpOpen(true)}
            style={{ backgroundColor: '#d4af37', color: '#000', padding: '10px 20px', borderRadius: '20px', border: 'none', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer' }}
          >
            Sign Up
          </button>
        </div>
      </nav>
      
      <Hero />
      <TopHighlights />
      
      <div id="studio"><Carousel3D /></div>
      <AdvancedFeatures />
      <MasonryGallery />
      <SwapStudio />
      <div id="genjutsu"><Genjutsu /></div>
      <div id="tools"><DenseTools /></div>
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
    </div>
  );
}

export default App;
