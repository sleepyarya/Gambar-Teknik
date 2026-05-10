"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeroCards from "../components/HeroCards";
import ClassModal from "../components/ClassModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans flex flex-col" style={{ background: '#EFF6FF' }}>
      <Navbar />
      <main
        className="flex flex-1 flex-col items-center justify-center pt-16 pb-10 px-4"
        style={{ background: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 45%, #E0F2FE 75%, #ECEFF1 100%)' }}
      >
        <HeroCards onOpenModal={() => setModalOpen(true)} />
        <ClassModal open={modalOpen} onClose={() => setModalOpen(false)} />
      </main>
    </div>
  );
}
