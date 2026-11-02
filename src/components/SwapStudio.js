import React from 'react';

export default function SwapStudio() {
  const demos = [
    {
      title: 'Face Swap',
      subject: 'Mira',
      badge: '4K ULTRA HD',
      // Professional woman talking to camera
      video: 'https://videos.pexels.com/video-files/4125025/4125025-uhd_2560_1440_25fps.mp4',
      poster: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800',
      pip: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
      avatars: [
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100',
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100',
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100'
      ]
    },
    {
      title: 'Head Swap',
      subject: 'Jonas',
      badge: '60 FPS LIVE',
      // Professional man talking to camera
      video: 'https://videos.pexels.com/video-files/5995857/5995857-uhd_2560_1440_25fps.mp4',
      poster: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800',
      pip: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      avatars: [
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100',
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100',
        'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100'
      ]
    },
    {
      title: 'Restyle',
      subject: 'Amara',
      badge: 'HDR 10-BIT',
      // Professional woman talking to camera
      video: 'https://videos.pexels.com/video-files/3196036/3196036-uhd_2560_1440_25fps.mp4',
      poster: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800',
      pip: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      avatars: [
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100',
        'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100',
        'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100',
        'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=100'
      ]
    },
    {
      title: 'AI Companion',
      subject: 'Kira',
      badge: 'NEURAL LIVE',
      // Professional man talking to camera
      video: 'https://videos.pexels.com/video-files/9953342/9953342-uhd_2560_1440_25fps.mp4',
      poster: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800',
      pip: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
      avatars: [
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100',
        'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=100',
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?w=100',
        'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=100'
      ]
    }
  ];

  return (
    <section className="py-32 px-4 bg-[#050505] relative z-10 flex flex-col items-center overflow-hidden">
      
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#d4af37]/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="text-center mb-20 max-w-4xl relative z-10">
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#d4af37] mb-4">The Velalive Engine</p>
        <h2 className="text-5xl md:text-8xl font-serif text-white mb-6">See the <span className="italic text-[#d4af37]">transformation.</span></h2>
        <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">Watch real-time, 4K HDR swaps in action. No editing, no delays. Just pure, cinematic AI power.</p>
      </div>

      <div className="max-w-7xl w-full space-y-24 relative z-10">
        {demos.map((demo, index) => (
          <div key={index} className="group relative">
            
            <div className="absolute -inset-1 bg-gradient-to-r from-[#d4af37]/30 via-white/10 to-[#d4af37]/30 rounded-[2.5rem] blur-md opacity-50 group-hover:opacity-100 transition duration-700"></div>
            
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-[0_30px_100px_rgba(0,0,0,0.8)] flex flex-col md:flex-row">
              
              {/* LEFT PANEL: Massive Video Area */}
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
                  <div className="flex items-center gap-2 bg-red-500/10 px-3 py-1.5 rounded-full border border-red-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                    <span className="text-red-500 text-[10px] font-bold tracking-widest">LIVE</span>
                  </div>
                </div>

                <div className="aspect-[4/3] md:aspect-video bg-black relative">
                  <video 
                    src={demo.video} 
                    poster={demo.poster}
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    preload="auto"
                    crossOrigin="anonymous"
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40 pointer-events-none"></div>

                  <div className="absolute top-6 right-6 z-10 flex flex-col items-end gap-2 pointer-events-none">
                    <span className="text-white/60 text-[10px] font-mono tracking-widest border border-white/10 px-3 py-1 rounded backdrop-blur-md bg-black/20 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> LATENCY: 12ms
                    </span>
                    <span className="text-white/60 text-[10px] font-mono tracking-widest border border-white/10 px-3 py-1 rounded backdrop-blur-md bg-black/20">
                      CONFIDENCE: 99.8%
                    </span>
                  </div>

                  <div className="absolute top-6 left-6 flex flex-col items-start gap-3 z-10 pointer-events-none">
                    <span className="bg-[#d4af37] text-black text-[10px] md:text-xs font-bold px-4 py-2 rounded-md uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                      {demo.badge}
                    </span>
                    <span className="bg-white/10 backdrop-blur-xl text-white text-xs px-4 py-2 rounded-md border border-white/10 font-serif italic tracking-wider shadow-lg">
                      as {demo.subject}
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 w-1/3 md:w-[25%] aspect-video bg-gray-900 rounded-xl overflow-hidden border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-20 pointer-events-none">
                    <img src={demo.pip} alt="Your Camera" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-md text-white text-[8px] font-bold px-2 py-1 rounded uppercase tracking-[0.2em]">Your Camera</div>
                  </div>

                  <div className="absolute bottom-6 right-6 text-right z-10 pointer-events-none">
                    <p className="text-white text-2xl md:text-4xl font-serif italic drop-shadow-2xl">{demo.title}</p>
                  </div>
                </div>
              </div>

              {/* RIGHT PANEL: The 100x Control Dashboard */}
              <div className="w-full md:w-1/3 bg-[#0d0d0d] flex flex-col p-6">
                
                <div className="mb-8">
                  <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                    Neural Settings
                  </h4>
                  
                  <div className="space-y-5">
                    <div>
                      <div className="flex justify-between text-[10px] text-gray-400 uppercase tracking-widest mb-1.5">
                        <span>Swap Intensity</span>
                        <span className="text-[#d4af37]">85%</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-[#d4af37] w-[85%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[10px] text-gray-400 uppercase tracking-widest mb-1.5">
                        <span>Skin Smoothing</span>
                        <span className="text-[#d4af37]">40%</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-[#d4af37] w-[40%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[10px] text-gray-400 uppercase tracking-widest mb-1.5">
                        <span>Color Grading</span>
                        <span className="text-[#d4af37]">70%</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-[#d4af37] w-[70%]"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-6 mb-8">
                   <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Target Model</h4>
                   <div className="flex flex-col gap-3">
                     {demo.avatars.map((avatar, i) => (
                       <div key={i} className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors ${i === 0 ? 'bg-[#d4af37]/10 border border-[#d4af37]/30' : 'hover:bg-white/5'}`}>
                         <div className={`w-8 h-8 rounded-full overflow-hidden border ${i === 0 ? 'border-[#d4af37]' : 'border-white/10'}`}><img src={avatar} className="w-full h-full object-cover" /></div>
                         <span className={`text-xs font-bold ${i === 0 ? 'text-white' : 'text-gray-500'}`}>{demo.subject} - Variant {i+1}</span>
                         {i === 0 && <span className="ml-auto text-[8px] text-[#d4af37] border border-[#d4af37] px-1.5 py-0.5 rounded">ACTIVE</span>}
                       </div>
                     ))}
                   </div>
                </div>

                <div className="mt-auto">
                   <button className="w-full py-3 bg-[#d4af37] text-black font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-white transition flex items-center justify-center gap-2">
                     <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 9-14 9V3z"></path></svg>
                     Render Full Clip
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
