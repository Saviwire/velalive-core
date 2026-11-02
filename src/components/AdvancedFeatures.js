import React from 'react';

export default function AdvancedFeatures() {
  const features = [
    { title: 'Native 30s Video', desc: 'Generate long takes and continuous storytelling.', icon: '🎬' },
    { title: '4K 10-bit HDR', desc: 'Production-ready video with rich highlights.', icon: '🖥️' },
    { title: 'Omni Reference', desc: 'Combine up to 15 references in one task.', icon: '🔗' },
    { title: 'Multi-Shot', desc: 'Precise control over narrative beats.', icon: '📖' },
  ];
  return (
    <section className="py-24 px-4 bg-[#0d0d0d] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-[#d4af37] mb-4">Advanced Engine</p>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Beyond imagination.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-[#111] p-8 rounded-3xl border border-white/5 hover:border-[#d4af37]/50 transition-all">
              <div className="text-4xl mb-6">{f.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-gray-400 font-light">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
