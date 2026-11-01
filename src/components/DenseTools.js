import React from 'react';

export default function DenseTools() {
  const tools = [
    { title: 'Live AI Filter', desc: 'Become anything on camera', img: 'https://images.unsplash.com/photo-1512418490979-92798cec1380?w=300', badge: null },
    { title: 'Live Face Swap', desc: 'Be anyone on your calls', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300', badge: null },
    { title: 'Live AI Avatar', desc: 'Your avatar moves when you do', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300', badge: null },
    { title: 'VTuber Maker', desc: 'A 3D avatar that follows you', img: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?w=300', badge: 'Free' },
    { title: 'PNGTuber Maker', desc: 'A 2D avatar that talks', img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300', badge: 'Free' },
    { title: 'Webcam Effects', desc: 'Blur or swap your background', img: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=300', badge: 'Free' },
    { title: 'AI VTuber', desc: 'An AI character that streams', img: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=300', badge: null },
    { title: 'Real-Time Voice', desc: 'Change your voice live', img: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=300', badge: null },
  ];

  return (
    <section className="py-24 px-6 bg-[#050505] border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-4">Every tool, <span className="italic text-[#d4af37]">live or not.</span></h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tools.map((tool, i) => (
            <div key={i} className="group bg-[#0d0d0d] rounded-3xl p-6 border border-white/5 hover:border-[#d4af37]/40 transition-all duration-300 cursor-pointer shadow-lg relative overflow-hidden">
              <div className="w-16 h-16 rounded-2xl overflow-hidden mb-6 border border-white/10 relative z-10">
                <img src={tool.img} alt={tool.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1 relative z-10">{tool.title}</h3>
              {tool.badge && (
                <div className="inline-block px-3 py-1 bg-white/10 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-300 mb-3 relative z-10">
                  {tool.badge}
                </div>
              )}
              <p className="text-sm text-gray-400 font-light leading-relaxed relative z-10">{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
