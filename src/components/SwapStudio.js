import React from 'react';

export default function SwapStudio() {
  const demos = [
    { title: 'Face Swap', subject: 'Mira', badge: '4K ULTRA HD' },
    { title: 'Head Swap', subject: 'Jonas', badge: '60 FPS LIVE' },
    { title: 'Restyle', subject: 'Amara', badge: 'HDR 10-BIT' },
    { title: 'AI Companion', subject: 'Kira', badge: 'NEURAL LIVE' }
  ];

  return (
    <section className="py-32 px-4 bg-[#050505] relative z-10 flex flex-col items-center overflow-hidden">
      
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#d4af37]/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="text-center mb-20 max-w-4xl relative z-10">
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#d4af37] mb-4">The Velalive Engine</p>
        <h2 className="text-5xl md:text-8xl font-serif text-white mb-6">See the <span className="italic text-[#d4af37]">transformation.</span></h2>
        <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">The world's most advanced real-time 4K HDR AI engine. Backend integration in progress.</p>
      </div>

      <div className="max-w-7xl w-full space-y-24 relative z-10">
        {demos.map((demo, index) => (
          <div key={index} className="group relative">
            
            <div className="absolute -inset-1 bg-gradient-to-r from-[#d4af37]/30 via-white/10 to-[#d4af37]/30 rounded-[2.5rem] blur-md opacity-50 group-hover:opacity-100 transition duration-700"></div>
            
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-[0_30px_100px_rgba(0,0,0,0.8)] flex flex-col md:flex-row">
              
              {/* LEFT PANEL: The Locked Video Area */}
              <div className="flex-grow w-full md:w-2/3 border-b md:border-b-0 md:border-r border-white/10 relative">
                
                <div className="bg-[#111111] px-6 py-4 flex items-center justify-between border-b border-white/5">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-white/10"></div>
                    <div className="w-3 h-3 rounded-full bg-white/10"></div>
                    <div className="w-3 h-3 rounded-full bg-white/10"></div>
                  </div>
                  <div className="flex items-center gap-2 bg-black/60 px-4 py-1.5 rounded-full border border-white/10">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    <span className="text-gray-400 text-xs font-mono tracking-widest">velalive.ai/studio</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#d4af37]/10 px-3 py-1.5 rounded-full border border-[#d4af37]/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse"></span>
                    <span className="text-[#d4af37] text-[10px] font-bold tracking-widest">PREVIEW</span>
                  </div>
                </div>

                {/* The Premium Placeholder */}
                <div className="aspect-[4/3] md:aspect-video bg-[#0a0a0a] relative flex flex-col items-center justify-center overflow-hidden">
                  
                  {/* Animated Background Grid */}
                  <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(212,175,55,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                  
                  {/* Pulsing Center Ring */}
                  <div className="relative flex items-center justify-center w-24 h-24 rounded-full border border-[#d4af37]/30 mb-8">
                    <div className="absolute inset-0 rounded-full border border-[#d4af37] animate-ping opacity-20"></div>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                  </div>

                  <h3 className="text-white text-2xl font-serif italic mb-2 z-10">Neural Engine Booting...</h3>
                  <p className="text-gray-500 text-sm font-mono tracking-widest z-10">AWAITING CLOUD GPU CONNECTION</p>

                  {/* Top Left Tags */}
                  <div className="absolute top-6 left-6 flex flex-col items-start gap-3 z-10 pointer-events-none">
                    <span className="bg-[#d4af37] text-black text-[10px] md:text-xs font-bold px-4 py-2 rounded-md uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                      {demo.badge}
                    </span>
                    <span className="bg-white/5 backdrop-blur-xl text-white text-xs px-4 py-2 rounded-md border border-white/10 font-serif italic tracking-wider shadow-lg">
                      as {demo.subject}
                    </span>
                  </div>

                  {/* Bottom Right Title */}
                  <div className="absolute bottom-6 right-6 text-right z-10 pointer-events-none">
                    <p className="text-white text-2xl md:text-4xl font-serif italic drop-shadow-2xl">{demo.title}</p>
                  </div>
                </div>
              </div>

              {/* RIGHT PANEL: The 100x Control Dashboard */}
              <div className="w-full md:w-1/3 bg-[#0d0d0d] flex flex-col p-6 opacity-60">
                
                <div className="mb-8">
                  <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                    Neural Settings
                  </h4>
                  
                  <div className="space-y-5">
                    <div>
                      <div className="flex justify-between text-[10px] text-gray-400 uppercase tracking-widest mb-1.5">
                        <span>Swap Intensity</span>
                        <span className="text-[#d4af37]">--</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-[#d4af37] w-0"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[10px] text-gray-400 uppercase tracking-widest mb-1.5">
                        <span>Skin Smoothing</span>
                        <span className="text-[#d4af37]">--</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-[#d4af37] w-0"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-6 mb-8">
                   <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Target Model</h4>
                   <div className="flex flex-col gap-3">
                     {[...Array(4)].map((_, i) => (
                       <div key={i} className="flex items-center gap-3 p-2 rounded-lg border border-white/5 opacity-50">
                         <div className="w-8 h-8 rounded-full bg-white/10"></div>
                         <span className="text-xs font-bold text-gray-500">LOCKED</span>
                       </div>
                     ))}
                   </div>
                </div>

                <div className="mt-auto">
                   <button disabled className="w-full py-3 bg-white/10 text-gray-500 font-bold text-xs uppercase tracking-widest rounded-lg cursor-not-allowed flex items-center justify-center gap-2">
                     Connect Backend to Render
                   </button>
                </div>

              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
