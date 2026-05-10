import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-8 mt-auto border-t border-blue-900/10 bg-white/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
        </div>
        
        <div className="text-xs text-slate-500 font-medium">
          &copy; {new Date().getFullYear()} SMKN KEDIRI 2026. All rights reserved.
        </div>

        <div className="flex gap-4 items-center">
          <div className="h-1.5 w-1.5 rounded-full bg-blue-400 opacity-50" />
          <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
            Portal Gambar Teknik
          </span>
        </div>
      </div>
    </footer>
  );
}
