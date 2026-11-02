import React from 'react';

export default function LegalAndSupport() {
  return (
    <section id="legal" className="py-24 px-4 bg-[#050505] border-t border-white/5 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-4">Legal & <span className="italic text-[#d4af37]">Support.</span></h2>
          <p className="text-gray-400 text-lg">Transparency, privacy, and direct communication.</p>
        </div>

        {/* CONTACT SUPPORT */}
        <div className="bg-[#0d0d0d] border border-[#d4af37]/30 rounded-3xl p-8 md:p-12 mb-8 shadow-[0_0_30px_rgba(212,175,55,0.05)]">
          <h3 className="text-2xl font-serif text-[#d4af37] mb-4">Contact Support Directly</h3>
          <p className="text-gray-300 font-light mb-6">Need help with your account, enterprise billing, or API access? Reach out to us immediately on WhatsApp.</p>
          <a 
            href="https://wa.me/2348061463629" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#d4af37] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            Message Us on WhatsApp: +234 806 146 3629
          </a>
        </div>

        {/* PRIVACY POLICY */}
        <div className="bg-[#0d0d0d] border border-white/5 rounded-3xl p-8 md:p-12 mb-8">
          <h3 className="text-2xl font-serif text-white mb-4">Privacy Policy</h3>
          <div className="text-gray-400 font-light text-sm space-y-4 leading-relaxed">
            <p><strong>1. Data Processing:</strong> Velalive is a privacy-first platform. Video streams and images processed through our AI engine are done so in real-time via secure WebRTC connections. We do not record, store, or sell your live video feeds.</p>
            <p><strong>2. Payment Information:</strong> All fiat transactions are securely handled by Lemon Squeezy (our Merchant of Record). Cryptocurrency transactions are handled by NOWPayments. Velalive does not directly store your credit card details or crypto wallet private keys.</p>
            <p><strong>3. Cookies & Analytics:</strong> We use strictly necessary cookies to maintain your login session and track minute usage for metered billing. We do not use invasive third-party tracking pixels.</p>
          </div>
        </div>

        {/* TERMS OF SERVICE */}
        <div className="bg-[#0d0d0d] border border-white/5 rounded-3xl p-8 md:p-12 mb-8">
          <h3 className="text-2xl font-serif text-white mb-4">Terms of Service</h3>
          <div className="text-gray-400 font-light text-sm space-y-4 leading-relaxed">
            <p><strong>1. Strict Legal Disclaimer:</strong> The creator(s) of Velalive provide this technology as a neutral tool. We assume absolutely zero liability for any user-generated content, outputs, or actions taken by users. All outputs are the sole legal and ethical responsibility of the user.</p>
            <p><strong>2. Prohibited Conduct:</strong> You strictly agree not to use Velalive to create non-consensual deepfakes, engage in harassment, commit fraud, or violate any local, national, or international laws. Violation of this clause will result in immediate termination of your account and IP ban.</p>
            <p><strong>3. Indemnification:</strong> By using this platform, you agree to waive all rights to hold the creator(s) liable for any legal, financial, or reputational damages incurred by you or a third party as a result of your usage of the platform.</p>
            <p><strong>4. Billing:</strong> Subscriptions are metered strictly by live usage. You agree to pay all charges incurred by your account. We reserve the right to modify pricing with 30 days notice.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
