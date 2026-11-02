import React, { useState, useEffect } from 'react';

export default function AudioReactiveLab() {
  const [bars, setBars] = useState(Array(40).fill(10));

  useEffect(() => {
    const interval = setInterval(() => {
      setBars(prev => prev.map(() => Math.random() * 100 + 10));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-4 bg-[#050505] border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-serif text-white mb-4">The Voice Lab</h2>
        <p className="text-gray-400 mb-12">Real-time voice cloning and audio generation.</p>
        <div className="bg-black/40 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(212,175,55,0.1)]">
          <div className="flex items-end justify-center h-40 gap-1 mb-8">
            {bars.map((height, i) => (
              <div key={i} className="w-1.5 md:w-2 bg-[#d4af37] rounded-t-full transition-all duration-100 ease-in-out" style={{ height: `${height}%` }} />
            ))}
          </div>
          <button className="px-8 py-4 bg-[#d4af37] text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white transition">
            Activate Microphone
          </button>
        </div>
      </div>
    </section>
  );
}
