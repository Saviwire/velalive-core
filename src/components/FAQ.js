import React from 'react';

export default function FAQ() {
  const faqs = [
    "Do I need an account to try it?", "How are minutes counted?", 
    "Does Face Swap use the same minutes?", "Can I use it on Zoom or Meet?",
    "Is my video recorded?", "How can I pay?", "Whose face am I allowed to use?",
    "What is the difference between the modes?", "Can I use it for commercial purposes?",
    "Do you offer refunds?", "How do I cancel my subscription?", "Is there an API available?"
  ];

  return (
    <section className="py-24 px-4 bg-[#050505] border-t border-white/5 relative z-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-serif text-white mb-12 text-center">Good questions.</h2>
        <div className="space-y-4">
          {faqs.map((q, i) => (
            <details key={i} className="group bg-[#0d0d0d] rounded-2xl border border-white/5 p-6 cursor-pointer open:border-[#d4af37]/30 transition-colors">
              <summary className="flex justify-between items-center font-bold text-white text-lg [&::-webkit-details-marker]:hidden">
                {q}
                <span className="transition group-open:rotate-180 text-[#d4af37]">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="text-gray-400 mt-4 text-sm font-light leading-relaxed">Yes, absolutely. Velalive is designed to give you total control. All billing is metered strictly by live usage, and you can cancel any time from your dashboard.</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
