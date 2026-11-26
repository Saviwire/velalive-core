import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_AUTH_ENABLED } from './config';

/**
 * `null` when no project is configured, so every caller can *check* instead of
 * assuming. A dead project URL used to surface as an uncaught "Failed to fetch"
 * inside the auth modals, which is indistinguishable from a wrong password.
 * Callers must render SUPABASE_AUTH_STATE, not pretend a session exists.
 */
export const supabase = SUPABASE_AUTH_ENABLED
  ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: false },
    })
  : null;

export const SUPABASE_AUTH_STATE = SUPABASE_AUTH_ENABLED ? 'configured' : 'not-configured';
