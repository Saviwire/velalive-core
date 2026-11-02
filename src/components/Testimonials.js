import React from 'react';

export default function Testimonials() {
  return (
    <section className="py-24 px-4 bg-[#050505] border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-16 text-center">Trusted by creators worldwide.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-[#0d0d0d] p-8 rounded-3xl border border-white/5">
              <div className="flex text-[#d4af37] mb-4">★★★★★</div>
              <p className="text-gray-300 font-light text-lg mb-6">"Velalive completely changed how I stream. The real-time face swap is flawless, and my viewers think I actually look like this now."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#d4af37]/20 rounded-full flex items-center justify-center text-[#d4af37] font-bold">C</div>
                <div>
                  <h4 className="text-white font-bold text-sm">Creator {i+1}</h4>
                  <p className="text-gray-500 text-xs">Twitch Streamer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
