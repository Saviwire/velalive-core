import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#020202] text-gray-500 py-16 px-4 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
        <div className="col-span-2 md:col-span-1">
          <h3 className="text-2xl font-serif text-white mb-4">VELALIVE</h3>
          <p className="text-sm font-light pr-4">Redefine your reality in real-time. The world's most advanced AI video platform.</p>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-[10px] tracking-widest">Tools</h4>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-[#d4af37] transition cursor-pointer">Live Studio</li>
            <li className="hover:text-[#d4af37] transition cursor-pointer">Face Swap</li>
            <li className="hover:text-[#d4af37] transition cursor-pointer">Voice Changer</li>
            <li className="hover:text-[#d4af37] transition cursor-pointer">AI Avatars</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-[10px] tracking-widest">Models</h4>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-[#d4af37] transition cursor-pointer">Seedance 2.5</li>
            <li className="hover:text-[#d4af37] transition cursor-pointer">Kling 2.6</li>
            <li className="hover:text-[#d4af37] transition cursor-pointer">Wan 3.0</li>
            <li className="hover:text-[#d4af37] transition cursor-pointer">Genjutsu</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-[10px] tracking-widest">Company</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#legal" className="hover:text-[#d4af37] transition">Privacy Policy</a></li>
            <li><a href="#legal" className="hover:text-[#d4af37] transition">Terms of Service</a></li>
            <li><a href="https://wa.me/2348061463629" target="_blank" rel="noreferrer" className="hover:text-[#d4af37] transition">WhatsApp Support</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-[10px] tracking-widest">Connect</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="https://www.instagram.com/gift_asane" target="_blank" rel="noreferrer" className="hover:text-[#d4af37] transition">Instagram</a></li>
            <li><a href="https://x.com/SaviWire" target="_blank" rel="noreferrer" className="hover:text-[#d4af37] transition">X (Twitter)</a></li>
            <li><a href="https://www.tiktok.com/@savi_exchange" target="_blank" rel="noreferrer" className="hover:text-[#d4af37] transition">TikTok</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs font-bold text-gray-400">&copy; {new Date().getFullYear()} Velalive. All rights reserved.</p>
        <p className="text-[10px] text-gray-600 font-light leading-relaxed max-w-3xl">
          <strong className="text-gray-500">LEGAL DISCLAIMER:</strong> The creator of Velalive assumes absolutely zero liability for any user-generated content or actions taken by users on this platform. All outputs are the sole legal responsibility of the user. Non-consensual deepfakes, illegal acts, and harassment are strictly prohibited. The creator disassociates entirely from user outputs and will cooperate fully with law enforcement if laws are broken.
        </p>
      </div>
    </footer>
  );
}
