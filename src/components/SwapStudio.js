import React from 'react';

export default function SwapStudio() {
  const demos = [
    {
      title: 'Face Swap',
      subject: 'Subject Alpha → Mira',
      video: 'https://videos.pexels.com/video-files/9652473/9652473-hd_2048_1080_25fps.mp4',
    },
    {
      title: 'Head Swap',
      subject: 'Subject Beta → Jonas',
      video: 'https://videos.pexels.com/video-files/9953342/9953342-hd_2048_1080_25fps.mp4',
    },
    {
      title: 'Restyle',
      subject: 'Subject Gamma → Amara',
      video: 'https://videos.pexels.com/video-files/4630091/4630091-uhd_2560_1440_25fps.mp4',
    }
  ];

  return (
    <section className="py-24 px-4 bg-[#050505] border-t border-white/5 relative z-10 flex flex-col items-center">
      <div className="text-center mb-16 max-w-3xl">
        <h2 className="text-4xl md:text-6xl font-serif text-white mb-4">See the transformation.</h2>
        <p className="text-gray-400 text-lg font-light">Watch real-time, 4K HD swaps in action. No editing, no delays. Just pure AI power.</p>
      </div>

      <div className="max-w-6xl w-full space-y-12">
        {demos.map((demo, index) => (
          <div key={index} className="bg-[#0d0d0d] rounded-3xl p-2 md:p-4 border border-white/10 shadow-[0_0_80px_rgba(212,175,55,0.1)] relative overflow-hidden">
            
            <div className="aspect-video bg-black rounded-2xl relative overflow-hidden flex items-center justify-center">
              
              {/* Main AI Output Video */}
              <video 
                src={demo.video} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute inset-0 w-full h-full object-cover opacity-90"
              />

              {/* Top Overlays */}
              <div className="absolute top-4 md:top-6 left-4 md:left-6 flex flex-col md:flex-row gap-2 md:gap-3 z-20">
                <span className="bg-[#d4af37] text-black text-[10px] md:text-xs font-bold px-3 md:px-4 py-1.5 md:py-2 rounded-md uppercase tracking-widest shadow-lg">4K AI Output</span>
                <span className="bg-black/60 backdrop-blur-md text-white text-[10px] md:text-xs px-3 md:px-4 py-1.5 md:py-2 rounded-md border border-white/20 font-medium flex items-center gap-2 w-max">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span> LIVE
                </span>
              </div>

              {/* Your Camera PiP */}
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 w-1/3 md:w-1/4 aspect-video bg-gray-900 rounded-lg md:rounded-xl overflow-hidden border border-white/20 shadow-2xl z-20">
                <video 
                  src="https://assets.mixkit.co/videos/preview/mixkit-young-man-smiling-at-the-camera-42812-large.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-1.5 md:top-2 left-1.5 md:left-2 bg-black/60 text-white text-[8px] md:text-[10px] font-bold px-1.5 md:px-2 py-0.5 rounded uppercase tracking-wider">Your Camera</div>
              </div>

              {/* Bottom Info Bar */}
              <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 text-right z-20">
                <p className="text-[#d4af37] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-1">{demo.title}</p>
                <p className="text-white text-lg md:text-2xl font-serif italic">{demo.subject}</p>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
