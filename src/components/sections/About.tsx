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
        
        {/* BAGIAN ATAS: Grid 2 Kolom */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          
          {/* 1. TEKS (Kiri) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
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
            </div>

            <div className="flex gap-6">
              <div className="px-6 py-3 border border-white/10 rounded-xl bg-white/5">
                <h3 className="text-3xl font-bold text-accent mb-1">1.5+</h3>
                <p className="text-xs text-secondary uppercase tracking-wider">Years Exp</p>
              </div>
              <div className="px-6 py-3 border border-white/10 rounded-xl bg-white/5">
                <h3 className="text-3xl font-bold text-accent mb-1">5+</h3>
                <p className="text-xs text-secondary uppercase tracking-wider">Projects</p>
              </div>
            </div>
          </motion.div>

          {/* 2. FOTO MODEL ARCH/JENDELA (Kanan) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center order-1 md:order-2"
          >
            <div className="relative group">
                {/* Efek Glow Ungu di Belakang */}
                <div className="absolute inset-0 bg-purple-600/40 blur-[60px] rounded-full group-hover:bg-purple-600/60 transition-all duration-500"></div>
                
                {/* BINGKAI UTAMA: ARCH (Melengkung di Atas) */}
                {/* rounded-t-full membuat atasnya setengah lingkaran */}
                <div className="relative w-72 h-96 rounded-t-full rounded-b-3xl overflow-hidden border-4 border-white/10 group-hover:border-purple-500/50 transition-all duration-500 shadow-2xl">
                    <Image 
                        src="/foto-profil.jpg" 
                        alt="Andreas Tampubolon"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Overlay Gradasi Hitam di Bawah */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                </div>

                {/* Hiasan Ikon Mengambang */}
                <div className="absolute -bottom-6 -right-6 bg-[#1a1a1a] p-4 rounded-2xl border border-white/10 shadow-xl animate-bounce">
                    <Code2 className="text-accent w-8 h-8" />
                </div>
            </div>
          </motion.div>

        </div>

        {/* BAGIAN BAWAH: Skill Cards */}
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {/* Skill 1 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-blue-500/10 transition-all group">
              <Code2 className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-bold mb-1">Web Dev</h3>
              <p className="text-xs text-secondary">Next.js, React</p>
            </div>
            {/* Skill 2 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-purple-500/10 transition-all group">
              <Palette className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-bold mb-1">UI/UX</h3>
              <p className="text-xs text-secondary">Figma Design</p>
            </div>
            {/* Skill 3 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-green-500/10 transition-all group">
              <Terminal className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-bold mb-1">Database</h3>
              <p className="text-xs text-secondary">SQL, Data</p>
            </div>
            {/* Skill 4 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-yellow-500/10 transition-all group">
              <Cpu className="w-8 h-8 text-yellow-400 mb-4" />
              <h3 className="text-lg font-bold mb-1">Problem Solving</h3>
              <p className="text-xs text-secondary">Logic & Algo</p>
            </div>
        </motion.div>

      </div>
    </section>
  );
}