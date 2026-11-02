import React from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

export default function SwapStudio() {
  const modes = [
    { title: 'Face Swap', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800' },
    { title: 'Head Swap', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800' },
    { title: 'Hair Swap', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800' },
  ];

  return (
    <section className="py-24 px-4 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-12 text-center">AI Swap Studio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {modes.map((mode, i) => (
            <div key={i} className="bg-[#141414] p-4 rounded-3xl border border-white/10">
              <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src={mode.img} alt="Before" />}
                itemTwo={<ReactCompareSliderImage src={modes[(i+1)%3].img} alt="After" />}
                className="rounded-2xl overflow-hidden aspect-square"
              />
              <h3 className="font-serif text-xl text-white mt-4">{mode.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
