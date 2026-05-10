import React from "react";

export default function ContributorSection() {
  const contributors = [
    {
      role: "Pembuat Website",
      name: "@ramaadhan.a",
      url: "https://www.instagram.com/ramaadhan.a/",
    },
    {
      role: "Kontributor",
      name: "@nrvanaesaa",
      url: "https://www.instagram.com/nrvanaesaa/",
    },
  ];

  return (
    <section id="kontributor" className="w-full flex flex-col items-center justify-center gap-6 py-12 px-6">
      <div className="flex flex-col items-center gap-1 mb-2 text-center">
        <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Informasi Kontributor</h2>
        <div className="h-1 w-12 rounded-full bg-blue-600/30" />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 w-full max-w-4xl">
        {contributors.map((person, idx) => (
          <div 
            key={idx}
            className="group flex items-center gap-5 p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/50 neon-blue transition-all hover:scale-105 hover:bg-white/80"
            style={{ minWidth: '280px' }}
          >
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest font-bold text-blue-600/70">{person.role}</span>
              <span className="text-sm font-bold text-slate-700">{person.name}</span>
            </div>
            
            <a 
              href={person.url}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto p-2.5 rounded-xl transition-all hover:scale-110 active:scale-95 shadow-sm flex items-center justify-center"
              style={{ 
                background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)'
              }}
              aria-label={`Follow ${person.name} on Instagram`}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="white" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
