import React from 'react';

export default function SwapStudio() {
  const demos = [
    {
      title: 'Face Swap',
      subject: 'as Mira',
      badge: '4K ULTRA HD',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-woman-dancing-in-a-neon-lit-room-42552-large.mp4',
      avatars: [
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100',
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100',
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100'
      ]
    },
    {
      title: 'Head Swap',
      subject: 'as Jonas',
      badge: '60 FPS LIVE',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-young-man-smiling-at-the-camera-42812-large.mp4',
      avatars: [
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100',
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100',
        'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100'
      ]
    },
    {
      title: 'Restyle',
      subject: 'as Amara',
      badge: 'HDR 10-BIT',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-woman-with-a-neon-light-42549-large.mp4',
      avatars: [
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100',
        'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100',
        'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100',
        'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=100'
      ]
    },
    {
      title: 'AI Companion',
      subject: 'as Kira',
      badge: 'NEURAL LIVE',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-man-in-a-suit-looking-at-the-camera-42558-large.mp4',
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

      <div className="text-center mb-20 max-w-3xl relative z-10">
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#d4af37] mb-4">The Velalive Engine</p>
        <h2 className="text-5xl md:text-7xl font-serif text-white mb-6">See the <span className="italic text-[#d4af37]">transformation.</span></h2>
        <p className="text-gray-400 text-lg font-light leading-relaxed">Watch real-time, 4K HDR swaps in action. No editing, no delays. Just pure, cinematic AI power.</p>
      </div>

      <div className="max-w-5xl w-full space-y-24 relative z-10">
        {demos.map((demo, index) => (
          <div key={index} className="group relative">
            
            {/* Outer Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#d4af37]/20 via-white/5 to-[#d4af37]/20 rounded-[2.5rem] blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl">
              
              {/* High-End Browser Chrome Header */}
              <div className="bg-[#111111] px-6 py-4 flex items-center justify-between border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/10"></div>
                  <div className="w-3 h-3 rounded-full bg-white/10"></div>
                  <div className="w-3 h-3 rounded-full bg-white/10"></div>
                </div>
                <div className="flex items-center gap-2 bg-black/40 px-4 py-1.5 rounded-full border border-white/5">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  <span className="text-gray-400 text-xs font-mono tracking-widest">velalive.ai/studio</span>
                </div>
                <div className="flex items-center gap-2 bg-red-500/10 px-3 py-1.5 rounded-full border border-red-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                  <span className="text-red-500 text-[10px] font-bold tracking-widest">LIVE</span>
                </div>
              </div>

              {/* Main Video Area */}
              <div className="aspect-video bg-black relative">
                
                <video 
                  src={demo.video} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Cinematic Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none"></div>

                {/* Top Left Tags */}
                <div className="absolute top-6 left-6 flex flex-col items-start gap-3 z-10">
                  <span className="bg-[#d4af37] text-black text-[10px] md:text-xs font-bold px-4 py-2 rounded-md uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                    {demo.badge}
                  </span>
                  <span className="bg-white/10 backdrop-blur-xl text-white text-xs px-4 py-2 rounded-md border border-white/10 font-serif italic tracking-wider shadow-lg">
                    as {demo.subject}
                  </span>
                </div>

                {/* Top Right Timecode */}
                <div className="absolute top-6 right-6 z-10 hidden md:block">
                   <span className="text-white/60 text-[10px] font-mono tracking-widest border border-white/10 px-3 py-1 rounded backdrop-blur-md bg-black/20">
                     00:04:12:08
                   </span>
                </div>

                {/* Your Camera Picture-in-Picture */}
                <div className="absolute bottom-6 left-6 w-1/3 md:w-[22%] aspect-video bg-gray-900 rounded-xl overflow-hidden border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-20 group-hover:scale-105 transition-transform duration-500">
                  <video 
                    src="https://assets.mixkit.co/videos/preview/mixkit-man-in-a-suit-looking-at-the-camera-42558-large.mp4" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-md text-white text-[8px] md:text-[10px] font-bold px-2 py-1 rounded uppercase tracking-[0.2em]">
                    Your Camera
                  </div>
                </div>

                {/* Bottom Right Action Info */}
                <div className="absolute bottom-6 right-6 text-right z-10">
                  <p className="text-white text-xl md:text-3xl font-serif italic mb-1">{demo.title}</p>
                  <div className="flex gap-2 justify-end">
                     <span className="text-[#d4af37] text-[10px] uppercase tracking-widest border border-[#d4af37]/30 px-3 py-1 rounded bg-[#d4af37]/10">Real-Time</span>
                  </div>
                </div>

              </div>

              {/* Studio Control Bar */}
              <div className="bg-[#111111] px-6 py-5 flex items-center justify-between border-t border-white/5">
                <div className="flex gap-3 md:gap-4">
                  {demo.avatars.map((avatar, i) => (
                    <div key={i} className={`relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden cursor-pointer transition-all duration-300 ${i === 0 ? 'border-2 border-[#d4af37] scale-110 shadow-[0_0_15px_rgba(212,175,55,0.4)]' : 'border border-white/10 opacity-40 hover:opacity-100 grayscale hover:grayscale-0'}`}>
                      <img src={avatar} alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/5 cursor-pointer transition-colors">
                    <span className="text-xl leading-none">+</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="hidden md:flex flex-col items-end">
                    <span className="text-[8px] text-gray-500 uppercase tracking-widest">Bitrate</span>
                    <span className="text-[#d4af37] text-xs font-mono">45.2 Mbps</span>
                  </div>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 cursor-pointer text-white transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="6" y="4" width="4" height="16"></rect>
                      <rect x="14" y="4" width="4" height="16"></rect>
                    </svg>
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
