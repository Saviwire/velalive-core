import React from 'react';

export default function InviteEarn() {
  return (
    <section className="py-24 px-4 bg-[#0d0d0d] border-t border-white/5 relative z-10 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#d4af37]/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#d4af37] mb-4">Grow with Velalive</p>
          <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-6">Don't just create. <br/><span className="italic text-[#d4af37]">Build your empire.</span></h2>
          <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">Share your unique link. When your audience joins, they get premium access, and you get paid.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#141414] border border-white/10 rounded-[2.5rem] p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full group-hover:bg-blue-500/20 transition-all duration-500"></div>
            <div className="text-5xl mb-6">🚀</div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2">Your friends get</p>
            <h3 className="text-4xl font-serif text-white mb-4">25% Off + Free Trial</h3>
            <p className="text-gray-400 font-light mb-8">Give your audience the ultimate welcome gift. They get 25% off their first month and instant access to all Pro features.</p>
          </div>

          <div className="bg-[#141414] border border-[#d4af37]/30 rounded-[2.5rem] p-10 relative overflow-hidden group shadow-[0_0_50px_rgba(212,175,55,0.1)]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/10 blur-[80px] rounded-full group-hover:bg-[#d4af37]/20 transition-all duration-500"></div>
            <div className="text-5xl mb-6">💎</div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#d4af37] mb-2">You earn</p>
            <h3 className="text-4xl font-serif text-white mb-4">20% Recurring Revenue</h3>
            <p className="text-gray-400 font-light mb-8">This isn't a one-time bonus. Every time your referral renews their subscription, you get paid. Build passive income on autopilot.</p>
          </div>
        </div>

        <div className="text-center">
          <button className="px-10 py-5 bg-[#d4af37] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)]">
            Generate My Invite Link
          </button>
        </div>
      </div>
    </section>
  );
}
