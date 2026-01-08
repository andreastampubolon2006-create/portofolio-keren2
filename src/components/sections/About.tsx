"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Terminal, Cpu } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* BAGIAN ATAS: Grid 2 Kolom (Teks Kiri, Foto Kanan) */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          
          {/* 1. TEKS & CERITA (Kiri) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              About <span className="text-accent">Me.</span>
            </h2>
            
            <div className="space-y-4 text-secondary text-lg leading-relaxed mb-8">
              <p>
                Horas! 👋 Saya <span className="text-white font-semibold">Andreas Tampubolon</span>, 
                seorang Mahasiswa Teknik Informatika yang berbasis di <span className="text-white">Tarutung, Tapanuli Utara</span>.
              </p>
              <p>
                Saya memiliki ketertarikan mendalam pada dunia pengembangan website dan desain antarmuka (UI/UX). 
                Bagi saya, *coding* bukan sekadar menulis baris perintah, tapi seni menciptakan solusi digital yang bermanfaat.
              </p>
              <p>
                Saat ini saya fokus mendalami teknologi web modern seperti <span className="text-accent">Next.js</span> dan membuat desain aplikasi yang *user-friendly* menggunakan <span className="text-accent">Figma</span>.
              </p>
            </div>

            {/* Statistik Singkat */}
            <div className="flex gap-6">
              <div className="px-6 py-3 border border-white/10 rounded-xl bg-white/5">
                <h3 className="text-3xl font-bold text-accent mb-1">2+</h3>
                <p className="text-xs text-secondary uppercase tracking-wider">Years Exp</p>
              </div>
              <div className="px-6 py-3 border border-white/10 rounded-xl bg-white/5">
                <h3 className="text-3xl font-bold text-accent mb-1">5+</h3>
                <p className="text-xs text-secondary uppercase tracking-wider">Projects</p>
              </div>
            </div>
          </motion.div>

          {/* 2. FOTO PROFIL (Kanan) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative flex justify-center md:justify-end"
          >
            {/* Bingkai Foto dengan Efek Glow */}
            <div className="relative w-72 h-96 md:w-80 md:h-[450px] rounded-2xl overflow-hidden border-2 border-white/10 group shadow-[0_0_40px_rgba(168,85,247,0.3)]">
              
              {/* SAYA UBAH DI SINI: Sesuai nama file Anda 'foto-profil.jpg' */}
              <Image 
                src="/foto-profil.jpg" 
                alt="Andreas Tampubolon"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Overlay Warna Tipis */}
              <div className="absolute inset-0 bg-purple-900/20 mix-blend-overlay group-hover:bg-transparent transition-colors"></div>
            </div>
            
            {/* Hiasan Kotak di Belakang Foto */}
            <div className="absolute -z-10 top-10 right-10 w-72 h-96 border border-white/5 rounded-2xl md:block hidden"></div>
          </motion.div>

        </div>

        {/* BAGIAN BAWAH: Skill Cards (Berjejer 4) */}
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {/* Skill 1 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all group">
              <Code2 className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold mb-1">Web Dev</h3>
              <p className="text-xs text-secondary">Next.js, React, Tailwind</p>
            </div>

            {/* Skill 2 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all group">
              <Palette className="w-8 h-8 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold mb-1">UI/UX</h3>
              <p className="text-xs text-secondary">Figma, Prototyping</p>
            </div>

            {/* Skill 3 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/50 hover:bg-green-500/10 transition-all group">
              <Terminal className="w-8 h-8 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold mb-1">Database</h3>
              <p className="text-xs text-secondary">MySQL, PostgreSQL</p>
            </div>

            {/* Skill 4 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-yellow-500/50 hover:bg-yellow-500/10 transition-all group">
              <Cpu className="w-8 h-8 text-yellow-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold mb-1">Logic</h3>
              <p className="text-xs text-secondary">Problem Solving</p>
            </div>

        </motion.div>

      </div>
    </section>
  );
}