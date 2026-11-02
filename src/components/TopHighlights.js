import React from 'react';

export default function TopHighlights() {
  const stats = [
    { value: '100+', label: 'AI Tools' },
    { value: '4K', label: 'Ultra HD' },
    { value: '0ms', label: 'Latency' },
    { value: '8', label: 'Platforms Combined' },
  ];

  const marqueeTools = [
    'Live Face Swap', 'Voice Cloner', 'AI Companion', 'Motion Transfer', 
    'Video Agent', 'Talking Photo', 'Head Swap', 'Auto-Tune', 
    'Text-to-Video', 'Character Studio', 'Depth Map', 'BG Removal', 
    'Lip Sync', 'Object Eraser', 'Image Upscaler', 'Anime Restyle',
    'Virtual Try-On', 'PNGTuber Maker', 'Subtitle Gen', 'Soundboard'
  ];

  return (
    <div className="relative w-full bg-[#050505] border-y border-white/5 overflow-hidden z-20">
      
      {/* Stats Bar */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 border-b border-white/5">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center justify-center py-8 md:py-12 border-r border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
            <span className="text-4xl md:text-5xl font-serif text-[#d4af37] mb-2">{stat.value}</span>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-400">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Infinite Tool Marquee */}
      <div className="py-6 flex whitespace-nowrap overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10"></div>
        
        {/* The scrolling track */}
        <div className="animate-marquee flex gap-8 items-center text-sm md:text-base font-medium text-gray-500 uppercase tracking-widest">
          {marqueeTools.map((tool, i) => (
            <React.Fragment key={i}>
              <span className="hover:text-[#d4af37] transition-colors cursor-pointer">{tool}</span>
              <span className="text-[#d4af37]/50 text-xs">✦</span>
            </React.Fragment>
          ))}
          {/* Duplicated for seamless loop */}
          {marqueeTools.map((tool, i) => (
            <React.Fragment key={`dup-${i}`}>
              <span className="hover:text-[#d4af37] transition-colors cursor-pointer">{tool}</span>
              <span className="text-[#d4af37]/50 text-xs">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* CSS for the Marquee animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </div>
  );
}
