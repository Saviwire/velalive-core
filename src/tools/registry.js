/**
 * Single source of truth for every tool on the site.
 *
 * DenseTools, the /tool/:id page, the dashboard tool list metadata and the
 * future POST /v1/runs backend all read from hereRev. Adding tool #102 is one
 * entry in TOOLS_RAW, not a new React component.
 *
 * Field notes:
 *  - id: explicit, URL-safe, kebab-case, unique. Never derived from the label
 *    at runtime: labels collide across categories ('Character Voice Gen'
 *    exists in both Avatars and Audio), and a derived id silently makes one
 *    tool's route overwrite theother's.
 *  - unitsPerSecond: metered price in pricing units, mirrors Pricing.js.
 *  - status: 'live' | 'beta' | 'coming'. Nothing is marked live until an
 *    adapter actually runs it end to end.
 *  - capabilities: the provider-adapter contract, e.g. 'face_swap',
 *    'motion_transfer'. A tool can be routed to any adapter that declares a
 *    superset of its capabilities.
 *  - provider: the single provider key whose adapter can serve the tool.
 *    null means "not wired yet" - the honest default for everything today.
 */

const DEFAULT_PRICE = 1;

export const TOOLS_RAW = [
  // Live Streaming & Video Calls
  { id: 'live-face-swap', label: 'Live Face Swap', category: 'Live Streaming & Video Calls', capabilities: ['face_swap', 'realtime'], status: 'coming' },
  { id: 'live-ai-filter', label: 'Live AI Filter', category: 'Live Streaming & Video Calls', capabilities: ['face_swap', 'realtime'], status: 'coming' },
  { id: 'live-ai-avatar', label: 'Live AI Avatar', category: 'Live Streaming & Video Calls', capabilities: ['face_swap', 'avatar', 'realtime'], status: 'coming' },
  { id: 'webcam-effects', label: 'Webcam Effects', category: 'Live Streaming & Video Calls', capabilities: ['face_swap', 'realtime'], status: 'coming' },
  { id: 'obs-virtual-camera', label: 'OBS Virtual Camera', category: 'Live Streaming & Video Calls', capabilities: ['realtime'], status: 'coming' },
  { id: 'zoom-face-swap', label: 'Zoom Face Swap', category: 'Live Streaming & Video Calls', capabilities: ['face_swap', 'realtime'], status: 'coming' },
  { id: 'discord-video-swap', label: 'Discord Video Swap', category: 'Live Streaming & Video Calls', capabilities: ['face_swap', 'realtime'], status: 'coming' },
  { id: 'real-time-body-swap', label: 'Real-Time Body Swap', category: 'Live Streaming & Video Calls', capabilities: ['face_swap', 'body', 'realtime'], status: 'coming' },
  { id: 'insight-face-swap', label: 'Insight Face Swap', category: 'Live Streaming & Video Calls', capabilities: ['face_swap', 'realtime'], status: 'coming' },
  { id: 'dfm-model-swap', label: 'DFM Model Swap', category: 'Live Streaming & Video Calls', capabilities: ['face_swap', 'realtime'], status: 'coming' },
  { id: 'background-blur', label: 'Background Blur', category: 'Live Streaming & Video Calls', capabilities: ['realtime', 'image_edit'], status: 'coming' },
  { id: 'background-replace', label: 'Background Replace', category: 'Live Streaming & Video Calls', capabilities: ['realtime', 'image_edit'], status: 'coming' },
  { id: 'streaming-avatar', label: 'Streaming Avatar', category: 'Live Streaming & Video Calls', capabilities: ['avatar', 'realtime'], status: 'coming' },
  { id: 'real-time-translation', label: 'Real-Time Translation', category: 'Live Streaming & Video Calls', capabilities: ['realtime', 'audio'], status: 'coming' },
  { id: 'real-time-translator-175', label: 'Real-Time Translator (175+)', category: 'Live Streaming & Video Calls', capabilities: ['realtime', 'audio'], status: 'coming' },

  // Avatars, VTubers & Clones
  { id: 'vtuber-maker-3d', label: 'VTuber Maker (3D)', category: 'Avatars, VTubers & Clones', capabilities: ['avatar'], status: 'coming' },
  { id: 'pngtuber-maker-2d', label: 'PNGTuber Maker (2D)', category: 'Avatars, VTubers & Clones', capabilities: ['avatar'], status: 'coming' },
  { id: 'ai-vtuber', label: 'AI VTuber', category: 'Avatars, VTubers & Clones', capabilities: ['avatar', 'voice'], status: 'coming' },
  { id: 'character-studio', label: 'Character Studio', category: 'Avatars, VTubers & Clones', capabilities: ['avatar', 'image_gen'], status: 'coming' },
  { id: 'ai-companion', label: 'AI Companion', category: 'Avatars, VTubers & Clones', capabilities: ['avatar', 'voice'], status: 'coming' },
  { id: 'digital-twin-clone-15s', label: 'Digital Twin Clone (15s)', category: 'Avatars, VTubers & Clones', capabilities: ['avatar', 'voice'], status: 'coming' },
  { id: '3d-avatar-generator', label: '3D Avatar Generator', category: 'Avatars, VTubers & Clones', capabilities: ['avatar', 'image_gen'], status: 'coming' },
  { id: 'talking-avatar', label: 'Talking Avatar', category: 'Avatars, VTubers & Clones', capabilities: ['avatar', 'motion_transfer', 'voice'], status: 'coming' },
  { id: 'interactive-avatar', label: 'Interactive Avatar', category: 'Avatars, VTubers & Clones', capabilities: ['avatar', 'realtime'], status: 'coming' },
  { id: 'avatar-4-0-photo', label: 'Avatar 4.0 (Photo)', category: 'Avatars, VTubers & Clones', capabilities: ['avatar', 'image_gen'], status: 'coming' },
  { id: 'live2d-rigging', label: 'Live2D Rigging', category: 'Avatars, VTubers & Clones', capabilities: ['avatar'], status: 'coming' },
  { id: 'puppet-avatar', label: 'Puppet Avatar', category: 'Avatars, VTubers & Clones', capabilities: ['avatar', 'motion_transfer'], status: 'coming' },
  { id: 'avatar-video-generator', label: 'Avatar Video Generator', category: 'Avatars, VTubers & Clones', capabilities: ['avatar', 'video_gen'], status: 'coming' },
  { id: 'character-voice-gen', label: 'Character Voice Gen', category: 'Avatars, VTubers & Clones', capabilities: ['voice', 'audio'], status: 'coming' },
  { id: 'ai-clone-15s', label: 'AI Clone (15s)', category: 'Avatars, VTubers & Clones', capabilities: ['avatar', 'voice'], status: 'coming' },
  { id: 'live2d-rigger', label: 'Live2D Rigger', category: 'Avatars, VTubers & Clones', capabilities: ['avatar'], status: 'coming' },

  // Face, Body & Motion Swaps
  { id: 'photo-face-swap', label: 'Photo Face Swap', category: 'Face, Body & Motion Swaps', capabilities: ['face_swap', 'image_edit'], status: 'coming' },
  { id: 'video-face-swap', label: 'Video Face Swap', category: 'Face, Body & Motion Swaps', capabilities: ['face_swap', 'video_gen'], status: 'coming' },
  { id: 'gif-face-swap', label: 'GIF Face Swap', category: 'Face, Body & Motion Swaps', capabilities: ['face_swap', 'video_gen'], status: 'coming' },
  { id: 'head-swap', label: 'Head Swap', category: 'Face, Body & Motion Swaps', capabilities: ['face_swap', 'image_edit'], status: 'coming' },
  { id: 'hair-swap', label: 'Hair Swap', category: 'Face, Body & Motion Swaps', capabilities: ['face_swap', 'image_edit'], status: 'coming' },
  { id: 'clothing-swap', label: 'Clothing Swap', category: 'Face, Body & Motion Swaps', capabilities: ['image_edit', 'body'], status: 'coming' },
  { id: 'character-swap', label: 'Character Swap', category: 'Face, Body & Motion Swaps', capabilities: ['face_swap', 'body'], status: 'coming' },
  { id: 'motion-transfer-genjutsu', label: 'Motion Transfer (Genjutsu)', category: 'Face, Body & Motion Swaps', capabilities: ['motion_transfer', 'video_gen'], status: 'coming' },
  { id: 'video-restyle', label: 'Video Restyle', category: 'Face, Body & Motion Swaps', capabilities: ['video_gen', 'image_edit'], status: 'coming' },
  { id: 'anime-restyle', label: 'Anime Restyle', category: 'Face, Body & Motion Swaps', capabilities: ['video_gen', 'image_edit'], status: 'coming' },
  { id: 'object-replacement', label: 'Object Replacement', category: 'Face, Body & Motion Swaps', capabilities: ['image_edit', 'video_gen'], status: 'coming' },
  { id: 'age-progression', label: 'Age Progression', category: 'Face, Body & Motion Swaps', capabilities: ['face_swap', 'image_edit'], status: 'coming' },
  { id: 'gender-swap', label: 'Gender Swap', category: 'Face, Body & Motion Swaps', capabilities: ['face_swap', 'image_edit'], status: 'coming' },
  { id: 'face-morphing', label: 'Face Morphing', category: 'Face, Body & Motion Swaps', capabilities: ['face_swap', 'motion_transfer'], status: 'coming' },
  { id: 'body-reshape', label: 'Body Reshape', category: 'Face, Body & Motion Swaps', capabilities: ['body', 'image_edit'], status: 'coming' },
  { id: 'duo-swap-2-characters', label: 'Duo Swap (2 Characters)', category: 'Face, Body & Motion Swaps', capabilities: ['face_swap', 'motion_transfer'], status: 'coming' },
  { id: 'face-enhance', label: 'Face Enhance', category: 'Face, Body & Motion Swaps', capabilities: ['face_swap', 'image_edit'], status: 'coming' },
  { id: 'face-restoration', label: 'Face Restoration', category: 'Face, Body & Motion Swaps', capabilities: ['face_swap', 'image_edit'], status: 'coming' },
  { id: 'character-voice-gen-clone', label: 'Character Voice Gen (Clone)', category: 'Face, Body & Motion Swaps', capabilities: ['voice', 'audio'], status: 'coming' },

  // Video Generation & Editing
  { id: 'text-to-video', label: 'Text-to-Video', category: 'Video Generation & Editing', capabilities: ['video_gen'], status: 'coming' },
  { id: 'image-to-video', label: 'Image-to-Video', category: 'Video Generation & Editing', capabilities: ['video_gen', 'image_gen'], status: 'coming' },
  { id: 'video-to-video', label: 'Video-to-Video', category: 'Video Generation & Editing', capabilities: ['video_gen'], status: 'coming' },
  { id: 'video-extension', label: 'Video Extension', category: 'Video Generation & Editing', capabilities: ['video_gen'], status: 'coming' },
  { id: 'multi-shot-narrative', label: 'Multi-Shot Narrative', category: 'Video Generation & Editing', capabilities: ['video_gen'], status: 'coming' },
  { id: '10-keyframes', label: '10 Keyframes', category: 'Video Generation & Editing', capabilities: ['video_gen'], status: 'coming' },
  { id: 'camera-controls', label: 'Camera Controls', category: 'Video Generation & Editing', capabilities: ['video_gen'], status: 'coming' },
  { id: 'motion-brush', label: 'Motion Brush', category: 'Video Generation & Editing', capabilities: ['motion_transfer', 'video_gen'], status: 'coming' },
  { id: 'video-agent', label: 'Video Agent', category: 'Video Generation & Editing', capabilities: ['video_gen'], status: 'coming' },
  { id: 'instant-highlights', label: 'Instant Highlights', category: 'Video Generation & Editing', capabilities: ['video_gen'], status: 'coming' },
  { id: 'lip-sync', label: 'Lip Sync', category: 'Video Generation & Editing', capabilities: ['motion_transfer', 'voice'], status: 'coming' },
  { id: 'auto-captions', label: 'Auto-Captions', category: 'Video Generation & Editing', capabilities: ['video_gen'], status: 'coming' },
  { id: 'video-upscaling-4k', label: 'Video Upscaling (4K)', category: 'Video Generation & Editing', capabilities: ['video_gen'], status: 'coming' },
  { id: 'video-translation-175', label: 'Video Translation (175+)', category: 'Video Generation & Editing', capabilities: ['video_gen', 'audio'], status: 'coming' },
  { id: 'voice-director', label: 'Voice Director', category: 'Video Generation & Editing', capabilities: ['voice'], status: 'coming' },
  { id: 'gesture-control', label: 'Gesture Control', category: 'Video Generation & Editing', capabilities: ['motion_transfer', 'video_gen'], status: 'coming' },
  { id: 'video-trimming', label: 'Video Trimming', category: 'Video Generation & Editing', capabilities: ['video_gen'], status: 'coming' },
  { id: 'scene-replacement', label: 'Scene Replacement', category: 'Video Generation & Editing', capabilities: ['video_gen', 'image_edit'], status: 'coming' },

  // Audio & Voice Lab
  { id: 'ai-voice-changer', label: 'AI Voice Changer', category: 'Audio & Voice Lab', capabilities: ['voice', 'audio'], status: 'coming' },
  { id: 'real-time-voice-changer', label: 'Real-Time Voice Changer', category: 'Audio & Voice Lab', capabilities: ['voice', 'audio', 'realtime'], status: 'coming' },
  { id: 'voice-cloner', label: 'Voice Cloner', category: 'Audio & Voice Lab', capabilities: ['voice'], status: 'coming' },
  { id: 'vocal-remover', label: 'Vocal Remover', category: 'Audio & Voice Lab', capabilities: ['audio'], status: 'coming' },
  { id: 'voice-isolator', label: 'Voice Isolator', category: 'Audio & Voice Lab', capabilities: ['voice', 'audio'], status: 'coming' },
  { id: 'auto-tune', label: 'Auto-Tune', category: 'Audio & Voice Lab', capabilities: ['audio'], status: 'coming' },
  { id: 'soundboard', label: 'Soundboard', category: 'Audio & Voice Lab', capabilities: ['audio'], status: 'coming' },
  { id: 'meme-soundboard', label: 'Meme Soundboard', category: 'Audio & Voice Lab', capabilities: ['audio'], status: 'coming' },
  { id: 'ai-voice-generator', label: 'AI Voice Generator', category: 'Audio & Voice Lab', capabilities: ['voice'], status: 'coming' },
  { id: 'character-voice-gen-audio', label: 'Character Voice Gen', category: 'Audio & Voice Lab', capabilities: ['voice'], status: 'coming' },
  { id: 'audio-translation', label: 'Audio Translation', category: 'Audio & Voice Lab', capabilities: ['audio', 'voice'], status: 'coming' },
  { id: 'podcast-editor', label: 'Podcast Editor', category: 'Audio & Voice Lab', capabilities: ['audio'], status: 'coming' },
  { id: 'noise-reduction', label: 'Noise Reduction', category: 'Audio & Voice Lab', capabilities: ['audio'], status: 'coming' },
  { id: 'text-to-speech', label: 'Text-to-Speech', category: 'Audio & Voice Lab', capabilities: ['voice'], status: 'coming' },

  // Image & Canvas Studio
  { id: 'text-to-image', label: 'Text-to-Image', category: 'Image & Canvas Studio', capabilities: ['image_gen'], status: 'coming' },
  { id: 'image-to-image', label: 'Image-to-Image', category: 'Image & Canvas Studio', capabilities: ['image_gen', 'image_edit'], status: 'coming' },
  { id: 'agentic-canvas', label: 'Agentic Canvas', category: 'Image & Canvas Studio', capabilities: ['image_gen', 'image_edit'], status: 'coming' },
  { id: 'inpainting', label: 'Inpainting', category: 'Image & Canvas Studio', capabilities: ['image_edit'], status: 'coming' },
  { id: 'outpainting', label: 'Outpainting', category: 'Image & Canvas Studio', capabilities: ['image_edit'], status: 'coming' },
  { id: 'object-removal', label: 'Object Removal', category: 'Image & Canvas Studio', capabilities: ['image_edit'], status: 'coming' },
  { id: 'image-upscaler', label: 'Image Upscaler', category: 'Image & Canvas Studio', capabilities: ['image_edit'], status: 'coming' },
  { id: 'image-restyle', label: 'Image Restyle', category: 'Image & Canvas Studio', capabilities: ['image_edit'], status: 'coming' },
  { id: 'anime-filter', label: 'Anime Filter', category: 'Image & Canvas Studio', capabilities: ['image_edit'], status: 'coming' },
  { id: 'cartoon-filter', label: 'Cartoon Filter', category: 'Image & Canvas Studio', capabilities: ['image_edit'], status: 'coming' },
  { id: 'cyberpunk-filter', label: 'Cyberpunk Filter', category: 'Image & Canvas Studio', capabilities: ['image_edit'], status: 'coming' },
  { id: 'watercolor-filter', label: 'Watercolor Filter', category: 'Image & Canvas Studio', capabilities: ['image_edit'], status: 'coming' },
  { id: 'background-removal', label: 'Background Removal', category: 'Image & Canvas Studio', capabilities: ['image_edit'], status: 'coming' },
  { id: 'image-extender', label: 'Image Extender', category: 'Image & Canvas Studio', capabilities: ['image_edit'], status: 'coming' },
  { id: 'face-touch-up', label: 'Face Touch-up', category: 'Image & Canvas Studio', capabilities: ['face_swap', 'image_edit'], status: 'coming' },
  { id: 'color-grading', label: 'Color Grading', category: 'Image & Canvas Studio', capabilities: ['image_edit'], status: 'coming' },
  { id: 'neural-photo-upscaler', label: 'Neural Photo Upscaler', category: 'Image & Canvas Studio', capabilities: ['image_edit'], status: 'coming' },
  { id: 'relight-studio-grade', label: 'Relight (Studio Grade)', category: 'Image & Canvas Studio', capabilities: ['image_edit', 'face_swap'], status: 'coming' },
  { id: 'logo-and-brand-studio', label: 'Logo & Brand Studio', category: 'Image & Canvas Studio', capabilities: ['image_gen'], status: 'coming' },
];

/** Catalog with defaults applied. Consumers should use this, not TOOLS_RAW. */
export const TOOL_CATALOG = TOOLS_RAW.map((tool) => ({
  unitsPerSecond: DEFAULT_PRICE,
  ...tool,
}));

const CATEGORY_ORDER = [
  'Live Streaming & Video Calls',
  'Avatars, VTubers & Clones',
  'Face, Body & Motion Swaps',
  'Video Generation & Editing',
  'Audio & Voice Lab',
  'Image & Canvas Studio',
];

/** Grouped view for rendering: [{ category, tools: [{ label, id }] }]. */
export const TOOL_CATEGORIES = CATEGORY_ORDER.map((category) => ({
  category,
  // Resolve each label to its id here, once. Labels are NOT unique (both
  // 'Avatars' and 'Audio' ship a 'Character Voice Gen'), so a per-tile lookup
  // by label inside a component would silently point one of them at the wrong
  // route. The id is the only unique key - use it for hrefs and keys.
  tools: TOOL_CATALOG.filter((t) => t.category === category).map((t) => ({
    label: t.label,
    id: t.id,
    status: t.status,
  })),
}));

export const TOOLS = TOOL_CATALOG;

export const TOOLS_BY_ID = Object.fromEntries(TOOL_CATALOG.map((t) => [t.id, t]));

export const getToolById = (id) => TOOLS_BY_ID[id] || null;

export const toolsByCapability = (capability) =>
  TOOL_CATALOG.filter((t) => t.capabilities.includes(capability));
