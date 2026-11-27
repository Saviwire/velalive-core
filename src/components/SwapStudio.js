import React from 'react';
import MediaSlot from './MediaSlot';
import { CARD_MEDIA } from '../media';

const CARDS = [
  {
    swap: 'Face Swap',
    subject: 'Amir',
    badge: '4K ULTRA HD',
    title: 'Closing time',
    line: 'The mirror is the light: tungsten thrown back under the jaw.',
    media: CARD_MEDIA[0],
    camera: { top: '5%', left: '4%', width: '24%', aspect: '9 / 16' },
    key: '#ffb05a',
    ground: '#070503',
  },
  {
    swap: 'Head Swap',
    subject: 'Pula',
    badge: '60 FPS LIVE',
    title: 'The doorway',
    line: 'Cool bench on the left, the street lamp warm on the right.',
    media: CARD_MEDIA[1],
    camera: { top: '5%', right: '4%', width: '22%', aspect: '3 / 4' },
    key: '#8fb0e0',
    ground: '#050708',
  },
  {
    swap: 'Restyle',
    subject: 'Meridian',
    badge: 'HDR 10-BIT',
    title: 'The city window',
    line: 'The window on the left, the screen under her chin.',
    media: CARD_MEDIA[2],
    camera: { bottom: '7%', left: '5%', width: '26%', aspect: '4 / 3' },
    key: '#ffcb84',
    ground: '#080706',
  },
  {
    swap: 'AI Companion',
    subject: 'Odele',
    badge: 'NEURAL LIVE',
    title: 'Early afternoon',
    line: 'Daylight only, and the room stays quiet around her.',
    media: CARD_MEDIA[3],
    camera: { bottom: '7%', right: '5%', width: '22%', aspect: '9 / 16' },
    key: '#fff2de',
    ground: '#0a0a0a',
  },
];

export default function SwapStudio() {
  return (
    <section className="relative z-10 flex flex-col items-center overflow-hidden bg-[#050505] px-4 py-32">
    </section>
  );
}
