"use client";

import { motion } from "framer-motion";
import React from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  el?: React.ElementType;
  once?: boolean;
}

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
};

export const AnimatedText = ({
  text,
  className,
  el: Wrapper = "p",
  once = true,
}: AnimatedTextProps) => {
  return (
    <Wrapper className={className} suppressHydrationWarning>
      <span className="sr-only" suppressHydrationWarning>{text}</span>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: "-50px" }}
        transition={{ staggerChildren: 0.05 }}
        aria-hidden
        suppressHydrationWarning
      >
        {text.split(" ").map((word, wordIndex, wordsArray) => (
          <span key={wordIndex} className="inline-block" suppressHydrationWarning>
            {word.split("").map((char, charIndex) => (
              <motion.span
                key={`${wordIndex}-${charIndex}`}
                variants={defaultAnimations}
                className="inline-block"
                suppressHydrationWarning
              >
                {char}
              </motion.span>
            ))}
            {wordIndex !== wordsArray.length - 1 && (
              <span className="inline-block" suppressHydrationWarning>&nbsp;</span>
            )}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};
