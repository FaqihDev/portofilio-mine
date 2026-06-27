"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  project: string;
  company: string;
  client: string;
  role: string;
  duration: string;
  stack: string[];
  highlights: string[];
}

export const ProjectCard = ({ project }: { project: Project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="group rounded-xl border border-border-subtle bg-bg-secondary/30 p-6 transition-all duration-300 hover:border-accent/50 hover:bg-bg-secondary/50 hover:shadow-lg hover:shadow-accent/5"
    >
      <div 
        className="flex cursor-pointer items-start justify-between gap-4"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div>
          <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent transition-colors">
            {project.project}
          </h3>
          <p className="mt-1 text-text-secondary">
            {project.role} · {project.company} {project.client ? `(Client: ${project.client})` : ""}
          </p>
          <p className="mt-1 text-sm text-text-secondary/70 font-mono">
            {project.duration}
          </p>
        </div>
        <button
          className={cn(
            "p-2 rounded-full hover:bg-bg-card transition-transform duration-300 text-text-secondary flex-shrink-0",
            isExpanded && "rotate-180"
          )}
          aria-label={isExpanded ? "Collapse project details" : "Expand project details"}
        >
          <ChevronDown size={20} />
        </button>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-6">
              <ul className="list-inside list-disc space-y-2 text-text-secondary">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="leading-relaxed">
                    <span className="-ml-2">{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-accent/10 px-2.5 py-1 font-mono text-xs text-accent-glow"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
