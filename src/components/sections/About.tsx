"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Terminal, Cpu } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      
      {/* Background Pattern Halus */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Bagian Kiri: Teks & Cerita */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              About <span className="text-accent">Me.</span>
            </h2>
            
            <div className="space-y-4 text-secondary text-lg leading-relaxed">
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
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="p-4 border border-white/10 rounded-xl bg-white/5">
                <h3 className="text-3xl font-bold text-accent mb-1">2+</h3>
                <p className="text-sm text-secondary">Tahun Belajar Coding</p>
              </div>
              <div className="p-4 border border-white/10 rounded-xl bg-white/5">
                <h3 className="text-3xl font-bold text-accent mb-1">5+</h3>
                <p className="text-sm text-secondary">Proyek Selesai</p>
              </div>
            </div>
          </motion.div>

          {/* Bagian Kanan: Kartu Skill */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {/* Skill 1 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <Code2 className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Web Development</h3>
              <p className="text-sm text-secondary">Membangun website responsif dengan HTML, CSS, dan React/Next.js.</p>
            </div>

            {/* Skill 2 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <Palette className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
              <p className="text-sm text-secondary">Merancang tampilan aplikasi yang modern dan mudah digunakan di Figma.</p>
            </div>

            {/* Skill 3 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <Terminal className="w-10 h-10 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Database</h3>
              <p className="text-sm text-secondary">Mengelola penyimpanan data yang efisien dan aman.</p>
            </div>

            {/* Skill 4 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <Cpu className="w-10 h-10 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Problem Solving</h3>
              <p className="text-sm text-secondary">Memecahkan masalah teknis dengan logika algoritma yang kuat.</p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}