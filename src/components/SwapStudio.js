import React from 'react';

export default function SwapStudio() {
  const demos = [
    {
      title: 'Face Swap',
      subject: 'Mira',
      badge: '4K ULTRA HD',
      video: 'https://videos.pexels.com/video-files/9652473/9652473-hd_2048_1080_25fps.mp4',
      poster: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800',
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
      video: 'https://videos.pexels.com/video-files/9953342/9953342-hd_2048_1080_25fps.mp4',
      poster: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800',
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
      video: 'https://videos.pexels.com/video-files/4630091/4630091-uhd_2560_1440_25fps.mp4',
      poster: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800',
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
      video: 'https://videos.pexels.com/video-files/4125025/4125025-uhd_2560_1440_25fps.mp4',
      poster: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800',
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
      
      {/* Ambient Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#d4af37]/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="text-center mb-20 max-w-4xl relative z-10">
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#d4af37] mb-4">The Velalive Engine</p>
        <h2 className="text-5xl md:text-8xl font-serif text-white mb-6">See the <span className="italic text-[#d4af37]">transformation.</span></h2>
        <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">Watch real-time, 4K HDR swaps in action. No editing, no delays. Just pure, cinematic AI power.</p>
      </div>

      <div className="max-w-7xl w-full space-y-24 relative z-10">
        {demos.map((demo, index) => (
          <div key={index} className="group relative">
            
            {/* Outer Animated Glow Border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#d4af37]/40 via-white/10 to-[#d4af37]/40 rounded-[2.5rem] blur-md opacity-50 group-hover:opacity-100 transition duration-700"></div>
            
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-[0_30px_100px_rgba(0,0,0,0.8)]">
              
              {/* Browser Chrome Header */}
              <div className="bg-[#111111] px-6 py-5 flex items-center justify-between border-b border-white/5">
                <div className="flex gap-2.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-white/10"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-white/10"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-white/10"></div>
                </div>
                <div className="flex items-center gap-3 bg-black/60 px-5 py-2 rounded-full border border-white/10 shadow-inner">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  <span className="text-gray-400 text-xs md:text-sm font-mono tracking-widest">velalive.ai/studio</span>
                </div>
                <div className="flex items-center gap-2 bg-red-500/10 px-4 py-2 rounded-full border border-red-500/20">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  <span className="text-red-500 text-[10px] md:text-xs font-bold tracking-widest">LIVE</span>
                </div>
              </div>

              {/* Massive Video Area */}
              <div className="aspect-[4/3] md:aspect-video bg-black relative">
                
                <video 
                  src={demo.video} 
                  poster={demo.poster}
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Cinematic Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40 pointer-events-none"></div>

                {/* Top Left Tags */}
                <div className="absolute top-6 left-6 md:top-10 md:left-10 flex flex-col items-start gap-4 z-10">
                  <span className="bg-[#d4af37] text-black text-[10px] md:text-sm font-bold px-5 py-2.5 rounded-lg uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                    {demo.badge}
                  </span>
                  <span className="bg-white/10 backdrop-blur-2xl text-white text-sm md:text-lg px-5 py-2.5 rounded-lg border border-white/20 font-serif italic tracking-wider shadow-xl">
                    as {demo.subject}
                  </span>
                </div>

                {/* Top Right Timecode */}
                <div className="absolute top-6 right-6 md:top-10 md:right-10 z-10 hidden sm:block">
                   <span className="text-white/80 text-[10px] md:text-xs font-mono tracking-widest border border-white/20 px-4 py-2 rounded-lg backdrop-blur-md bg-black/40 shadow-xl">
                     00:04:12:08
                   </span>
                </div>

                {/* Your Camera Picture-in-Picture */}
                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 w-2/5 md:w-[25%] aspect-video bg-gray-900 rounded-2xl overflow-hidden border-2 border-white/20 shadow-[0_30px_60px_rgba(0,0,0,0.9)] z-20 group-hover:scale-105 transition-transform duration-700">
                  <video 
                    src="https://videos.pexels.com/video-files/9953342/9953342-hd_2048_1080_25fps.mp4" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-2 left-2 md:top-3 md:left-3 bg-black/70 backdrop-blur-md text-white text-[8px] md:text-[10px] font-bold px-2 py-1 md:px-3 md:py-1.5 rounded uppercase tracking-[0.2em] border border-white/10">
                    Your Camera
                  </div>
                </div>

                {/* Bottom Right Action Info */}
                <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 text-right z-10">
                  <p className="text-white text-2xl md:text-5xl font-serif italic mb-3 drop-shadow-2xl">{demo.title}</p>
                  <div className="flex gap-3 justify-end">
                     <span className="text-[#d4af37] text-[10px] md:text-xs uppercase tracking-widest border border-[#d4af37]/40 px-4 py-1.5 rounded-lg bg-[#d4af37]/10 backdrop-blur-sm">Real-Time</span>
                     <span className="text-white text-[10px] md:text-xs uppercase tracking-widest border border-white/20 px-4 py-1.5 rounded-lg bg-black/40 backdrop-blur-sm hidden sm:block">4K Upscale</span>
                  </div>
                </div>

              </div>

              {/* Studio Control Bar */}
              <div className="bg-[#111111] px-6 py-5 md:px-10 md:py-6 flex items-center justify-between border-t border-white/5">
                
                {/* Avatar Selector */}
                <div className="flex gap-3 md:gap-5">
                  {demo.avatars.map((avatar, i) => (
                    <div key={i} className={`relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden cursor-pointer transition-all duration-300 ${i === 0 ? 'border-[3px] border-[#d4af37] scale-110 shadow-[0_0_20px_rgba(212,175,55,0.5)]' : 'border-2 border-white/10 opacity-30 hover:opacity-100 grayscale hover:grayscale-0'}`}>
                      <img src={avatar} alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/30 hover:bg-white/5 cursor-pointer transition-colors">
                    <span className="text-2xl font-light">+</span>
                  </div>
                </div>
                
                {/* Right Side Controls */}
                <div className="flex items-center gap-6">
                  {/* Fake Audio Visualizer */}
                  <div className="hidden md:flex items-end gap-1 h-8">
                    <div className="w-1.5 bg-[#d4af37]/80 rounded-t-sm animate-[pulse_1s_ease-in-out_infinite]" style={{height: '60%'}}></div>
                    <div className="w-1.5 bg-[#d4af37]/80 rounded-t-sm animate-[pulse_1.2s_ease-in-out_infinite]" style={{height: '100%'}}></div>
                    <div className="w-1.5 bg-[#d4af37]/80 rounded-t-sm animate-[pulse_0.8s_ease-in-out_infinite]" style={{height: '40%'}}></div>
                    <div className="w-1.5 bg-[#d4af37]/80 rounded-t-sm animate-[pulse_1.5s_ease-in-out_infinite]" style={{height: '80%'}}></div>
                  </div>

                  {/* Record Button */}
                  <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-white/20 bg-white/5 hover:bg-white/10 cursor-pointer text-red-500 transition-colors shadow-lg">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-red-500 animate-pulse"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
