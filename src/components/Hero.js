import React from 'react';
import MediaSlot from './MediaSlot';
import { HERO_CLIP, HERO_STILL } from '../media';

// Hero -- a live camera tab, built as a product picture rather than a poster.
//
// The media slot shows the shot at its true 16:9 whatever exists on disk:
// HERO_CLIP plays when there is a clip, HERO_STILL stays behind it, and until
// a file exists MediaSlot draws its labelled YOUR CAMERA / AI OUTPUT pair.
// There is no black box in any state.
//
// Start Creating opens the sign-up step, straight from this file.
// View Gallery jumps to the gallery.
export default function Hero({ onStart }) {
  return (
    <div className="relative flex min-h-[92vh] w-full flex-col items-center justify-center px-4 md:px-10">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="hero-sheen absolute inset-0" />
        <div className="hero-grain absolute inset-0" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#050505] via-[#050505]/95 to-transparent" aria-hidden="true" />

      <div className="relative z-10 mt-20 w-full text-center">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.5em] text-[#d4af37] md:text-sm">Welcome to Velalive</p>
        <h1 className="mb-6 font-serif text-5xl text-white drop-shadow-2xl md:text-7xl">
          The Ultimate AI <br />
          <span className="italic text-[#d4af37]">Experience.</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-gray-300 md:text-xl">
          Step into the next dimension of content creation. Real-time 4K video, voice cloning, and AI avatars, all running directly in your browser.
        </p>
      </div>

      <div className="relative z-10 mb-16 mt-4 w-full max-w-7xl">
        <div className="rounded-[1.4rem] border border-white/10 bg-[#0b0a09] p-2 shadow-[0_40px_120px_rgba(0,0,0,0.75),0_0_60px_rgba(212,175,55,0.06)] md:p-3">
          <div className="relative">
            <MediaSlot kind="image" label="AI OUTPUT" aspect="16 / 9" still={HERO_STILL} clip={HERO_CLIP} name="Meridian" room="Home office at night, city window" tone="main" caption />
            <div className="pointer-events-none absolute right-3 top-3 z-20 w-[18%] min-w-[96px] overflow-hidden rounded-lg border border-[#d4af37]/60 bg-[#0b0a09] shadow-[0_14px_36px_rgba(0,0,0,0.7)] md:right-4 md:top-4 md:w-[15%] md:min-w-[132px]">
              <MediaSlot kind="camera" label="YOUR CAMERA" aspect="4 / 3" tone="inset" />
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <h2 className="mb-6 font-serif text-3xl text-white md:text-5xl">Ready to redefine your reality?</h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button type="button" onClick={onStart} className="rounded-full bg-[#d4af37] px-10 py-4 text-sm font-bold uppercase tracking-widest text-black shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all hover:bg-white">Start Creating</button>
            <a href="#gallery" className="rounded-full border border-white/30 px-10 py-4 text-center text-sm font-bold uppercase tracking-widest text-white no-underline backdrop-blur-md transition-all hover:bg-white/10">View Gallery</a>
          </div>
        </div>
      </div>
    </div>
  );
}
