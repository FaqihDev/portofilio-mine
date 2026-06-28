"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20 bg-horizon-grid">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-[128px] mix-blend-screen opacity-50"
          style={{ transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)` }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-indigo-800 rounded-full blur-[128px] mix-blend-screen opacity-30"
          style={{ transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent-glow"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          {profile.title}
        </motion.div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary mb-6">
          <AnimatedText text={profile.name} className="inline flex-wrap" el="span" />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mb-10 leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#experience"
            className="group flex items-center justify-center gap-2 pill-button bg-gradient-to-r from-accent to-accent-glow px-8 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:shadow-lg shadow-accent/20"
          >
            Lihat Portofolio
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 pill-button border border-border-subtle bg-transparent px-8 py-3.5 text-sm font-semibold text-text-primary transition-all hover:bg-black/5 hover:-translate-y-1"
          >
            Hubungi Saya
            <Mail size={18} />
          </a>
        </motion.div>

        {/* Floating tech badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute -z-10 w-full h-full inset-0 pointer-events-none hidden md:block"
        >
          {["Java", "Spring Boot", "Mulesoft"].map((tech, idx) => (
            <motion.div
              key={tech}
              animate={{ 
                y: [0, -20, 0], 
                rotate: [0, 5, -5, 0] 
              }}
              transition={{ 
                duration: 4 + idx, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: idx * 0.5
              }}
              className={cn(
                "absolute rounded-lg border border-border-subtle bg-bg-secondary/80 backdrop-blur-md px-4 py-2 font-mono text-sm text-text-secondary shadow-xl shadow-black/20",
                idx === 0 ? "top-[20%] left-[10%]" : 
                idx === 1 ? "top-[30%] right-[15%]" :
                "bottom-[30%] left-[20%]"
              )}
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
