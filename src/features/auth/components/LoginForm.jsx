"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = '/dashboard';
  };

  return (
    <div className="w-full max-w-md bg-[#0a0a0a] border border-white/15 rounded-3xl p-8 shadow-2xl backdrop-blur-xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-display font-medium text-white mb-2">Welcome Back</h2>
        <p className="text-sm text-white/50">Enter your credentials to access your financial dashboard.</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div>
          <label className="text-xs text-white/60 mb-1 block">Work Email</label>
          <input
            type="email"
            placeholder="name@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm outline-none focus:border-white/30"
            required
          />
        </div>

        <div>
          <label className="text-xs text-white/60 mb-1 block">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm outline-none focus:border-white/30"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 rounded-full bg-white text-black font-medium text-base hover:bg-white/90 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] mt-2"
        >
          Sign In to Dashboard
        </button>
      </form>

      <div className="text-center mt-6 text-xs text-white/40">
        Don't have an account? <Link href="/dashboard" className="text-white hover:underline">Start free trial</Link>
      </div>
    </div>
  );
}
