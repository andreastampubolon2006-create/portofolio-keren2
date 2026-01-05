"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Website UMKM",
    desc: "Membangun website responsif untuk membantu usaha kecil menengah memperluas jangkauan pasar digital.",
    tags: ["Web Development", "Next.js", "Responsive"],
    image: "/umkm.jpg",
  },
  {
    title: "Desain Aplikasi Go Salib",
    desc: "Perancangan UI/UX aplikasi mobile dengan fokus pada kemudahan navigasi dan tampilan modern.",
    tags: ["UI/UX Design", "Figma", "Prototyping"],
    image: "/gosalib.jpg",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-transparent relative">
      <div className="container mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="text-accent">Projects.</span>
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Beberapa hasil karya terbaik yang pernah saya kerjakan.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              
              /* --- PERUBAHAN DI SINI: EFEK SUPER GLOW --- */
              /* shadow-[0_0_60px_...] membuat sebaran cahaya lebih luas */
              /* opacity 0.6 membuat warnanya lebih pekat */
              /* border-purple-400 membuat garis pinggir lebih terang */
              className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-purple-400 hover:shadow-[0_0_60px_rgba(168,85,247,0.7)] hover:-translate-y-2 z-10"
            >
              {/* Bagian Gambar */}
              <div className="relative h-64 w-full overflow-hidden">
                 <Image 
                   src={project.image} 
                   alt={project.title}
                   fill
                   className="object-cover group-hover:scale-110 transition-transform duration-500"
                 />
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-secondary text-sm mb-4">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded bg-white/5 text-secondary border border-white/5 group-hover:border-purple-500/30 group-hover:text-purple-200 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-sm font-medium text-white hover:text-purple-300 transition-colors">
                    <ExternalLink size={16} /> Detail
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}