/*
 * Runtime configuration, resolved once at module load.
 *
 * Never put a secret here (a Supabase service-role key, provider keys for
 * Modal, etc). Vite inlines every import.meta.env.VITE_* value into the client
 * bundle, so anything referenced in this file is published to every visitor.
 *
 * The public anon key is meant to be published: it is gated by row-level
 * security and by Supabase Auth, not by secrecy.
 */

const clean = (v) => (typeof v === 'string' ? v.trim() : '');

export const SUPABASE_URL = clean(import.meta.env.VITE_SUPABASE_URL);
export const SUPABASE_ANON_KEY = clean(import.meta.env.VITE_SUPABASE_ANON_KEY);

// Auth is only offered once both values describe a real project.
export const SUPABASE_AUTH_ENABLED =
  /^https:\/\/[a-z0-9-]+\.supabase\.co\/?$/i.test(SUPABASE_URL) && SUPABASE_ANON_KEY.length > 20;

export const MODAL_API_URL = clean(import.meta.env.VITE_MODAL_API_URL);
