"use client";

import { motion } from "framer-motion";
import { education, certifications } from "@/data/portfolio";
import { GraduationCap, Award } from "lucide-react";

export const Education = () => {
  return (
    <section id="education" className="py-24 md:py-32 px-6 bg-bg-secondary/30 relative">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Pendidikan & Sertifikasi</h2>
          <div className="h-1 w-20 bg-accent rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-accent" size={28} />
              <h3 className="text-2xl font-semibold text-text-primary">Pendidikan</h3>
            </div>
            <div className="bg-bg-primary border border-border-subtle rounded-2xl p-8 hover:border-accent/30 transition-colors">
              <h4 className="text-xl font-bold text-text-primary">{education.degree}</h4>
              <p className="text-lg text-text-secondary mt-2">{education.institution}</p>
              <div className="mt-6 inline-block px-4 py-2 rounded-full bg-accent/10 text-accent-glow text-sm font-mono font-medium">
                Lulus: {education.graduation}
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-accent" size={28} />
              <h3 className="text-2xl font-semibold text-text-primary">Sertifikasi</h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + (idx * 0.1) }}
                  className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-bg-primary border border-border-subtle rounded-xl p-5 hover:border-accent/30 transition-all hover:shadow-lg hover:-translate-y-1"
                >
                  <div>
                    <h4 className="font-semibold text-text-primary group-hover:text-accent transition-colors">
                      {cert.program}
                    </h4>
                    <p className="text-sm text-text-secondary mt-1">{cert.provider}</p>
                  </div>
                  <div className="shrink-0 px-3 py-1 rounded-full bg-bg-secondary text-text-secondary text-xs font-mono border border-border-subtle">
                    {cert.year}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
