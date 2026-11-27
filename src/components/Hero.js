import React from 'react';

/**
 * Hero.
 *
 * The previous background was an external Pexels mp4 that now returns 404, so
 * the whole first screen rendered as a black rectangle. Rather than hotlink
 * some replacement footage nobody actually owns, the backdrop is a
 * self-contained CSS field and the absence of real demo footage is stated
 * plainly instead of being dressed up as a result.
 *
 * The two CTAs are intentionally unchanged: "Start Creating" (onStart) and
 * "View Gallery" (#gallery).
 */
export default function Hero({ onStart }) {
  return (
    <div className="relative flex min-h-[92vh] w-full flex-col items-center justify-center overflow-hidden bg-[#050505]">
      {/* Atmosphere: CSS only. No external request, no video decode on mobile. */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="hero-sheen absolute inset-0" />
        <div className="hero-grain absolute inset-0" />
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#050505] via-[#050505]/95 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 mb-24 mt-20 px-4 text-center">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.5em] text-[#d4af37] md:text-sm">Welcome to Velalive</p>
        <h1 className="mb-6 font-serif text-5xl text-white drop-shadow-2xl md:text-7xl">
          The Ultimate AI <br />
          <span className="italic text-[#d4af37]">Experience.</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-gray-300 md:text-xl">
          Step into the next dimension of content creation. Real-time 4K video, voice cloning, and AI avatars - all running directly in your browser.
        </p>
      </div>

      <div className="relative z-10 mb-20 mt-auto flex flex-col items-center px-4 text-center">
        <h2 className="mb-6 font-serif text-3xl text-white md:text-5xl">Ready to redefine your reality?</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onStart}
            className="rounded-full bg-[#d4af37] px-10 py-4 text-sm font-bold uppercase tracking-widest text-black shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all hover:bg-white"
          >
            Start Creating
          </button>
          <a
            href="#gallery"
            className="rounded-full border border-white/30 px-10 py-4 text-center text-sm font-bold uppercase tracking-widest text-white no-underline backdrop-blur-md transition-all hover:bg-white/10"
          >
            View Gallery
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 animate-bounce md:block" aria-hidden="true">
        <svg className="h-6 w-6 text-[#d4af37]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
}
