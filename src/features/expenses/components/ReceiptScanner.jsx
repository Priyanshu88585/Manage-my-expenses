"use client";
import { useState, useRef } from 'react';

export default function ReceiptScanner({ onScanComplete }) {
  const [isScanning, setIsScanning] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef(null);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsScanning(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('receipt', file);

      const res = await fetch('/api/scan', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error('OCR failed');
      const data = await res.json();
      
      onScanComplete({
        title: data.merchant || 'Scanned Receipt',
        amount: data.amount || 0,
        date: data.date,
        category: data.category || 'Food & Dining',
      });
    } catch (err) {
      setError("Failed to read receipt. Please try again or enter manually.");
    } finally {
      setIsScanning(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <div className="w-full">
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
      <div 
        onClick={() => !isScanning && fileInputRef.current?.click()}
        className={`w-full rounded-2xl border-2 border-dashed ${isScanning ? 'border-blue-500/50 bg-blue-500/5' : 'border-white/20 hover:border-white/40 hover:bg-white/5'} transition-all p-4 sm:p-6 flex flex-col items-center justify-center gap-3 cursor-pointer group`}
      >
        {isScanning ? (
          <>
            <div className="w-8 h-8 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
            <span className="text-sm font-medium text-blue-400 animate-pulse">Scanning Receipt (AI OCR)...</span>
          </>
        ) : (
          <>
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
              📸
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-white">Smart Scan</p>
              <p className="text-[10px] text-white/50 mt-1">Upload receipt photo</p>
            </div>
          </>
        )}
      </div>
      {error && <p className="text-xs text-red-400 mt-2 text-center">{error}</p>}
    </div>
  );
}
