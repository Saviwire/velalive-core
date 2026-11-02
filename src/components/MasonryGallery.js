import React from 'react';

export default function MasonryGallery() {
  const images = Array.from({ length: 20 }, (_, i) => `https://images.unsplash.com/photo-${1500000000000 + i * 150000}?w=600&auto=format&fit=crop`);
  
  return (
    <section className="py-24 px-4 bg-[#0d0d0d] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-4">One camera. <span className="italic text-[#d4af37]">Endless faces.</span></h2>
          <p className="text-gray-400 text-lg">Demo characters, rendered live. Flip any card to see the camera feed.</p>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-4 gap-4 space-y-4">
          {images.map((src, i) => (
            <div key={i} className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer border border-white/5 aspect-square">
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
