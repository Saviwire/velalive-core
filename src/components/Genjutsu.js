import React from 'react';

export default function Genjutsu() {
  return (
    <section className="py-24 px-4 bg-[#050505] border-t border-white/5 relative z-10 flex justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs font-bold tracking-widest uppercase text-[#d4af37] mb-4">Genjutsu Motion Engine</p>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Make a photo <span className="italic text-[#d4af37]">dance.</span></h2>
          <p className="text-gray-400 text-lg font-light mb-8">Transfer motion from any reference video onto your own character. Keep your face, outfit, and background while replicating complex choreography, camera moves, and expressions.</p>
          
          <ul className="space-y-4 mb-8">
             <li className="flex items-center gap-3 text-white"><span className="text-[#d4af37]">✔</span> Video-to-anime restyling</li>
             <li className="flex items-center gap-3 text-white"><span className="text-[#d4af37]">✔</span> Duo swap (two characters)</li>
             <li className="flex items-center gap-3 text-white"><span className="text-[#d4af37]">✔</span> Object and scene replacement</li>
          </ul>
          
          <button className="px-8 py-4 bg-[#d4af37] text-black font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white transition">Try Genjutsu</button>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
           <div className="aspect-[9/16] bg-[#141414] rounded-2xl overflow-hidden border border-white/10">
             <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400" alt="Original" className="w-full h-full object-cover opacity-80" />
           </div>
           <div className="aspect-[9/16] bg-[#141414] rounded-2xl overflow-hidden border-2 border-[#d4af37] relative shadow-[0_0_30px_rgba(212,175,55,0.2)]">
             <video autoPlay loop muted playsInline className="w-full h-full object-cover">
               <source src="https://assets.mixkit.co/videos/preview/mixkit-woman-dancing-in-a-neon-lit-room-42552-large.mp4" type="video/mp4" />
             </video>
           </div>
        </div>
      </div>
    </section>
  );
}
