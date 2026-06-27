"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { SkillBadge } from "@/components/ui/SkillBadge";

export const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 bg-bg-secondary/30 relative">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Keahlian & Teknologi</h2>
          <div className="h-1 w-20 bg-accent rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-bg-primary border border-border-subtle rounded-2xl p-8 hover:border-accent/30 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="p-3 rounded-xl bg-opacity-10"
                  style={{ backgroundColor: `color-mix(in srgb, ${category.color} 15%, transparent)` }}
                >
                  <category.icon size={24} style={{ color: category.color }} />
                </div>
                <h3 className="text-xl font-semibold text-text-primary">{category.category}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <SkillBadge 
                    key={skill} 
                    skill={skill} 
                    color={category.color} 
                    index={sIdx} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
