"use client";

import { motion } from "framer-motion";
import { personalProjects } from "@/data/portfolio";
import { PersonalProjectCard } from "@/components/ui/PersonalProjectCard";

export const PersonalProjects = () => {
  return (
    <section id="personal-projects" className="py-24 md:py-32 px-6 relative bg-horizon-grid">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Proyek Pribadi</h2>
          <div className="h-1 w-20 bg-accent rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {personalProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="h-full"
            >
              <PersonalProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
