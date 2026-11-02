import React from 'react';

export default function Pricing() {
  return (
    <section className="py-24 px-4 bg-[#050505] border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-4">Simple, transparent pricing.</h2>
          <p className="text-gray-400 text-lg font-light">Only live seconds count. Setup and browsing are always free.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch max-w-5xl mx-auto">
          {/* STARTER */}
          <div className="bg-[#0d0d0d] border border-white/10 rounded-3xl p-8 flex flex-col">
            <h3 className="text-xl font-serif text-white mb-2">Starter</h3>
            <p className="text-gray-400 text-sm mb-6">For testing the waters</p>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-5xl font-bold text-white">$12</span>
              <span className="text-gray-500">/mo</span>
            </div>
            <a href="#signup" className="w-full py-4 border border-white/20 text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white/5 mb-8 text-center transition">Choose Starter</a>
            <ul className="space-y-4 text-sm text-gray-400 border-t border-white/10 pt-6">
              <li className="flex justify-between items-center"><span>Live Face Swap</span><span className="px-3 py-1 bg-white/5 rounded-full text-xs text-white">15 min</span></li>
              <li className="flex justify-between items-center"><span>AI Voice Changer</span><span className="px-3 py-1 bg-white/5 rounded-full text-xs text-white">10 min</span></li>
            </ul>
          </div>

          {/* PREMIUM */}
          <div className="bg-[#0d0d0d] border-2 border-[#d4af37] rounded-3xl p-8 flex flex-col relative shadow-[0_0_50px_rgba(212,175,55,0.15)] transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#d4af37] text-black px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Most Popular</div>
            <h3 className="text-xl font-serif text-white mb-2">Premium</h3>
            <p className="text-gray-400 text-sm mb-6">For serious creators</p>
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-2xl text-gray-500 line-through">$34</span>
              <span className="text-6xl font-bold text-white">$20</span>
              <span className="text-gray-400">/mo</span>
            </div>
            <a href="#signup" className="w-full py-4 bg-[#d4af37] text-black font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white mb-4 text-center transition">Get Premium &rarr;</a>
            <p className="text-xs text-gray-500 text-center mb-8">Cancel or switch plans any time</p>
            <ul className="space-y-4 text-sm text-gray-300 border-t border-white/10 pt-6">
              <li className="flex justify-between items-center"><span>Live Face Swap</span><span className="px-3 py-1 bg-[#d4af37]/20 text-[#d4af37] rounded-full text-xs font-bold">40 min</span></li>
              <li className="flex justify-between items-center"><span>Video Face Swap</span><span className="px-3 py-1 bg-[#d4af37]/20 text-[#d4af37] rounded-full text-xs font-bold">40 min</span></li>
            </ul>
          </div>

          {/* AGENCY */}
          <div className="bg-[#0d0d0d] border border-white/10 rounded-3xl p-8 flex flex-col">
            <h3 className="text-xl font-serif text-white mb-2">Agency</h3>
            <p className="text-gray-400 text-sm mb-6">For teams & professionals</p>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-5xl font-bold text-white">$99</span>
              <span className="text-gray-500">/mo</span>
            </div>
            <a href="#signup" className="w-full py-4 border border-white/20 text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white/5 mb-8 text-center transition">Choose Agency</a>
            <ul className="space-y-4 text-sm text-gray-400 border-t border-white/10 pt-6">
              <li className="flex justify-between items-center"><span>Live Face Swap</span><span className="px-3 py-1 bg-white/5 rounded-full text-xs text-white">150 min</span></li>
              <li className="flex justify-between items-center"><span>AI Voice Changer</span><span className="px-3 py-1 bg-white/5 rounded-full text-xs text-white">120 min</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
