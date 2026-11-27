import React from 'react';

// Figure -- a person in a room, drawn on an SVG stage.
// Soft shoulders, a calm turned head, and the patch of practical light.
// Calm on purpose: no grin at the lens, no second camera, no drama.

function headPath(headCy, rx, ry) {
  const k = 0.5523;
  const jaw = 1.05;
  const cx = 320;
  const f = (v) => v.toFixed(2);
  return [
    'M ' + f(cx - rx) + ' ' + f(headCy),
    'C ' + f(cx - rx) + ' ' + f(headCy - ry * k) + ' ' + f(cx - rx * 0.55) + ' ' + f(headCy - ry),
  ].join(' ') + 'Z';
}

export default function Figure({ id, turn, headCy, rx, ry, keyColor, cloth }) {
  const t = (turn || 0) / 10;
  return (
    <svg viewBox="0 0 640 360" className="absolute inset-0 h-full w-full" role="img" aria-label="A person in the room">
      <defs>
        <radialGradient id={'glow-' + id} cx="0.33" cy="0.33" r="0.66">
          <stop offset="0%" stopColor={keyColor} stopOpacity="0.26" />
          <stop offset="100%" stopColor={keyColor} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="640" height="360" fill={'url(#glow-' + id + ')'} />
      <g transform={'"translate('" + (t * 14).toFixed(2) + '" 4)'"}>
        <path d="M110 360 C126 294 214 252 322 252 C430 254 516 296 531 368 Z" fill={cloth} />
        <path d={headPath(headCy, rx, ry)} fill={keyColor} fillOpacity="0.16" stroke={keyColor} strokeOpacity="0.3" strokeWidth="0.6" />
      </g>
    </svg>
  );
}
