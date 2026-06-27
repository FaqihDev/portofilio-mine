"use client";

import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";



const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate(v) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.floor(v).toString();
          }
        }
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <div ref={containerRef} className="text-4xl md:text-5xl font-bold text-text-primary mb-2" suppressHydrationWarning>
      <span ref={nodeRef} suppressHydrationWarning>0</span>{suffix}
    </div>
  );
};

export const About = () => {
  const stats = [
    { label: "Tahun Pengalaman", value: 4, suffix: "+" },
    { label: "Proyek Selesai", value: 5, suffix: "" },
    { label: "Klien Enterprise", value: 4, suffix: "" },
    { label: "Teknologi", value: 15, suffix: "+" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-6 relative bg-stitch-about">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Tentang Saya</h2>
          <div className="h-1 w-20 bg-accent rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="prose prose-invert prose-lg max-w-none text-text-secondary leading-relaxed">
              <p>
                Seorang backend developer dengan pengalaman di industri fintech, e-commerce, dan healthcare digital. Berpengalaman membangun RESTful API, integrasi third-party, dan sistem transaksi bervolume tinggi menggunakan Java Spring Boot dan Mulesoft.
              </p>
              <p className="mt-4">
                Saya selalu bersemangat untuk memecahkan masalah kompleks dan merancang arsitektur sistem yang tidak hanya berfungsi dengan baik, tetapi juga scalable dan maintainable.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4 md:gap-6"
          >
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className="bg-bg-secondary/50 border border-border-subtle rounded-2xl p-6 flex flex-col justify-center backdrop-blur-sm hover:border-accent/30 transition-colors"
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <div className="text-sm font-medium text-text-secondary uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
