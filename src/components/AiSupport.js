import React, { useState } from 'react';

export default function AiSupport() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-80 bg-[#0d0d0d]/90 backdrop-blur-2xl rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden flex flex-col h-96">
          <div className="bg-[#d4af37] p-4 flex justify-between items-center text-black">
            <div>
              <h3 className="font-bold text-lg font-serif">Vela</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">24/7 AI Concierge</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-black hover:text-white font-bold text-xl">&times;</button>
          </div>
          
          <div className="flex-grow p-4 overflow-y-auto space-y-3">
            <div className="bg-white/10 p-4 rounded-2xl rounded-tl-sm text-sm text-gray-200 border border-white/5">
              Welcome to Velalive. I'm Vela, your personal AI concierge. How can I assist you with your transformation today?
            </div>
          </div>

          <div className="p-3 bg-[#0a0a0a] border-t border-white/10 flex gap-2">
            <input type="text" placeholder="Type your message..." className="flex-grow bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white outline-none focus:border-[#d4af37]" />
            <button className="bg-[#d4af37] text-black rounded-full p-2 w-10 h-10 flex items-center justify-center hover:bg-white transition">➤</button>
          </div>
        </div>
      )}
      <button onClick={() => setIsOpen(!isOpen)} className="bg-[#d4af37] text-black w-14 h-14 rounded-full shadow-[0_0_30px_rgba(212,175,55,0.4)] flex items-center justify-center text-2xl hover:scale-110 transition-transform">
        {isOpen ? '✕' : '💬'}
      </button>
    </div>
  );
}
