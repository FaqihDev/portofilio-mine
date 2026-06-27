"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  skill: string;
  color: string;
  index: number;
}

export const SkillBadge = ({ skill, color, index }: SkillBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 10) * 0.05, duration: 0.3 }}
      className={cn(
        "px-3 py-1.5 rounded-full text-sm font-mono border border-border-subtle bg-bg-secondary/50 backdrop-blur-sm",
        "hover:-translate-y-1 hover:shadow-lg transition-all duration-200 cursor-default"
      )}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = color;
        e.currentTarget.style.boxShadow = `0 4px 12px ${color}33`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--color-border-subtle)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <span style={{ color }}>{skill}</span>
    </motion.div>
  );
};
