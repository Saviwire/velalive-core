import React, { useState } from 'react';

export default function Footer() {
  const [modalContent, setModalContent] = useState(null);

  const closeModal = () => setModalContent(null);

  return (
    <>
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
              <li><button onClick={() => setModalContent('privacy')} className="hover:text-[#d4af37] transition">Privacy Policy</button></li>
              <li><button onClick={() => setModalContent('terms')} className="hover:text-[#d4af37] transition">Terms of Service</button></li>
              <li><a href="mailto:support@velalive.studio" className="hover:text-[#d4af37] transition">Contact Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-[10px] tracking-widest">Connect</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="https://www.instagram.com/gift_asane" target="_blank" rel="noreferrer" className="hover:text-[#d4af37] transition">Instagram</a></li>
              <li><a href="https://x.com/SaviWire" target="_blank" rel="noreferrer" className="hover:text-[#d4af37] transition">X (Twitter)</a></li>
              <li><a href="https://www.tiktok.com/@savi_exchange" target="_blank" rel="noreferrer" className="hover:text-[#d4af37] transition">TikTok</a></li>
              <li><a href="https://wa.me/2348061463629" target="_blank" rel="noreferrer" className="hover:text-[#d4af37] transition">WhatsApp Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-bold text-gray-400">&copy; {new Date().getFullYear()} Velalive. All rights reserved.</p>
          <p className="text-[10px] text-gray-600 font-light leading-relaxed max-w-3xl">
            <strong className="text-gray-500">LEGAL DISCLAIMER:</strong> The creator of Velalive assumes absolutely zero liability for any user-generated content or actions taken by users on this platform. All outputs are the sole legal responsibility of the user. Non-consensual deepfakes, illegal acts, and harassment are strictly prohibited.
          </p>
        </div>
      </footer>

      {/* PREMIUM LEGAL MODALS */}
      {modalContent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#0d0d0d] border border-white/10 rounded-3xl p-6 md:p-10 max-w-3xl w-full max-h-[80vh] overflow-y-auto relative shadow-2xl">
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl">&times;</button>
            
            {modalContent === 'privacy' && (
              <div>
                <h2 className="text-3xl font-serif text-white mb-6">Privacy Policy</h2>
                <div className="text-gray-400 font-light text-sm space-y-4 leading-relaxed">
                  <p><strong>1. Data Processing:</strong> Velalive is a privacy-first platform. Video streams and images processed through our AI engine are done so in real-time via secure WebRTC connections. We do not record, store, or sell your live video feeds.</p>
                  <p><strong>2. Payment Information:</strong> All fiat transactions are securely handled by Lemon Squeezy (our Merchant of Record). Cryptocurrency transactions are handled by NOWPayments. Velalive does not directly store your credit card details or crypto wallet private keys.</p>
                  <p><strong>3. Cookies & Analytics:</strong> We use strictly necessary cookies to maintain your login session and track minute usage for metered billing. We do not use invasive third-party tracking pixels.</p>
                </div>
              </div>
            )}

            {modalContent === 'terms' && (
              <div>
                <h2 className="text-3xl font-serif text-white mb-6">Terms of Service</h2>
                <div className="text-gray-400 font-light text-sm space-y-4 leading-relaxed">
                  <p><strong>1. Strict Legal Disclaimer:</strong> The creator(s) of Velalive provide this technology as a neutral tool. We assume absolutely zero liability for any user-generated content, outputs, or actions taken by users. All outputs are the sole legal and ethical responsibility of the user.</p>
                  <p><strong>2. Prohibited Conduct:</strong> You strictly agree not to use Velalive to create non-consensual deepfakes, engage in harassment, commit fraud, or violate any local, national, or international laws. Violation of this clause will result in immediate termination of your account and IP ban.</p>
                  <p><strong>3. Indemnification:</strong> By using this platform, you agree to waive all rights to hold the creator(s) liable for any legal, financial, or reputational damages incurred by you or a third party as a result of your usage of the platform.</p>
                  <p><strong>4. Billing:</strong> Subscriptions are metered strictly by live usage. You agree to pay all charges incurred by your account. We reserve the right to modify pricing with 30 days notice.</p>
                </div>
              </div>
            )}
            
            <button onClick={closeModal} className="mt-8 px-8 py-3 bg-[#d4af37] text-black font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white transition w-full">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
