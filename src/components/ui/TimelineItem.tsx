"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TimelineItemProps {
  children: ReactNode;
  index: number;
}

export const TimelineItem = ({ children, index }: TimelineItemProps) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative pl-8 md:pl-0 w-full"
    >
      {/* Mobile timeline dot */}
      <div className="absolute left-[-5px] top-6 h-[12px] w-[12px] rounded-full border-2 border-bg-primary bg-accent md:hidden z-10"></div>

      <div className="md:grid md:grid-cols-2 md:gap-12 w-full">
        {/* Desktop left or right side based on index */}
        <div className={`hidden md:block w-full ${isEven ? "md:col-start-1" : "md:col-start-2"}`}>
           {children}
        </div>

        {/* Center dot for desktop */}
        <div className="hidden md:absolute md:left-1/2 md:top-6 md:block md:-ml-[6px] md:h-[12px] md:w-[12px] md:rounded-full md:border-2 md:border-bg-primary md:bg-accent z-10"></div>
        
        {/* Mobile content (always visible on small screens) */}
        <div className="md:hidden w-full">
          {children}
        </div>
      </div>
    </motion.div>
  );
};
