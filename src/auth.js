import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { supabase, SUPABASE_AUTH_STATE } from './supabaseClient';

// Auth -- one real session, or none. There is no local-storage identity here.
//
// signedIn is true only when Supabase answered getUser() with a user. A value
// written by hand into localStorage never reaches this file, so no browser
// console can open the dashboard. When the project is not configured, the
// state is 'unconfigured' and the UI says which two values are missing.
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [status, setStatus] = useState(SUPABASE_AUTH_STATE);
  const [user, setUser] = useState(null);
  const [checked, setChecked] = useState(SUPABASE_AUTH_STATE !== 'configured');

  useEffect(() => {
    if (!supabase) return undefined;
    let alive = true;

    supabase.auth.getUser().then(({ data, error }) => {
      if (!alive) return;
      if (error && error.status && error.status >= 500) {
        setStatus('unreachable');
      } else {
        setStatus('configured');
        setUser(data && data.user ? data.user : null);
      }
      setChecked(true);
    });

    const { data: sub } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED' || event === 'USER_UPDATED') {
        setUser(session ? session.user : null);
      }
      if (event === 'SIGNED_OUT') setUser(null);
    });

    return () => {
      alive = false;
      if (sub && sub.subscription) sub.subscription.unsubscribe();
    };
  }, []);

  const startSignIn = () => {
    if (!supabase) return false;
    const redirect = window.location.origin + window.location.pathname;
    supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: redirect },
    });
    return true;
  };

  const signOut = async () => {
    setUser(null);
    if (supabase) await supabase.auth.signOut();
  };

  const value = useMemo(
    () => ({
      status,
      checked,
      user,
      person: user ? { email: user.email || '', name: (user.user_metadata && user.user_metadata.full_name) || (user.user_metadata && user.user_metadata.name) || 'Signed in' } : null,
      signedIn: Boolean(user),
      startSignIn,
      signOut,
    }),
    [status, checked, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const v = useContext(AuthContext);
  if (!v) throw new Error('useAuth must be used inside AuthProvider');
  return v;
}
