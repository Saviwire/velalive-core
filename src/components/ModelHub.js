import React from 'react';

export default function ModelHub() {
  const models = [
    { name: 'Seedance 2.5', desc: 'Cinematic 4K video generation with region editing.', color: 'from-blue-900/40', border: 'border-blue-500/30', btn: 'bg-blue-500' },
    { name: 'Kling 2.6', desc: 'High-fidelity AI video with native audio.', color: 'from-purple-900/40', border: 'border-purple-500/30', btn: 'bg-purple-500' },
    { name: 'Wan 3.0', desc: 'Turn footage into viral short-form videos.', color: 'from-orange-900/40', border: 'border-orange-500/30', btn: 'bg-orange-500' },
  ];

  return (
    <section className="py-24 px-4 bg-[#0d0d0d] border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-serif text-white mb-12 text-center">Cutting-Edge Models</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {models.map((model, i) => (
            <div key={i} className={`bg-gradient-to-br ${model.color} to-black p-10 rounded-3xl border ${model.border} text-white shadow-2xl hover:-translate-y-2 transition-transform duration-300`}>
              <h3 className="text-3xl font-bold mb-4">{model.name}</h3>
              <p className="text-sm text-gray-300 mb-8">{model.desc}</p>
              <button className={`px-6 py-3 ${model.btn} rounded-full text-xs font-bold uppercase tracking-widest w-full hover:opacity-90 transition`}>Explore</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
