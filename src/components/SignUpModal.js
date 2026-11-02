import React, { useState } from 'react';

export default function SignUpModal({ isOpen, onClose }) {
  const [is18, setIs18] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!is18 || !agreed) {
      alert("You must be 18 or older and agree to the Terms to continue.");
      return;
    }
    // This is where Supabase database saving will happen later
    alert(`Welcome to Velalive, ${formData.name}! Your account is ready to be created.`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-[#0d0d0d] border border-white/10 rounded-3xl p-8 max-w-md w-full relative shadow-[0_0_50px_rgba(212,175,55,0.1)]">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl">&times;</button>
        
        <h2 className="text-3xl font-serif text-white mb-2 text-center">Create Account</h2>
        <p className="text-gray-400 text-sm text-center mb-8">Join the ultimate AI platform.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Full Name</label>
            <input 
              type="text" 
              required
              className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#d4af37] transition"
              placeholder="John Doe"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Email Address</label>
            <input 
              type="email" 
              required
              className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#d4af37] transition"
              placeholder="john@example.com"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Password</label>
            <input 
              type="password" 
              required
              className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#d4af37] transition"
              placeholder="••••••••"
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>

          {/* THE TWO COMPULSORY CHECKBOXES */}
          <div className="pt-4 space-y-3 border-t border-white/10">
            <label className="flex items-start gap-3 cursor-pointer group">
              <input 
                type="checkbox" 
                required
                checked={is18}
                onChange={(e) => setIs18(e.target.checked)}
                className="mt-1 w-4 h-4 accent-[#d4af37] bg-black border-white/20 rounded cursor-pointer"
              />
              <span className="text-xs text-gray-400 group-hover:text-white transition">I confirm that I am 18 years of age or older.</span>
            </label>

            <label className="flex items-start gap-3 cursor-pointer group">
              <input 
                type="checkbox" 
                required
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 w-4 h-4 accent-[#d4af37] bg-black border-white/20 rounded cursor-pointer"
              />
              <span className="text-xs text-gray-400 group-hover:text-white transition">I agree to the Terms of Service and Privacy Policy.</span>
            </label>
          </div>

          <button 
            type="submit"
            className="w-full py-4 mt-6 bg-[#d4af37] text-black font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-white transition cursor-pointer"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
