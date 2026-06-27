"use client";

import { ExternalLink } from "lucide-react";

interface PersonalProject {
  id: number;
  project: string;
  link: string;
  description: string;
  stack: string[];
}

export const PersonalProjectCard = ({ project }: { project: PersonalProject }) => {
  return (
    <div className="group rounded-2xl border border-border-subtle bg-bg-secondary/30 p-8 transition-all duration-300 hover:border-accent/50 hover:bg-bg-secondary/50 hover:shadow-lg hover:shadow-accent/5 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-semibold text-text-primary group-hover:text-accent transition-colors">
          {project.project}
        </h3>
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-bg-card transition-colors text-text-secondary hover:text-accent"
          aria-label={`Kunjungi ${project.project}`}
        >
          <ExternalLink size={20} />
        </a>
      </div>
      <p className="text-text-secondary leading-relaxed mb-8 flex-grow">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-accent/10 px-3 py-1.5 font-mono text-xs font-medium text-accent-glow"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
