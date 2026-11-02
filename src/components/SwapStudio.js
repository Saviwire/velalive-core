import React from 'react';

export default function SwapStudio() {
  return (
    <section className="py-24 px-4 bg-[#050505] border-t border-white/5 relative z-10 flex flex-col items-center">
      
      <div className="text-center mb-12 max-w-3xl">
        <h2 className="text-4xl md:text-6xl font-serif text-white mb-4">See the transformation.</h2>
        <p className="text-gray-400 text-lg font-light">Watch a real-time, 4K HD swap in action. No editing, no delays. Just pure AI power.</p>
      </div>

      <div className="max-w-5xl w-full">
        {/* The Cinematic Video Frame */}
        <div className="bg-[#0d0d0d] rounded-3xl p-2 md:p-4 border border-white/10 shadow-[0_0_80px_rgba(212,175,55,0.1)] relative overflow-hidden">
          
          <div className="aspect-video bg-black rounded-2xl relative overflow-hidden flex items-center justify-center">
            
            {/* The Main Demo Video (Auto-playing, No Swiping) */}
            <video 
              src="https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-woman-with-a-neon-light-42549-large.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover opacity-90"
            />

            {/* Cinematic Overlays */}
            <div className="absolute top-6 left-6 flex gap-3 z-20">
              <span className="bg-[#d4af37] text-black text-xs font-bold px-4 py-2 rounded-md uppercase tracking-widest shadow-lg">4K AI Output</span>
              <span className="bg-black/60 backdrop-blur-md text-white text-xs px-4 py-2 rounded-md border border-white/20 font-medium tracking-wide flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Rendering Live
              </span>
            </div>

            <div className="absolute top-6 right-6 z-20">
              <span className="text-white/80 text-sm font-mono tracking-widest border border-white/20 px-3 py-1 rounded backdrop-blur-sm bg-black/30">00:00:04:12</span>
            </div>

            {/* Bottom Gradient for Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>

            {/* Bottom Info Bar */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end z-20">
              <div>
                <p className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.2em] mb-1">Demo Sequence</p>
                <p className="text-white text-2xl font-serif italic">Subject Alpha → Mira</p>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 border border-white/30 rounded text-white text-[10px] uppercase tracking-wider backdrop-blur-md">Face Swap</p>
                <span className="px-3 py-1 border border-white/30 rounded text-white text-[10px] uppercase tracking-wider backdrop-blur-md">Restyle</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
