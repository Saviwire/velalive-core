import React from 'react';

export default function AvatarEngine() {
  const features = [
    { title: '15-Second Clone', desc: 'Record a short selfie video once. Get a lifelike Digital Twin that mirrors your look, voice, and expressions.', icon: '📸' },
    { title: 'Avatar 4.0', desc: 'Upload a single photo. Watch it become a natural talking video with accurate lip-sync.', icon: '🖼️' },
    { title: 'AI Translation', desc: 'Translate and dub videos into 175+ languages with AI voice matching.', icon: '🌍' },
    { title: 'Video Agent', desc: 'Describe the video you want. The agent handles scripting, visuals, and editing.', icon: '🤖' },
    { title: 'Instant Highlights', desc: 'Upload a long podcast. AI finds the best moments and creates viral clips.', icon: '✂️' },
    { title: 'Voice Director', desc: 'Emphasize a phrase, whisper a word, or pause. Control your avatar\'s delivery.', icon: '🎙️' },
    { title: 'Gesture Control', desc: 'Link specific words in your script to pre-recorded gestures.', icon: '👋' },
    { title: '30-Min Continuous', desc: 'Generate 30 minutes of continuous talking-head video with zero face drift.', icon: '⏳' },
  ];

  return (
    <section className="py-24 px-4 bg-[#050505] border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-[#d4af37] mb-4">Velalive Avatar Engine</p>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Clone yourself. <span className="italic text-[#d4af37]">Scale your presence.</span></h2>
          <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">Create a lifelike AI clone from a single 15-second video. Then let the Video Agent produce, translate, and edit content at scale.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-[#111] p-8 rounded-3xl border border-white/5 hover:border-[#d4af37]/50 transition-all">
              <div className="text-4xl mb-6">{f.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
