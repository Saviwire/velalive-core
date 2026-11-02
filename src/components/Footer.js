import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#020202] text-gray-500 py-16 px-4 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div>
          <h3 className="text-2xl font-serif text-white mb-4">VELALIVE</h3>
          <p className="text-sm font-light">Redefine your reality in real-time.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-[10px] tracking-widest">Tools</h4>
          <ul className="space-y-2 text-sm">
            <li>Live Studio</li><li>Face Swap</li><li>Voice Changer</li><li>AI Avatars</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-[10px] tracking-widest">Models</h4>
          <ul className="space-y-2 text-sm">
            <li>Seedance 2.5</li><li>Kling 2.6</li><li>Wan 3.0</li><li>Genjutsu</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-[10px] tracking-widest">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>Privacy Policy</li><li>Terms of Service</li><li>Contact Support</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 text-center md:text-left">
        <p className="text-xs font-bold text-gray-400 mb-2">&copy; {new Date().getFullYear()} Velalive. All rights reserved.</p>
        <p className="text-[10px] text-gray-600 font-light leading-relaxed max-w-4xl">
          <strong className="text-gray-500">LEGAL DISCLAIMER:</strong> The creator of Velalive assumes absolutely zero liability for any user-generated content or actions taken by users on this platform. All outputs are the sole legal responsibility of the user. Non-consensual deepfakes, illegal acts, and harassment are strictly prohibited. The creator disassociates entirely from user outputs and will cooperate fully with law enforcement if laws are broken. By using this platform, users waive all rights to hold the creator liable.
        </p>
      </div>
    </footer>
  );
}
