import React, { useState } from 'react';

export default function SignUpModal({ isOpen, onClose, onAuthSuccess }) {
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });
  const [is18, setIs18] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!is18 || !agreed) {
      setError("You must be 18 or older and agree to the Terms.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      // Save user session locally
      localStorage.setItem('velalive_user', formData.email);
      
      setTimeout(() => {
        setIsSuccess(false);
        onAuthSuccess(); // Tell App.js we are logged in
        onClose();
      }, 1500);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-[#141414] border border-white/10 rounded-3xl p-6 md:p-8 max-w-md w-full relative shadow-[0_0_50px_rgba(0,0,0,0.8)] max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl transition-colors">&times;</button>
        
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Sign-up and receive your FREE credits</h2>
          <p className="text-gray-400 text-sm">Already have an account? <button onClick={onClose} className="text-[#d4af37] hover:underline font-bold">Sign in</button></p>
        </div>

        <div className="space-y-3 mb-6">
          <button className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-[#0a0a0a] border border-white/10 rounded-xl hover:bg-white/5 transition text-white font-semibold text-sm"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>Sign in with Google</button>
          <button className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-[#0a0a0a] border border-white/10 rounded-xl hover:bg-white/5 transition text-white font-semibold text-sm"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.674-1.48 3.67-2.948 1.15-1.69 1.623-3.328 1.65-3.416-.039-.013-3.191-1.234-3.23-4.905-.026-3.066 2.494-4.53 2.61-4.6-1.43-2.09-3.623-2.325-4.4-2.377-2.06-.157-3.795 1.17-4.48 1.17zM15.54 4.162c.86-1.04 1.43-2.48 1.27-3.916-1.26.052-2.8.84-3.69 1.88-.74.86-1.4 2.35-1.22 3.76 1.43.11 2.78-.68 3.64-1.724z"/></svg>Sign in with Apple</button>
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
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Password</label>
            <input type="password" required className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#d4af37] transition" placeholder="At least 8 characters" onChange={(e) => setFormData({...formData, password: e.target.value})} />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Confirm Password</label>
            <input type="password" required className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#d4af37] transition" placeholder="Confirm your password" onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})} />
          </div>
          {error && <p className="text-red-500 text-xs font-bold text-center">{error}</p>}
          <div className="pt-4 space-y-3 border-t border-white/10">
            <label className="flex items-start gap-3 cursor-pointer group"><input type="checkbox" required checked={is18} onChange={(e) => setIs18(e.target.checked)} className="mt-1 w-4 h-4 accent-[#d4af37] bg-black border-white/20 rounded cursor-pointer" /><span className="text-xs text-gray-400 group-hover:text-white transition">I confirm that I am 18 years of age or older.</span></label>
            <label className="flex items-start gap-3 cursor-pointer group"><input type="checkbox" required checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-1 w-4 h-4 accent-[#d4af37] bg-black border-white/20 rounded cursor-pointer" /><span className="text-xs text-gray-400 group-hover:text-white transition">I agree to the Terms of Service and Privacy Policy.</span></label>
          </div>
          <button type="submit" disabled={isLoading || isSuccess} className={`w-full py-4 mt-6 font-bold text-xs uppercase tracking-widest rounded-xl transition-all flex justify-center items-center ${isSuccess ? 'bg-green-500 text-white' : 'bg-[#d4af37] text-black hover:bg-white'}`}>
            {isLoading ? 'Creating Account...' : isSuccess ? 'Account Created ✓' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
}
