"use client";

import { motion } from "framer-motion";
import { Code, Database, Layout } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Kolom Kiri: Foto Profil (Sudah Diubah) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative flex justify-center items-center"
          >
            {/* 1. Efek Cahaya (Glow) di belakang foto */}
            <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-[50px] opacity-40 animate-pulse" />
            
            {/* 2. Foto Profil Bulat Tanpa Bingkai */}
            {/* PENTING: Ganti '/foto-profil.jpg' dengan nama file fotomu yang ada di folder public */}
            <img 
              src="/foto-profil.jpg" 
              alt="Profile Picture"
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover z-10 shadow-[0_0_40px_rgba(124,58,237,0.5)]"
            />
          </motion.div>

          {/* Kolom Kanan: Teks (Tetap sama) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-accent">Me.</span>
            </h2>
            
            <p className="text-secondary text-lg leading-relaxed mb-6">
              Halo! Saya adalah seorang pengembang web yang bersemangat menciptakan pengalaman digital yang menarik. 
              Saya menggabungkan desain teknis dengan kreativitas untuk membangun solusi yang tidak hanya berfungsi, 
              tapi juga memanjakan mata.
            </p>

            {/* List Keunggulan Kecil */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-accent/50 transition-colors">
                <Code className="text-accent mb-2" size={24} />
                <h3 className="font-bold">Clean Code</h3>
                <p className="text-xs text-secondary mt-1">Struktur kode rapi & mudah dirawat.</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-accent/50 transition-colors">
                <Layout className="text-accent mb-2" size={24} />
                <h3 className="font-bold">Responsive</h3>
                <p className="text-xs text-secondary mt-1">Tampilan sempurna di semua device.</p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}