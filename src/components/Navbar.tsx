import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 fixed top-0 left-0 z-30 border-b border-blue-900/30"
      style={{ background: 'linear-gradient(90deg, #0D47A1 0%, #1565C0 55%, #546E7A 100%)', boxShadow: '0 2px 16px rgba(13,71,161,0.25)' }}
    >
      <div className="flex items-center gap-3">
        <div className="w-2 h-8 rounded-full bg-blue-300 opacity-80" />
        <div className="text-white font-bold text-xl tracking-wide select-none drop-shadow">SMKN 1 Kediri</div>
      </div>
      <div className="flex gap-6 text-blue-100 font-medium text-base">
        <a 
          href="https://smkn1kediri.sch.id/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-white hover:drop-shadow transition-all px-3 py-1 rounded hover:bg-white/10"
        >
          Web SMKN 1 KEDIRI
        </a>
      </div>
    </nav>
  );
}
