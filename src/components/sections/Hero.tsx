"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Code2, Database, Laptop } from "lucide-react";

// Komponen Ikon Melayang (Hiasan)
const FloatingIcon = ({ children, delay, x, y }: { children: React.ReactNode; delay: number; x: number; y: number }) => (
  <motion.div
    animate={{ 
      y: [0, -20, 0],
      rotate: [0, 10, -10, 0]
    }}
    transition={{ 
      duration: 5, 
      delay: delay,
      repeat: Infinity,
      ease: "easeInOut" 
    }}
    className="absolute text-white/5 pointer-events-none hidden md:block"
    style={{ left: `${x}%`, top: `${y}%` }}
  >
    {children}
  </motion.div>
);

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      
      {/* 1. BACKGROUND GRID (Garis-garis Kotak Tipis) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* 2. EFEK CAHAYA (Glow) */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* 3. IKON MELAYANG (Hiasan Background) */}
      <FloatingIcon delay={0} x={10} y={20}><Code2 size={60} /></FloatingIcon>
      <FloatingIcon delay={2} x={85} y={15}><Database size={50} /></FloatingIcon>
      <FloatingIcon delay={1} x={20} y={70}><Laptop size={70} /></FloatingIcon>
      <FloatingIcon delay={3} x={80} y={60}><Github size={40} /></FloatingIcon>

      {/* KONTEN UTAMA */}
      <div className="z-10 text-center max-w-4xl space-y-8 relative">
        
        {/* Badge Status */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-secondary mb-4 backdrop-blur-sm"
        >
          <span className="animate-pulse mr-2 text-green-400">●</span>
          Available for freelance & hire
        </motion.div>

        {/* Judul Besar */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-8xl font-bold tracking-tight text-primary leading-tight"
        >
          Andreas Tampubolon <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient">
            Mahasiswa TI.
          </span>
        </motion.h1>

        {/* Deskripsi */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-xl text-secondary max-w-2xl mx-auto"
        >
          Membangun pengalaman web modern dengan desain futuristik dan performa tinggi.
        </motion.p>

        {/* Tombol Aksi */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
        >
          <a 
            href="#projects" 
            className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
          >
            Lihat Portfolio <ArrowRight size={20} />
          </a>
          
          <div className="flex gap-4">
             <button className="p-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-white hover:text-accent">
                <Github size={24} />
             </button>
             <button className="p-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-white hover:text-accent">
                <Linkedin size={24} />
             </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}