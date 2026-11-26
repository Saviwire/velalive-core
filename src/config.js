/**
 * Runtime configuration, resolved once at module load.
 *
 * Never put a secret here (a Supabase service-role key, provider keys for
 * Modal/Pexels, etc). Vite inlines every `import.meta.env.VITE_*` value into the
 * client bundle, so anything referenced in this file is published to every
 * visitor of the site.
 */

// The one test address the owner intentionally keeps (client-side bypass).
// Kept in a single module so the bypass cannot drift into two copies.
export const BACKDOOR_EMAIL = 'waynejackson706@gmail.com';

const clean = (v) => (typeof v === 'string' ? v.trim() : '');

export const SUPABASE_URL = clean(import.meta.env.VITE_SUPABASE_URL);
export const SUPABASE_ANON_KEY = clean(import.meta.env.VITE_SUPABASE_ANON_KEY);

// Supabase auth is only used once both values look like a real project and
// its public anon key. Otherwise the UI reports "not connected" instead of
// pushing users into a dead network request.
export const SUPABASE_AUTH_ENABLED =
  /^https:\/\/[a-z0-9-]+\.supabase\.co\/?$/i.test(SUPABASE_URL) &&
  SUPABASE_ANON_KEY.length > 20;

export const MODAL_API_URL = clean(import.meta.env.VITE_MODAL_API_URL);

export const LEDGER_URL = clean(import.meta.env.VITE_LEDGER_URL);
export const LEDGER_ENABLED = /^https?:\/\//.test(LEDGER_URL);

// Feature flag for the owner's test bypass. Flip to false (and rebuild) to
// remove it once real accounts are verified end to end.
export const TEST_BYPASS_ENABLED = true;
