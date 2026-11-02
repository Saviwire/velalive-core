import React from 'react';

export default function DenseTools() {
  const toolCategories = [
    {
      category: "Live Streaming & Video Calls",
      tools: [
        'Live Face Swap', 'Live AI Filter', 'Live AI Avatar', 'Webcam Effects', 
        'OBS Virtual Camera', 'Zoom Face Swap', 'Discord Video Swap', 'Real-Time Body Swap', 
        'Insight Face Swap', 'DFM Model Swap', 'Background Blur', 'Background Replace',
        'Streaming Avatar', 'Real-Time Translation'
      ]
    },
    {
      category: "Avatars, VTubers & Clones",
      tools: [
        'VTuber Maker (3D)', 'PNGTuber Maker (2D)', 'AI VTuber', 'Character Studio', 
        'AI Companion', 'Digital Twin Clone (15s)', '3D Avatar Generator', 'Talking Avatar', 
        'Interactive Avatar', 'Avatar 4.0 (Photo)', 'Live2D Rigging', 'Puppet Avatar',
        'Avatar Video Generator', 'Character Voice Gen'
      ]
    },
    {
      category: "Face, Body & Motion Swaps",
      tools: [
        'Photo Face Swap', 'Video Face Swap', 'GIF Face Swap', 'Head Swap', 
        'Hair Swap', 'Clothing Swap', 'Character Swap', 'Motion Transfer (Genjutsu)', 
        'Video Restyle', 'Anime Restyle', 'Object Replacement', 'Age Progression',
        'Gender Swap', 'Face Morphing', 'Body Reshape', 'Duo Swap (2 Characters)',
        'Face Enhance', 'Face Restoration'
      ]
    },
    {
      category: "Video Generation & Editing",
      tools: [
        'Text-to-Video', 'Image-to-Video', 'Video-to-Video', 'Video Extension', 
        'Multi-Shot Narrative', '10 Keyframes', 'Camera Controls', 'Motion Brush',
        'Video Agent', 'Instant Highlights', 'Lip Sync', 'Auto-Captions',
        'Video Upscaling (4K)', 'Video Translation (175+)', 'Voice Director', 
        'Gesture Control', 'Video Trimming', 'Scene Replacement'
      ]
    },
    {
      category: "Audio & Voice Lab",
      tools: [
        'AI Voice Changer', 'Real-Time Voice Changer', 'Voice Cloner', 'Vocal Remover', 
        'Voice Isolator', 'Auto-Tune', 'Soundboard', 'Meme Soundboard', 
        'AI Voice Generator', 'Character Voice Gen', 'Audio Translation', 
        'Podcast Editor', 'Noise Reduction', 'Text-to-Speech'
      ]
    },
    {
      category: "Image & Canvas Studio",
      tools: [
        'Text-to-Image', 'Image-to-Image', 'Agentic Canvas', 'Inpainting', 
        'Outpainting', 'Object Removal', 'Image Upscaler', 'Image Restyle',
        'Anime Filter', 'Cartoon Filter', 'Cyberpunk Filter', 'Watercolor Filter',
        'Background Removal', 'Image Extender', 'Face Touch-up', 'Color Grading'
      ]
    }
  ];

  return (
    <section className="py-24 px-4 bg-[#0d0d0d] border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#d4af37] mb-4">The Arsenal</p>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-4">Every tool, <span className="italic text-[#d4af37]">live or not.</span></h2>
          <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">The combined power of 8 industry-leading AI platforms, unified in one master control room.</p>
        </div>

        <div className="space-y-16">
          {toolCategories.map((cat, index) => (
            <div key={index} className="bg-[#141414] p-6 md:p-8 rounded-3xl border border-white/5 shadow-2xl">
              <h3 className="text-2xl font-serif text-[#d4af37] mb-6 border-b border-white/10 pb-4 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
                {cat.category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {cat.tools.map((tool, i) => (
                  <div key={i} className="bg-[#0a0a0a] p-4 rounded-xl border border-white/5 hover:border-[#d4af37]/50 transition-all cursor-pointer group flex flex-col justify-between">
                    <h4 className="font-bold text-sm text-white mb-3 group-hover:text-[#d4af37] transition-colors leading-tight">{tool}</h4>
                    <p className="text-gray-600 text-[10px] uppercase tracking-widest font-bold group-hover:text-white transition-colors">Launch &rarr;</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
