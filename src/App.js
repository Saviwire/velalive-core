import React from 'react';

function App() {
  return (
    <div style={{ backgroundColor: '#0a0a0a', color: '#f5f5f0', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <nav style={{ padding: '20px', borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between' }}>
        <h1 style={{ fontSize: '24px', letterSpacing: '2px' }}>VELALIVE</h1>
        <button style={{ backgroundColor: '#d4af37', color: '#000', padding: '10px 20px', borderRadius: '20px', border: 'none', fontWeight: 'bold' }}>Sign Up</button>
      </nav>
      
      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '80vh', textAlign: 'center', padding: '0 20px' }}>
        <p style={{ color: '#d4af37', letterSpacing: '4px', fontSize: '12px', marginBottom: '20px' }}>THE ULTIMATE AI PLATFORM</p>
        <h2 style={{ fontSize: '60px', fontFamily: 'serif', margin: 0 }}>Redefine your <br/><span style={{ fontStyle: 'italic', color: '#d4af37' }}>reality.</span></h2>
        <p style={{ maxWidth: '600px', color: '#aaa', marginTop: '20px', lineHeight: '1.6' }}>Experience the world's most advanced real-time AI video, voice, and avatar platform.</p>
        <button style={{ marginTop: '40px', backgroundColor: '#d4af37', color: '#000', padding: '15px 40px', borderRadius: '30px', border: 'none', fontWeight: 'bold', fontSize: '16px' }}>Start Creating</button>
      </main>
    </div>
  );
}

export default App;
