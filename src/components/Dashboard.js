import React from 'react';

export default function Dashboard({ userEmail, onSignOut, onBackToSite }) {
  return (
    <div className="min-h-screen bg-[#050505] flex">
      
      {/* SIDEBAR */}
      <div className="w-64 bg-[#0d0d0d] border-r border-white/5 flex flex-col hidden md:flex">
        <div className="p-6 border-b border-white/5">
          <h1 className="text-2xl font-serif font-bold tracking-widest text-white">VELALIVE</h1>
          <p className="text-[10px] text-[#d4af37] font-bold uppercase tracking-widest mt-1">Pro Workspace</p>
        </div>
        
        <nav className="flex-grow p-4 space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-[#d4af37]/10 text-[#d4af37] rounded-xl font-bold text-sm border border-[#d4af37]/20">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
            Overview
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl font-bold text-sm transition">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
            AI Studio
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl font-bold text-sm transition">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
            Billing & Credits
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl font-bold text-sm transition">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
            Settings
          </button>
        </nav>

        <div className="p-4 border-t border-white/5">
          <button onClick={onBackToSite} className="w-full py-3 border border-white/10 text-gray-400 hover:text-white rounded-xl font-bold text-xs uppercase tracking-widest transition">
            ← Back to Homepage
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-grow flex flex-col h-screen overflow-y-auto">
        
        {/* TOP HEADER */}
        <header className="bg-[#0a0a0a] border-b border-white/5 px-6 py-4 flex justify-between items-center sticky top-0 z-10 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold text-white">Dashboard</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-[#d4af37]/10 border border-[#d4af37]/30 px-4 py-2 rounded-lg flex items-center gap-2">
              <span className="text-[#d4af37] text-xs font-bold uppercase tracking-widest">Credits:</span>
              <span className="text-white font-bold">3</span>
            </div>
            <div className="flex items-center gap-3 border-l border-white/10 pl-4">
              <div className="w-8 h-8 rounded-full bg-[#d4af37] flex items-center justify-center text-black font-bold">
                {userEmail ? userEmail[0].toUpperCase() : 'U'}
              </div>
              <div className="hidden md:block">
                <p className="text-sm text-white font-bold">{userEmail}</p>
                <button onClick={onSignOut} className="text-[10px] text-red-400 hover:text-red-300 uppercase tracking-widest font-bold">Sign Out</button>
              </div>
            </div>
          </div>
        </header>

        {/* DASHBOARD CONTENT */}
        <main className="p-6 md:p-10 max-w-6xl mx-auto w-full space-y-8">
          
          {/* WELCOME BANNER */}
          <div className="bg-gradient-to-r from-[#141414] to-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/5 blur-[80px] rounded-full"></div>
            <h1 className="text-3xl md:text-5xl font-serif text-white mb-2 relative z-10">Welcome to the Studio.</h1>
            <p className="text-gray-400 relative z-10 max-w-xl">Your neural engines are online. You have 3 free credits to test the platform. Upgrade to unlock 4K rendering and unlimited tools.</p>
            <button className="mt-6 px-8 py-3 bg-[#d4af37] text-black font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white transition relative z-10">
              Start Live Session
            </button>
          </div>

          {/* QUICK STATS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0d0d0d] border border-white/5 rounded-3xl p-6">
              <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-2">Current Plan</p>
              <h3 className="text-2xl font-serif text-white mb-4">Free Trial</h3>
              <button className="text-[#d4af37] text-xs font-bold uppercase tracking-widest hover:text-white transition">Upgrade to Pro →</button>
            </div>
            <div className="bg-[#0d0d0d] border border-white/5 rounded-3xl p-6">
              <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-2">Remaining Credits</p>
              <h3 className="text-2xl font-serif text-white mb-4">3 <span className="text-sm text-gray-500 font-sans">/ 3</span></h3>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#d4af37] w-full"></div>
              </div>
            </div>
            <div className="bg-[#0d0d0d] border border-white/5 rounded-3xl p-6">
              <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-2">API Status</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <h3 className="text-xl font-bold text-white">Operational</h3>
              </div>
            </div>
          </div>

          {/* RECENT ACTIVITY */}
          <div className="bg-[#0d0d0d] border border-white/5 rounded-3xl p-6 md:p-8">
            <h3 className="text-lg font-bold text-white mb-6">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#d4af37]">🎬</div>
                  <div>
                    <p className="text-sm text-white font-bold">Account Created</p>
                    <p className="text-xs text-gray-500">Welcome to Velalive!</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">Just now</span>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
