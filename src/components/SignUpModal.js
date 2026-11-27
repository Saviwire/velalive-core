import React, { useState } from 'react';
import { supabase, SUPABASE_AUTH_STATE } from '../supabaseClient';

export default function SignUpModal({ isOpen, onClose, onAuthSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [notice, setNotice] = useState('');
  const [error, setError] = useState('');
  if (!isOpen) return null;
  const notConnected = SUPABASE_AUTH_STATE !== 'configured';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setNotice('');
    setIsLoading(true);
    try {
      const { data, error: authError } = await supabase.auth.signUp({ email, password });
      if (authError) throw authError;
      if (data && data.session) {
        onAuthSuccess();
        onClose();
      } else {
        setNotice('Check your inbox. The account is created and waiting for its confirmation link.');
      }
    } catch (err) {
      setError(err && err.message ? err.message : 'Sign-up failed.');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
      <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-[#141414] p-6 shadow-[0_0_50px_rgba(0,0,0,0.8)] md:p-8">
        <button type="button" onClick={onClose} className="absolute right-4 top-4 text-2xl text-gray-400 transition-colors hover:text-white">&times;</button>
        <div className="mb-8 text-center">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#d4af37]">Velalive</p>
          <h2 className="mb-2 font-serif text-2xl text-white">Create your studio account</h2>
          <p className="text-sm text-gray-400">Already have one? <button type="button" onClick={onClose} className="font-bold text-[#d4af37] hover:underline">Sign in</button></p>
        </div>

        {notConnected ? (
          <div className="rounded-2xl border border-white/10 bg-[#0d0d0d] p-4 text-sm leading-relaxed text-gray-400">
            Accounts are not connected on this build. Signing up needs a Supabase project URL and its public anon key in the build environment.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400" htmlFor="su-email">Email</label>
              <input id="su-email" type="email" required value={email} placeholder="you@example.com" onChange={(e) => setEmail(e.target.value)} className="w-full rounded-xl border border-white/10 bg-[#0a0a0a] px-4 py-3 text-white outline-none transition focus:border-[#d4af37]" />
            </div>
            <div>
              <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400" htmlFor="su-pass">Password</label>
              <input id="su-pass" type="password" required minLength={8} value={password} placeholder="At least 8 characters" onChange={(e) => setPassword(e.target.value)} className="w-full rounded-xl border border-white/10 bg-[#0a0a0a] px-4 py-3 text-white outline-none transition focus:border-[#d4af37]" />
            </div>
            {error ? <p className="text-center text-xs font-bold text-red-400">{error}</p> : null}
            {notice ? <p className="text-center text-xs leading-relaxed text-[#d4af37]">{notice}</p> : null}
            <button type="submit" disabled={isLoading} className="mt-2 w-full rounded-xl bg-[#d4af37] py-3 text-xs font-bold uppercase tracking-widest text-black transition hover:bg-white disabled:opacity-60">
              {isLoading ? 'Creating account' : 'Create account'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
