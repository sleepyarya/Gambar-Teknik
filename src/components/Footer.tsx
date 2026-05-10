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

        <div className="flex flex-col items-end gap-2">
          <div className="flex gap-2 items-center">
            <div className="h-1.5 w-1.5 rounded-full bg-blue-400 opacity-50" />
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
              Portal Gambar Teknik
            </span>
          </div>
          
          <div className="flex gap-4 items-center">
            {/* Rama */}
            <a 
              href="https://www.instagram.com/ramaadhan.a/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 group"
            >
              <span className="text-[10px] text-slate-400 group-hover:text-blue-500 transition-colors">Pembuat: @ramaadhan.a</span>
              <div className="p-1 rounded-md bg-slate-100 group-hover:bg-slate-200 transition-colors border border-slate-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
            </a>

            {/* Esa */}
            <a 
              href="https://www.instagram.com/nrvanaesaa/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 group"
            >
              <span className="text-[10px] text-slate-400 group-hover:text-blue-500 transition-colors">Kontributor: @nrvanaesaa</span>
              <div className="p-1 rounded-md bg-slate-100 group-hover:bg-slate-200 transition-colors border border-slate-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
