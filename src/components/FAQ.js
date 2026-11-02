import React from 'react';

export default function FAQ() {
  const faqs = [
    { q: "Do I need an account to try it?", a: "No. You can test the live studio for 20 seconds completely free without creating an account or entering a card." },
    { q: "How are minutes counted?", a: "Only live processing time is counted. Browsing, setting up your camera, and picking faces does not use any minutes." },
    { q: "Does Face Swap use the same minutes?", a: "Yes. All modes (Face Swap, Restyle, Try-On, AI Companion) draw from the exact same monthly minute pool." },
    { q: "Can I use it on Zoom or Meet?", a: "Yes. You can share your screen or use our OBS Virtual Camera integration to feed the AI output directly into any video call app." },
    { q: "Is my video recorded?", a: "No. Your privacy is absolute. All processing happens in real-time and is never recorded or stored on our servers." },
    { q: "How can I pay?", a: "We accept standard credit/debit cards via Lemon Squeezy, as well as Bitcoin, USDT, and other cryptocurrencies via NOWPayments." },
    { q: "Whose face am I allowed to use?", a: "You must have explicit consent to use someone's likeness. Using the platform for non-consensual deepfakes is strictly prohibited and will result in a permanent ban." },
    { q: "What is the difference between the modes?", a: "Face Swap changes your identity, Restyle changes the entire visual environment, Try-On changes your clothes, and AI Companion adds a virtual character." },
    { q: "Can I use it for commercial purposes?", a: "Yes, the Pro and Agency tiers grant you full commercial rights to any content you generate." },
    { q: "Do you offer refunds?", a: "We offer a 7-day money-back guarantee on your first purchase, provided you haven't exceeded the usage limits." },
    { q: "How do I cancel my subscription?", a: "You can cancel anytime from your billing dashboard. You will retain access until the end of your current billing cycle." },
    { q: "Is there an API available?", a: "Yes, Agency tier users get API access to integrate our AI engine directly into their own applications." }
  ];

  return (
    <section className="py-24 px-4 bg-[#050505] border-t border-white/5 relative z-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-serif text-white mb-12 text-center">Good questions.</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-[#0d0d0d] rounded-2xl border border-white/5 p-6 cursor-pointer open:border-[#d4af37]/30 transition-colors">
              <summary className="flex justify-between items-center font-bold text-white text-lg [&::-webkit-details-marker]:hidden">
                {faq.q}
                <span className="transition group-open:rotate-180 text-[#d4af37]">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="text-gray-400 mt-4 text-sm font-light leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
