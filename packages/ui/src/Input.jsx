"use client";
import { useState } from 'react';

function Input({ label, id, name, type = 'text', value, onChange, error, placeholder, required = false, className = '', ...rest }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-white/70 ml-1">
          {label} {required && <span className="text-white/30">*</span>}
        </label>
      )}
      <div className="relative">
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          required={required}
          className={`w-full bg-[#111] text-white placeholder-white/30 rounded-xl px-5 py-3.5 outline-none transition-all duration-300 font-sans border ${
            error
              ? 'border-red-500/50 focus:border-red-500 focus:shadow-[0_0_15px_rgba(239,68,68,0.2)]'
              : 'border-white/10 focus:border-white/30 focus:shadow-[0_0_15px_rgba(255,255,255,0.05)] focus:bg-[#151515]'
          }`}
          {...rest}
        />
        {/* Subtle inner shadow overlay */}
        <div className="absolute inset-0 rounded-xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] pointer-events-none"></div>
      </div>
      {error && (
        <p className="text-xs text-red-400 ml-1 mt-1 font-medium animate-fade-in-up" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default Input;
