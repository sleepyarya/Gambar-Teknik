import React from "react";
import { BookOpen, FileText, UploadCloud } from "lucide-react";

export default function HeroCards({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-8 mt-32 mb-12">
      {/* Hero Title */}
      <div className="text-center">
        <h1
          className="text-4xl font-bold mb-2 drop-shadow-sm"
          style={{ color: '#1565C0' }}
        >
          Portal Pembelajaran Digital
        </h1>
        <p className="text-base font-medium" style={{ color: '#546E7A' }}>
          SMK Negeri 1 Kediri &mdash; Gambar Teknik
        </p>
        <div className="mt-3 mx-auto h-1 w-24 rounded-full" style={{ background: 'linear-gradient(90deg, #1976D2, #546E7A)' }} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {/* Materi Card */}
        <div
          id="materi"
          className="rounded-2xl p-8 flex flex-col items-center justify-center min-h-[220px] transition-all hover:scale-105 cursor-pointer hover:shadow-xl"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.92) 60%, rgba(25,118,210,0.08) 100%)',
            boxShadow: '0 4px 24px rgba(13,71,161,0.13)',
            border: '1.5px solid rgba(25,118,210,0.18)',
          }}
        >
          <div className="mb-4 p-3 rounded-full" style={{ background: 'linear-gradient(135deg, #DBEAFE, #E3F2FD)' }}>
            <BookOpen style={{ color: '#1565C0' }} size={36} />
          </div>
          <div className="text-xl font-semibold mb-2" style={{ color: '#1E293B' }}>Materi</div>
          <div className="text-sm text-center" style={{ color: '#546E7A' }}>Materi belum tersedia</div>
        </div>

        {/* Tugas Card */}
        <a
          id="tugas"
          href="https://drive.google.com/file/d/1a9-e1TopQJgmtW-v3-Dyth4d77PBpRBv/view"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl p-8 flex flex-col items-center justify-center min-h-[220px] transition-all hover:scale-105 hover:shadow-xl no-underline"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.92) 60%, rgba(84,110,122,0.08) 100%)',
            boxShadow: '0 4px 24px rgba(84,110,122,0.13)',
            border: '1.5px solid rgba(84,110,122,0.20)',
          }}
        >
          <div className="mb-4 p-3 rounded-full" style={{ background: 'linear-gradient(135deg, #ECEFF1, #E0F2FE)' }}>
            <FileText style={{ color: '#37474F' }} size={36} />
          </div>
          <div className="text-xl font-semibold mb-2" style={{ color: '#1E293B' }}>Tugas</div>
          <div className="text-sm text-center" style={{ color: '#546E7A' }}>Klik untuk melihat soal tugas</div>
        </a>

        {/* Pengumpulan Tugas Card */}
        <button
          className="rounded-2xl p-8 flex flex-col items-center justify-center min-h-[220px] transition-all hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={onOpenModal}
          style={{
            background: 'linear-gradient(135deg, #1565C0 0%, #1976D2 55%, #546E7A 100%)',
            boxShadow: '0 4px 24px rgba(13,71,161,0.30)',
            border: '1.5px solid rgba(255,255,255,0.15)',
          }}
        >
          <div className="mb-4 p-3 rounded-full bg-white/20">
            <UploadCloud style={{ color: '#FFFFFF' }} size={36} />
          </div>
          <div className="text-xl font-semibold mb-2 text-white">Pengumpulan Tugas</div>
          <div className="text-sm text-center text-blue-100">Klik untuk memilih kelas</div>
        </button>
      </div>
    </section>
  );
}
