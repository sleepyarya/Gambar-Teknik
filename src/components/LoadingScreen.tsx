"use client";
import React, { useState, useEffect } from "react";
import { Settings } from "lucide-react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 800); // Wait for fade animation
    }, 2000); // Visual duration

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#EFF6FF] transition-opacity duration-700 ease-in-out ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="relative flex items-center justify-center">
        {/* Outer Pulsing Ring */}
        <div className="absolute w-32 h-32 rounded-full border-4 border-blue-200 animate-ping opacity-25" />
        
        {/* Rotating Gear Icon */}
        <div className="relative bg-white p-6 rounded-3xl shadow-blue border border-blue-100 animate-bounce-subtle">
          <Settings className="text-[#1565C0] animate-spin-slow" size={64} />
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center gap-3">
        <h2 className="text-2xl font-bold tracking-widest text-[#0D47A1] animate-pulse">
          SMKN 1 KEDIRI
        </h2>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce [animation-delay:-0.3s]" />
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce [animation-delay:-0.15s]" />
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" />
        </div>
        <p className="text-sm font-bold text-slate-500 mt-2 uppercase tracking-widest opacity-80">
          DD-DPIB 1 - GAMBAR TEKNIK
        </p>
      </div>

      {/* Progress Bar (Decorative) */}
      <div className="absolute bottom-12 w-48 h-1 bg-slate-200 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-blue-600 to-blue-400 animate-progress-load" />
      </div>
    </div>
  );
}
