import React from 'react';
import Carousel3D from './components/Carousel3D';
import DenseTools from './components/DenseTools';
import Pricing from './components/Pricing';
import MasonryGallery from './components/MasonryGallery';
import SwapStudio from './components/SwapStudio';
import AudioReactiveLab from './components/AudioReactiveLab';
import AdvancedFeatures from './components/AdvancedFeatures';

function App() {
  return (
    <div style={{ backgroundColor: '#0a0a0a', color: '#f5f5f0', minHeight: '100vh', fontFamily: 'sans-serif', overflowX: 'hidden' }}>
      <nav style={{ padding: '20px', borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between', position: 'fixed', width: '100%', top: 0, zIndex: 50, backgroundColor: 'rgba(10,10,10,0.9)', backdropFilter: 'blur(10px)' }}>
        <h1 style={{ fontSize: '24px', letterSpacing: '2px', fontWeight: 'bold' }}>VELALIVE</h1>
        <button style={{ backgroundColor: '#d4af37', color: '#000', padding: '10px 20px', borderRadius: '20px', border: 'none', fontWeight: 'bold' }}>Sign Up</button>
      </nav>
      
      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center', padding: '0 20px' }}>
        <p style={{ color: '#d4af37', letterSpacing: '4px', fontSize: '12px', marginBottom: '20px', fontWeight: 'bold' }}>THE ULTIMATE AI PLATFORM</p>
        <h2 style={{ fontSize: '60px', fontFamily: 'serif', margin: 0, lineHeight: '1.1' }}>Redefine your <br/><span style={{ fontStyle: 'italic', color: '#d4af37' }}>reality.</span></h2>
        <p style={{ maxWidth: '600px', color: '#aaa', marginTop: '20px', lineHeight: '1.6', fontSize: '18px' }}>Experience the world's most advanced real-time AI video, voice, and avatar platform.</p>
        <button style={{ marginTop: '40px', backgroundColor: '#d4af37', color: '#000', padding: '15px 40px', borderRadius: '30px', border: 'none', fontWeight: 'bold', fontSize: '16px' }}>Start Creating</button>
      </main>

      <Carousel3D />
      <AdvancedFeatures />
      <MasonryGallery />
      <SwapStudio />
      <DenseTools />
      <AudioReactiveLab />
      <Pricing />
      
    </div>
  );
}

export default App;
