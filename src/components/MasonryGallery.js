import React from 'react';

export default function MasonryGallery() {
  // Real, verified image URLs
  const images = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=600&auto=format&fit=crop'
  ];
  
  return (
    <section className="py-24 px-4 bg-[#0d0d0d] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-4">One camera. <span className="italic text-[#d4af37]">Endless faces.</span></h2>
          <p className="text-gray-400 text-lg">Demo characters, rendered live. Flip any card to see the camera feed.</p>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-4 gap-4 space-y-4">
          {images.map((src, i) => (
            <div key={i} className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer border border-white/5 aspect-square bg-[#141414]">
              <img src={src} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" alt={`Face ${i}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end p-4">
                <span className="text-white font-bold uppercase tracking-widest text-xs">Try Face {i+1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
