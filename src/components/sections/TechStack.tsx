"use client";

import { motion } from "framer-motion";

const skills = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", 
  "Framer Motion", "Node.js", "Figma", "Git", "PostgreSQL"
];

export default function TechStack() {
  return (
    <section className="py-20 bg-background overflow-hidden border-b border-white/5">
      <div className="container mx-auto px-6 text-center mb-8">
        <p className="text-sm font-medium text-secondary uppercase tracking-widest">
          Technologies I Work With
        </p>
      </div>
      
      {/* Container Animasi */}
      <div className="flex w-full">
        <motion.div
          className="flex gap-16 whitespace-nowrap"
          // Ini mantra untuk membuat teks berjalan tanpa henti
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            duration: 20, 
            ease: "linear" 
          }}
        >
          {/* Kita duplikasi list skill biar looping-nya halus */}
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <span 
              key={index} 
              className="text-4xl md:text-6xl font-bold text-white/10 hover:text-accent transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}