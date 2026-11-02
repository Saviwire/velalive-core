import React, { useState } from 'react';

export default function SignInModal({ isOpen, onClose, onAuthSuccess }) {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      // Save user session locally
      localStorage.setItem('velalive_user', formData.email);
      
      setTimeout(() => {
        setIsSuccess(false);
        onAuthSuccess();
        onClose();
      }, 1500);
    }, 1500);
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
          <button className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-[#0a0a0a] border border-white/10 rounded-xl hover:bg-white/5 transition text-white font-semibold text-sm"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>Sign in with Google</button>
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
              <button type="button" className="text-xs text-[#d4af37] hover:underline font-bold">Forgot?</button>
            </div>
            <input type="password" required className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#d4af37] transition" placeholder="••••••••" onChange={(e) => setFormData({...formData, password: e.target.value})} />
          </div>
          <button type="submit" disabled={isLoading || isSuccess} className={`w-full py-4 mt-6 font-bold text-xs uppercase tracking-widest rounded-xl transition-all flex justify-center items-center ${isSuccess ? 'bg-green-500 text-white' : 'bg-[#d4af37] text-black hover:bg-white'}`}>
            {isLoading ? 'Authenticating...' : isSuccess ? 'Welcome Back! ✓' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}
