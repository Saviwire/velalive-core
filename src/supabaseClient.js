import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_AUTH_ENABLED } from './config';

// supabase -- one client, or null when no project is configured.
//
// null is a state the UI renders on purpose ("Sign-up is not connected on
// this build"), not a crash. Every caller checks it before calling. With it
// set, a session is a real Supabase session: verified by getUser() in the
// dashboard, not by anything a browser could write by hand.
export const supabase = SUPABASE_AUTH_ENABLED
  ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
    })
  : null;

export const SUPABASE_AUTH_STATE = SUPABASE_AUTH_ENABLED ? 'configured' : 'not-configured';
