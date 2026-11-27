/*
 * media.js -- where every generated frame lives, in one place.
 *
 * No image or video model is reachable from this workspace, so the
 * files below are the drop-in targets: the page code names them, the build
 * copies public/ as-is, and the moment a file exists at that path the slot
 * shows it instead of its labelled still pair. Nothing here is a secret and
 * every path is a same-origin Vite URL, so VITE_PUBLIC_BASE works unchanged.
 *
 * The shot list, sizes, codecs and light for each missing file are in
 * STUDIO.md at the repo root. A slot never invents the file, and a missing
 * file never becomes a black box.
 */

const base = import.meta.env.BASE_URL || '/';
const abs = (p) => (p ? base.replace(/\/+$/, '') + '/' + p.replace(/^\/+/, '') : '');

// HERO -- Meridian, the room at night. 16:9 only.
export const HERO_STILL = abs(import.meta.env.VITE_HERO_STILL || '');
export const HERO_CLIP = abs(import.meta.env.VITE_HERO_CLIP || '');

// GENJUTSU -- the dancer, the mirror plane stays dark; 9:16, loops on itself.
export const DANCER_STILL = abs(import.meta.env.VITE_DANCER_STILL || '');
export const DANCER_CLIP = abs(import.meta.env.VITE_DANCER_CLIP || '');

// THE FOUR CARDS -- Amir, Pula, Meridian, the quiet one. 16:9 each.
export const CARD_MEDIA = [
  { still: abs(import.meta.env.VITE_CARD_1_STILL || ''), clip: abs(import.meta.env.VITE_CARD_1_CLIP || '') },
  { still: abs(import.meta.env.VITE_CARD_2_STILL || ''), clip: abs(import.meta.env.VITE_CARD_2_CLIP || '') },
  { still: abs(import.meta.env.VITE_CARD_3_STILL || ''), clip: abs(import.meta.env.VITE_CARD_3_CLIP || '') },
  { still: abs(import.meta.env.VITE_CARD_4_STILL || ''), clip: abs(import.meta.env.VITE_CARD_4_CLIP || '') },
];
