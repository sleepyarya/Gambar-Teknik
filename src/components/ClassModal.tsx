"use client";
import React, { useState } from "react";

// =============================================
// TODO: Isi URL Google Form di bawah ini
// =============================================
const TUGAS_LINKS: Record<string, { label: string; url: string }[]> = {
  "X DPIB 1": [
    { label: "Gambar Denah",     url: "https://forms.gle/DPIB1-denah-placeholder" },
    { label: "Gambar Potongan",  url: "https://forms.gle/DPIB1-potongan-placeholder" },
    { label: "Gambar Tampak",    url: "https://forms.gle/DPIB1-tampak-placeholder" },
  ],
  "X DPIB 2": [
    { label: "Gambar Denah",     url: "https://forms.gle/DPIB2-denah-placeholder" },
    { label: "Gambar Potongan",  url: "https://forms.gle/DPIB2-potongan-placeholder" },
    { label: "Gambar Tampak",    url: "https://forms.gle/DPIB2-tampak-placeholder" },
  ],
};

const CLASSES = Object.keys(TUGAS_LINKS);

// Ikon sederhana tiap tugas
const TUGAS_ICONS: Record<string, string> = {
  "Gambar Denah":    "🏠",
  "Gambar Potongan": "✂️",
  "Gambar Tampak":   "🏛️",
};

export default function ClassModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [selectedClass, setSelectedClass] = useState<string | null>(null);

  if (!open) return null;

  const handleClose = () => {
    setSelectedClass(null);
    onClose();
  };

  const handleBack = () => setSelectedClass(null);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(13,71,161,0.18)", backdropFilter: "blur(6px)" }}
    >
      <div
        className="rounded-2xl w-full max-w-sm flex flex-col items-center relative overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #ffffff 60%, #EFF6FF 100%)",
          boxShadow: "0 8px 40px rgba(13,71,161,0.22)",
          border: "1.5px solid rgba(25,118,210,0.18)",
        }}
      >
        {/* Accent bar atas */}
        <div
          className="w-full h-1"
          style={{ background: "linear-gradient(90deg, #1565C0, #546E7A)" }}
        />

        {/* Header */}
        <div className="w-full flex items-center justify-between px-6 pt-5 pb-3">
          {selectedClass ? (
            <button
              onClick={handleBack}
              className="flex items-center gap-1 text-sm font-medium transition-all hover:opacity-70"
              style={{ color: "#1565C0" }}
              aria-label="Kembali"
            >
              ← Kembali
            </button>
          ) : (
            <span />
          )}
          <button
            onClick={handleClose}
            className="w-7 h-7 flex items-center justify-center rounded-full text-lg font-bold transition-all hover:scale-110"
            style={{ color: "#546E7A", background: "#ECEFF1" }}
            aria-label="Tutup"
          >
            ×
          </button>
        </div>

        {/* Konten */}
        <div className="w-full px-6 pb-7">
          {!selectedClass ? (
            /* ── STEP 1: Pilih Kelas ── */
            <>
              <h2 className="text-xl font-semibold mb-1 text-center" style={{ color: "#1565C0" }}>
                Pilih Kelas
              </h2>
              <p className="text-xs text-center mb-5" style={{ color: "#78909C" }}>
                Pilih kelas kamu untuk Pengumpulan Tugas
              </p>
              <div className="flex flex-col gap-3 w-full">
                {CLASSES.map((cls) => (
                  <button
                    key={cls}
                    onClick={() => setSelectedClass(cls)}
                    className="w-full py-3 px-4 rounded-xl font-semibold text-center transition-all hover:scale-105 hover:shadow-lg"
                    style={{
                      background: "linear-gradient(90deg, #1565C0 0%, #1976D2 60%, #546E7A 100%)",
                      color: "#ffffff",
                      boxShadow: "0 2px 12px rgba(13,71,161,0.25)",
                    }}
                  >
                    {cls}
                  </button>
                ))}
              </div>
            </>
          ) : (
            /* ── STEP 2: Pilih Tugas ── */
            <>
              <h2 className="text-xl font-semibold mb-1 text-center" style={{ color: "#1565C0" }}>
                {selectedClass}
              </h2>
              <p className="text-xs text-center mb-5" style={{ color: "#78909C" }}>
                Pilih jenis tugas yang ingin dikumpulkan
              </p>
              <div className="flex flex-col gap-3 w-full">
                {TUGAS_LINKS[selectedClass].map((tugas) => (
                  <a
                    key={tugas.label}
                    href={tugas.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl font-semibold flex items-center gap-3 transition-all hover:scale-105 hover:shadow-lg"
                    style={{
                      background: "linear-gradient(90deg, #EFF6FF 0%, #DBEAFE 100%)",
                      color: "#1565C0",
                      border: "1.5px solid rgba(25,118,210,0.22)",
                      boxShadow: "0 2px 10px rgba(13,71,161,0.08)",
                    }}
                  >
                    <span className="text-xl leading-none">{TUGAS_ICONS[tugas.label]}</span>
                    <span>{tugas.label}</span>
                    <span className="ml-auto text-sm opacity-60">→</span>
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
