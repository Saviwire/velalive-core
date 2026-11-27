import React, { useCallback, useState } from 'react';
import { useCamera } from './useCamera';

// MediaSlot -- one labelled slot for a camera or an AI frame.
// Three states, never a black box: camera, image, or a labelled still pair.
export default function MediaSlot({
  kind = 'image',
  label = 'AI OUTPUT',
  aspect = '16 / 9',
  still = '',
  clip = '',
  name = '',
  room = '',
  tone = 'main',
  caption = false,
  note = '',
  large = false,
}) {
  const [broken, setBroken] = useState(false);
  const [clipBroken, setClipBroken] = useState(false);
  const [clipReady, setClipReady] = useState(false);
  const cam = useCamera();
  const setCamRef = useCallback((el) => { cam.ref.current = el; }, [cam.ref]);

  const hasStill = Boolean(still) && !broken;
  const hasClip = Boolean(clip) && !clipBroken;
  const live = kind === 'camera' && cam.state === 'live';
  const showMedia = kind !== 'camera' && (hasStill || hasClip);
  const showPair = kind === 'camera' ? !live : !showMedia;
  const ring = tone === 'inset' ? 'ring-white/[0.07]' : 'ring-white/10';
  const altText = name ? label + ', ' + name + (room ? ', ' + room : '') : label;
  const camNote = kind === 'camera' ? (cam.note || note) : note;

  return (
    <div
      className={'relative overflow-hidden bg-[#0d0b09] ring-1 ' + ring}
      style={{ aspectRatio: aspect }}
      data-slot={label}
      data-state={live ? 'camera' : showMedia ? 'image' : 'pair'}
    >
      {hasStill ? (
        <img src={still} alt={altText} loading="lazy" decoding="async" onError={() => setBroken(true)} className="absolute inset-0 h-full w-full select-none object-cover" />
      ) : null}

      {hasClip ? (
        <video
          className={'absolute inset-0 z-10 h-full w-full object-cover transition-opacity duration-[1200ms] ' + (clipReady ? 'opacity-100' : 'opacity-0')}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={hasStill ? still : undefined}
          onPlaying={() => setClipReady(true)}
          onError={() => setClipBroken(true)}
        >
          <source src={clip} type="video/mp4" />
        </video>
      ) : null}

      {live ? (
        <video ref={setCamRef} autoPlay muted playsInline className="absolute inset-0 h-full w-full scale-x-[-1] object-cover" />
      ) : null}

      {showPair ? (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-3 text-center">
          <PairRow />
          {kind === 'camera' ? (
            <div className="flex flex-col items-center gap-1.5">
              <button
                type="button"
                onClick={cam.start}
                disabled={cam.state === 'requesting'}
                className="rounded-full border border-white/25 bg-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/85 transition hover:border-[#d4af37]/70 hover:text-[#d4af37] disabled:opacity-50"
              >
                {cam.state === 'requesting' ? 'Asking the browser' : 'Start Camera'}
              </button>
              {camNote ? <p className="max-w-[16rem] text-[9px] leading-snug text-white/45">{camNote}</p> : null}
            </div>
          ) : null}
        </div>
      ) : null}

      <span className="absolute left-3 top-3 z-30 rounded-sm bg-black/30 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.22em] text-white/85 backdrop-blur-sm md:text-[10px]">
        {label}
      </span>
    </div>
  );
}


function PairRow() {
  return (
    <div className="flex w-full max-w-[460px] gap-7">
      <Cell text="YOUR CAMERA" />
      <Cell text="AI OUTPUT" />
    </div>
  );
}

function Cell({ text }) {
  return (
    <div className="relative aspect-[9/16] flex-1 rounded-md bg-[#14110d] ring-1 ring-white/10">
      <span className="absolute inset-x-1 bottom-4 text-center text-[9px] font-bold uppercase tracking-[0.18em] text-white/55">{text}</span>
    </div>
  );
}