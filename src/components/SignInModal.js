import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

export default function SignInModal({ isOpen, onClose, onAuthSuccess }) {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

  const handleOAuth = async (provider) => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: provider,
      options: { redirectTo: window.location.origin }
    });
    if (error) setError(error.message);
  };

  const handleForgotPassword = async () => {
    if (!formData.email) {
      setError("Please enter your email address first, then click 'Forgot?'.");
      return;
    }
    const { error } = await supabase.auth.resetPasswordForEmail(formData.email, {
      redirectTo: window.location.origin,
    });
    if (error) setError(error.message);
    else setError("Password reset link sent to your email!");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (authError) throw authError;

      setIsSuccess(true);
      localStorage.setItem('velalive_user', formData.email);
      
      setTimeout(() => {
        setIsSuccess(false);
        onAuthSuccess(formData.email);
        onClose();
      }, 1500);

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-[#141414] border border-white/10 rounded-3xl p-6 md:p-8 max-w-md w-full relative shadow-[0_0_50px_rgba(0,0,0,0.8)]">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl transition-colors">&times;</button>
        
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-gray-400 text-sm">Don't have an account? <button onClick={onClose} className="text-[#d4af37] hover:underline font-bold">Sign up</button></p>
        </div>

        <div className="space-y-3 mb-6">
          <button onClick={() => handleOAuth('google')} className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-[#0a0a0a] border border-white/10 rounded-xl hover:bg-white/5 transition text-white font-semibold text-sm">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
            Sign in with Google
          </button>
          <button onClick={() => handleOAuth('apple')} className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-[#0a0a0a] border border-white/10 rounded-xl hover:bg-white/5 transition text-white font-semibold text-sm">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.674-1.48 3.67-2.948 1.15-1.69 1.623-3.328 1.65-3.416-.039-.013-3.191-1.234-3.23-4.905-.026-3.066 2.494-4.53 2.61-4.6-1.43-2.09-3.623-2.325-4.4-2.377-2.06-.157-3.795 1.17-4.48 1.17zM15.54 4.162c.86-1.04 1.43-2.48 1.27-3.916-1.26.052-2.8.84-3.69 1.88-.74.86-1.4 2.35-1.22 3.76 1.43.11 2.78-.68 3.64-1.724z"/></svg>
            Sign in with Apple
          </button>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="h-px bg-white/10 flex-grow"></div><span className="text-xs text-gray-500 font-bold uppercase tracking-widest">Or use email</span><div className="h-px bg-white/10 flex-grow"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Email</label>
            <input type="email" required className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#d4af37] transition" placeholder="you@example.com" onChange={(e) => setFormData({...formData, email: e.target.value})} />
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-400">Password</label>
              <button type="button" onClick={handleForgotPassword} className="text-xs text-[#d4af37] hover:underline font-bold">Forgot?</button>
            </div>
            <div className="relative">
              <input type={showPassword ? "text" : "password"} required className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#d4af37] transition pr-12" placeholder="••••••••" onChange={(e) => setFormData({...formData, password: e.target.value})} />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition">
                 {showPassword ? (
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                ) : (
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                )}
              </button>
            </div>
          </div>

          {error && <p className="text-[#d4af37] text-xs font-bold text-center">{error}</p>}

          <button type="submit" disabled={isLoading || isSuccess} className={`w-full py-4 mt-6 font-bold text-xs uppercase tracking-widest rounded-xl transition-all flex justify-center items-center ${isSuccess ? 'bg-green-500 text-white' : 'bg-[#d4af37] text-black hover:bg-white'}`}>
            {isLoading ? 'Authenticating...' : isSuccess ? 'Welcome Back! ✓' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}
