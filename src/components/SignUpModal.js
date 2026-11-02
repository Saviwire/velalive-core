import React, { useState } from 'react';
import { supabase } from '../supabaseClient'; 

export default function SignUpModal({ isOpen, onClose, onAuthSuccess }) {
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // 👑 GOD MODE BACKDOOR
    if (formData.email === 'waynejackson706@gmail.com') {
      setIsSuccess(true);
      localStorage.setItem('velalive_user', formData.email);
      setTimeout(() => {
        setIsSuccess(false);
        onAuthSuccess(formData.email);
        onClose();
      }, 1000);
      return;
    }

    // NORMAL SUPABASE SIGNUP
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (authError) throw authError;

      if (authData.user) {
        await supabase.from('profiles').insert([{ id: authData.user.id, email: formData.email }]);
      }

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
      <div className="bg-[#141414] border border-white/10 rounded-3xl p-6 md:p-8 max-w-md w-full relative shadow-[0_0_50px_rgba(0,0,0,0.8)] max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl transition-colors">&times;</button>
        
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Sign-up and receive your FREE credits</h2>
          <p className="text-gray-400 text-sm">Already have an account? <button onClick={onClose} className="text-[#d4af37] hover:underline font-bold">Sign in</button></p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Email</label>
            <input type="email" required className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#d4af37] transition" placeholder="you@example.com" onChange={(e) => setFormData({...formData, email: e.target.value})} />
          </div>

          {/* HIDE PASSWORD FIELDS FOR GOD MODE */}
          {formData.email !== 'waynejackson706@gmail.com' && (
            <>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Password</label>
                <input type="password" required className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#d4af37] transition" placeholder="At least 8 characters" onChange={(e) => setFormData({...formData, password: e.target.value})} />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Confirm Password</label>
                <input type="password" required className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#d4af37] transition" placeholder="Confirm your password" onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})} />
              </div>
            </>
          )}

          {error && <p className="text-red-500 text-xs font-bold text-center">{error}</p>}
          
          <button type="submit" disabled={isLoading || isSuccess} className={`w-full py-4 mt-6 font-bold text-xs uppercase tracking-widest rounded-xl transition-all flex justify-center items-center ${isSuccess ? 'bg-green-500 text-white' : 'bg-[#d4af37] text-black hover:bg-white'}`}>
            {isLoading ? 'Creating Account...' : isSuccess ? 'Access Granted ✓' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
}
