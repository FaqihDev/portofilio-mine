"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { ProjectCard } from "@/components/ui/ProjectCard";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 relative overflow-hidden bg-stitch-experience">
      <div className="mx-auto max-w-7xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Pengalaman Proyek</h2>
          <div className="h-1 w-20 bg-accent rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Desktop center timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-border-subtle -ml-[1px]"></div>
          
          <div className="space-y-12 md:space-y-24">
            {experiences.map((exp, idx) => (
              <TimelineItem key={exp.id} index={idx}>
                <ProjectCard project={exp} />
              </TimelineItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
