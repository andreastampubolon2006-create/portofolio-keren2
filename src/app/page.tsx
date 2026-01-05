import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact"; // <--- Import Contact

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Hero />
      <TechStack />
      <About />
      <Projects />
      <Contact /> {/* <--- Pasang di paling bawah */}
    </main>
  );
}