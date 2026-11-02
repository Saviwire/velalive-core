import React from 'react';

export default function Hero({ onStart }) {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050505]">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-40">
        <source src="https://videos.pexels.com/video-files/3129595/3129595-uhd_2560_1440_25fps.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-transparent to-[#050505]"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/60 via-transparent to-[#050505]/60"></div>

      <div className="relative z-10 text-center px-4 mb-24 mt-20">
        <p className="text-[#d4af37] tracking-[0.5em] text-xs md:text-sm font-bold mb-4 uppercase drop-shadow-lg">Welcome to Velalive</p>
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 drop-shadow-2xl">The Ultimate AI <br/><span className="italic text-[#d4af37]">Experience.</span></h1>
        <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl font-light leading-relaxed">Step into the next dimension of content creation. Real-time 4K video, voice cloning, and AI avatars—all running directly in your browser.</p>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 mt-auto mb-20">
        <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Ready to redefine your reality?</h2>
        <div className="flex gap-4">
          {/* THIS BUTTON NOW TRIGGERS THE AUTH CHECK */}
          <button onClick={onStart} className="px-10 py-4 bg-[#d4af37] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)]">
            Start Creating
          </button>
          <a href="#gallery" className="px-10 py-4 border border-white/30 text-white font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white/10 transition-all backdrop-blur-md text-center">
            View Gallery
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10 hidden md:block">
        <svg className="w-6 h-6 text-[#d4af37]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
      </div>
    </div>
  );
}
