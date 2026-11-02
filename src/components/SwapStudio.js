import React, { useState } from 'react';

export default function SwapStudio() {
  const [activeCharacter, setActiveCharacter] = useState(0);

  const characters = [
    { 
      name: 'Mira', 
      thumb: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-woman-with-a-neon-light-42549-large.mp4'
    },
    { 
      name: 'Daniel', 
      thumb: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-man-in-a-suit-looking-at-the-camera-42558-large.mp4'
    },
    { 
      name: 'Amara', 
      thumb: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-woman-with-colorful-makeup-42552-large.mp4'
    },
    { 
      name: 'Jonas', 
      thumb: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
      video: 'https://storage.coverr.co/videos/KP78n9EWQAje1fm6Xr02N6zm7V01xxNRNK'
    }
  ];

  return (
    <section className="py-24 px-4 bg-[#050505] border-t border-white/5 relative z-10 flex justify-center">
      <div className="max-w-5xl w-full">
        
        {/* The Main Studio Frame */}
        <div className="bg-[#0d0d0d] rounded-3xl p-2 md:p-4 border border-white/10 shadow-[0_0_50px_rgba(212,175,55,0.05)] relative overflow-hidden">
          
          <div className="aspect-video bg-black rounded-2xl relative overflow-hidden flex items-center justify-center">
            
            {/* The AI Output Video */}
            <video 
              key={activeCharacter}
              src={characters[activeCharacter].video} 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover opacity-90"
            />

            {/* Top Overlay Tags */}
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="bg-[#d4af37] text-black text-[10px] font-bold px-3 py-1 rounded uppercase tracking-widest">AI Output</span>
              <span className="bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1 rounded border border-white/10 italic">as {characters[activeCharacter].name}</span>
            </div>

            {/* Live Indicator */}
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              <span className="text-red-500 text-[10px] font-bold tracking-widest">LIVE</span>
            </div>

            {/* Your Camera (Picture-in-Picture) */}
            <div className="absolute bottom-4 left-4 w-1/3 md:w-1/4 aspect-video bg-gray-900 rounded-xl overflow-hidden border-2 border-white/20 shadow-2xl z-20">
              <video 
                src="https://assets.mixkit.co/videos/preview/mixkit-young-man-smiling-at-the-camera-42812-large.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-2 bg-black/60 text-white text-[8px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Your Camera</div>
            </div>
            
          </div>

          {/* The Character Selector (Bottom Bar) */}
          <div className="flex items-center justify-between mt-4 px-2">
            <div className="flex gap-2 md:gap-4 overflow-x-auto py-2">
              {characters.map((char, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveCharacter(index)}
                  className={`relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden transition-all duration-300 flex-shrink-0 ${activeCharacter === index ? 'border-2 border-[#d4af37] scale-110 shadow-[0_0_20px_rgba(212,175,55,0.4)]' : 'border border-white/20 opacity-50 hover:opacity-100'}`}
                >
                  <img src={char.thumb} alt={char.name} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Decorative Controls */}
            <div className="flex gap-2 text-white/50">
               <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/10 transition">
                 <div className="w-3 h-3 bg-white rounded-sm"></div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
